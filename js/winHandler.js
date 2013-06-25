 
 /* Track to see if latest player turn wins the game */
  MMM.winHandler = (function () {
    var 
      NS = MMM,
      gameBoard = NS.gameBoard,
      player,
      square,
      index,
      row,
      col,
      rowUpOne,
      rowUpTwo,
      rowDownOne,
      rowDownTwo,
      colLeftOne,
      colLeftTwo,
      colRightOne,
      colRightTwo,
      threeInARow,

    isSquarePlayer = function (row, col) {
      var matrixRows = 5;

      index = (row * matrixRows) + col;

      if (gameBoard.getPlayerByIndex(index) === player) {

        return true;
      }

      return false;
    },

    checkVerticalWin = function () {
      if (isSquarePlayer(rowUpOne, col)) {
        if (isSquarePlayer(rowUpTwo, col)) {
          return true;
        } else if (isSquarePlayer(rowDownOne, col)) {
            return true;
        }
      } else if (isSquarePlayer(rowDownOne, col)) {
          if (isSquarePlayer(rowDownTwo, col)){
            return true;
          }
      }
      return false;
    },

    // Check Horizontal Win
    checkHorizontalWin = function () {
      if (isSquarePlayer(row, colLeftOne)) {
        if (isSquarePlayer(row, colLeftTwo)) {
          return true;
        } else if (isSquarePlayer(row, colRightOne)) {
            return true;
        }
      } else if (isSquarePlayer(row, colRightOne)){
          if (isSquarePlayer(row, colRightTwo)) {
            return true;
          }
      }
      return false;
    },

    checkDiagnolWin = function () {
      if (checkDiagnolUpLeft()) {
        return true;
      } else if (checkDiagnolDownLeft()) {
        return true;
      } else if (checkDiagnolUpRight()) {
        return true;
      } else if (checkDiagnolDownRight()) {
        return true;
      }

      return false;

      function checkDiagnolUpLeft () {
        if (isSquarePlayer(rowUpOne, colLeftOne)) {
          if (isSquarePlayer(rowUpTwo, colLeftTwo))  {
            return true;
          } else if (isSquarePlayer(rowDownOne, colRightOne))  {
              return true;
          }
        }

        return false;
      }

      function checkDiagnolDownLeft () {
        if (isSquarePlayer(rowDownOne, colLeftOne))  {
          if (isSquarePlayer(rowDownTwo, colLeftTwo)) {
            return true;
          } else if (isSquarePlayer(rowUpOne, colRightOne)) {
              return true;
          }
        }

        return false;
      }

      function checkDiagnolUpRight () {
        if (isSquarePlayer(rowUpOne, colRightOne)) {
          if (isSquarePlayer(rowUpTwo, colRightTwo)){
            return true;
          } else if (isSquarePlayer(rowDownOne, colLeftOne)) {
            return true;
          }
        }

        return false;
      }

      function checkDiagnolDownRight () {
        if (isSquarePlayer(rowDownOne, colRightOne)) {
          if (isSquarePlayer(rowDownTwo, colRightTwo)) {
            return true;
          }
          else if (isSquarePlayer(rowUpOne, colLeftOne)) {
            return true;
          }
        }

        return false;
      }
       
    },

    setGlobalVars = function (turn, square) {
      player = turn;
      index = gameBoard.getIndex(square);
      row = gameBoard.getRowByIndex(index);
      col = gameBoard.getColByIndex(index);
      rowUpOne = row - 5;
      rowUpTwo = row - 10;
      rowDownOne = row + 5;
      rowDownTwo = row + 10;
      colLeftOne = col - 1;
      colLeftTwo = col - 2;
      colRightOne = col + 1;
      colRightTwo = col + 2;
      threeInARow = 0;
    },

    isWin = function (turn, square) {
      setGlobalVars(turn, square);

      if (checkVerticalWin()) {
        return true;
      } else if (checkHorizontalWin()) {
        return true;
      } else if (checkDiagnolWin()) {
        return true;
      }

      return false;
    };

    return {
      isWin : isWin
    };

  }());
