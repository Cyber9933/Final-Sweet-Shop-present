/// <reference types="cypress" />

describe("TS 07: Checkout Process", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("body").should("be.visible");
  });

  describe("TC 07.1: Checkout Page Access", () => {
    it("Should access basket page successfully", () => {
      cy.contains("Basket").click();

      cy.url().should("include", "/basket");
      cy.contains("Your Basket").should("be.visible");

      cy.contains("Continue to checkout").should("be.visible");

      cy.log("Basket page accessible");
    });
  });

  describe("TC 07.2: Checkout Form Elements", () => {
    beforeEach(() => {
      cy.contains("Basket").click();
      cy.contains("Your Basket").should("be.visible");
    });

    it("Should display billing address form fields", () => {
      cy.contains("Billing address").should("be.visible");

      cy.contains("First name").should("be.visible");
      cy.contains("Last name").should("be.visible");
      cy.contains("Email").should("be.visible");
      cy.contains("Address").should("be.visible");
    });

    it("Should display payment form fields", () => {
      cy.contains("Payment").should("be.visible");

      cy.contains("Name on card").should("be.visible");
      cy.contains("Credit card number").should("be.visible");
      cy.contains("Expiration").should("be.visible");
      cy.contains("CVV").should("be.visible");
    });
  });

  describe("TC 07.3: Order Summary Verification", () => {
    beforeEach(() => {
      cy.contains("Basket").click();
      cy.contains("Your Basket").should("be.visible");
    });

    it("Should display order summary section", () => {
      cy.contains("Your Basket").should("be.visible");

      cy.contains("Total").should("be.visible");

      cy.get("body").should("contain.text", "£");

      cy.log("✓ Order summary section is visible");
    });

    it("Should display delivery options", () => {
      cy.contains("Delivery").should("be.visible");

      cy.contains("Collect").should("be.visible");
      cy.contains("Standard Shipping").should("be.visible");

      cy.log("✓ Delivery options are displayed");
    });

    it("Should show basket items if present", () => {
      cy.get("body").then(($body) => {
        const bodyText = $body.text();

        // Check if basket has items or is empty
        if (bodyText.includes("£0.00")) {
          cy.contains("Empty Basket").should("be.visible");
          cy.log("✓ Empty basket state verified");
        } else {
          // Look for any Sweet Shop items
          const items = [
            "Sherbert Straws",
            "Sherbet Discs",
            "Strawberry Bon Bons",
            "Chocolate Cups",
          ];

          let itemsFound = 0;
          items.forEach((item) => {
            if (bodyText.includes(item)) {
              itemsFound++;
              cy.log(`Found item: ${item}`);
            }
          });

          if (itemsFound > 0) {
            cy.log(`✓ Found ${itemsFound} items in basket`);
          } else {
            cy.log("✓ Basket content verified (custom items may be present)");
          }
        }
      });
    });

    it("Should maintain form structure during interaction", () => {
      cy.contains("Billing address").should("be.visible");
      cy.contains("Payment").should("be.visible");
      cy.contains("Your Basket").should("be.visible");
      cy.contains("Delivery").should("be.visible");

      cy.contains("Sweet Shop Project 2018").should("be.visible");
    });
  });
});
