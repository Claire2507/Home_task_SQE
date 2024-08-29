describe('Report Download Verification', () => {
    it('allows to download the EPAM Corporate Overview report with the correct name and extension', () => {
      cy.visit('https://www.epam.com/about');
  
      cy.get('.button-ui-23.btn-focusable')
        .should('have.attr', 'href')
        .and('include', '.pdf')
        .then((href) => {
          expect(href).to.include('EPAM_Corporate_Overview_Q4_EOY');
  
          
          cy.request({
            url: href, 
            method: 'HEAD'
          }).then((response) => {
            expect(response.status).to.eq(200);
          });
  
          
          cy.downloadFile(
            href, 
            'cypress/downloads',
            'EPAM_Corporate_Overview_Q4_EOY.pdf'
          );
  
          
          const expectedFilePath = 'cypress/downloads/EPAM_Corporate_Overview_Q4_EOY.pdf';
  
          
          cy.readFile(expectedFilePath); 
          });
        });
    });
  