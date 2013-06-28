
/* Track to see if latest player turn wins the game */
MMM.win = (function () {
  var 
    /** 
    * Public namespace copy
    */
    NS = MMM,

    /**
    * Local object copies of public module methods
    */
    _board = {},
    _storeTurn = {},

    /**
    * Method object to expose publically
    */
    _m = {},

    /**
    * Local constants
    */
    MATRIX_ROWS,
    ONE,
    TWO,

    /**
    * Local variables
    */
    player,
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
    colRightTwo;

  /**
  * Local initialize
  */
  function initialize () {
    setPublicMethodCopies();
    setGlobalVars();

    function setPublicMethodCopies () {
      _board = {
        getPlayerByIndex : NS.board._m.getPlayerByIndex,
        getIndexBySquare : NS.board._m.getIndexBySquare,
        getRowByIndex : NS.board._m.getRowByIndex,
        getColByIndex : NS.board._m.getColByIndex
      };

      _storeTurn = {
        get : NS.storeTurn._m.get
      };
    }

    function setGlobalVars () {
      MATRIX_ROWS = 5;
      ONE = 1;
      TWO = 2;
    }
  }
  
  /**
  * Private methods
  */
  function setCheckIsWinVars (square) {
    player = _storeTurn.get();
    index = _board.getIndexBySquare(square);
    row = _board.getRowByIndex(index);
    col = _board.getColByIndex(index);
    rowUpOne = row - ONE;
    rowUpTwo = row - TWO;
    rowDownOne = row + ONE;
    rowDownTwo = row + TWO;
    colLeftOne = col - ONE;
    colLeftTwo = col - TWO;
    colRightOne = col + ONE;
    colRightTwo = col + TWO;
  }

  function isSquarePlayer (row, col) {
    index = (row * MATRIX_ROWS) + col;

    if (_board.getPlayerByIndex(index) === player) {

      return true;
    }

    return false;
  }

  function checkVerticalWin () {
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
  }

  // Check Horizontal Win
  function checkHorizontalWin () {
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
  }

  function checkDiagnolWin () {
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
     
  }

  _m = {
    isWin: function (square) {
      setCheckIsWinVars(square);

      if (checkVerticalWin()) {
        return true;
      } else  if (checkHorizontalWin()) {
        return true;
      } else if (checkDiagnolWin()) {
        return true;
      }
      return false;
    },

    init: function() {
      initialize();
    }
  };

  return {
    _m : _m
  };

}());
