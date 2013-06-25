 
  /* Track the game board object */
  MMM.gameBoard = (function () {
    var 
      board = [],
      findBoardIndex,

    findBoardIndex = function (square) {
      var i = 0;

      for (var i = 0; i < board.length; i++) {
        if (board[i].square === square) {
          return i;
        }
      }

      return false;
    };

    return {
      getPlayer: function (square) {
        var index = findBoardIndex(square);
        return board[index].player;
      },
      getRowByIndex: function (index) {
        return board[index].row;
      },
      getColByIndex: function (index) {
        return board[index].col;
      },
      getPlayerByIndex: function (index) {
        if (board[index]) {
          return board[index].player;
        }
        return false;
      },
      getIndex: function (square) {
        return findBoardIndex(square);
      },
      setPlayer: function (square, player) {
        var index = findBoardIndex(square);
        board[index].player = player
      },
      init: function () {
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
      }
    };

  } ());
