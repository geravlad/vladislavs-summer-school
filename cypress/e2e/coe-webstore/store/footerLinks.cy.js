describe("Footer links functionality", () => {
  const USERNAME = Cypress.env("username");
  const PASSWORD = Cypress.env("password");

  const socialLinks = {
    web: "https://www.testdevlab.com/",
    linkedin: "https://www.linkedin.com/company/testdevlab/",
    facebook: "https://www.facebook.com/TestDevLab/",
    X: "https://twitter.com/testdevlab",
  };
  beforeEach(() => {
    cy.login(USERNAME, PASSWORD);
  });

  //https://tdlschool.atlassian.net/browse/TSS22N-315
  Object.values(socialLinks).forEach((link) => {
    it(`check footer links for ${link}`, () => {
      cy.visit("/");
      cy.getByHref(link);
    });
  });
});
