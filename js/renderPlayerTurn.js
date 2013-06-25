  /*
  ** Presentation Module
  */
  MMM.presentation = (function () {
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
      $winner = $("#winner"),

      renderTurn = function (player, id) {
        var square = "#" + id;

        // Render player X or O
        if (player === x) {
          $("<img>", playerX).appendTo(square);
        } else {
          $("<img>", playerO).appendTo(square);
        }
      },

      renderWin = function () {
        $winner.show();
      };

    return {
      renderTurn : renderTurn,
      renderWin : renderWin
    };
  }());