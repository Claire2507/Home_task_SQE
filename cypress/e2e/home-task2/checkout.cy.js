describe('Checkout Verification', () => {
    it('allows checkout an item ', () => {
      // add item to the Cart
      cy.visit('/computing-and-internet');
      cy.get(' #add-to-cart-button-13').first().click();
      cy.get('span.cart-label').contains('Shopping cart').click();
  
      // proceed to checkout 
      cy.get('input[type="checkbox"][name="termsofservice"]').check();
      cy.get('.button-1.checkout-button').click();
      cy.get('.button-1.checkout-as-guest-button').click();

      //enter billing address
      cy.get('#BillingNewAddress_FirstName').type('Claire');
      cy.get('#BillingNewAddress_LastName').type('Testt');
      cy.get('#BillingNewAddress_Email').type(`claire27.08@yopmail.com`);
      cy.get('#BillingNewAddress_CountryId').select('United States');
      cy.get('#BillingNewAddress_City').type('United States');
      cy.get('#BillingNewAddress_Address1').type('7365 Georgia 85');
      cy.get('#BillingNewAddress_ZipPostalCode').type('31831')
      cy.get('#BillingNewAddress_PhoneNumber').type('(706) 582-3666');
      cy.get('#billing-buttons-container > .button-1').click();

      //select Shipping address
      cy.get('#shipping-buttons-container > .button-1').click();

      //select Shipping Method
      cy.get('#shippingoption_1').click();
      cy.get('#shipping-method-buttons-container > .button-1').click();

      //select payment method
      cy.get('#paymentmethod_0').click();
      cy.get('#payment-method-buttons-container > .button-1').click();

      //verify payment info
      cy.get('.info').should('include.text', 'You will pay by COD');
      cy.get('#payment-info-buttons-container > .button-1').click();

      //confirm order 
      cy.get('#confirm-order-buttons-container > .button-1').click();

      // verify order is placed
      cy.get('.page-title').should('include.text', 'Thank you');
      cy.get('.title').should('include.text', 'Your order has been successfully processed!');
      cy.get('.details > :nth-child(1)').should('not.be.empty');
});
  });