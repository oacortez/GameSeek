describe('Favorites page view', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://www.cheapshark.com/api/1.0/deals', {
    statusCode: 200,
    fixture: 'cardInfo.json'
    });
    cy.visit('http://localhost:3000/')
  });

  it('Should contain Navbar content', () => {
    cy.get('.title')
      .contains('GameSeek')
    .get('.favorites-view-btn')
       .contains('Favorites')
  });

  it('Should be able to go to favorites page view when favoriting a card', () => {
    cy.get(':nth-child(1) > .add-favorites-btn').click()
    cy.get('.favorites-view-btn').click()
  });

  it('Should be able to display the unfavorited card in view page', () => {
    cy.get(':nth-child(1) > .add-favorites-btn').click()
    cy.get('.favorites-view-btn').click()
    cy.get('.favorites-list-title')
    .contains('My Favorites List')
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
    cy.get('.remove-favorites-btn')
    .contains('Unfavorite Game')
  });

  it('Should display a message when there are no more cards on user list', () => {
    cy.get(':nth-child(2) > .add-favorites-btn').click()
    cy.get('.favorites-view-btn').click()
    cy.get('.remove-favorites-btn').click()
    cy.get('.no-favorites-msg')
      .contains('You dont have any games favorited')
  });

  it('Should be able to go to home view when on favorites page view', () => {
    cy.visit('http://localhost:3000/favorites')
    cy.get('.title').click();
  })
});