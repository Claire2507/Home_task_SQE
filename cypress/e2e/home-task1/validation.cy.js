describe('Form Fields Validation Check', () => {
    it('checks validation for required fields', () => {
      
      cy.visit('https://www.epam.com/about/who-we-are/contact');
      cy.viewport(1440, 800);
      
      // click on Submit
      cy.get('.button-ui').click();
      //click on th field
      cy.get('#_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor_user_first_name').click();
      // verify the error message is visible
      cy.get('#_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor_user_first_name-error').should('be.visible');
     
      cy.get('#_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor_user_last_name').click();
      cy.get('#_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor_user_last_name-error').should('be.visible');
      
      cy.get('#_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor_user_email').click();
      cy.get('#_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor_user_email-error').should('be.visible');

      cy.get('#_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor_user_phone').click();
      cy.get('#_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor_user_phone-error').should('be.visible');

      //cy.get('#_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor_user_comment_how_hear_about-label').trigger('mouseover');
      cy.get('#_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor_user_comment_how_hear_about-error').trigger('mouseover');
      cy.get('#_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor_user_comment_how_hear_about-error').should('be.visible');



     
    });
  });