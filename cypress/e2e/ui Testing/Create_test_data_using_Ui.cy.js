describe('filter functionality test case', () => {
    //UI
    //API
    // Mock

    before(() => {
        cy.visit('http://localhost:3000/')
        const todosExaple = ['First Todo', 'Second Todo','Three Todo','F Todo',].forEach(todo =>{
            cy.AddingNewTodo(todo)

        })
        cy.get(".todo-checkbox").first().check().should('be.checked')
        cy.get(".todo-checkbox").last().check().should('be.checked')




    })

    it('bla bla', ()=>{

    })

    after(()=>{
        cy.get('body').then($el =>{
            if($el.find('.delete-item').length > 0){
                cy.get(".delete-item", { timeout: 10000 }).should('exist').click({ multiple: true });
            }
        })
    })

})