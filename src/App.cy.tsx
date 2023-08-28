import App from "./App";

describe("Component tests", async () => {
  it("Test", () => {
    cy.mount(<App />);
    cy.get("[ui5-select]")
      .as("select")
      .contains("Option 2")
      .should("not.be.visible");
    cy.get("@select").click();

    // leverage the `getStaticAreaItemDomRef` ui5-wc method, to access the static area item reference
    cy.get("@select").then(async ($el) => {
      const select = $el.get(0);
      const staticAreaItem = select.getStaticAreaItemDomRef().then((data) => {
        return data;
      });
      cy.wrap(staticAreaItem).as("staticAreaItem");
    });
    cy.get("@staticAreaItem").contains("Option 2").click();
    cy.get("@select").contains("Option 2").should("be.visible");
  });
});
