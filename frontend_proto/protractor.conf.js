// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');

exports.config = {
  allScriptsTimeout: 18000,
  specs: [
    './e2e/**/*.e2e-spec.ts'
  ],
  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {
      // 'args': ['show-fps-counter=true', '--no-sandbox']
      'args': ['--headless', '--disable-gpu', '--window-size=800x600']
    },
  },
  directConnect: true,
  baseUrl: 'http://localhost:4201/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function () { }
  },
  beforeLaunch: function () {
    require('ts-node').register({
      project: 'e2e/tsconfig.e2e.json'
    });
  },
  onPrepare() {
    // Register jasmine library
    const jasmineReporters = require('jasmine-reporters');
    jasmine.getEnv().addReporter(
      // new SpecReporter({
      //   spec: { displayStacktrace: true }
      // }),
      new jasmineReporters.JUnitXmlReporter({
        savePath: 'test-output',
        filePrefix: 'ng-e2e-results',
        consolidateAll: true
      })
    );
  }
};
