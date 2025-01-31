class Global {
  elements = {
    sideBarBurger: () => cy.getByTestId("nav-menu-button"),
    sideBarLinks: (pageName) => cy.getByTestId("nav-menu-popup").contains("a", pageName),
    logOutButton: () => cy.getByTestId("logout-button"),
  };

  navigateSideBar = {
    openPage: (pageName) => {
      this.elements.sideBarBurger().click();
      this.elements.sideBarLinks(pageName).click();
    },
  };
}

export default new Global();
