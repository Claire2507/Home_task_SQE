describe('Report Download Verification', () => {
    it('allows to download the EPAM Corporate Overview report with the correct name and extension', () => {
      cy.visit('https://www.epam.com/about');
       // Find the download button and ensure it has an 'href' attribute that includes '.pdf'
      cy.get('.button-ui-23.btn-focusable')
        .should('have.attr', 'href')
        .and('include', '.pdf')
        .then((href) => {
          expect(href).to.include('EPAM_Corporate_Overview_Q4_EOY');
  
          // Before downloading ensure the file exists without downloading it
          cy.request({
            url: href, 
            method: 'HEAD'
          }).then((response) => {
            expect(response.status).to.eq(200);
          });
  
          // Download the file
          cy.downloadFile(
            href, 
            'cypress/downloads',
            'EPAM_Corporate_Overview_Q4_EOY.pdf'
          );
  
          
          const expectedFilePath = 'cypress/downloads/EPAM_Corporate_Overview_Q4_EOY.pdf';
  
          // Ensure the file exists at the expected path
          cy.readFile(expectedFilePath); 
          });
        });
    });
  