describe('User Registration and Login', () => {
    // Load user data from the fixture 
    let userData;
  
    before(() => {
      cy.fixture('userData').then((loadedData) => {
        userData = loadedData;
      });
    });
  
    // First test block: User Registration
    it('should allow a user to register', () => {
      
      cy.visit('/');
  
      // Navigate to the registration page by clicking the "Register" link
      cy.get('.ico-register').click();
      // Verify we're on the registration page
      cy.url().should('include', '/register');
  
      // Fill in the registration form details
      cy.get('#gender-female').check();
      cy.get('#FirstName').type(userData.firstName);
      cy.get('#LastName').type(userData.lastName);
      cy.get('#Email').type(userData.email);
      cy.get('#Password').type(userData.password);
      cy.get('#ConfirmPassword').type(userData.password);
  
      // Submit the form
      cy.get('#register-button').click();
  
      // Verify successful registration
      cy.get('.result').should('include.text', 'Your registration completed');
      // log out 
      cy.get('a.ico-logout').click();
    });
  
    // Second test block: User Login
    it('should allow a registered user to login', () => {
      
      cy.visit('/');
  
      // Navigate to the login page
      cy.get('.ico-login').click();
      // Verify we're on the login page
      cy.url().should('include', '/login');
  
      // Fill in the login form details using the same credentials
      cy.get('#Email').type(userData.email);
      cy.get('#Password').type(userData.password);
  
      // Submit the login form
      cy.get('.button-1.login-button').click();
  
      // Verify successful login
      cy.get('a.ico-logout').should('exist').should('be.visible');
      cy.get('.header-links .account').should('contain', userData.email).and('be.visible');
    });
  });