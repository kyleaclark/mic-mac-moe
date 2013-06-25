
  /**
  * Store the current player turn value 
  */
  MMM.storeTurn = (function () {
    var 
      turn = "X",
      numberOfTurns = 0,

      /**
      * Public methods
      */
      get = function () {
        return turn;
      },

      set = function (resetTurn) {
        turn = resetTurn;
        numberOfTurns += 1;
      },

      getNumberOfTurns = function () {
        return numberOfTurns;
      };

    return {
      get : get,
      set : set,
      getNumberOfTurns : getNumberOfTurns
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
      hideWin = presentation.hideWin,
      isWin = NS.winHandler.isWin,

      /** 
      * Private methods 
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

      /** 
      * Public methods 
      */
      logic = function (square) {
        var 
          player = storeTurn.get(),
          resetBoard = MMM.gameBoard.resetBoard;

        // Proceed if game board square open
        if (isTurnValid(square)) {
          renderTurn(player, square);
          gameBoard.setPlayer(square, player);

          updatePlayerTurn(player);

          // Check for win after 5 turns when a win is possible
          if (storeTurn.getNumberOfTurns() > 4) {
            if (isWin(player, square)) {
              renderWin();
              resetBoard();
              hideWin();
            }
          }
        }
      };

    return {
      logic : logic,
    }
  }());
