/*global dcsMultiTrack */
jQuery(function($) {
  "use strict";

  // Track a log in action.
  var logInAction = function () {
    dcsMultiTrack('DCS.dcsuri', '/login/Step1', 'WT.ti', 'Login-Step1', 'WT.si_n', 'Login', 'WT.si_x', '1', 'WT.dl', '0');
  };

  // When the user clicks the login form, we track that with webtrends.
  $(".ding-login-form .form-submit").click(logInAction);

  // When user presses enter in the login form somewhere, track it as a
  // login action as well.
  $(".ding-login-form input").keydown(function (event) {
    if (event.keyCode === 13) {
      logInAction();
    }
  });

  $(".ting-object-buttons .add-to-cart a").click(function () {
    // Get the material ID from the link URL target so we can pass it
    // along to WebTrends.
    var href = this.href,
        matID = /ding\/cart\/add\/(\d+)/.exec(href)[1];

    dcsMultiTrack('DCS.dcsuri', '/Selvbetjening/Husk', 'WT.ti', 'Selvbetjening Husk', 'DCSext.KPI', 'Husk', 'DCSext.Husk', '1', 'DCSext.Ref', matID, 'WT.dl', '0');
  });

  $(".ting-object-buttons .reserve-now").click(function () {
    var href = this.href,
        matID = /ding\/reservation\/(\d+)/.exec(href)[1];

    dcsMultiTrack('DCS.dcsuri', '/Selvbetjening/Reserver', 'WT.ti', 'Selvbetjening Reserver', 'DCSext.KPI', 'Reserver', 'DCSext.Reserver', '1', 'DCSext.Ref', matID, 'WT.dl', '0');
  });

});
