/// <reference types="cypress" />

describe('API Testing', () => {
    it('should retrieve a list of users', () => {
              cy.request('GET', 'https://jsonplaceholder.typicode.com/users').then((response) => {

              expect(response.status).to.eq(200);     
        expect(response.body).to.be.an('array');
        expect(response.body.length).to.be.greaterThan(0);
        const firstUser = response.body[0];
        expect(firstUser).to.have.property('name');
        expect(firstUser).to.have.property('email');
      });
    });
  });
  


  describe("HTTP Requests", ()=>{
    it("GET Call", () =>{
      cy.request('GET', "https://jsonplaceholder.typicode.com/posts/1")
      .its("status")
      .should('equal', 200)
    })


    it("Post Call",  ()=>{
      cy.request({
        method: 'POST',
        url: 'https://jsonplaceholder.typicode.com/posts',
        body:{
          title: "Test post cypress",
          body: "This is post call",
          userId:1
        }
      })
    .its("status")
    .should("equal", 201)

    })

    it("PUT Calll", ()=> {
      cy.request({
        method: "PUT",
        url: "https://jsonplaceholder.typicode.com/posts/1",
        body: {
          title: "test post- Update",
          body: "This is put call",
          userId:1,
          id:1
        }
      })
      .its('status')
      .should("equal", 200)
    })



  })