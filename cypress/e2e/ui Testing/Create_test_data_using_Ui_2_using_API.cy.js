describe('filter functionality test case', () => {
    //UI
    //API
    // Mock

    before(() => {
        cy.addDummyTodos()
        cy.visit('http://localhost:3000/')




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