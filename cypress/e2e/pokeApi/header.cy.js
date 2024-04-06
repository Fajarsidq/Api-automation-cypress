/// <reference types="cypress" />

describe('Validate api', () => {

    it('Succesfully validate  content-type', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
        cy.get('@pokemon').its('headers').its('content-type')
        .should('include','application/json; charset=utf-8')
        
        cy.get('@pokemon').its('body').should('deep.include', { 
            abilities: [
                { ability: { name: 'limber', url: 'https://pokeapi.co/api/v2/ability/7/' }, is_hidden: false, slot: 1 },
                { ability: { name: 'imposter', url: 'https://pokeapi.co/api/v2/ability/150/' }, is_hidden: true, slot: 3 }
            ],
            base_experience: 101,
            forms: [
            { name: 'ditto', url: 'https://pokeapi.co/api/v2/pokemon-form/132/' }
            ],
        });
    })
        it('Succesfully validate  status code', () => {
            cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('ditto')
            cy.get('@ditto').its('status').should('equal',200)

        })

        it('Succesfully validate ststus code with params', () => {
            cy.request({
                method: 'GET',
                url: 'https://reqres.in/api/users'
            }).as('users')
            cy.get('@users').its('status').should('equal',200)

        })

        
        it('Succesfully validate  content', () => {
            cy.request('https://pokeapi.co/api/v2/pokemon/bulbasaur').as('bulbasaur')
            cy.get('@bulbasaur').its('body').should('include',{name: "bulbasaur"})


        })
        it('Succesfully validate  content', () => {
            cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('ditto1')
            cy.get('@ditto1').its('body').should('include',{name: "bulbasaur"})


        })

})
