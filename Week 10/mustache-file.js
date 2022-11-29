var Mustache = require("mustache");
var result = Mustache.render("Hi, {{first}} {{last}}!", {
    first: "Charulatha",
    last: "Mani"
});
console.log(result);