describe("Show top 100 list", () => {
  it("should show topp 100 links", () => {
    cy.visit("/#top");

    cy.contains("Top 100 URLs").should("be.visible");

    cy.request("/api/top");

    cy.get('[data-testid="topLink"]').should("be.visible");
  });
});
