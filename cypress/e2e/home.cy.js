describe('Home PageTest',()=>{
    it('Check the Input field',()=>{
        cy.visit('/')
       
       cy.get('input').type('Cinderella')
        
        cy.get('#btnn').should('be.visible')
        cy.get('#btnn').click()
        cy.contains('Welcome, Cinderella')
        cy.get('input').should('have.value','Cinderella')
    })
})