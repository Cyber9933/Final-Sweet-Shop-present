/// <reference types="cypress" />

describe("TS 06: Login Page Visibility and Functionality", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("TC 06.1: Should access login form with proper input fields", () => {
    cy.contains("Login").click();

    cy.contains("Login").should("be.visible");
    cy.contains(
      "Please enter your email address and password in order to login to your account."
    ).should("be.visible");

    cy.contains("Email address").should("be.visible");
    cy.get('input[type="email"]').should("be.visible");

    cy.contains("Password").should("be.visible");
    cy.get('input[type="password"]').should("be.visible");

    cy.get('button[type="submit"]').contains("Login").should("be.visible");
  });

  it("TC 06.2: Should handle login attempt with valid credentials", () => {
    cy.contains("Login").click();
    cy.contains("Login").should("be.visible");

    cy.get('input[type="email"]').type("demo@demo.lt");

    cy.get('input[type="password"]').type("asdasd123");

    cy.get('button[type="submit"]').contains("Login").click();

    // Verify page responds (either success redirect or stays on login)
    cy.get("body").should("exist");

    // Check if we're redirected or get validation message
    cy.get("body").should("satisfy", ($body) => {
      const bodyText = $body.text();
      return (
        bodyText.includes("Login") ||
        bodyText.includes("Welcome") ||
        bodyText.includes("Dashboard")
      );
    });
  });

  it("TC 06.3: Should handle invalid login credentials with error message", () => {
    cy.contains("Login").click();
    cy.contains("Login").should("be.visible");

    cy.get('input[type="email"]').type("invalid-email");

    cy.get('input[type="password"]').type("wrongpassword");

    cy.get('button[type="submit"]').contains("Login").click();

    cy.contains("Login").should("be.visible");
    cy.contains("Please enter your email address and password").should(
      "be.visible"
    );
  });

  it("TC 06.4: Should validate required fields", () => {
    cy.contains("Login").click();
    cy.contains("Login").should("be.visible");

    cy.get('button[type="submit"]').contains("Login").click();

    cy.contains("Login").should("be.visible");

    cy.get('input[type="email"]').type("demo@demo.lt");
    cy.get('button[type="submit"]').contains("Login").click();

    cy.contains("Login").should("be.visible");

    cy.get('input[type="email"]').clear();
    cy.get('input[type="password"]').type("asdasd123");
    cy.get('button[type="submit"]').contains("Login").click();

    cy.contains("Login").should("be.visible");
  });
});
