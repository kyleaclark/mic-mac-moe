  /**
  * Application Namespace
  */
  var MMM = MMM || { };
  
  /**
  * App Init & Reset
  */
  MMM.app = (function (NS) {
    var
      _m = { };

    /** 
    * Public methods
    */
    _m = {
      init: function () {
        NS.board._m.init();
        NS.pres._m.init();
        NS.win._m.init();
        NS.storeTurn._m.init()
        NS.handleTurn._m.init();
      }
    };

    /**
    * Expose public methods
    */
    return {
      _m : _m
    };
    
  }(MMM));