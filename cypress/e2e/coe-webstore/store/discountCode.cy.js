import Cart from "../../../pageElements/Cart";
import Home from "../../../pageElements/Home";
import Product from "../../../pageElements/Product";

describe("Discount code functionality", () => {
  const USERNAME = Cypress.env("username");
  const PASSWORD = Cypress.env("password");
  const CODE = "SUMMERSCHOOL";

  beforeEach(() => {
    cy.login(USERNAME, PASSWORD);
  });

  //https://tdlschool.atlassian.net/browse/TSS22N-320
  it("adds product to the cart & applys discount code", () => {
    cy.visit("/");
    Home.elements.productTitle().contains("Medusa Sweatpants").click();
    Product.elements.sizeButton().contains("M").click();
    Product.elements.addToCartButton().click();
    Home.elements.productQuantity().should("be.visible");
    Home.elements.cartButton().click();
    Cart.elements.discountButton().click({ force: true });
    Cart.elements.discountInputField().type(CODE, { force: true });
    Cart.elements.discountApplyButton().click();
    Cart.elements.discountOutput().should("be.visible");
    Cart.elements.removeDiscountButton().click();
    Cart.elements.removeProductButton().click();
    Home.elements.productQuantity().should("not.exist");
  });
});
