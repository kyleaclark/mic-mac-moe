  
  MMM.gameEvents = (function () {
    var

      /**
      * Private methods
      */
      handleGameBoardClick = function(event) {
        var
          square = event.target.id,
          gameBoard = "game-board",
          playerTurnLogic = MMM.playerTurn.logic;

        // Handle player turn if click is not on game board divider line
        if (square !== gameBoard) {
          playerTurnLogic(square);
        }
      },

      /**
      * Public methods
      */
      bindEvents = function() {
        var 
          $board = $("#game-board");

        $board.on("click", function(event) {
          handleGameBoardClick(event);
        });
      };

    return {
      bindEvents : bindEvents
    }

  }());

