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
    * Local object to expose public methods
    */
    _m,

    /** 
    * Local constants
    */
    PLAYER_X = {},
    PLAYER_O = {},
    X,
    WINNER_FADEIN,
    $winner,
    $gameBoard,
    $gameBoardTemplate,

    /**
    * Local variables
    */
    $gameBoardSquares,
    gameBoardSquares,
    playerWins;

  /*
  ** Local initialize
  */
  function initialize() {
    setPublicPropertyCopies();
    setGlobalVars();
    generateGameBoardSquares();
    _m.renderGameBoardSquares();
    _m.renderWin();

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
      WINNER_FADEIN = 400;

      $gameBoardTemplate = $("#game-board-template");
      $winTemplate = $("#win-template");
      $gameBoard = $("#game-board");
      $gameWinner = $("#game-winner");
      gameBoardSquares = "";
      playerWins = "";
      $winner = $("#game-winner");
    }

    function generateGameBoardSquares () {
      var renderGameSquare = (function () {
        var gameBoardTemplate = $gameBoardTemplate.html();
        var squareTemplate = _.template(gameBoardTemplate);

        return squareTemplate;
      }());

      _.each(boardConfig, function (conf) {
        gameBoardSquares += renderGameSquare(conf);
      });
    }
  }

  /*
  ** Public methods
  */
  _m = {
    renderGameBoardSquares : function () {
      $gameBoard.on("renderGameBoardSquares", function () {
        $(this).empty().html(gameBoardSquares);
      });
    },

    renderTurn : function (player, id) {
      id = "#" + id;

      if (player === X) {
        $("<img>", PLAYER_X).appendTo(id);
      } else {
        $("<img>", PLAYER_O).appendTo(id);
      }
    },

    renderWin : function () {
      $gameWinner.on("renderPlayerWins", function (e, opts) {
        var renderPlayerWins = (function () {
          var winTemplate = $winTemplate.html();
          var playerWinsTemplate = _.template(winTemplate);

          return playerWinsTemplate;
        }());

        /* Refactor obj !!! */
        var obj = {
           player : opts
        };

        playerWins = renderPlayerWins(obj);
        $gameWinner.prepend(playerWins);
        $("#overlay").show();
        $gameWinner.fadeIn(WINNER_FADEIN);
      });
    },

    hideWin : function () {
      $("#overlay").hide();
      $gameWinner.children("h2").remove();
      $gameWinner.hide();
    },

    init : function () {
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