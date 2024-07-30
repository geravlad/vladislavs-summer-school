import Global from "../../pageElements/Global";
import Login from "../../pageElements/Login";
import Home from "../../pageElements/Home";

describe("login functionality", () => {
  const USERNAME = Cypress.env("username");
  const PASSWORD = Cypress.env("password");
  beforeEach(() => {});

  it("opens webstores page", () => {
    cy.visit("/");
    Login.elements.signInButton("should.be", "visible");
  });

  it("logs in to the webstore", () => {
    cy.login(USERNAME, PASSWORD);
    Home.elements.headerLink().contains("Store of Excellence");
    Home.elements.productLink().should("have.length", 2);
    Global.navigateSideBar.openPage("Store");
  });
});
