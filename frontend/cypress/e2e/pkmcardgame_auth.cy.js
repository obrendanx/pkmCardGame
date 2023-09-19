describe('User Logging In', () => {
  it('navigates to the login page', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('Login').click();
  })

  it('enters in incorrect user details', () => {
    cy.visit('http://localhost:3000/login')
    cy.get('input[placeholder="Enter your username"]').type('incorrect username');
    cy.get('input[placeholder="Enter your password"]').type('incorrect password');
    cy.get('input[type="submit"]').click();

    cy.contains('Please check your username and password').should('be.visible');
  })

  it('submits a failed request', () => {
        cy.intercept("POST", "http://localhost:5001/signin", {
            statusCode: 404,
        }).as("failuser")

        cy.visit('http://localhost:3000/login');

        cy.get('input[type="submit"]').click();
        cy.contains('Please check your username and password').should('be.visible');
    });

  it('signs the user in', () => {
    cy.visit('http://localhost:3000/login')
    cy.get('input[placeholder="Enter your username"]').type('adminuser');
    cy.get('input[placeholder="Enter your password"]').type('Zx56Tt407.9s');
    cy.get('input[type="submit"]').click();

    cy.get('[data-testid="sidebar"]').should('be.visible');
    cy.get('[data-testid="navbar"]').should('be.visible');
  })
})