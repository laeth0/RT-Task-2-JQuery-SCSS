/**
     * Scrolls the chat to the latest message 
     * @param  bool new_msg 
     * @return {[type]}         [description]
     * @author Ibrahim Y
     */
    function scrollToLatestMsg(new_msg){
        messagesContainer = $('.col-md-8 .inbox-body .messages-area');
        lastMsgOffset = messagesContainer[0].scrollHeight;
        if(new_msg) {
            messagesContainer.animate({scrollTop:lastMsgOffset},'500','swing');
        }
        else {
            messagesContainer.scrollTop(lastMsgOffset);
        }
    }
    
// Handle the success callback
function sendMessageSuccess(data) {
    $('#input-message').val('');
    console.log('message sent successfully');
}

$(document).ready(function() {
    //initialize the modules
    readImagesModule.init();
    FileModule.init();
    CheckBoxesModule.init();
    SortAndSearchModule.init();
    InvoicingModule.init();
    if(window.userSite == "1"){
        TooltipModule.init();
    }
    ValidationModule.init();

    $.fn.editable.defaults.mode = 'inline';
    //inplace edited SMS count
    $('.school-info #username').editable({
        validate: function(value) {
        if($.trim(value) == '') 
            return 'Value is required.';},
        type: 'text',
        title: 'Edit Status',
        placement: 'top', 
        send:'always',
        ajaxOptions: {
        dataType: 'json'
        },
        success: function(response, newValue) {
            if(response.status == 0) return response.msg; //msg will be shown in editable form
        }
    });

    //inplace edited expiration date
    $.fn.editable.defaults.mode = 'pupup';
    $('.school-info #dob').editable({
        format: 'yyyy-mm-dd',    
        viewformat: 'dd/mm/yyyy',
        datepicker: {
            weekStart: 1
        },
        success: function(response, newValue) {
            if(response.status == 0) return response.msg; //msg will be shown in editable form
        }
    });

    $('.col-md-8 .inbox-body .sending-area .textarea #input-message').keypress(function(e) {
        e.stopImmediatePropagation();
        if(e.keyCode === 13) {
            console.log("send");
            var _conversation_id = conv_id;
            var messageText = $('#input-message').val();
            if(messageText.length < 1) {
                return false;
            }

        // Build POST data and make AJAX request
        var data = {text: messageText, conversation_id:_conversation_id};
        $.post(window.hostURLSite + "/message-center/send", data).success(sendMessageSuccess(data));
        // Ensure the normal browser event doesn't take place
        return false;         
        }           
    });

    /**
     * put the focus on the first input when trigger a modal
     * @auther yousef M
    */
    $('.modal').on('shown.bs.modal', function () {
        $(this).find(":input[type!='hidden']:not(button)").first().focus();
        // $(this).find(":input[type!='hidden']:not(button)").each(function() {
        //     console.log("class: " + $(this).attr("class"));
        //     console.log("id: " + $(this).attr("id"));
        //     console.log("type: " + $(this).attr("type"));
            
        // });
    });
    /**
     *clear input texts and emails when close the modal
     * @auther yousef M
    */
    $('.modal').on('hide.bs.modal', function (e) {
        console.log("modal closed");
        var id = $(this).attr("id") == undefined ? "NO-ID" : $(this).attr("id") ;
        console.log("triggered id=" + id);
        var eventId = e.target.id;
        $("#" + eventId + " :input[type='text']").each(function() {
            $(this).val("");
        });
        // $("#" + eventId + " :input[type='checkbox']").each(function() {
        //     $(this).prop('checked', false);
        // });
        $("#" + eventId + " :input[type='email']").each(function() {
            $(this).val("");
        });
    }); 

    // Search Agency code ..
    jQuery.expr[':'].Contains = function(a, i, m) {
        return (a.textContent || a.innerText || "").toUpperCase().indexOf(m[3].toUpperCase()) >= 0;
    };
    // Show file name only in agency contract
    $('.file-upload .upload-input').on('change',function() {
        var filepath = $(this).val();
        var s = filepath;
        (typeof s === 'string' && (s = s.match(/[^\\\/]+$/)) && s[0]) || '';        
        $(this).parents('.file-upload').find(".upload-file-info").html(s);
    });
});
