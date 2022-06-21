const fs = require("fs");
const path = require('path');
const lighthouse = require("lighthouse");
const constants = require('./constants.js');
const chromeLauncher = require("chrome-launcher");
const args = require("minimist")(process.argv.slice(2));

(async () => {
  const chrome = await chromeLauncher.launch({
    chromeFlags: ["--headless"]});
  const options = {
    logLevel: "info",
    formFactor: "desktop",
    output: "html",
    throttling: constants.throttling.desktopDense4G,
    screenEmulation: constants.screenEmulationMetrics.desktop,
    emulatedUserAgent: constants.userAgents.desktop,
    onlyCategories: ["performance", "accessibility", "best-practices", "seo"],
    port: chrome.port = 9222
  };

  // console.log(`Chrome debugging port running on ${chrome.port}`);

  const runnerResult = await lighthouse(args.url, options);

  // `.report` is the HTML report as a string
  const reportHtml = runnerResult.report;
  
  var file = require('url');
  var adr = args.url;
  var name = file.parse(adr, true)
  var fileName = name.pathname.replace(/[/]/g, "")

  fs.writeFileSync(path.join("report", `${fileName}${Date.now()}.html`), reportHtml);

  // `.lhr` is the Lighthouse Result as a JS object
  console.log("Report is done for", runnerResult.lhr.finalUrl);
  console.log("Performance score was", runnerResult.lhr.categories.performance.score * 100);

  await chrome.kill();
})();
