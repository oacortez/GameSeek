describe('GameSeek main page load', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Should contain Navbar content', () => {
    cy.get('.title')
      .contains('GameSeek')
    .get('.favorites-view-btn')
       .contains('Favorites')
  });

  it('Should display all cards and its content', () => {
    cy.get('h2')
      .contains('All Deal Games')
    cy.get('.card-title')
      .contains('Naruto to Boruto Shinobi Striker - Deluxe Edition')
    .get('.card-image')
      .should('have.attr', 'src').should('include', "https://images.greenmangaming.com/bea8652cdc044930bc603ea6e843b0bb/1d7901df5b8843c2965b9b97f3361afc.jpg")
    .get(':nth-child(1) > .card-body > .card-price')
      .contains('Sale Price: $8.00')
    .get(':nth-child(1) > .card-body > .card-rating')
      .contains('Deal Rating: 10/10')
    .get(':nth-child(1) > .buy-btn')
      .contains('Click to buy game')
    .get(':nth-child(1) > .add-favorites-btn')
      .contains('Favorite Game')
  });
});
