describe('Error Handling', () => {
  beforeEach(() => {
    cy.intercept('GET','https://www.cheapshark.com/api/1.0/deals', {
      statusCode: 500
    })
  })
  
  it('Should display error message for 500 status code in home view', () => {      
      cy.visit('http://localhost:3000/error')
      .get('h4')
        .contains('Sorry we were unable to find this resource for you! Please try again')
    });

  it('Should display error message for 500 status code in favorites view', () => {
      cy.visit('http://localhost:3000/favorites/**')
      cy.get('.error-message')
        .contains('Sorry we were unable to find this resource for you! Please try again')
  });
});