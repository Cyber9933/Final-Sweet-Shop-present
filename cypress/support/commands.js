// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// ***********************************************
// Custom commands for Sweet Shop testing
// ***********************************************



// Command to navigate to specific page
Cypress.Commands.add('navigateToPage', (pageName) => {
  cy.openMobileNav()
  cy.contains(pageName).click()
  cy.waitForPageLoad()
})

// Command to check navigation functionality
Cypress.Commands.add('checkNavigation', (fromPage, toPage, expectedHeader) => {
  if (fromPage !== 'home') {
    cy.openMobileNav()
    cy.contains(fromPage).click()
  }
  cy.openMobileNav()
  cy.contains(toPage).click()
  cy.contains(expectedHeader).should('be.visible')
})

// Command to add item to basket using card structure
Cypress.Commands.add('addToBasket', (itemName = null) => {
  // Navigate to sweets page using Browse Sweets button
  cy.contains('Browse Sweets').click()
  cy.contains('Browse sweets').should('be.visible')
  
  if (itemName) {
    // Find specific item and click its Add to Basket button
    cy.contains(itemName).parents('.card').find('button:contains("Add to Basket")').click()
  } else {
    // Click first Add to Basket button found
    cy.get('.card').first().find('button:contains("Add to Basket")').click()
  }
})

// Command to check if basket is empty
Cypress.Commands.add('checkEmptyBasket', () => {
  cy.openMobileNav()
  cy.contains('Basket').click()
  cy.contains('Your Basket').should('be.visible')
  
  // Check for empty states
  cy.get('body').should('satisfy', $body => {
    const text = $body.text().toLowerCase()
    return text.includes('empty') || text.includes('no items') || text.includes('basket is empty')
  })
})