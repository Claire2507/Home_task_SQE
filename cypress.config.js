const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://demowebshop.tricentis.com/',
    experimentalRunAllSpecs: true,
    setupNodeEvents(on, config) {
      // здесь можно добавить обработчики событий Node, если нужно
    },
  },
  env: {
    locale: 'en-US', // Установка локали 'ru' как переменной окружения
  },
  // Дополнительные настройки конфигурации
});
