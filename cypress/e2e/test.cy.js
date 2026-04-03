// Group of related tests
describe('Demo Test', () => {

  // One specific test case
  it('Visits example page and checks input', () => {

    // Step 1: Open the website
    cy.visit('https://example.cypress.io')

    // Step 2: Find a link or element that contains the text "type"
    // Then click it (simulates user clicking)
    cy.contains('type').click()

    // Step 3: Verify that the URL changed correctly after clicking
    // This ensures navigation worked
    cy.url().should('include', '/commands/actions')

    // Step 4: Find an input field using its CSS class
    cy.get('.action-email')

      // Step 5: Type text into the input field
      .type('test@email.com')

      // Step 6: Verify that the input field contains the value we typed
      // This confirms the UI is behaving correctly
      .should('have.value', 'test@email.com')
  })
})