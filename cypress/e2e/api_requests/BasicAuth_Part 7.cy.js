describe("Authentication",()=>{
    it('Basic Authentication', () => {
        cy.request({
            method: 'GET',
            url: 'https://postman-echo.com/basic-auth',
            auth: {
                user:'postman',
                pass:'password'
            }
        })
        .then((response)=>{
            expect(response.status).to.eq(200)
            expect(response.body.authenticated).to.eq(true)
            console.log("body", response.body.authenticated)
        })
    });

it('Digest Authentication', () => {
    cy.request({
        method: 'GET',
        url: 'https://postman-echo.com/basic-auth',
        auth:{
            username:'postman',
            password:"password",
            method:'degest'
        }

    })
    .then((response)=>{
        expect(response.status).to.eq(200)
        expect(response.body.authenticated).to.eq(true)
    })
});

const token = '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'
it('Bearer token Auth', () => {
    cy.request({
        method: 'GET',
        url: 'https://api.github.com/user/repos',
        headers:{
          Authorization:"Bearer " + token
        }

    })
    .then((response)=>{
        expect(response.status).to.eq(200)
    })
});

})