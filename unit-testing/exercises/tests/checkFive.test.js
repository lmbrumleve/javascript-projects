const checkFive = require('../checkFive.js');

describe("checkFive", function(){

   test("returns number is less than 5 if number is less than 5", function() {
      let result = checkFive(2);
      expect(result).toBe("2 is less than 5.");
   });

   test("returns number is greater than 5 if number is greater than 5", function() {
        let result = checkFive(6);
        expect(result).toBe("6 is greater than 5.");
    });

    test("returns number is equal to 5 if number === 5", function() {
        let result = checkFive(5);
        expect(result).toBe("5 is equal to 5.");
    });


});