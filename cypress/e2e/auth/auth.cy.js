describe('Попытка аутентификации', () => {
  it('Вход в систему', () => {
    cy.fixture('url').then(url => {
      cy.log('Открытие страницы аутентификации');
      cy.visit(url.login);
    });

    cy.fixture('auth').then(data => {
      cy.log('Ввод логина');
      cy.get('.form-input--text')
        .type(data.login);

      cy.log('Ввод пароля');
      cy.get('.form-input--password')
        .type(data.password);

      cy.wait(500);

      cy.get(':nth-child(3) > .button')
        .click();
    });   
  });
});
