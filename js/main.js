(($) => {
    "use strict";
    
    var imageUrls;

    $.ajax({ 
        url:  '/urls.json', 
        dataType: 'json', async: false, 
        success: function (urls) { imageUrls = urls }
    });

    // onDocumentReady
    $((ev) => {
        imageUrls.forEach((url) => {
            $('.photos').append($('<img src='+url+' />'));
        });

        $('.photos img').click((ev) => {
            var target = ev.target;

            if (target.requestFullscreen) {
               target.requestFullscreen(); 
            } 
            else if (target.msRequestFullscreen) {
                target.msRequestFullscreen(); 
            }
            else if (target.mozRequestFullscreen) {
                target.mozRequestFullscreen(); 
            }
            else if (target.webkitRequestFullscreen) {
                target.webkitRequestFullscreen(); 
            }
        });
    });
})(jQuery);