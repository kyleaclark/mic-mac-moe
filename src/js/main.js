  /**
  * Application Namespace
  */
  var MMM = MMM || { };
  
  /**
  * App Init & Reset
  */
  MMM.app = (function (NS) {
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
  }(MMM));

  $(document).ready(function () {
  	MMM.app.init();
  });
