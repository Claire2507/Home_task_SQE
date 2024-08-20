describe('User Registration', () => {
  it('allows user to register', () => {
    // Navigate to the home page
    cy.visit('/');

    // Click on the "Register" link in the header
    cy.get('.ico-register').click();

    // Check that the registration page is opened
    cy.url().should('include', '/register');

    // Select user gender
    cy.get('#gender-female').check();

    // Fill in the first name
    cy.get('#FirstName').type('Claire');

    // Fill in the last name
    cy.get('#LastName').type('Testt');

    // Fill in the email
    cy.get('#Email').type(`claire27.08@yopmail.com`);

    // Fill in the password
    cy.get('#Password').type('Qwerty');

    // Confirm the password
    cy.get('#ConfirmPassword').type('Qwerty');

    // Click the register button
    cy.get('#register-button').click();

    // Verify that the user is registered successfully
    
    cy.get('.result').should('include.text', 'Your registration completed'); // Check for the successful registration text
    cy.get('a.ico-logout').should('exist').should('be.visible'); // Check that the log out link is shown
    cy.url().should('include', '/registerresult'); // The URL should contain '/registerresult/1'
  });
});