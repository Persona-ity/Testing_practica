describe('Восстановление пароля', () => {
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

          cy.log("Ввод электронной почты");
          cy.get('.form-input--email')
              .type(data.email);

          cy.wait(500);

          cy.log("Отправка формы");
          cy.get('.recover-form__button > .button')
              .click();

          cy.log("Проверка появления поп-ап окна");
          cy.get('.desktop-modal__content')
              .should('exist');
      });
  });
});
