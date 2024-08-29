describe('Page title verification', () => {
    it('verify that the page title is correct', () => {
      
      cy.visit('http://epam.com');
  
      cy.title().should('equal', 'EPAM | Software Engineering & Product Development Services');
    });
  });