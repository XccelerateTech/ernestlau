function openImg(imgs) {
    var expandImg = document.getElementById("expandedImg");
    var imgText = document.getElementById("imgtext");
    expandImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;
    expandImg.parentElement.style.display = "block";
}

var scroll = new SmoothScroll('a[href*="#"]');

(function ($) {

  /**
   * Copyright 2012, Digital Fusion
   * Licensed under the MIT license.
   * http://teamdf.com/jquery-plugins/license/
   *
   * @author Sam Sehnert
   * @desc A small plugin that checks whether elements are within
   *     the user visible viewport of a web browser.
   *     only accounts for vertical position, not horizontal.
   */

  $.fn.visible = function (partial) {

    var $t = $(this),
      $w = $(window),
      viewTop = $w.scrollTop(),
      viewBottom = viewTop + $w.height(),
      _top = $t.offset().top,
      _bottom = _top + $t.height(),
      compareTop = partial === true ? _bottom : _top,
      compareBottom = partial === true ? _top : _bottom;

    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

  };

})(jQuery);

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
        $('#topbtn').addClass('show');
    } else {
        $('#topbtn').removeClass('show');
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//AJAX
let checkCurrency = function(callback){
    $.ajax({
        type:'GET',
        url:`http://data.fixer.io/api/latest?access_key=1e530711df2286a85c04c2430ab8837c&format=1`,
        dataType: "json",
        success: function(data){
            callback(data);
            // console.log(data.results.sunrise);
            // console.log(data.results.sunset);
            // $('p').html(typeof data);
            // Success handler
        },
        error: function(data){
            // error handler
        }
    });
};
$(document).ready(function(){
    checkCurrency(function(callback){
$('#currency').html(`${callback.rates.HKD/callback.rates.JPY} \n （Last Update: ${callback.date}）`);
});;
});