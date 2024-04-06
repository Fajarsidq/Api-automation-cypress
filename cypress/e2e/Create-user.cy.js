describe('Create New User', () => {
    
    it('succesfully create User', () => {
        var user = {
            "name": "Fajars",
            "job": "SDET"
        }

    cy.request('POST','https://reqres.in/api/users',user).then((response) => {
        expect(response.status).equal(201)
        expect(response.body.name).to.equal(user.name);
        expect(response.body.job).to.equal(user.job);
    })
})
})