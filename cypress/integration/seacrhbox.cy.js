/// <reference types="cypress"/>

const { Http2ServerRequest } = require("http2");


describe('Search Box Test', function() {
  before(() => {
    cy.visit('http://zero.webappsecurity.com/index.html')
  });

  it('should type into searbox and submit', () => {
      cy.get('#searchTerm').type('some text{enter}')
  });


  it('should show search result page', () => {
      cy.get('h2').should('contain.text','Search Results:')
  });
});