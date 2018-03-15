// I wasn't even close to getting this one correct
// Rather read the solution and use that as a reference in future

let playerOneMoveOneType = undefined;
let playerOneMoveOneValue = undefined;
let playerOneMoveTwoType = undefined;
let playerOneMoveTwoValue = undefined;
let playerOneMoveThreeType = undefined;
let playerOneMoveThreeValue = undefined;
let playerTwoMoveOneType = undefined;
let playerTwoMoveOneValue = undefined;
let playerTwoMoveTwoType = undefined;
let playerTwoMoveTwoValue = undefined;
let playerTwoMoveThreeType = undefined;
let playerTwoMoveThreeValue = undefined;

const setPlayerMoves = (player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue) => {
  let moveValueTotal = moveOneValue + moveTwoValue + moveThreeValue;

  // Move type missing?
  if (moveOneType && moveTwoType && moveThreeType != null) {
    // Invalid player?
    if (player === 'Player 1' || 'Player 2') {
     // Move value missing?
      if (moveOneValue && moveTwoValue && moveThreeValue != null) {
        // Invalid move type supplied? moveOneType
        if (moveOneType === 'rock' || moveOneType === 'paper' || moveOneType === 'scissors') {
          // Invalid move type supplied? moveTwoType
          if (moveTwoType === 'rock' || moveTwoType === 'paper' || moveTwoType === 'scissors') {
            // Invalid move type supplied? moveThreeType
            if (moveThreeType === 'rock' || moveThreeType === 'paper' || moveThreeType === 'scissors') {
              // Move values less than 1?
              if (moveOneValue > 1 && moveTwoValue > 1 && moveThreeValue > 1) {
                // Checking total move value not more than 99
                 if (moveValueTotal <= 99) {
                  // Move values greater than 99?
                  if (moveOneValue < 99 && moveTwoValue < 99 && moveThreeValue < 99) {
                    // Determining player number and assigning values
                    if (player === 'Player One') {
                      playerOneMoveOneType = moveOneType;
                      playerOneMoveOneValue = moveOneValue;
                      playerOneMoveTwoType = moveTwoType;
                      playerOneMoveTwoValue = moveTwoValue;
                      playerOneMoveThreeType = moveThreeType;
                      playerOneMoveThreeValue = moveThreeValue;
                    } else if (player === 'Player Two') {
                      playerTwoMoveOneType = moveOneType;
                      playerTwoMoveOneValue = moveOneValue;
                      playerTwoMoveTwoType = moveTwoType;
                      playerTwoMoveTwoValue = moveTwoValue;
                      playerTwoMoveThreeType = moveThreeType;
                      playerTwoMoveThreeValue = moveThreeValue;
                    } // Determining player number and assigning values
                  } // Move values greater than 99?
                } // Checking total move value not more than 99 */
              } // Move values less than 1?
            } // Invalid move type supplied? moveThreeType
          } // Invalid move type supplied? moveTwoType
        } // Invalid move type supplied? moveOneType
      } // Move value missing?
    } // Invalid player?
  } // Move type missing?
};

const getRoundWinner = (roundNumber) => {
  let result = null;
  // playerOneMoveOneValue
  if (playerOneMoveOneValue != null) {
    if (roundNumber === 1 || roundNumber === 2 || roundNumber === 3) {
      // Comparing types
      switch (playerOneMoveOneType) {
        case 'rock':
          if (playerTwoMoveOneType === 'rock') {
            if (playerOneMoveOneValue > playerTwoMoveOneValue) {
              result = 'Player One';
            } else if (playerTwoMoveOneValue > playerOneMoveOneValue) {
              result = 'Player Two';
            } else if (playerOneMoveOneValue = playerTwoMoveOneValue) {
              result = 'Tie';
            }
          }
          if (playerTwoMoveOneType === 'paper') result = 'Player Two';
          if (playerTwoMoveOneType === 'scissors') result = 'Player One';
          break;
        case 'paper':
          if (playerTwoMoveOneType === 'rock') result = 'Player One';
          if (playerTwoMoveOneType === 'paper') {
            if (playerOneMoveOneValue > playerTwoMoveOneValue) {
              result = 'Player One';
            } else if (playerTwoMoveOneValue > playerOneMoveOneValue) {
              result = 'Player Two';
            } else if (playerOneMoveOneValue = playerTwoMoveOneValue) {
              result = 'Tie';
            }
          }
          if (playerTwoMoveOneType === 'scissors') result = 'Player Two';
          break;
        case 'scissors':
          if (playerTwoMoveOneType === 'rock') result = 'Player Two';
          if (playerTwoMoveOneType === 'paper') result = 'Player One';
          if (playerTwoMoveOneType === 'scissors') {
            if (playerOneMoveOneValue > playerTwoMoveOneValue) {
              result = 'Player One';
            } else if (playerTwoMoveOneValue > playerOneMoveOneValue) {
              result = 'Player Two';
            } else if (playerOneMoveOneValue = playerTwoMoveOneValue) {
              result = 'Tie';
            }
          }
          break;
        default:
          result = null;
          break;
      } // Comparing types
    } else {
      result = null;
    } // roundNumber valid?
  } // playerOneMoveOneValue

  // Returning result to function
  return result;
};

const getGameWinner = () => {
  let winner = null;
  //console.log(getRoundWinner());

  if ()

  // Return value of winner
  return winner;
};

const setComputerMoves = () => {

};

//setPlayerMoves('Player One', 'rock', 10, 'paper', 20, 'scissors', 50);
