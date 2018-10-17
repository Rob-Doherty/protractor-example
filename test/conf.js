const puppeteer = require('puppeteer');

exports.config = {

  // ## Not essential, appears to
  //
  // framework: 'jasmine',

  // ## Not necessary, protractor will start it's own selenium server, but can be configured
  //
  // seleniumAddress: 'http://localhost:4444/wd/hub',

  // ## Defaults to Chrome, but can be overridden easily
  //
  // capabilities: {
  //   browserName: 'firefox'
  // },

  // ## Can use puppeteer's chromedriver to run headless
  //
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: ['--headless'],
      binary: puppeteer.executablePath(),
    }
  },

  specs: ['todo-spec.js']
};