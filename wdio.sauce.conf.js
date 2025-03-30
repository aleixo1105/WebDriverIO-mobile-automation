// wdio.sauce.conf.js

require('dotenv').config();
const { remote } = require('webdriverio');
const capabilities = require('./capabilities');

exports.config = {
  user: process.env.SAUCE_USERNAME,  // Carrega o usuário do Sauce Labs via variável de ambiente
  key: process.env.SAUCE_ACCESS_KEY, // Chave do Sauce Labs

  services: ['sauce'], // Usa o serviço do Sauce Labs

  runner: 'local',
  hostname: 'ondemand.us-west-1.saucelabs.com',
  port: 443,
  path: '/wd/hub',

  specs: ['./test/specs/**/*.js'], // Caminho para os testes
  capabilities: [capabilities],

  region: 'us-west-1', // Define o datacenter do Sauce Labs

  logLevel: 'info',
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,

  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
    timeout: 60000,
  },

  before: async function () {
    global.driver = await remote({
      user: process.env.SAUCE_USERNAME,
      key: process.env.SAUCE_ACCESS_KEY,
      hostname: 'ondemand.us-west-1.saucelabs.com',
      port: 443,
      path: '/wd/hub',
      capabilities,
    });
  },

  afterTest: async function (test, context, { passed }) {
    const jobStatus = passed ? 'passed' : 'failed';
    await driver.execute('sauce:job-result=' + jobStatus);
  },

  after: async function () {
    await driver.deleteSession();
  },
};
