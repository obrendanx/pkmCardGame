describe('User Loggin In', () => {
    it('navigates to the login page', () => {
        cy.visit('http://localhost:3000/')
        cy.contains('Login').click();
    })

    it('enters in the incorrect user details', () => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // Return false to prevent Cypress from failing the test
            return false;
        });

        cy.visit('http://localhost:3000/login')
        cy.get('input[placeholder="Enter your username"]').type('incorrect username');
        cy.get('input[placeholder="Enter your password"]').type('incorrect password');
        cy.get('input[type="submit"]').click();

        cy.contains('Error: 401 Incorrect username or password ').should('be.visible');
    })

    it('generates a 404 error on login', () => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // Return false to prevent Cypress from failing the test
            return false;
        });

        cy.intercept('POST', '**/login', {
            statusCode: 404,
        }).as('loginRequest');

        cy.visit('http://localhost:3000/login')
        cy.get('input[placeholder="Enter your username"]').type('incorrect username');
        cy.get('input[placeholder="Enter your password"]').type('incorrect password');
        cy.get('input[type="submit"]').click();

        cy.contains('Error: 404 Incorrect username or password ').should('be.visible');
    })

    it('generates a 500 error on login', () => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // Return false to prevent Cypress from failing the test
            return false;
        });

        cy.intercept('POST', '**/login', {
            statusCode: 500,
        }).as('loginRequest');

        cy.visit('http://localhost:3000/login')
        cy.get('input[placeholder="Enter your username"]').type('incorrect username');
        cy.get('input[placeholder="Enter your password"]').type('incorrect password');
        cy.get('input[type="submit"]').click();

        cy.contains('Error: An error has occurred ').should('be.visible');
    })

    it('signs the user in', () => {
        Cypress.on('uncaught:exception', (err, runnable) => {
        // Return false to prevent Cypress from failing the test
        return false;
        });

        // Intercept the login request and return mock data
        cy.intercept('POST', '**/login', {
        fixture: 'loginData.json', // Fixture for /login endpoint
        }).as('loginRequest');

        cy.visit('http://localhost:3000/login');
        cy.get('input[placeholder="Enter your username"]').type('adminuser');
        cy.get('input[placeholder="Enter your password"]').type('Zx56Tt407.9s');
        cy.get('input[type="submit"]').click();

        // Wait for both the login and fetchusers requests to complete
        cy.wait(['@loginRequest']);

        cy.wait(2000);

        // Check if the profile page elements are visible
        cy.contains("2022").should('be.visible');
    });
})