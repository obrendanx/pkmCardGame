describe('User Editing Profile', () => {
  it('navigates to the edit profile page', () => {
    cy.visit('http://localhost:3000/login')
    cy.get('input[placeholder="Enter your username"]').type('adminuser');
    cy.get('input[placeholder="Enter your password"]').type('Zx56Tt407.9s');
    cy.get('input[type="submit"]').click();

    cy.wait(2000);

    cy.visit('http://localhost:3000/editprofile')
    cy.contains('adminuser').should('be.visible');
  })

  it('submits a failed request to the update endpoints', () => {
    cy.intercept("PUT", "http://localhost:5001/updateauthprofile", {
        statusCode: 404,
    }).as("failedauthupdate");

    cy.intercept("PUT", "http://localhost:5002/updateprofile", {
        statusCode: 404,
    }).as("faileduserupdate")

    cy.visit('http://localhost:3000/login')
    cy.get('input[placeholder="Enter your username"]').type('adminuser');
    cy.get('input[placeholder="Enter your password"]').type('Zx56Tt407.9s');
    cy.get('input[type="submit"]').click();

    cy.wait(2000);

    cy.visit('http://localhost:3000/editprofile')
    cy.get('input[type="submit"]').scrollIntoView().click();

    cy.contains('Error Updating Profile!').should('be.visible');
  })

  it('submits a success reuqest to the update endpoints', () => {
        cy.intercept("PUT", "http://localhost:5001/updateauthprofile", {
            statusCode: 200,
        }).as("passauthupdate");

        cy.intercept("PUT", "http://localhost:5002/updateprofile", {
            statusCode: 200,
        }).as("passuserupdate")
        
        cy.visit('http://localhost:3000/login')
        cy.get('input[placeholder="Enter your username"]').type('adminuser');
        cy.get('input[placeholder="Enter your password"]').type('Zx56Tt407.9s');
        cy.get('input[type="submit"]').click();

        cy.wait(2000);

        cy.visit('http://localhost:3000/editprofile')
        cy.get('input[placeholder="Please enter your name"]').type('test name');
        cy.get('input[type="submit"]').scrollIntoView().click();

        // Submit the form
        cy.get('input[type="submit"]').click();
        cy.contains('Profile Updated Successfully!').should('be.visible');
    });

    it('displays warning messages for input fields with incorrect data', () => {
        cy.visit('http://localhost:3000/login')
        cy.get('input[placeholder="Enter your username"]').type('adminuser');
        cy.get('input[placeholder="Enter your password"]').type('Zx56Tt407.9s');
        cy.get('input[type="submit"]').click();

        cy.wait(2000);

        cy.visit('http://localhost:3000/editprofile')
        cy.get('input[placeholder="Please enter a password"]').type('incorrectpass');
        cy.get('input[placeholder="Please enter your password again"]').type('incorrectpass2');
        cy.get('input[placeholder="Please enter your name"]').type('$name');
        cy.get('input[type="submit"]').scrollIntoView().click();

        cy.contains('Password must contain at least one uppercase letter, one lowercase letter, one number, and one symbol').scrollIntoView().should('be.visible');
        cy.contains('Passwords do not match').scrollIntoView().should('be.visible');
        cy.contains('Full Name can only contain letters and spaces').scrollIntoView().should('be.visible');
    })
})