/// <reference types="cypress" />


describe("Todo Ui testing", ()=>{



    beforeEach(()=>{
        cy.visit('http://localhost:3000')
    })

    it.only('schuld add new to correctly ', () => {

        cy.intercept('POST','http://localhost:8080/todos').as('postRequest')
        cy.AddingNewTodo("Arajin Lracnel")
        cy.wait('@postRequest').then(xhr =>{
            expect(xhr.request.body.name).to.eql('Arajin Lracnel')
        })
        cy.get(".todo-item").last().should("contain.text","Arajin Lracnel")
    });


    it('schuld be able to toggle the status of a todo correctly ', () => {
        cy.AddingNewTodo("Erkrord Lracnel")
        cy.get(".todo-checkbox").check().should('be.checked')
        cy.get(".todo-checkbox").uncheck().should('not.be.checked')

    });
    it('schuld be delete correctly ', () => {
        cy.AddingNewTodo("Errord Lracnel")
        cy.get('.delete-item').click()

    });

    // afterEach(()=>{
    //     cy.get('body').then($el =>{
    //         if($el.find('.delete-item').length > 0){
    //             cy.get(".delete-item", { timeout: 10000 }).should('exist').click({ multiple: true });
    //         }
    //     })
    // })
    
///// bayc erevi lav@ chi-> dzvela support commandsi mej poxeluc heto 
})