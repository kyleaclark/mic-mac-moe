/*
** Presentation Module
*/
MMM.pres = (function () {
  var 
    /** 
    * Public namespace copy
    */
    NS = MMM,

    /**
    * Local copies of public module properties
    */
    boardConfig = [],

    /**
    * Local method object to expose publically
    */
    _m = { },

    /** 
    * Local constants
    */
    PLAYER_X = {},
    PLAYER_O = {},
    X,
    $winner,
    $gameBoard,
    $gameBoardTemplate,

    /**
    * Local variables
    */
    $gameBoardSquares;

  /*
  ** Local initialize
  */
  function initialize() {
    setPublicPropertyCopies();
    setGlobalVars();
    generateGameBoardSquares();

    function setPublicPropertyCopies () {
      boardConfig = NS.boardConfig;
    }

    function setGlobalVars() {
      // Set underscore templating to use curly braces {{ }}
      _.templateSettings.interpolate = /\{\{(.+?)\}\}/g;

      PLAYER_X = {
        src: "img/player-x.png",
        alt: "Player X",
      };

      PLAYER_O = {
        src: "img/player-o.png",
        alt: "Player O",
      };

      X = "X";

      $gameBoardTemplate = $("#game-board-template");
      $gameBoard = $("#game-board");
      $gameBoardSquares = $("<div id='game-board-squares'>");
      $winner = $("#winner");
    }

    function generateGameBoardSquares () {
      var renderGameSquare = (function () {
        var gameBoardTemplate = $gameBoardTemplate.html();
        var squareTemplate = _.template(gameBoardTemplate);

        return squareTemplate;
      }());

      _.each(boardConfig, function (conf) {
        $gameBoardSquares.append(renderGameSquare(conf));
      });

      _m.renderGameBoardSquares();
    }
  }

  /*
  ** Public methods
  */
  _m = {
    renderGameBoardSquares: function () {
      console.log($gameBoardSquares);
      //$gameBoard.replaceWith($gameBoardSquares);
      $gameBoard.empty().html($gameBoardSquares);
    },

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
      $winner.show();
    },

    hideWin: function () {
      $winner.hide();
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