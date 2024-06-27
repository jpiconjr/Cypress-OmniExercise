describe('Support Form Tests', () => {
    beforeEach(() => {
        // Visit the base URL before each test
        cy.visit('/');
    });

    it('Attempt to submit the form without filling the "Question" field', () => {
        // Enter test data into all fields except the "Question" field
        cy.wait(500);
        cy.get('[data-testid="name"]').should('be.visible').type('Test User');
        cy.get('[data-testid="email"]').should('be.visible').type('testuser@example.com');
        cy.get('[data-testid=phoneNumber]').should('be.visible').type('1234567890');
        cy.get('[data-testid=dutyStation]').should('be.visible').type('New York');
        cy.get('#subject').should('be.visible').click();
        cy.get('#subject').contains('Other').click();
        
        // Attempt to submit the form
        cy.get('[data-testid="submit-button"]').should('be.visible').click();
        
        // Validate that the form is not submitted and an error message appears below the empty "Question" field
        cy.get('#message-error-msg').should('be.visible').contains('Question is required.');
    });

    it('Submit the form with all fields filled and validate confirmation message', () => {
        // Enter test data into all fields
        cy.wait(500);
        cy.get('[data-testid="name"]').should('be.visible').type('Test User');
        cy.get('[data-testid="email"]').should('be.visible').type('testuser@example.com');
        cy.get('[data-testid=phoneNumber]').should('be.visible').type('1234567890');
        cy.get('[data-testid=dutyStation]').should('be.visible').type('New York');
        cy.get('#subject').should('be.visible').click();
        cy.get('#subject').contains('Other').click();
        cy.get('[data-testid="message"]').should('be.visible').type('This is a test question.');

        // Submit the form
        cy.get('[data-testid="submit-button"]').should('be.visible').click();
        
        // Validate that a confirmation message appears on screen
        cy.wait(500);
        cy.contains('Contact Form Submitted').should('be.visible');
    });
});