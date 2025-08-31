describe("TS 04: About page visibility and functionality", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("body").should("be.visible");
  });

  describe("TC 04.1: About Page Content", () => {
    it("Should handle About page access and display appropriate content", () => {
      cy.contains("About").click();

      cy.get("body").should("be.visible");

      cy.contains("Sweet Shop Project").should("be.visible");
    });

    describe("TC 04.2: About Page Navigation", () => {
      it("Should allow navigation to About page and handle the result", () => {
        cy.contains("About").click();

        cy.get("body").should("be.visible");

        cy.contains("About").click();

        cy.get("body").should("contain.text", "Sweet Shop Project");
      });
    });

    describe("TC 04.3: About Page Content Quality", () => {
      it("Should verify About page displays professional content for sweet shop", () => {
        cy.contains("About").click();

        cy.contains("Sweet Shop Project").should("be.visible");

        cy.get("h1, h2").should("contain.text", "Sweet Shop Project");
        cy.get("p").should("have.length.at.least", 2);
      });
    });
  });
});
