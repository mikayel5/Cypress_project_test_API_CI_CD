


describe('api testing', ()=>{
   
    // it("Apporch1- Hard coded json object", ()=>{
    //     const requestBody={
    //         tourist_name:"Mike25",
    //         tourist_email: "MEDEWCWDWWWEWMM@mail.com",
    //         tourist_location:"KONISNSGBERG"
    //     }

    //     cy.request(
    //         {
    //             method: 'POST',
    //             url:"http://restapi.adequateshop.com/api/Tourist",
    //             body: requestBody
    //         })
    //         .then((response) =>{
    //             expect(response.status).to.eq(201)
    //             expect(response.body.tourist_name).to.eq("Mike25")
    //             expect(response.body.tourist_email).to.eq("MEDEWCWDWWWEWMM@mail.com")
    //             expect(response.body.tourist_location).to.eq("KONISNSGBERG")
    //         })
    // })



    it("Apporch2- Dynamical generating json object", ()=>{
        const requestBody={
            tourist_name: Math.random().toString(6).substring(2),
            tourist_email:Math.random().toString(6).substring(2) + "@gmail.com",
            tourist_location:"KONISNSGBERG"
        }

        cy.request(
            {
                method: 'POST',
                url:"http://restapi.adequateshop.com/api/Tourist",
                body: requestBody
            })
            .then((response) =>{
                expect(response.status).to.eq(201)
                expect(response.body.tourist_name).to.eq(requestBody.tourist_name)
                expect(response.body.tourist_email).to.eq(requestBody.tourist_email)
                expect(response.body.tourist_location).to.eq(requestBody.tourist_location)
            })
    })



    it("Apporch3- using Fixture", ()=>{
        cy.fixture('tourist').then((data)=>{

            const requestBody =data
            cy.request(
                {
                    method: 'POST',
                    url:"http://restapi.adequateshop.com/api/Tourist",
                    body: requestBody
                })
                .then((response) =>{
                    expect(response.status).to.eq(201)
                    expect(response.body.tourist_name).to.eq(requestBody.tourist_name)
                    expect(response.body.tourist_email).to.eq(requestBody.tourist_email)
                    expect(response.body.tourist_location).to.eq(requestBody.tourist_location)

                    expect(response.body).has.property('tourist_email', requestBody.tourist_email)
                    expect(response.body).to.have.property('tourist_email', requestBody.tourist_email)
                })

        })

        
    })
})