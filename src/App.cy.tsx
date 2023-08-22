import App from "./App";

describe("Component tests", () => {
  it("Test", () => {
    cy.mount(<App />);
    cy.get("[ui5-select]")
        .as("select")
        .contains("Option 2")
        .should("not.be.visible");
    cy.get("@select").click();
    cy.get("[ui5-static-area-item]").contains("Option 2").click();
    cy.get("@select").contains("Option 2").should("be.visible");
  });
});
