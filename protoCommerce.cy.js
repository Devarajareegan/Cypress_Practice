
describe('proto commerce',()=>{
  it('task2',()=>{
  cy.visit('https://rahulshettyacademy.com/angularpractice/')
    cy.fixture('proto1.json').then((user) =>{
      cy.url().should('include','angularpractice')
      cy.get('.form-control').eq(0).type(user.username)
      cy.get("[name='email']").type(user.useremail)
      cy.get('#exampleInputPassword1').type(user.userpassword)
      cy.get('#exampleCheck1').check().should('be.checked')
      cy.get('#exampleFormControlSelect1').select(user.male).should('have.value',user.male)
      cy.get('#inlineRadio2').check()
      cy.get('#inlineRadio3').should('be.visible','#inlineRadio3')
      cy.get("[name='bday']").type(user.dob)
      cy.get('.btn').click()
      cy.get('strong').should('have.text',user.textsuccess)
  
      // shop
      cy.get('.navbar-nav  a').eq(1).click()
      cy.get('app-card-list app-card').each(($e1,index,$list) => {
        if($e1.text().includes("Nokia")){
          cy.wrap($e1).find('button').click()
        }
      })
      cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link').click() // doubt
      cy.get('td button[type="button"] ').eq(2).click() // doubt
      cy.get('.btn-success').eq(0).click()
      cy.get('.validate').type('India')
      cy.wait(5000)
      cy.get('li a').eq(3).click()
      cy.get('#checkbox2').check({force: true}).should('be.checked')
      cy.get('input.btn ').click()
      cy.get('strong').should('have.text',user.textsuccess)
      cy.screenshot()
      
    })
  }
  )
   
  }
  
  )