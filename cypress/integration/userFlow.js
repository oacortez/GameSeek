describe('User flow functionality', () => {
  beforeEach(() => {
      cy.intercept('GET', 'https://www.cheapshark.com/api/1.0/deals', {
      statusCode: 200,
      fixture: 'cardInfo.json'
      });
      cy.visit('http://localhost:3000/')
    });

    it('Should be able to view deal cards', () => {
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

    it('Should be able to favorite a deal card', () => {
      cy.get(':nth-child(1) > .add-favorites-btn').click()
    });

    it('Should be able to unfavorite a deal card', () => {
      cy.get(':nth-child(2) > .add-favorites-btn').click()
      cy.get('.favorites-view-btn').click()
      cy.get('.remove-favorites-btn').click()
    });

    it('Should be able to buy item and redirect you to another url', () => {
      cy.get(':nth-child(1) > .buy-btn').click()
    })
  });

