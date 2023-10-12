

describe("Todo Ui testing", ()=>{



    beforeEach(()=>{
        cy.visit('http://localhost:3000/');
    })

    it('schuld add new to do ', () => {
        cy.get(".todo-input").type('Lracnel text{enter}')
        cy.get('.success').should('be.visible')
        cy.get(".todo-item").last().should("contain.text","Lracnel text")
    });
    

})