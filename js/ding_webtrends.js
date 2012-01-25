/*global dcsMultiTrack */
jQuery(function($) {
  "use strict";

  // When the user clicks the login form, we track that with webtrends.
  $(".ding-login-form .form-submit").mouseup(function () {
    dcsMultiTrack('DCS.dcsuri', '/login/Step1', 'WT.ti', 'Login-Step1', 'WT.si_n', 'Login', 'WT.si_x', '1', 'WT.dl', '0');
  });

  $(".ting-object-buttons .add-to-cart a").mouseup(function () {
    // Get the material ID from the link URL target so we can pass it
    // along to WebTrends.
    var href = this.href,
        matID = /ding\/cart\/add\/(\d+)/.exec(href)[1];

    dcsMultiTrack('DCS.dcsuri', '/Selvbetjening/Husk', 'WT.ti', 'Selvbetjening Husk', 'DCSext.KPI', 'Husk', 'DCSext.Husk', '1', 'DCSext.Ref', matID, 'WT.dl', '0');
  });

  $(".ting-object-buttons .reserve-now").mouseup(function () {
    var href = this.href,
        matID = /ding\/reservation\/(\d+)/.exec(href)[1];

    dcsMultiTrack('DCS.dcsuri', '/Selvbetjening/Reserver', 'WT.ti', 'Selvbetjening Reserver', 'DCSext.KPI', 'Reserver', 'DCSext.Reserver', '1', 'DCSext.Ref', matID, 'WT.dl', '0');
  });

});


