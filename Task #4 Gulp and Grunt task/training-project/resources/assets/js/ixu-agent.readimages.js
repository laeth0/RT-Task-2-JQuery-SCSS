/**
 * ajax preview image before submit.
 * @param input: (String) the file chooser input.
 * @author Yousef Mahmoud, Jumana Jaber.
 */
var readImagesModule = (function() {
    /**
     * ajax preview image before submit and hide the default image when load the new image.
     * @param input: (String) the file chooser input.
     * @author Jumana Jaber.
     * @modified Yousef Mahmood.
     */
    var readURL = function(input, imgId) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function(e) {
                $(imgId).attr('src', e.target.result);
                $(input).parent().find("span").css('background-image','none')
            };
            reader.readAsDataURL(input.files[0]);
        }
    };
    /**
     * hide the default images background, so when you choose an image with a transparent background the 
     * default image will not appeare.     
     * @author Yousef Mahmood.
     */
    var hideImgBackground = function() {
        $(".upload-image").find("img").each(function() {
            if($(this).attr('src') !== "" && $(this).attr('src') !== undefined)
            {
                $(this).parent().css('background-image','none');
            } 
        });
    };
    return {
        loadImg: function(input, imgId) {
            readURL(input, imgId);
        },
        init: function() {
            hideImgBackground();
        }
    };
})();