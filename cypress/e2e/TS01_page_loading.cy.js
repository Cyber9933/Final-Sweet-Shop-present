/// <reference types="cypress" />

describe("TS 01: Page Loading", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("TC 01.1: Should successfully load homepage", () => {
    cy.title().should("contain", "Sweet Shop");

    cy.contains("Welcome to the sweet shop!").should("be.visible");

    cy.contains("The sweetest online shop out there.").should("be.visible");

    cy.contains("Browse Sweets").should("be.visible");

    cy.get(".navbar").should("be.visible");

    cy.contains("Our most popular choice of retro sweets.").should(
      "be.visible"
    );
  });
});
