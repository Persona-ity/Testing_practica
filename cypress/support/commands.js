Cypress.Commands.add('setResolution', (width, height) => {
    cy.viewport(width, height);
});