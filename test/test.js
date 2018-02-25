const assert = require("chai").assert;
const scripts = require("../src/js/scripts");

//results
let result = scripts.Starter();

describe('Starter', function() {
    it("Starter should return string 'Node Express Starter' ", function() {
        assert.equal(result, "Node Express Starter");
    });

    it("Starter should return type string", function() {
        assert.typeOf(result, "string");
    });
});