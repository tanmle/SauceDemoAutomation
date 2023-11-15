1;
import moment from "moment";
import report from "multiple-cucumber-html-reporter";
import fs from "node:fs/promises";
import cucumberJson from "wdio-cucumberjs-json-reporter";

export const config = {
  // Framework to use. The framework defines how tests are structured.
  framework: "cucumber",

  // Specify Test Files
  specs: [
    "./test/features/**/*.feature", // Assuming your feature files are in a 'features' directory
  ],

  onPrepare: () => {
    return fs.rm("./reports/", { recursive: true });
  },

  onComplete: () => {
    report.generate({
      jsonDir: "./reports/",
      reportPath: "./reports/",
      pageTitle: "Sauce Demo Automation",
      pageFooter:
        '<div><p style=" text-align: center;">Sauce Demo Automation</p></div>',
    });
  },

  // Cucumber Options
  cucumberOpts: {
    // Define your step definitions path
    require: ["./test/steps/**/*.js"],

    // Tags to specify which scenarios to run
    tags: "", // You can use tags to run specific scenarios, for example, '@smoke'
  },

  // Define browsers
  capabilities: [
    {
      maxInstances: 1,
      browserName: "chrome",
      "cjson:metadata": {
        device: "PC",
      },
    },
  ],

  // ...

  // Base URL
  baseUrl: "https://www.saucedemo.com/",

  // ...

  // Before hook to start the browser before the tests
  before: function (capabilities, specs) {
    browser.maximizeWindow();
  },
  // ...

  // Hooks
  beforeScenario: function (uri, feature, scenario, sourceLocation, context) {
    // Code to run before each scenario
  },

  afterScenario: function (
    uri,
    feature,
    scenario,
    result,
    sourceLocation,
    context
  ) {
    // Code to run after each scenario
  },

  afterStep: async function (
    step,
    context,
    { error, result, duration, passed, retries }
  ) {
    if (error) {
      cucumberJson.attach(await browser.takeScreenshot(), "image/png");
    }
  },

  // Reporters
  reporters: [
    "spec",
    [
      "cucumberjs-json",
      { jsonFolder: "./reports", language: "en", reportFilePerRetry: false },
    ],
  ],

  // Options to be passed to Jasmine
  jasmineNodeOpts: {
    // Default timeout for each test
    defaultTimeoutInterval: 30000,
  },
};
