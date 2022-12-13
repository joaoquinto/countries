import Home from "./Home.vue";

describe("Test find country by name", () => {
  it("renders", () => {
    // see: https://test-utils.vuejs.org/guide/
    cy.mount(Home);
    cy.viewport("macbook-16")
      .get('[data-cy="SearchByName"]')
      .type("Brazil")
      .get("h3")
      .should("have.text", "Brazil");
  });
});

describe("Test show countries by region", () => {
  it("renders", () => {
    cy.mount(Home)
      .viewport("macbook-16")
      .get('[data-cy="SelectByRegion"]')
      .select("America");
  });
});
