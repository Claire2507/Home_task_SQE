describe('User Login', () => {
    it('allows user to login', () => {
      // Navigate to the home page
      cy.visit('/');
  
      // Click on the "Login" link in the header
      cy.get('.ico-login').click();
  
      // Check that the login page is opened
      cy.url().should('include', '/login');
  
      
     // Fill in the email
      cy.get('#Email').type(`claire27.08@yopmail.com`);
  
      // Fill in the password
      cy.get('#Password').type('Qwerty');
  
  
      // Click the login button
      cy.get('.button-1.login-button').click();
  
      // Verify that the user is loged in successfully
      
      cy.get('a.ico-logout').should('exist').should('be.visible'); // Check that the log out link is shown
      cy.get('.header-links .account').should('contain', 'claire27.08@yopmail.com').and('be.visible'); 
    });
  });