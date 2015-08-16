$(document).ready(function() {
  var height = $(window).height();
  var width = $(window).width();

  verticallyCenterContent();

  if (isMobile()) {
    $("#download-button").hide();
  } else {
    overrideResponsiveStyles();
  }
  
  $(window).resize(function() {
    var newHeight = $(window).height();
    var newWidth = $(window).width();

    if (isVerticalResize()) {
      verticallyCenterContent();
    }
    if (newWidth >= 1025 && width < 1025 && isMobile()) {
      verticallyCenterContent();
      width = newWidth;
    }
    if (newWidth < 1025 && width >= 1025 && isMobile()) {
      $("#app, header").removeAttr("style");
      width = newWidth;
    }
  });

  $("#download-button").click(function() {
    ga('send', 'event', 'button', 'click', 'download-button');
  });

  function verticallyCenterContent() {
    if ($(window).width() >= 1025 || isDesktop()) {
      var height = $(window).height();
      var marginTop = (height - 684) / 2;
      $("#app").css("margin-top", marginTop);

      var header = $("header");
      marginTop = (height - header.height()) / 2;
      header.css("margin-top",marginTop);
    }
  }
  function isVerticalResize() {
    var newHeight = $(window).height();
    var areSizesEqual = newHeight === height;
    height = newHeight;

    if (!areSizesEqual) {
      return true;
    } else {
      return false;
    }
  }
  function isDesktop() {
    return !mobileCheck();
  }
  function isMobile() {
    return mobileCheck();
  }
  function mobileCheck() { 
    if ( navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)
    ){
      return true;
    }
    else {
      return false;
    }
  }
  function overrideResponsiveStyles() {
    $('head').append('<link rel="stylesheet" type="text/css" href="/plug-responsive-override.css">');
  }
});

$(window).load(function() {
  $("body").addClass("animation");
});
