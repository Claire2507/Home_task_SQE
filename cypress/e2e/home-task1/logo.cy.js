describe('Logo Navigation Check', () => {
    it('should navigate to the main page when the logo is clicked', () => {
      
      cy.visit('https://www.epam.com/about');
  
      
      cy.get('.header__logo.header__logo-light').click();
  
      cy.url().should('eq', 'https://www.epam.com/');
    });
  });
 