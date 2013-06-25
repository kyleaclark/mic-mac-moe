
  /**
  * Store the current player turn value 
  */
  MMM.storeTurn = (function () {
    var 
      turn = "X",
      numberOfTurns = 0;

    return {
      get: function () {
        return turn;
      },
      set: function (resetTurn) {
        turn = resetTurn;
        numberOfTurns += 1;
      },
      getNumberOfTurns: function () {
        return numberOfTurns;
      }
    };
  }());

  /**
  * Logic for player turn and playing 
  */
  MMM.playerTurn = (function (square) {
    var 
      NS = MMM,    
      gameBoard = NS.gameBoard,
      storeTurn = NS.storeTurn,
      presentation = NS.presentation,
      renderTurn = presentation.renderTurn,
      renderWin = presentation.renderWin,
      isWin = NS.winHandler.isWin,

    /** 
    * Check if player click is a valid turn 
    */
    isTurnValid = function (square) {
      if (gameBoard.getPlayer(square) === "") {
        return true;
      }
      return false;
    },

    updatePlayerTurn = function (player) {
      var
        x = "X",
        o = "O";

      if (player === x) {
        storeTurn.set(o);
      } else {
        storeTurn.set(x);
      }
    },

    logic = function (square) {
      var 
        player = storeTurn.get();

      // Proceed if game board square open
      if (isTurnValid(square)) {
        renderTurn(player, square);
        gameBoard.setPlayer(square, player);

        updatePlayerTurn(player);

        // Check for win after 5 turns when a win is possible
        if (storeTurn.getNumberOfTurns() > 4) {
          if (isWin(player, square)) {
            renderWin();
          }
        }
      }
    };

    return {
      logic : logic,
    }
  }());
