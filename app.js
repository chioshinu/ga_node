/**
 * Created with JetBrains RubyMine.
 * User: chioshinu
 * Date: 21.08.13
 * Time: 20:23
 * To change this template use File | Settings | File Templates.
 */
var Browser = require("zombie");
var assert = require("assert");

// Load the page from localhost
browser = new Browser()
browser.visit("http://4lol.com", function () {
            // Form submitted, new page loaded.
//            assert.ok(browser.success);
//            assert.equal(browser.text("title"), "4LOL");
    var scripts = browser.html('script');
    console.log(typeof scripts);
    if (scripts.indexOf('www.google-analytics.com') > -1)
    {
        console.log("GA start from ");
    }
    else
    {
        console.log("GA not found");
    }
    setTimeout(function() {
        console.log('Blah blah blah blah extra-blah');
        console.log("finish");
        process.exit();
    }, 30000);

});