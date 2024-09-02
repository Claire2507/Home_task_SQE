describe('Logo Navigation Check', () => {
    it('should navigate to the main page when the logo is clicked', () => {
      
      cy.visit('https://www.epam.com/about');
  
      // click on the logo
      cy.get('.header__logo.header__logo-light').click();
      // verify the URL after redirect
      cy.url().should('eq', 'https://www.epam.com/');
    });
  });
 