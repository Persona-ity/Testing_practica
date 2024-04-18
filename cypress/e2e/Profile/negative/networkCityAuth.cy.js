describe('Попытка аутентификации с использованием сетевого города', () => {
  it('Попытка аутентификации', () => {
      cy.fixture('url').then(url => {
          cy.log('Переход на страницу авторизации');
          cy.visit(url.login);
      });

      cy.fixture('networkCity').then(data => {
          cy.log("Нажатие на ссылку входа в сетевой город");
          cy.get('.button-login__network-city-desktop')
              .click();

          cy.log("Ввод недействительного логина");
          cy.get('.desktop-modal__content > .form > :nth-child(1) > .form__labels > :nth-child(1) > .form-control--medium > .form-input--text')
              .type(data.invalidLogin);

          cy.log("Ввод недействительного пароля");
          cy.get('.desktop-modal__content > .form > :nth-child(1) > .form__labels > :nth-child(2) > .form-control--medium > .form-input--password')
              .type(data.invalidPassword);

          cy.wait(500);

          cy.log("Нажатие кнопки входа");
          cy.get('.desktop-modal__content > .form > .form__buttons > .login-form__button > .button')
              .click();

          cy.get('.form-error > span')
              .should('exist');
      });
  });
});
