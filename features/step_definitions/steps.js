module.exports = function() {

  this.Given("I go to", function(callback) {
    browser.get("https://angularjs.org/")
     .then(callback);
  });
  };