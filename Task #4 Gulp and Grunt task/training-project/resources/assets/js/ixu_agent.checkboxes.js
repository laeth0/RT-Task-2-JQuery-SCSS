/**
 * Module for the radio and checkboxes buttons functions.
 * @return init(), agency_check_all(), uncheck().
 * @author Yousef Mahmoud.
 */
var CheckBoxesModule = (function() {
    var checkBoxes;
    /**
     * select the checkBoxes and radio buttons and save the results in checkBoxes object.
     * @author Yousef Mahmoud.
     */
    var UIinit = function() {
        checkBoxes = new Object();
        checkBoxes.insert_manually_tab = $('a[id^="a-1"]');
        checkBoxes.upload_pdf_tab = $('a[id^="a-2"]');
        checkBoxes.insert_manually = $('#insert-manually');
        checkBoxes.upload_pdf = $('#upload-pdf');
        checkBoxes.agency_checkBox = $('#agencies .rounded-checkbox :input[type="checkbox"]');
        checkBoxes.user_checkBox = $('#users .rounded-checkbox :input[type="checkbox"]');
        checkBoxes.agency_checkAll_Box = $("#agencies :input[name='checkall']");
        checkBoxes.user_checkAll_Box = $("#users :input[name='checkall']");
        checkBoxes.agencies = $("#agencies .rounded-checkbox :input[type='checkbox'][name != 'checkall']");
        checkBoxes.users = $("#users .rounded-checkbox :input[type='checkbox'][name != 'checkall']");
    };
    /**
     * check all buttons.
     * @author Yousef Mahmoud.
     */
    var checkAll = function() {
        if ($("ul.nav li.active a").attr('href') === "#agencies" || $("ul.nav li.active a").attr('href') === "#schools") {
            checkBoxes.agency_checkBox.each(function() {
                this.checked = true;
            });
        } else if ($("ul.nav li.active a").attr('href') === "#users") {
            checkBoxes.user_checkBox.each(function() {
                this.checked = true;
            });
        }
    };
    /**
     * uncheck all buttons.
     * @author Yousef Mahmoud.
     */
    var uncheckAll = function() {
        if ($("ul.nav li.active a").attr('href') === "#agencies" || $("ul.nav li.active a").attr('href') === "#schools") {
            checkBoxes.agency_checkBox.each(function() {
                this.checked = false;
            });
        } else if ($("ul.nav li.active a").attr('href') === "#users") {
            checkBoxes.user_checkBox.each(function() {
                this.checked = false;
            });
        }
    };
    /**
     * check all buttons.
     * @author Yousef Mahmoud.
     */
    var uncheckAllbtn = function() {
        if ($("ul.nav li.active a").attr('href') === "#agencies") {
            checkBoxes.agency_checkAll_Box.prop("checked", false);
        } else if ($("ul.nav li.active a").attr('href') === "#users") {
            checkBoxes.user_checkAll_Box.prop("checked", false);
        }
    };
    /**
     * bind UI actions.
     * @author Yousef Mahmoud.
     */
    var bindUIActions = function() {
        // School Agency - Create /Edit Agency setting tab - custom Contract Expirations Alert style
        $("input[name='expiration_alert_period_custom']").click(function() {
            $("input[name='expiration_alert_period'][value=1]").prop('checked',true).trigger("click");
            $(this).trigger("focus");
        });
        // check the radio button "insert manually" or "upload PDF" at add invoice page based 
        //on the choosen tab.
        checkBoxes.insert_manually_tab.on('click', function() {
            checkBoxes.insert_manually.prop("checked", true);
        });
        checkBoxes.upload_pdf_tab.on('click', function() {
            checkBoxes.upload_pdf.prop("checked", true);
        });
        // School Agency - Create /Edit Agency setting tab - radio buttons style
        $('.radio-btn-lbl input[type="radio"]').click(function() {
            $(this).parent().siblings().removeClass('selected');
            $(this).parent().addClass('selected');
        });
        if(checkBoxes.agencies.length==0|| checkBoxes.agencies.length==1){
            checkBoxes.agency_checkAll_Box.prop("disabled", true);
             checkBoxes.agency_checkAll_Box.parent().parent().hide();
            // checkBoxes.agency_checkAll_Box.parent().children().css("color", "#808080");
            // checkBoxes.agency_checkAll_Box.parent().children().css("background","none");
        }
        else{
            checkBoxes.agency_checkAll_Box.prop("disabled", false);
        }
        if(checkBoxes.users.length==0 || checkBoxes.users.length==1){
            checkBoxes.user_checkAll_Box.prop("disabled", true);
            checkBoxes.user_checkAll_Box.parent().parent().hide();
            // checkBoxes.user_checkAll_Box.parent().children().css("color", "#808080");
            // checkBoxes.user_checkAll_Box.parent().children().css("background","none");
        }
        else{
            checkBoxes.user_checkAll_Box.prop("disabled", false);
        }

    };
    /**
     * @author Jumana Jaber.
     */
    var checkit = function() {
        var len = 0;
        if ($("ul.nav li.active a").text() == "Agencies") {
            len = 0;
            checkBoxes.agencies.each(function() {
                if (this.checked) len += 1;
            });
            if (checkBoxes.agencies.length == len) {
                checkBoxes.agency_checkAll_Box.prop("checked", true);
            } else {
                checkBoxes.agency_checkAll_Box.prop("checked", false);
            }
        } else if ($("ul.nav li.active a").text() == "Schools") {
            len = 0;
            checkBoxes.agencies.each(function() {
                if (this.checked) len += 1;
            });
            if (checkBoxes.agencies.length == len) {
                checkBoxes.agency_checkAll_Box.prop("checked", true);
            } else {
                checkBoxes.agency_checkAll_Box.prop("checked", false);
            }
        } else if ($("ul.nav li.active a").text() == "Users") {
            len = 0;
            checkBoxes.users.each(function() {
                if (this.checked) len += 1;
            });
            if (checkBoxes.users.length == len) {
                checkBoxes.user_checkAll_Box.prop("checked", true);
            } else {
                checkBoxes.user_checkAll_Box.prop("checked", false);
            }
        }
    };

    return {
        init: function() {
            // School Agency - Create /Edit Agency setting tab - radio buttons style
            $('.radio-btn-lbl input[type="radio"]:checked').parent().addClass('selected');

            UIinit();
            bindUIActions();
        },
        agency_check_all: function(isChecked) {
            if (isChecked) {
                checkAll();
            } else {
                uncheckAll();
            }
        },
        uncheck: function() {
            checkit();
        }
    };
})();
$(document).ready(function() {
    $('input[type="checkbox"]').click(function () {
                if($(this).is(':checked')){
                  $(this).next().addClass('fa-check-circle').removeClass('fa-circle-o');
                }
                else{
                   $(this).next().addClass('fa-circle-o').removeClass('fa-check-circle');
                }
            });
      $('input[name="checkall"]').click(function () {
        $('.active').each(function(){
                if($(this).is(':checked')){
                  $(this).find("i").addClass('fa-check-circle').removeClass('fa-circle-o');
                }
                else{
                   $(this).find("i").addClass('fa-circle-o').removeClass('fa-check-circle');
                }
             });
            });
});