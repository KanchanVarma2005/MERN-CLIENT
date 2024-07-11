//this is where i write  my test case

describe('Open Home Page',()=>{
    it('Open Home Page',()=>{
        cy.visit('/')
        cy.contains('Welcome')
    })
    
})