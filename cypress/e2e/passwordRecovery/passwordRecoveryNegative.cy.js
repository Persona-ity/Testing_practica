describe('Восстановление пароля с ошибкой', () => {
  it('Попытка', () => {
      cy.fixture('url').then(url => {
          cy.log('Переход на страницу авторизации');
          cy.visit(url.login);
      });

      cy.fixture('passwordRecovery').then(data => {
          cy.log("Нажатие на ссылку восстановления пароля");
          cy.get(':nth-child(2) > .subtitle > .subtitle__link > a')
              .click();

          cy.wait(500);

          cy.log("Ввод неверного email");
          cy.get('.form-input--email')
              .type(data.invalidEmail);

          cy.log("Проверка на валидацию");
          cy.get('.form-error > span')
              .should('exist');
      });
  });
});
