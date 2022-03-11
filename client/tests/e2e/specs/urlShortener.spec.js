describe("Url Shortener", () => {
  beforeEach("Visit Url", () => {
    cy.visit("/");
  });

  it("Visits the app root url and checks title", () => {
    cy.contains("h1", "encurte seus links com Short.vue");
  });

  it("should return shortened url", () => {
    cy.get('[data-testid="urlInput"]')
      .type("http://www.google.com")
      .should("have.value", "http://www.google.com");

    cy.get('[data-testid="urlTitle"]')
      .type("Google")
      .should("have.value", "Google");

    cy.get('button[type="submit"]').click();

    cy.contains("Seu novo link:").should("be.visible");
  });
});
