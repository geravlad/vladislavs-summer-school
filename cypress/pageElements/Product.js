class Product {
  elements = {
    sizeButton: () => cy.getByTestId("option-button"),
    addToCartButton: () => cy.getByTestId("add-product-button"),
  };
}

export default new Product();
