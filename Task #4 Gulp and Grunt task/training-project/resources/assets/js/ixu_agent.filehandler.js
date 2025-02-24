/**
* module that responsible about files and how to handel them.
* @return init(), getFileInfo().
* @author Yousef Mahmoud.
*/
var FileModule = (function() {
    var isImage, getFileName, changeDateFormat, getFileExtension, showFileName, resources;
    /**
    * initialize the UI resources.
    * @author Yousef Mahmoud.
    */
    var UIinit = function() {
        resources = {
            file_name: $(".file-name"),
            file_date: $(".file-date"),
            file_img: $(".file-type-image img"),
            pdf_icon: "/pdf-file-icon.png",
            img_icon: "/image-file-type.png",
            add_file: $('.file-upload .upload-input')
        };
    };
     /**
    * test if an extinsion is for image file or not.
    * @parm ext: (String) the file extinsion.
    * @return (Boolean).
    * @author Yousef Mahmoud.
    */
    isImage = function(ext) {
        switch (ext.toLowerCase()) {
            case 'jpg':
            case 'gif':
            case 'bmp':
            case 'png':
            case 'jpeg':
            case 'ppm':
            case 'pgm':
            case 'pbm':
            case 'pnm':
            case 'webp':
            case 'bpg':
                //etc
                return true;
        }
        return false;
    };
    /**
    * get the file name and add it to its right place at HTML.
    * @parm filePath: (String) the path to the file, fileExtention: (String) the file extinsion.
    * @author Yousef Mahmoud.
    */
    getFileName = function(filePath, fileExtention) {
        var name = filePath + "." + fileExtention;
        resources.file_name.last().text(name);
    };
    /**
    * change the date formate and add it to its right place at HTML.
    * @parm datepar: (date) the file date.
    * @author Yousef Mahmoud.
    */
    changeDateFormat = function(datepar) {
        var newDateFormate = "Added on " + $.format.date(datepar, "MMM d, yyyy");
        resources.file_date.last().text(newDateFormate);
    };
    /**
    * test what is the file extension to return the appropriate file icon.
    * @parm url: (String) the site URL, fileExtention: (String) the file extension.
    * @author Yousef Mahmoud.
    */
    getFileExtension = function(fileExtention, url) {
        if (fileExtention.toLowerCase() === "pdf")
            resources.file_img.last().attr('src', "" + url + resources.pdf_icon);
        else if (isImage(fileExtention))
            resources.file_img.last().attr('src', "" + url + resources.img_icon);
    };
    /**
    * bind the UI actions.
    * @author Yousef Mahmoud.
    */
    var bindUIActions = function() {
            // Show the file name when you choose a file
            resources.add_file.on('change',function(){
            var filepath = $(this).val();
            var s = filepath;
            (typeof s === 'string' && (s = s.match(/[^\\\/]+$/)) && s[0]) || '';
            $(this).parents('.file-upload').find(".upload-file-info").html(s);
        });
    };
    return {
        init: function() {
            UIinit();
            bindUIActions();
        },
        getFileInfo: function(filePath, fileExtention, date, url) {
            UIinit();
            getFileExtension(fileExtention, url);
            getFileName(filePath, fileExtention);
            changeDateFormat(date);
        } 
    };
})();