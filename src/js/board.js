
/* Track the game boardData object */
MMM.board = (function () {
  var 
    /** 
    * Public namespace copy
    */
    NS = MMM,

    /**
    * Local object copies of public module methods
    */
    _pres = {},

    /**
    * Local method object to expose publically
    */
    _m = { },

    /**
    * Local constants
    */
    EMPTY,
    MAX_ROWS,
    MAX_COLS,
    MAX,

    /** 
    * Local variables
    */
    boardData = [],
    boardObj = {},
    squareID,
    index,
    i,
    j;

  /**
  * Local initialize
  */
  function initialize () {
    setPublicMethodCopies();
    setGlobalVars();
    setBoardData();
    

    function setPublicMethodCopies () {
      _pres = {
        emptySquare : NS.pres._m.emptySquare,
        renderGameBoardSquares : NS.pres._m.renderGameBoardSquares
      };
    }

    function setBoardData () {
      for (i = 0; i < MAX_ROWS; i++) {
        for (j = 0; j < MAX_COLS; j++) {
          squareID = "sq-" + i + "-" + j;
          boardObj = {
            row: i,
            col: j,
            square: squareID,
            player: ""
          };
          boardData.push(boardObj);
        }
      }
    }

    function setGlobalVars () {
      EMPTY = "";
      MAX_ROWS = 5;
      MAX_COLS = 5;
      MAX = MAX_ROWS * MAX_COLS;
    }
  }

  /**
  * Private methods
  */
  function getIndexOfSquare (square) {
    for (i = 0; i < MAX; i++) {
      if (boardData[i].square === square) {
        return i;
      }
    }
    return false;
  }

  /**
  * Public methods
  */
  _m = {
    getPlayerBySquare: function (square) {
      index = _m.getIndexBySquare(square);
      return boardData[index].player;
    },

    getRowByIndex: function (index) {
      return boardData[index].row;
    },

    getColByIndex: function (index) {
      return boardData[index].col;
    },

    getPlayerByIndex: function (index) {
      if (boardData[index]) {
        return boardData[index].player;
      }
      return false;
    },

    getIndexBySquare: function (square) {
      return getIndexOfSquare(square);
    },

    setPlayerBySquare: function (player, square) {
      index = _m.getIndexBySquare(square);
      boardData[index].player = player
    },

    resetBoardData: function (index) {
      for (i = 0; i < MAX; i++) {
        if (boardData[i].player !== EMPTY) {
          boardData[i].player = EMPTY;
          squareID = "#" + boardData[i].square;
          // trigger resetboardData event
          //_pres.emptySquare(squareID);
        }
      }

      _pres.renderGameBoardSquares();
    },

    init: function () {
      initialize();
    }
  };

  /*
  ** Expose public methods
  */
  return {
    _m : _m
  };

} ());
