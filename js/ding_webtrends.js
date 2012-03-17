/*global dcsMultiTrack */

// Google Analytics event queue.
var _gaq = _gaq || [];

jQuery(function($) {
  "use strict";

  // To make sure we don't fire the login event twice, which happens
  // since triggering the form with enter seems to provide a click-event
  // on the submit button in some browsers and not in others.
  var logInActionTriggered = false;

  // Track a log in action.
  var logInAction = function () {
    if (!logInActionTriggered) {
      dcsMultiTrack('DCS.dcsuri', '/login/Step1', 'WT.ti', 'Login-Step1', 'WT.si_n', 'Login', 'WT.si_x', '1', 'WT.dl', '0');

      _gaq.push(['_trackEvent', 'Login', 'Form submitted']);
    }
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

  // Track when the “Add to cart” button is pressed.
  $(".ting-object-buttons .add-to-cart a").click(function () {
    // Get the material ID from the link URL target so we can pass it
    // along to WebTrends.
    var href = this.href,
        matID = /ding\/cart\/add\/(\d+)/.exec(href)[1];

    dcsMultiTrack('DCS.dcsuri', '/Selvbetjening/Husk', 'WT.ti', 'Selvbetjening Husk', 'DCSext.KPI', 'Husk', 'DCSext.Husk', '1', 'DCSext.Ref', matID, 'WT.dl', '0');

    _gaq.push(['_trackEvent', 'Reservation', 'Add to cart', matID]);
  });

  // Track when the “Reserve now” button is pressed.
  $(".ting-object-buttons .reserve-now").click(function () {
    var href = this.href,
        matID = /ding\/reservation\/(\d+)/.exec(href)[1];

    dcsMultiTrack('DCS.dcsuri', '/Selvbetjening/Reserver', 'WT.ti', 'Selvbetjening Reserver', 'DCSext.KPI', 'Reserver', 'DCSext.Reserver', '1', 'DCSext.Ref', matID, 'WT.dl', '0');

    _gaq.push(['_trackEvent', 'Reservation', 'Reserve now', matID]);
  });

  // Track when the user attempts to log in with WAYF.
  $('#block-ding-wayf a').click(function () {
    logInAction();

    _gaq.push(['_trackEvent', 'Login', 'WAYF link clicked']);
  });
});
