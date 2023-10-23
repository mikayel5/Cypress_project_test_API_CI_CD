/// <reference types="cypress" />


describe("Todo Ui testing", ()=>{



    beforeEach(()=>{
        cy.visit('http://localhost:3000')
    })

    it('schuld add new to correctly ', () => {
        cy.AddingNewTodo("Arajin Lracnel")
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

    it('should not add an empty todo', ()=>{
        cy.AddingNewTodo("")

    })

    afterEach(()=>{
        cy.get('body').then($el =>{
            if($el.find('.delete-item').length > 0){
                cy.get(".delete-item", { timeout: 10000 }).should('exist').click({ multiple: true });
            }
        })
    })
    
///// bayc erevi lav@ chi 
})