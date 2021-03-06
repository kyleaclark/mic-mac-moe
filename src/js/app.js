  /**
  * Application Namespace
  */
  var MMM = MMM || { };
  
  /**
  * App Init & Reset
  */
  MMM.app = (function (NS) {
    var
      /**
      * Local object to expose public methods
      */
      _m;

    /** 
    * Public methods
    */
    _m = {
      init: function () {
        NS.game._m.init();
        NS.pres._m.init();
        NS.board._m.init();
        NS.win._m.init();
        NS.storeTurn._m.init()
        NS.handleTurn._m.init();
        
        NS.game._m.newGame();
      }
    };

    /**
    * Expose public methods
    */
    return {
      _m : _m
    };
    
  }(MMM));