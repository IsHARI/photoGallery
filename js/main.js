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
            $('.photos').append($('<img src='+url+' \>'));
        });
    });
})(jQuery);