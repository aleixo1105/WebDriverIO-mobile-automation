// capabilities.js

const capabilities = {
  platformName: 'Android',
  'appium:app': 'storage:filename=android.wdio.native.app.v1.0.8.apk', // Nome do APK no Sauce Labs
  'appium:deviceName': 'Android GoogleAPI Emulator',
  'appium:platformVersion': '12.0',
  'appium:automationName': 'UiAutomator2',
  'sauce:options': {
    build: 'appium-build-7SQA8', // Identificação do build
    name: 'Teste_Appium_Sauce', // Nome do teste
    deviceOrientation: 'PORTRAIT', // Posição do dispositivo
  },
};

module.exports = capabilities;
