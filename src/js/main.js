  /**
  * Application Namespace
  */
  var MMM = MMM || { };
  
  /**
  * App Init & Reset
  */
  MMM.app = (function () {
    var
      NS = MMM,

      /** 
      * Public methods
      */
      init = function () {
        NS.gameBoard.init();
        NS.gameEvents.bindEvents();
      };

    return {
      init : init
    };
  }());

  $(document).ready(function () {
  	MMM.app.init();
  });
