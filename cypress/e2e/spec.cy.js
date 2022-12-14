describe("Darkmode", () => {
  it("checking the change of state of darkmode theme", () => {
    cy.viewport("macbook-16").visit(
      "https://eloquent-blini-38b6eb.netlify.app/"
    );

    cy.get('[data-cy="darkModeTheme"]').as("darkModeButton");

    cy.get("@darkModeButton")
      .click()
      .getAllLocalStorage()
      .then((result) => {
        expect(result).to.deep.equal({
          "https://eloquent-blini-38b6eb.netlify.app": {
            themeMode: "dark",
          },
        });
      });
    cy.get("@darkModeButton")
      .click()
      .getAllLocalStorage()
      .then((result) => {
        expect(result).to.deep.equal({
          "https://eloquent-blini-38b6eb.netlify.app": {
            themeMode: "light",
          },
        });
      });
  });
  it("Cheking backgroundcolor", () => {
    cy.viewport("iphone-x")
      .visit("https://eloquent-blini-38b6eb.netlify.app/")
      .get('[data-cy="darkModeTheme"]')
      .click()
      .get("body")
      .should("have.class", "dark")
      .get('[data-cy="darkModeTheme"]')
      .click()
      .get("body")
      .should("have.class", "light");
  });
});

describe("Routes", () => {
  it("Change route to country", () => {
    cy.viewport("samsung-s10")
      .visit("https://eloquent-blini-38b6eb.netlify.app/country/Mauritania")
      .get('[data-cy="darkModeTheme"]')
      .click();
  });
  it("Change the route to /", () => {
    cy.viewport("samsung-s10")
      .visit("https://eloquent-blini-38b6eb.netlify.app/country/Mauritania")
      .get('[data-cy="goBack"]')
      .click();
  });
});
