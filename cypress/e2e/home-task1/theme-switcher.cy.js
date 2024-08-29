describe('Theme Switcher', () => {
    it('should switch between light and dark modes', () => {
      
      cy.visit('http://epam.com');
      
      cy.get('#onetrust-accept-btn-handler').click();
      cy.get('.hamburger-menu__button').click();
      cy.get('.mobile-theme-switcher > .theme-switcher-ui > .theme-switcher').click();

      //check that light mode is active
      cy.get('body').should('have.class', 'fonts-loaded light-mode');
      
      cy.get('.mobile-theme-switcher > .theme-switcher-ui > .theme-switcher').click();

      //check that dark light mode is active
      cy.get('body').should('have.class', 'fonts-loaded dark-mode');
    });
  });