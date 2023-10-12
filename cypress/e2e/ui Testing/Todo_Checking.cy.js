/// <reference types="cypress" />


describe("Todo Ui testing", ()=>{



    beforeEach(()=>{
        cy.visit('http://localhost:3000')
    })

    it('schuld add new to correctly ', () => {
        cy.get(".todo-input").type('Lracnel text111{enter}')
        cy.get('.success').should('be.visible')
        cy.get(".todo-item").last().should("contain.text","Lracnel text111")
    });


    it('schuld be able to toggle the status of a todo correctly ', () => {
        cy.get(".todo-input").type('Lracnel text222{enter}')
        cy.get('.success').should('be.visible')
        cy.get(".todo-checkbox").check().should('be.checked')
        cy.get(".todo-checkbox").uncheck().should('not.be.checked')

    });

    after(()=>{
        cy.get(".delete-item", { timeout: 10000 }).should('exist').click({ multiple: true });
       
    })
    

})