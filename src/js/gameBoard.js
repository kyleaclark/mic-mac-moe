 
  /* Track the game board object */
  MMM.gameBoard = (function () {
    var 
      board = [],
      findBoardIndex,

      /**
      * Private methods
      */
      findBoardIndex = function (square) {
        var 
          i = 0,
          max = board.length;

        for (i = 0; i < max; i++) {
          if (board[i].square === square) {
            return i;
          }
        }

        return false;
      },

      /**
      * Public methods
      */
      getPlayer = function (square) {
        var index = findBoardIndex(square);
        return board[index].player;
      },

      getRowByIndex = function (index) {
        return board[index].row;
      },

      getColByIndex = function (index) {
        return board[index].col;
      },

      getPlayerByIndex = function (index) {
        if (board[index]) {
          return board[index].player;
        }
        return false;
      },

      getIndex = function (square) {
        return findBoardIndex(square);
      },

      setPlayer = function (square, player) {
        var index = findBoardIndex(square);
        board[index].player = player
      },

      resetBoard = function (index) {
        var
          NS = MMM, 
          emptySquare = NS.presentation.emptySquare,
          square = "",
          empty = "",
          i = 0,
          max = board.length;

        for (i = 0; i < max; i++) {
          if (board[i].player !== empty) {
            board[i].player = empty;
            square = "#" + board[i].square;
            emptySquare(square);
          }
        }
      },

      init = function () {
        var
          obj = {},
          id = "",
          i = 0,
          j = 0;

        /* Initialize the board array of objects */
        for (i = 0; i < 5; i++) {
          for (j = 0; j < 5; j++) {
            id = "sq-" + (i+1) + "-" + (j+1);
            obj = {
              row: i,
              col: j,
              square: id,
              player: ""
            };
            board.push(obj);
          }
        }
      };

    return {
      getPlayer : getPlayer,
      getRowByIndex : getRowByIndex,
      getColByIndex : getColByIndex,
      getPlayerByIndex : getPlayerByIndex,
      getIndex : getIndex,
      setPlayer : setPlayer,
      resetBoard : resetBoard,
      init : init
    };

  } ());
