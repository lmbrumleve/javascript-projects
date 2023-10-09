const whoWon = require('../RPS.js');

describe("whoWon", function(){

    test("returns 'TIE!' if both players choose the same option", function() {
       let result = whoWon('paper', 'paper');
       expect(result).toBe("TIE!");
    });

    test("returns 'Player 2 wins!' if player 1 chooses rock and player 2 chooses paper", function() {
        let result = whoWon('rock', 'paper');
        expect(result).toBe("Player 2 wins!");
     });

     test("returns 'Player 2 wins!' if player 1 chooses paper and player 2 chooses scissors", function() {
        let result = whoWon('paper', 'scissors');
        expect(result).toBe("Player 2 wins!");
     });     

     test("returns 'Player 2 wins!' if player 1 chooses scissors and player 2 chooses rock", function() {
        let result = whoWon('scissors', 'rock');
        expect(result).toBe("Player 2 wins!");
     });

});