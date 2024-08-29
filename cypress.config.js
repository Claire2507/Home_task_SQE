const { defineConfig } = require('cypress');
const { downloadFile } = require('cypress-downloadfile/lib/addPlugin');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://demowebshop.tricentis.com/',
    experimentalRunAllSpecs: true,
    setupNodeEvents(on, config) {
      on('task', {
        downloadFile
      });

      // Возвращаем измененный объект config
      return config; 
    },
  },
  env: {
    locale: 'en-US', 
  },
  // Дополнительные настройки конфигурации
});
