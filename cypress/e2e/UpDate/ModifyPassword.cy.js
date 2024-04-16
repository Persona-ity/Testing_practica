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
              cy.log('Ввод нового пароля');
              cy.get(':nth-child(1) > .form-input--password')
                  .type(data.newPassword);

              cy.log('Повторный ввод нового пароля');
              cy.get(':nth-child(2) > .form-input--password')
                  .type(data.newPassword);
          });

          cy.log('Кнопка сохранить');
          cy.get('.form__buttons > div > .button')
              .click();

          cy.get('.form__buttons > div > p')
              .should('exist');
      });
  });
});
