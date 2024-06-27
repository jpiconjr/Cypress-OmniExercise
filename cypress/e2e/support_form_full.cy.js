describe('Support Form Tests', () => {
  beforeEach(() => {
    // Visit the base URL before each test
    cy.visit('/');
  });

  it('Attempt to submit the form without filling the "Question" field, then fill it in and submit', () => {
    // Enter test data into all fields except the "Question" field
    cy.wait(500);
    cy.get('[data-testid="name"]').type('Test User');
    cy.get('#email').type('testuser@example.com');
    cy.get('#phoneNumber').type('1234567890');
    cy.get('#dutyStation').type('New York');
    cy.get('#subject').click();
    cy.get('#subject').contains('Other').click();

    // Attempt to submit the form
    cy.get('[data-testid="submit-button"]').click();
    cy.wait(500);

    // Validate that the form is not submitted and an error message appears below the empty "Question" field
    cy.get('#message-error-msg').should('contain', 'Question is required.');

    cy.wait(500);

    cy.get('[data-testid="message"]').type('This is a test question.');

    // Submit the form
    cy.get('[data-testid="submit-button"]').click();
    cy.wait(500);

    // Validate that a confirmation message appears on screen
    cy.contains('Contact Form Submitted').should('be.visible');
  });
});
