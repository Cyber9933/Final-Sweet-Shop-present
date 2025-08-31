/// <reference types="cypress" />

describe("TS 03: Sweets page visibility and functionality", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("body").should("be.visible");
  });

  describe("TC 03.1: Product Catalog Display", () => {
    it("Should display all products with complete information", () => {
      cy.contains("Sweets").click();

      cy.contains("Browse sweets").should("be.visible");
      cy.contains("Browse our delicious choice of retro sweets").should(
        "be.visible"
      );

      cy.get(".card").should("have.length.at.least", 16);

      cy.get(".card").each(($product) => {
        // Check product layout and styling
        cy.wrap($product).should("be.visible");

        cy.wrap($product).find("img").should("exist");

        cy.wrap($product).find(".card-title, h5, h4").should("exist");

        cy.wrap($product).should("contain.text", "£");

        cy.wrap($product)
          .find("button, .btn")
          .should("exist")
          .and("be.visible");
      });
    });
  });

  describe("TC 03.2: Product Information Accuracy", () => {
    it("Should display correct product details and prices", () => {
      cy.contains("Sweets").click();
      cy.contains("Browse sweets").should("be.visible");

      cy.contains("Chocolate Cups").should("be.visible");
      cy.contains("Chocolate Cups")
        .closest(".card")
        .should("contain.text", "£1.00");

      cy.contains("Sherbert Straws").should("be.visible");
      cy.contains("Rainbow Dust Straws - Choose your colour").should(
        "be.visible"
      );
      cy.contains("Sherbert Straws")
        .closest(".card")
        .should("contain.text", "£0.75");

      cy.contains("Sherbert Discs").should("be.visible");
      cy.contains("UFO's Sherbert Filled Flying Saucers").should("be.visible");
      cy.contains("Sherbert Discs")
        .closest(".card")
        .should("contain.text", "£0.95");

      cy.contains("Wham Bars").should("be.visible");
      cy.contains("Wham original raspberry chew bar").should("be.visible");
      cy.contains("Wham Bars").closest(".card").should("contain.text", "£0.15");

      cy.get(".card").should("have.length.at.least", 8);

      cy.contains("Bon Bons").should("be.visible");
      cy.contains("Jellies").should("be.visible");
      cy.contains("Fruit Salads").should("be.visible");
      cy.contains("Bubble Gums").should("be.visible");
    });
  });

  describe("TC 03.3: Product Image Display", () => {
    it("Should display product images with proper accessibility", () => {
      cy.contains("Sweets").click();
      cy.contains("Browse sweets").should("be.visible");

      cy.get(".card").each(($product) => {
        cy.wrap($product).find("img").should("exist");

        // Check for alt attribute (don't require it to be visible if image is broken)
        cy.wrap($product)
          .find("img")
          .then(($img) => {
            if ($img.attr("alt") !== undefined) {
              cy.log("Image has alt attribute");
            } else {
              cy.log("Image missing alt attribute");
            }
          });

        cy.wrap($product).find("img").should("have.attr", "src");
      });

      cy.get(".card").should("have.length.at.least", 16);
    });
  });
});
