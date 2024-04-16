describe('Обновление пароля', () => {
  it('Обновление пароля', () => {
      cy.fixture('url').then(url => {
          cy.log('Переход на страницу авторизации');
          cy.visit(url.login);
      });

      cy.fixture('auth').then(data => {
          cy.log('Ввод логина');
          cy.get('.form-input--text')
              .type(data.login);

          cy.log('Ввод пароля');
          cy.get('.form-input--password')
              .type(data.password);

          cy.get(':nth-child(3) > .button')
              .click();

          cy.wait(2000);

          cy.fixture('updatePassword').then(data => {
              cy.log('Ввод неверного нового пароля');
              cy.get(':nth-child(1) > .form-input--password')
                  .type(data.invalidPassword1);

              cy.log('Повторный ввод неверного нового пароля');
              cy.get(':nth-child(2) > .form-input--password')
                  .type(data.invalidPassword2);
          });

          cy.log('Кнопка сохранить');
          cy.get('.form__buttons > div > .button')
              .click();

          cy.log('Валидация');
          cy.get('.form__labels > :nth-child(2) > span')
              .should('exist');
          cy.get('.form__labels > :nth-child(4) > span')
              .should('exist');
      });
  });
});
