describe('Обновление карточки', () => {
  it('Обновление карточки', () => {
      cy.fixture('url').then(url => {
          cy.log('Переход на страницу авторизации');
          cy.visit(url.login);
      });

      cy.fixture('auth_info').then(data => {
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

      cy.fixture('updateCard').then(data => {
          cy.log("Панель с карточкой");
          cy.get(':nth-child(2) > .menu-item__item-name')
              .click();

          cy.wait(500);

          cy.log("Изменение фамилии");
          cy.get(':nth-child(1) > :nth-child(1) > .form-control--max > .form-input--text')
              .clear()
              .type(data.invalidLastname);

          cy.log("Изменение имя");
          cy.get(':nth-child(2) > .form-control--max > .form-input--text')
              .clear()
              .type(data.invalidFirstname);

          cy.log("Изменение отчества");
          cy.get(':nth-child(2) > :nth-child(1) > .form-control--max > .form-input--text')
              .clear()
              .type(data.invalidPatronymic);

          cy.log("Изменение email");
          cy.get('.form-input--email')
              .clear()
              .type(data.invalidEmail);

          cy.log("Проверка валидации");
          cy.get(':nth-child(1) > :nth-child(1) > .form-error > span')
              .should('exist');
          cy.get(':nth-child(1) > :nth-child(2) > .form-error > span')
              .should('exist');
          cy.get(':nth-child(2) > :nth-child(1) > .form-error > span')
              .should('exist');
          cy.get(':nth-child(2) > :nth-child(2) > .form-error > span')
              .should('exist');
      });
  });
});
