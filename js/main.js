  var MMM = MMM || { };
  
  MMM.app = (function () {
    var
      NS = MMM;

    init = function () {
      NS.gameBoard.init();
      NS.gameEvents.bindEvents();
    };

    return {
      init : init
    }
  }());

  $(document).ready(function () {
  	MMM.app.init();
  });
