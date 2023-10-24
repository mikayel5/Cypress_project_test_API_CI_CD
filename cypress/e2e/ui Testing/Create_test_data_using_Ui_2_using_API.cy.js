describe('filter functionality test case', () => {
    // UI
    // API
    // Mock

    before(() => {
        //cy.addDummyTodos();// from support commands
        
        cy.intercept({
            method: 'GET',
            url:'http://localhost:8080/todos'
        },{
            body:[
                {
                    "name" : "learn cypress",
                    "isComplete": false
                },
                {
                    "name" : "build framework",
                    "isComplete": true
                },
                {
                    "name" : "shopping",
                    "isComplete": false
                },
                {
                    "name" : "drink coffe",
                    "isComplete": true
                }
            ]
        })
        
        
        cy.visit('http://localhost:3000');
    });



    it('should filter the completed todos correctly-2111', () => {
        cy.contains('Complete').click();
        cy.url().should('contain', '/complete');
        cy.get('.todo-checkbox').each(element => {
            cy.wrap(element).should('be.checked');
        });
    });

    // erkrork@ chi ashxatum iriair het uxxel 

    // it('should filter the active todos correctly-31111', () => {
    //     cy.get('.footer > :nth-child(2)').click();
    //    cy.url().should('contain', '/active');
    //     cy.get('.todo-checkbox').each(element => {
    //         cy.wrap(element).should('not.be.checked');
    //     });
    // });

    after(() => {
        cy.get('body').then($el => {
            if ($el.find('.delete-item').length > 0) {
                cy.get('.delete-item', {
                    timeout: 10000
                }).should('exist').click({
                    multiple: true
                });
            }
        });
    });
});