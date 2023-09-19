describe('User Registering', () => {
    it('navigates to the register page', () => {
        cy.visit('http://localhost:3000/')
        cy.contains('Register').click();
    })

    it('enters no details', () => {
        cy.visit('http://localhost:3000/register');
        cy.get('input[type="submit"]').click();
        
        cy.get('[data-testid="username-error"]').scrollIntoView().should('be.visible');
        cy.get('[data-testid="fullName-error"]').scrollIntoView().should('be.visible');
        cy.get('[data-testid="password-error"]').scrollIntoView().should('be.visible');
        cy.get('[data-testid="email-error"]').scrollIntoView().should('be.visible');
        cy.get('[data-testid="dateOfBirth-error"]').scrollIntoView().should('be.visible');
    });

    it('enters incorrect register details', () => {
        cy.visit('http://localhost:3000/register');
        cy.get('input[placeholder="Enter your username"]').type('incorrect username');
        cy.get('input[placeholder="Enter your full name"]').type('incorrect fullname$');
        cy.get('input[placeholder="Enter your password"]').type('incorrect password');
        cy.get('input[placeholder="Retype your password"]').type('incorrect password');
        cy.get('input[placeholder="dd/mm/yyyy"]').type('incorrect birthday');
        cy.get('input[type="submit"]').click();

        cy.get('[data-testid="username-error"]').scrollIntoView().should('be.visible');
        cy.get('[data-testid="fullName-error"]').scrollIntoView().should('be.visible');
        cy.get('[data-testid="password-error"]').scrollIntoView().should('be.visible');
        cy.get('[data-testid="dateOfBirth-error"]').scrollIntoView().should('be.visible');
    });

    it('enters passwords that do not match', () => {
        cy.visit('http://localhost:3000/register');
        cy.get('input[placeholder="Enter your password"]').type('ACorrectPassword$$21');
        cy.get('input[placeholder="Retype your password"]').type('ACorrectPassword$$11');

        cy.get('input[type="submit"]').click();
        cy.get('[data-testid="retypePassword-error"]').should('be.visible');
    });

    it('submits a request to the endpoint', () => {
        cy.intercept("POST", "http://localhost:5001/signup", {
            statusCode: 200,
        }).as("passuser")

        cy.intercept("POST", "http://localhost:5002/userprofile", {
            statusCode: 200,
        }).as("passprofile")

        // Visit the registration page
        cy.visit('http://localhost:3000/register');

        // Fill in the form fields with valid data
        cy.get('input[placeholder="Enter your username"]').type('validUsername');
        cy.get('input[placeholder="Enter your full name"]').type('Valid Full Name');
        cy.get('input[placeholder="Enter your password"]').type('ValidPassword123!');
        cy.get('input[placeholder="Retype your password"]').type('ValidPassword123!');
        cy.get('input[placeholder="Enter your email"]').type('validemail@email.com');
        cy.get('input[placeholder="dd/mm/yyyy"]').type('01/01/1990');
        cy.get('input[type="checkbox"]').check();

        // Submit the form
        cy.get('input[type="submit"]').click();
        cy.get('[data-testid="login-form"]').should('be.visible');
    });

    it('submits a failed request', () => {
        cy.intercept("POST", "http://localhost:5001/signup", {
            statusCode: 404,
        }).as("failuser")

        cy.intercept("POST", "http://localhost:5002/userprofile", {
            statusCode: 404,
        }).as("failprofile")

        // Visit the registration page
        cy.visit('http://localhost:3000/register');

        cy.get('input[placeholder="Enter your username"]').type('validUsername');
        cy.get('input[placeholder="Enter your full name"]').type('Valid Full Name');
        cy.get('input[placeholder="Enter your password"]').type('ValidPassword123!');
        cy.get('input[placeholder="Retype your password"]').type('ValidPassword123!');
        cy.get('input[placeholder="Enter your email"]').type('validemail@email.com');
        cy.get('input[placeholder="dd/mm/yyyy"]').type('01/01/1990');
        cy.get('input[type="checkbox"]').check();

        cy.get('input[type="submit"]').click();
        cy.contains('An unexpected error occurred').should('be.visible');
    });
})