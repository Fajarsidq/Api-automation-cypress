describe('Validate Header', () => {

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
})
