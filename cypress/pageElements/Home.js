class Home {
  elements = {
    headerLink: () => cy.getByTestId("nav-store-link"),
    productLink: () => cy.getByTestId("product-wrapper"),
    productTitle: () => cy.getByTestId("product-title"),
    cartButton: () => cy.getByTestId("nav-cart-link"),
    productQuantity: () => cy.get('[data-testid="nav-cart-link"] span'),
    sortByButton: () => cy.get('[type="button"] span'),
  };
}

export default new Home();
