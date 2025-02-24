/**
 * Show tips for spicific areas in the website, where the user can activate or deactivate this feature.
 * @return init() function
 * @author Yousef M.
 */
var TooltipModule = (function() {
	var tips = {
		schoolAndAgencyMainMenu: {
			agentAndPartnersManagmen: "This is Agent and Partners Management",
			messageCenter: "This is Message Center",
			invoicingAndAgreement: "This is Invoicing and Agreement",
			liveConfernceStream: "This is Live Conference Stream",
			reportCenter: "This is Report Center",
			ebrochureAndApp: "This is Ebrochure and App",
			contentManagement: "This is Content Management",
			socialMediaCenter: "This is Social Media Center",
			setup: "This is Setup",
			overview: "This is Overview",
			attractions: "This is Attraction",
            studentManagement: "This is Student Management",
            schoolManagement: "This is School Management",
            contract: "This is Contract"
		}
	};

	var tipContent = function(tip) {
		return "<p class='tip-content'>" + tip + "</p>"
	};
    var stopTooltip = function() {
        $(".tooltipstered").tooltipster('disable');
    };
    var runTooltip = function() {
        $(".tooltipstered").tooltipster('enable');
    };
	var initTooltip = function() {
		$("#apm-tip").tooltipster({
            content: tipContent(tips.schoolAndAgencyMainMenu.agentAndPartnersManagmen),
            contentAsHTML: true,
            distance: 0,
            theme: 'dashboard-theme'
        });
        $("#mc-tip").tooltipster({
            content: tipContent(tips.schoolAndAgencyMainMenu.messageCenter),
            contentAsHTML: true,
            distance: 0,
            theme: 'dashboard-theme'
        });
        $("#iaa-tip").tooltipster({
            content: tipContent(tips.schoolAndAgencyMainMenu.invoicingAndAgreement),
            contentAsHTML: true,
            distance: 0,
            theme: 'dashboard-theme'
        });
        $("#lcs-tip").tooltipster({
            content: tipContent(tips.schoolAndAgencyMainMenu.liveConfernceStream),
            contentAsHTML: true,
            distance: 0,
            theme: 'dashboard-theme'
        });
        $("#rc-tip").tooltipster({
            content: tipContent(tips.schoolAndAgencyMainMenu.reportCenter),
            contentAsHTML: true,
            distance: 0,
            theme: 'dashboard-theme'
        });
        $("#eaa-tip").tooltipster({
            content: tipContent(tips.schoolAndAgencyMainMenu.ebrochureAndApp),
            contentAsHTML: true,
            distance: 0,
            theme: 'dashboard-theme'
        });
        $("#cm-tip").tooltipster({
            content: tipContent(tips.schoolAndAgencyMainMenu.contentManagement),
            contentAsHTML: true,
            distance: 0,
            theme: 'dashboard-theme'
        });
        $("#smc-tip").tooltipster({
            content: tipContent(tips.schoolAndAgencyMainMenu.socialMediaCenter),
            contentAsHTML: true,
            distance: 0,
            theme: 'dashboard-theme'
        });
        $("#setup-tip").tooltipster({
            content: tipContent(tips.schoolAndAgencyMainMenu.setup),
            contentAsHTML: true,
            distance: 0,
            theme: 'dashboard-theme'
        });
        $("#overview-tip").tooltipster({
            content: tipContent(tips.schoolAndAgencyMainMenu.overview),
            contentAsHTML: true,
            distance: 0,
            theme: 'dashboard-theme'
        });
        $("#attr-tip").tooltipster({
            content: tipContent(tips.schoolAndAgencyMainMenu.attractions),
            contentAsHTML: true,
            distance: 0,
            theme: 'dashboard-theme'
        });
	};

    var initAgencyTooltip = function() {
        $("#agency-student-m-tip").tooltipster({
            content: tipContent(tips.schoolAndAgencyMainMenu.studentManagement),
            contentAsHTML: true,
            distance: 0,
            theme: 'dashboard-theme'
        });
        $("#agency-mc-tip").tooltipster({
            content: tipContent(tips.schoolAndAgencyMainMenu.messageCenter),
            contentAsHTML: true,
            distance: 0,
            theme: 'dashboard-theme'
        });
        $("#agency-i-tip").tooltipster({
            content: tipContent(tips.schoolAndAgencyMainMenu.invoicingAndAgreement),
            contentAsHTML: true,
            distance: 0,
            theme: 'dashboard-theme'
        });
        $("#agency-lcs-tip").tooltipster({
            content: tipContent(tips.schoolAndAgencyMainMenu.liveConfernceStream),
            contentAsHTML: true,
            distance: 0,
            theme: 'dashboard-theme'
        });
        $("#agency-rc-tip").tooltipster({
            content: tipContent(tips.schoolAndAgencyMainMenu.reportCenter),
            contentAsHTML: true,
            distance: 0,
            theme: 'dashboard-theme'
        });
        $("#agency-bap-tip").tooltipster({
            content: tipContent(tips.schoolAndAgencyMainMenu.ebrochureAndApp),
            contentAsHTML: true,
            distance: 0,
            theme: 'dashboard-theme'
        });
        $("#agency-cm-tip").tooltipster({
            content: tipContent(tips.schoolAndAgencyMainMenu.contentManagement),
            contentAsHTML: true,
            distance: 0,
            theme: 'dashboard-theme'
        });
        $("#agency-smc-tip").tooltipster({
            content: tipContent(tips.schoolAndAgencyMainMenu.socialMediaCenter),
            contentAsHTML: true,
            distance: 0,
            theme: 'dashboard-theme'
        });
        $("#agency-school-m-tip").tooltipster({
            content: tipContent(tips.schoolAndAgencyMainMenu.schoolManagement),
            contentAsHTML: true,
            distance: 0,
            theme: 'dashboard-theme'
        });
        $("#agency-contract-tip").tooltipster({
            content: tipContent(tips.schoolAndAgencyMainMenu.contract),
            contentAsHTML: true,
            distance: 0,
            theme: 'dashboard-theme'
        });
        $("#agency-setup-tip").tooltipster({
            content: tipContent(tips.schoolAndAgencyMainMenu.setup),
            contentAsHTML: true,
            distance: 0,
            theme: 'dashboard-theme'
        });
        $("#agency-so-tip").tooltipster({
            content: tipContent(tips.schoolAndAgencyMainMenu.overview),
            contentAsHTML: true,
            distance: 0,
            theme: 'dashboard-theme'
        });
        $("#agency-attractions-tip").tooltipster({
            content: tipContent(tips.schoolAndAgencyMainMenu.attractions),
            contentAsHTML: true,
            distance: 0,
            theme: 'dashboard-theme'
        });
    };
    var getCoverStyle = function() {
        var page_h = $(".page-wrapper").height() + 70;// 70px for the footer
        var page_w = $(".page-wrapper").width();
        var styles = {
            'display': "block",
            'position': "absolute",
            'background-color': "rgba(0, 0, 0, 0.5)",
            'z-index': 9999,
            'height': page_h,
            'width': page_w,
            'top': 0,
            'left': 0
        };
        return styles;
    };

    //this message will be shown first time the user open the website, and once the user submit the
    //form inside it, he will never see it again.
    var showPromptMsg = function() {
        $(".dashboard-list").tooltipster({
            contentAsHTML: true,
            arrow: false,
            theme: 'prompt-msg-theme',
            interactive: true,
            position: 'top',
            side: 'top',
            delay: 100,
            trigger: 'custom',
            functionBefore: function() {
                //to disable the page when the message is shown.
                $(".disable-cover").css(getCoverStyle());
            },
            functionAfter: function() {
                $(".disable-cover").css('display',"none");
            }
        });
        var instance = $(".dashboard-list").tooltipster('instance');
        instance.content("<div class='prompt-msg'><h3>Welcome</h3><p class='tip-content'>" + 
            "In order to help you using our website we will provide you with a tips when you hover over" + 
            " an element.</p>" + "<label class='show-lbl'><input id='promptMsgCheckbox' type='checkbox'> <div class='message-show'>" +
            "<span class='checked'></span></div>Don't show any tips </label><button id='promptMsgSubmit' class='btn btn-success'>" + 
            "OK</button></div>");
        instance.open();
    }

    //ckeck the cookies to see if the user saw the prompt message before.
    var tipPrompt = function() {
        var name ="promptMsgShown";
        var shown = false;
        var cookiesArray = document.cookie.split(';');
        for(var i = 0; i <cookiesArray.length; i++) {
            var cookieValue = cookiesArray[i];
            while (cookieValue.charAt(0)==' ') {
                cookieValue = cookieValue.substring(1);
            }
            if (cookieValue.indexOf(name) == 0) {
                shown = cookieValue.substring(name.length+1,cookieValue.length);
            }
        }
        //first time to show the prompet message and inside the main page.
        if(!shown && $(".dashboard-list").length) {
            showPromptMsg();
        }
    };

    /**
     * 
     * Edited by: Yousef Najem
     */
    var bindUIActions = function() {
        //close the tip prompt message when click ok and enable the main page.
        $('#promptMsgSubmit').on("click", function() {
            $(".dashboard-list").tooltipster('close');
            //set cookie that this message is shown, with expire date of 100 day.
            var d = new Date();
            d.setTime(d.getTime() + (100*24*60*60*1000));
            var expires = "expires="+ d.toUTCString();
            document.cookie = "promptMsgShown=true;" +  expires + ";path=/";
            var isChecked = $('#promptMsgCheckbox').is(":checked") ? 0 : 1;
            var data = {'isChecked': isChecked};
            $.post(window.publicHostURL + "/user/tips", data).success(function(data_tips){
                if(data_tips == "1"){
                    runTooltip();
                }
                else{
                    stopTooltip();
                }
            });
        });
        //on window resize check if there is disable cover and if yes, then update its width and height.
        $( window ).resize(function() {
          if($(".disable-cover:visible").length) {
            $(".disable-cover").css(getCoverStyle());
          }
        });
    };

	return {
		init: function() {
            tipPrompt();
            initTooltip();
            initAgencyTooltip();
            bindUIActions();
        },
	};
})();