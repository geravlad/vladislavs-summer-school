import Login from "../../../pageElements/Login";

//https://tdlschool.atlassian.net/browse/TSS22N-16

describe("verifying join us button functionality", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("opens webstores page", () => {
    Login.elements.signInButton("should.be", "visible");
  });

  it("clicks on join us link and opens sign up page", () => {
    Login.elements.joinUsButton().click();
    cy.contains("h1", "Become a Store of Excellence Member");
  });
});
