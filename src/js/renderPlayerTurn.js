  /*
  ** Presentation Module
  */
  MMM.presentation = (function () {
    var 
      $winner = $("#winner"),

      /*
      ** Public methods
      */
      emptySquare = function (square) {
        $(square).empty();
      },

      renderTurn = function (player, id) {
        var 
          playerX = {
            src: "img/player-x.png",
            alt: "Player X",
          },
          playerO = {
            src: "img/player-o.png",
            alt: "Player O",
          },
          x = "X",
          o = "O",
          square = "#" + id;

        // Render player X or O
        if (player === x) {
          $("<img>", playerX).appendTo(square);
        } else {
          $("<img>", playerO).appendTo(square);
        }
      },

      renderWin = function () {
        $winner.show();
      },

      hideWin = function () {
        $winner.hide();
      };

    return {
      emptySquare : emptySquare,
      renderTurn : renderTurn,
      renderWin : renderWin,
      hideWin : hideWin
    };
  }());