describe('My Login application', () => {
    it('should login with valid credentials', () => {
        // Замените 'locale' на актуальное значение и 'login/' на ваш путь к странице авторизации
        cy.visit(`${Cypress.env('locale')}/login/`, { failOnStatusCode: false });
        //cy.visit(`${Cypress.env('locale')}/login/`);

        // Открыть окно браузера на весь экран
        // В Cypress окно по умолчанию открывается в режиме визуализации тестов, так что ручное изменение размеров обычно не требуется

        // Предполагается, что первый шаг с вводом неверного пароля и нажатием на кнопку — это часть тестового сценария
        cy.get('input[type="password"]').type('WxCVrBqsH9bRL97');
        cy.get('.button').click();
        // Предполагается, что это действие по клику на кнопку согласия используется для принятия cookies или условий использования
        cy.get('#onetrust-accept-btn-handler').click();

        // Ввод валидных учетных данных пользователя
        cy.get('form.flex input[type="email"]').type('claire26.09@yopmail.com');
        cy.get('input[type="password"]').type('qwerty');
        cy.get('.flex-row > .button_button__YKPW7').first().click();

        // Проверка URL
        const expectedUrl = `https://stgnew-www.victorinox.com/${Cypress.env('locale')}/myVictorinox/`;
        cy.url().should('eq', expectedUrl);
    });
});