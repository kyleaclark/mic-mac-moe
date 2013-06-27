  /*
  ** Presentation Module
  */
  MMM.pres = (function () {
    var 
      /** 
      * Local constants
      */
      PLAYER_X = {},
      PLAYER_O = {},
      X,
      $WINNER,

      /**
      * Local method object to expose publically
      */
      _m = { };

    /*
    ** Local initialize
    */
    function initialize() {
      setGlobalVars();

      function setGlobalVars() {
        PLAYER_X = {
          src: "img/player-x.png",
          alt: "Player X",
        };

        PLAYER_O = {
          src: "img/player-o.png",
          alt: "Player O",
        };

        X = "X",
        $WINNER = $("#winner");
      }
    }

    /*
    ** Public methods
    */
    _m = {
      emptySquare: function (square) {
        $(square).empty();
      },

      renderTurn: function (player, id) {
        id = "#" + id;

        if (player === X) {
          $("<img>", PLAYER_X).appendTo(id);
        } else {
          $("<img>", PLAYER_O).appendTo(id);
        }
      },

      renderWin: function () {
        $WINNER.show();
      },

      hideWin: function () {
        $WINNER.hide();
      },

      init: function () {
        initialize();
      }
    };

    /**
    * Expose public methods
    */
    return {
      _m : _m
    };
    
  }());