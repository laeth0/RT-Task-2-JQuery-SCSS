/**
 * Front-end validation rules for all forms at the website.
 * @return customValidation(), resourcesInit(), FormValidations(), bindUIActions().
 * @author Yousef Mahmoud.
 */
date_error_msg = " ";
var ValidationModule = (function() {
    var resources, options;
    /**
     * Initialize the UI resources and forms's rules and messages.
     * @return resources object.
     * @author Yousef Mahmoud, Jumana Jaber, Nadem Khlaif.
     */
    var resourcesInit = function() {
        resources = {
            //registration form:
            schoolRegistrationForm: $("#schoolRegistrationForm"),
            //reset password form:
            resetPasswordForm: $("#resetPasswordForm"),
            //contact us form:
            contactUsForm: $("#contactUsForm"),
            //admin forms:
            //admin login form:
            adminLoginForm: $("#adminLoginForm"),
            createSchoolForm: $("#createSchoolForm"),
            addUsersToSchoolForm: $("#addUsersToSchool"),
            /*School Side Forms: _____________________________________________________*/
            //login form:
            schoolLoginForm: $("#schoolLoginForm"),
            //profile form:
            schoolProfileInfoForm: $("#schoolProfileInfoForm"),
            schoolProfilePassForm: $("#schoolProfilePassForm"),
            //agency forms:
            addAgencyUserForm: $("#addAgencyUserForm"),
            addAgencyForm: $("#addAgencyForm"),
            editAgencyForm: $("#editAgencyForm"),
            dynamicGeneratedAgencyForm: $("form[id^='contractForm']"),
            addContractModalForm: $("#addContractForm"),
            agencyOfficeForm: $("form[id^='officeForm']"),
            addOfficeModalForm: $("#officeModalForm"),
            agencySettingForm: $("#show_setting_form"),
            //content management forms:
            addCategoryForm: $("#addCategoryForm"),
            addNewDocumentForm: $("#documentForm"),
            addVideoForm: $("#videoForm"),
            editVideoForm: $("#videoEditForm"),
            newFileForm: $("#newFileForm"),
            //invoice forms:
            createInvoiceForm: $("#invoiceForm"),
            updateInvoiceForm: $("#updateInvoiceForm"),
            //ebrochure forms:
            ebrochureForm: $("#ebrochureForm"),
            //social forms:
            renrenForm: $("#renrenForm"),
            weiboForm: $("#weiboForm"),
            wechatForm: $("#wechatForm"),
            bftvForm: $("#bftvForm"),
            facebookForm: $("#facebookForm"),
            twitterForm: $("#twitterForm"),
            instagramForm: $("#instagramForm"),
            pinterestForm: $("#pinterestForm"),
            addCustomForm: $("#addCustomForm"),
            customSocialForms: $("form[id^='customSocialForm']"),
            //overview forms:
            overviewForm: $("#overviewForm"),
            //attraction forms:
            addCategoryAttractionForm: $("#addCategoryAttractionForm"),
            attractionLinksForm: $("#linksForm"),
            //setup forms:
            setupAddUserForm: $("#addUserForm"),
            AAPersonalInfoForm: $("#AAPersonalInfoForm"),
            ADPersonalInfoForm: $("#ADPersonalInfoForm"),
            IDPersonalInfoForm: $("#IDPersonalInfoForm"),
            CDPersonalInfoForm: $("#CDPersonalInfoForm"),
            //message center forms:
            messageCenterLogForm: $("#formLog"),
            /*Agency Side Forms: _____________________________________________________*/
            //login form:
            agentLoginForm: $("#agentLoginForm"),
            //invoice forms:
            addInvoiceAgencyForm: $("#addInvoiceAgency"),
            updateInvoiceAgencyForm: $("#updateInvoiceAgency"),
            //student forms:
            studentForm: $("#studentForm"),
            //setup forms:
            agencyPersonalInfoForm: $("#agencyPersonalInfo"),
            //Form Rules:
            resetPasswordRules: {
                email: {
                    required: true,
                    email: true
                },
                password: {
                    required: true,
                    minlength: 6,
                    maxlength: 50
                },
                password_confirmation: {
                    required: true,
                    minlength: 6,
                    maxlength: 50,
                    equalTo: '[name="password"]'
                }
            },
            contactUsRules: {
                email: {
                    required: true,
                    email: true,
                    maxlength: 200
                },
                title: {
                    required: true,
                    maxlength: 50
                },
                message: {
                    required: true,
                    maxlength: 250
                }
            },
            adminLoginRules: {
                email: {
                    required: true,
                    email: true,
                    maxlength: 50
                },
                password: {
                    required: true,
                    maxlength: 50,
                    minlength: 6
                }
            },
            createSchoolRules: {
                name: {
                    required: true,
                    maxlength: 50
                },
                image: {
                    extension: "mimes:bmp,gif,png,jpg,jpeg"
                }
            },
            addUsersToSchoolRules: {
                email: {
                    required: true,
                    email: true,
                    maxlength: 50
                },
                first_name: {
                    required: true,
                    maxlength: 50,
                    minlength: 2
                },
                last_name: {
                    required: true,
                    maxlength: 50,
                    minlength: 2
                }
            },
            agencyRules: {
                first_name: {
                    required: true,
                    maxlength: 50,
                    minlength: 2
                },
                last_name: {
                    required: true,
                    maxlength: 50,
                    minlength: 2
                },
                agency_name: {
                    required: true,
                    maxlength: 50
                },
                 agency_custom_type: {
                    required: true
                },
                agency_id: {
                    agency_id: true,
                    positiveNumber: true
                },
                main_office_contact: {
                    maxlength: 50
                },
                main_office_email: {
                    email: true,
                    maxlength: 50
                },
                main_office_phone: {
                    main_office_phone: true,
                    rangelength: [6, 15]
                },
                main_office_fax: {
                    main_office_phone: true,
                    rangelength: [6, 15]
                },
                main_office_address: {
                    maxlength: 50
                },
                contract_notes: {
                    maxlength: 255
                },
                contract_sent_date: "noDateConflicts",
                contract_expire_date: "noDateConflicts",
                contract_signed_date: "noDateConflicts",
                modal_contract_sent_date: "modalNoDateConflicts",
                modal_contract_expire_date: "modalNoDateConflicts",
                modal_contract_signed_date: "modalNoDateConflicts",
                contract_amount: {
                    range: [0, 100]
                },
                contract_contact: {
                    maxlength: 50
                },
                contract_email: {
                    email: true
                },
                contract_phone: {
                    main_office_phone: true,
                    rangelength: [6, 15]
                },
                contract_fax: {
                    main_office_phone: true,
                    rangelength: [6, 15]
                },
                contract_address: {
                    maxlength: 50
                },
                expiration_alert_period_custom: {
                    number: true,
                    positiveNumber: true
                },
                contract_file: {
                    extension: "pdf"
                },
                contact_person: {
                    required: true,
                    maxlength: 50
                },
                email: {
                    required: true,
                    email: true
                },
                phone: {
                    main_office_phone: true,
                    rangelength: [6, 15]
                },
                fax: {
                    main_office_phone: true,
                    rangelength: [6, 15]
                },
                address: {
                    maxlength: 50
                }
            },
            contentManagmentRules: {
                category_title: {
                    required: true,
                    maxlength: 50
                },
                document_title: {
                    required: true,
                    minlength: 2,
                    maxlength: 50
                },
                document_file: {
                    required: true,
                    extension: "doc|docx|pdf|xls|odt"
                },
                video_title: {
                    required: true,
                    maxlength: 50
                },
                video_file: {
                    required: {
                        depends: function(element) {
                            if ($("#videoEditForm").length) {
                                return false;
                            }
                            else {
                                return $("#checkbox1").is(":unchecked");
                            }
                        }
                    },
                    extension: "mp4|avi|mkv|wmv|mov|flv|mng"
                },
                iframe_link: {
                    required: {
                        depends: function(element) {
                            return $("#checkbox1").is(":checked");
                        }
                    },
                    maxlength: 255
                },
                item_file: {
                    required: true
                }
            },
            invoiceRules: {
                title: {
                    required: true,
                    maxlength: 50
                },
                invoice_pdf: {
                    required: {
                        depends: function(element) {
                            return $("#insert-manually").is(":unchecked");
                        }
                    },
                    extension: "pdf"
                },
                cust_id: {
                    positiveNumber: true
                },
                page: {
                    positiveNumber: true
                },
                invoice_number: {
                    positiveNumber: true
                },
                "amount[]": {
                    positiveNumber: true
                },
                due_date: "AfterStartDate",
                invoice_date: "AfterStartDate",
                "student[]": {
                    maxlength: 50,
                    required: {
                        depends: function(element) {
                            if ($("#insert-manually").length) {
                                return $("#insert-manually").is(":checked");
                            } else return true;
                        }
                    }
                }
            },
            ebrochureRules: {
                ios_link: {
                    ip_url: true,
                    maxlength: 2048
                        //url: true
                },
                android_link: {
                    ip_url: true,
                    maxlength: 2048
                        //url: true
                },
                ebrochure: {
                    ip_url: true,
                    maxlength: 2048
                        //url: true
                },
                website: {
                    ip_url: true,
                    maxlength: 2048
                        //url: true
                },
            },
            studentRules: {
                student_country: {
                    min: 1
                },
                student_name: {
                    required: true,
                    maxlength: 50
                },
                student_email: {
                    email: true
                },
                student_phone: {
                    main_office_phone: true,
                    rangelength: [6, 15]
                },
                student_image: {
                    extension: "bmp|gif|png|jpg|jpeg"
                },
                student_address: {
                    maxlength: 50
                }
            },
            socialRules: {
                custom_icon: {
                    required: true,
                    extension: "bmp|gif|png|jpg|jpeg"
                },
                custom_link: {
                    //url: true,
                    ip_url: true,
                    required: true,
                    maxlength: 2048
                }
            },
            overviewRules: {
                name: {
                    maxlength: 50
                },
                website: {
                    //url: true,
                    ip_url: true,
                    maxlength: 2048
                },
                location: {
                    maxlength: 50
                },
                summary: {
                    maxlength: 250
                },
                selling_points: {
                    maxlength: 250
                },
                logo: {
                    extension: "bmp|gif|png|jpg|jpeg"
                }
            },
            attractionRules: {
                item_title: {
                    required: true,
                    maxlength: 50
                },
                "link[]": {
                    required: true,
                    //url: true,
                    ip_url: true,
                    maxlength: 2048
                }
            },
            setupRules: {
                first_name: {
                    required: true,
                    maxlength: 50,
                    minlength: 2
                },
                last_name: {
                    required: true,
                    maxlength: 50,
                    minlength: 2
                },
                email: {
                    required: true,
                    email: true,
                    maxlength: 50
                },
                contact_person: {
                    maxlength: 50
                },
                phone: {
                    main_office_phone: true,
                    rangelength: [6, 15]
                },
                fax: {
                    main_office_phone: true,
                    rangelength: [6, 15]
                },
                facebook: {
                    ip_url: true,
                    maxlength: 2048
                        //url: true
                },
                linkedin: {
                    ip_url: true,
                    maxlength: 2048
                        //url: true
                },
                profile_photo: {
                    extension: "bmp|gif|png|jpg|jpeg"
                },
                address: {
                    maxlength: 50
                },
                profile_photo1: {
                    extension: "bmp|gif|png|jpg|jpeg"
                },
                profile_photo2: {
                    extension: "bmp|gif|png|jpg|jpeg"
                }
            },
            messageCenterRules: {
                end_date: 'isAfterStartDate',
                from_address: {
                    required: false,
                    maxlength: 50
                }
            },
            schoolRegistrationRules: {
                school_name: {
                    required: true,
                    maxlength: 50
                },
                email: {
                    email: true,
                    required: true,
                    maxlength: 50
                },
                password: {
                    required: true,
                    maxlength: 50,
                    minlength: 3
                },
                confirm_password: {
                    required: true,
                    maxlength: 50,
                    minlength: 3,
                    equalTo: '[name="password"]'
                },
                school_image: {
                    extension: "bmp|gif|png|jpg|jpeg"
                }
            },
            schoolLoginRules: {
                email: {
                    email: true,
                    maxlength: 50,
                    required: true
                },
                password: {
                    required: true,
                    maxlength: 50,
                    minlength: 3
                }
            },
            schoolProfileRules: {
                first_name: {
                    required: true,
                    maxlength: 50,
                    minlength: 2
                },
                last_name: {
                    required: true,
                    maxlength: 50,
                    minlength: 2
                },
                cell_phone: {
                    main_office_phone: true,
                    rangelength: [6, 15]
                },
                user_image: {
                    extension: "bmp|gif|png|jpg|jpeg"
                },
                new_password: {
                    required: true,
                    maxlength: 50,
                    minlength: 3
                },
                confirm_password: {
                    required: true,
                    maxlength: 50,
                    minlength: 3,
                    equalTo: '[name="new_password"]'
                }
            },
            //Messages
            resetPasswordMessages: {
                password_confirmation: {
                    equalTo: "The password confirmation does not match"
                }
            },
            schoolProfileMessages: {
                confirm_password: {
                    equalTo: "The password confirmation does not match"
                }
            },
            agencyMessages: {
                contract_file: {
                    extension: "The allowed extension for the contract is pdf"
                }
            },
            contentManagementMessages: {
                document_file: {
                    extension: "Not allowed document type"
                },
                video_file: {
                    extension: "The allowed extensions for the video are mp4, avi, mkv, wmv, mov, flv, mng"
                }
            },
            invoiceMessages: {
                invoice_pdf: {
                    extension: "The allowed extension for the invoice is pdf"
                }
            },
            overviewMessages: {

            },
            attractionMessages: {
            },
            setupMessages: {

            },
            messageCenterMessages: {

            },
            studentMessages: {
                student_image: {
                    extension: "The allowed extensions for the image are bmp, gif, png, jpg, jpeg"
                },
                student_country: {
                    min: "Please Choose your Country"
                }
            },
            schoolRegistrationMessages: {

            }
        };
        var validationOptions = function(formRules, formMessages, invalidFormHandler) {
            formMessages = formMessages || {};
            return {
                //debug: true,
                rules: formRules,
                messages: formMessages,
                errorPlacement: errorFormPlacement,
                submitHandler: function(form) {
                    // do other things for a valid form
                    form.submit();
                },
                invalidHandler: invalidFormHandler
            };
        };
        /**
         * Initialize the UI resources and forms's rules and messages.
         * @return options object.
         * @author Yousef Mahmoud.
         */
        options = {
            reset_password_options: validationOptions(resources.resetPasswordRules,
                resources.resetPasswordMessages),
            contact_us_options: validationOptions(resources.contactUsRules,
                resources.resetPasswordMessages),
            admin_login_options: validationOptions(resources.adminLoginRules),
            create_school_options: validationOptions(resources.createSchoolRules),
            addusers_toschool_options: validationOptions(resources.addUsersToSchoolRules),
            agency_options: validationOptions(resources.agencyRules,
                resources.agencyMessages, invalidFormHandler),
            content_management_options: validationOptions(resources.contentManagmentRules,
                resources.contentManagementMessages, invalidFormHandler),
            invoice_options: validationOptions(resources.invoiceRules,
                resources.invoiceMessages, invalidFormHandler),
            ebrochure_options: validationOptions(resources.ebrochureRules,
                resources.ebrochureMessages, invalidFormHandler),
            social_media_options: validationOptions(resources.socialRules,
                resources.socialMessages, invalidFormHandler),
            overview_options: validationOptions(resources.overviewRules,
                resources.overviewMessages, invalidFormHandler),
            attraction_options: validationOptions(resources.attractionRules,
                resources.attractionMessages, invalidFormHandler),
            setup_options: validationOptions(resources.setupRules,
                resources.setupMessages),
            message_center_options: validationOptions(resources.messageCenterRules,
                resources.messageCenterMessages),
            student_options: validationOptions(resources.studentRules,
                resources.studentMessages, invalidFormHandler),
            school_registration_options: validationOptions(resources.schoolRegistrationRules,
                resources.schoolRegistrationMessages),
            school_login_options: validationOptions(resources.schoolLoginRules),
            shcool_profile_options: validationOptions(resources.schoolProfileRules,
                resources.schoolProfileMessages)
        };
    };
    /**
     * Add new custom validation rules.
     * @return validator objects.
     * @author Yousef Mahmoud, Jumana Jaber.
     */
    var customValidation = function() {
        /**
         * @author Yousef Mahmoud.
         */
        $.validator.addMethod("positiveNumber", function(value) {
            return Number(value) >= 0;
        }, "Please enter a positive number.");
        /**
         * @author Yousef Mahmoud.
         * @see https://gist.github.com/dperini/729294
         */
        $.validator.addMethod("ip_url", function(value, element) {
            //var ip = /^(https?)?:?\/?\/?(([a-z0-9$_\.\+!\*\'\(\),;\?&=-]|%[0-9a-f]{2})+(:([a-z0-9$_\.\+!\*\'\(\),;\?&=-]|%[0-9a-f]{2})+)?@)?(\?#)((([a-z0-9]\.|[a-z0-9][a-z0-9-]*[a-z0-9]\.)*[a-z][a-z0-9-]*[a-z0-9]|((\d|[1-9]\d|1\d{2}|2[0-4][0-9]|25[0-5])\.){3}(\d|[1-9]\d|1\d{2}|2[0-4][0-9]|25[0-5]))(:\d+)?)(((\/+([a-z0-9$_\.\+!\*\'\(\),;:@&=-]|%[0-9a-f]{2})*)*(\?([a-z0-9$_\.\+!\*\'\(\),;:@&=-]|%[0-9a-f]{2})*)?)?)?(#([a-z0-9$_\.\+!\*\'\(\),;:@&=-]|%[0-9a-f]{2})*)?$/;
            var ip = new RegExp(
                "(^" +
                // protocol identifier
                "(?:https?:\/\/)?" +
                // user:pass authentication
                "(?:\\S+(?::\\S*)?@)?" +
                "(?:" +
                // IP address exclusion
                // private & local networks
                "(?!(?:10|127)(?:\\.\\d{1,3}){3})" +
                "(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})" +
                "(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})" +
                // IP address dotted notation octets
                // excludes loopback network 0.0.0.0
                // excludes reserved space >= 224.0.0.0
                // excludes network & broacast addresses
                // (first & last IP address of each class)
                "(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])" +
                "(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}" +
                "(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))" +
                // "|" +
                // // host name
                // "(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)" +
                // // TLD identifier
                // "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))" +
                // // TLD may end with dot
                // "\\.?" +
                ")" +
                // port number
                "(?::\\d{2,5})?" +
                // resource path
                "(?:[/?#]\\S*)?" +
                "$)|(?:https?:\/\/)?(?:[a-zA-Z0-9.-]?\.(?:#(.*)|\d\.\d+\.\d+\.\d+)", "i"
            );
            if (value !== "")
                return value.match(ip);
            else
                return true;
        }, "Please enter a valid URL");
        /**
         * @author Yousef Mahmoud.
         */
        // $.validator.addMethod("url", function(value, element) {
        //     return this.optional(element) || /(?:https?:\/\/)?(?:[a-zA-Z0-9.-]?\.(?:com|net|org|gov|edu|mil)|\d\.\d+\.\d+\.\d+)/.test(value);
        // }, "Please enter a valid URL");
        /**
         * @author Jumana Jaber.
         */
        $.validator.addMethod("main_office_phone", function(value, element) {
            return this.optional(element) || /^[+#*\(\)\[\]]*([0-9][ ext+-pw#*\(\)\[\]]*)$/.test(value);
        }, "Please enter a valid phone number ");
        /**
        /**
         * @author Jumana Jaber.
         */
        $.validator.addMethod("agency_id", function(value, element) {
            return (this.optional(element) || /^[0-9]*$/.test(value));
        }, "Please enter only numbers");
        /**
         * @author Jumana Jaber.
         */
        $.validator.addMethod("zeroID", function(value, element) {
            return value != "0";
        }, "Not allowed zero ID");
        /**
         * @author Jumana Jaber.
         */
        $.validator.addMethod("contract_amount", function(value, element) {
            var inputData = $("#contract_amount").val();
            if (inputData < 100 && inputData >= 0) return true;
        }, "Please enter < 100");

        /**
         * @author Yousef Mahmoud,
         */
        $.validator.addMethod("noDateConflicts", function(value, element) {
            var parentFormId = $(element).parents("form").first().attr("id");
            var inputDate = new Date($("#" + parentFormId + " input[name=contract_sent_date]").val());
            var contractSentDate = inputDate.getTime() / 100000;
            //console.log("contractSentDate : " + contractSentDate);
            inputDate = new Date($("#" + parentFormId + " input[name=contract_signed_date]").val());
            var contractSignedDate = inputDate.getTime() / 100000;
            //console.log("contractSignedDate : " + contractSignedDate);
            inputDate = new Date($("#" + parentFormId + " input[name=contract_expire_date]").val());
            var contractExpireDate = inputDate.getTime() / 100000;
            //console.log("contractExpireDate : " + contractExpireDate);
            if ($(element).attr("name") == "contract_sent_date") {
                if ((contractSentDate >= contractExpireDate)) {
                    setErrorMessage("sent date can't be more than or equal expire date.");
                    return false;
                } else {
                    return true;
                }
            } else if ($(element).attr("name") === "contract_signed_date") {
                if ((contractSignedDate >= contractExpireDate)) {
                    setErrorMessage("signed date can't be more than or equal expire date.");
                    return false;
                }
                else if ((contractSignedDate < contractSentDate)) {
                    setErrorMessage("signed date can't be less than sent date.");
                    return false;
                }
                 else {
                    return true;
                }
            } else if ($(element).attr("name") === "contract_expire_date") {
                if ((contractExpireDate < contractSignedDate) || (contractExpireDate < contractSentDate)) {
                    setErrorMessage("expire date can't be less than sent or signed date.");
                    return false;
                } else {
                    return true;
                }
            }
        }, function(params, element) {
            return getErroMessage();
        });
        /**
         * @author Yousef Mahmoud,
         */
        $.validator.addMethod("modalNoDateConflicts", function(value, element) {
            var parentFormId = $(element).parents("form").first().attr("id");
            var inputDate = new Date($("#" + parentFormId + " input[name=modal_contract_sent_date]").val());
            var contractSentDate = inputDate.getTime() / 100000;
            //console.log("contractSentDate : " + contractSentDate);
            inputDate = new Date($("#" + parentFormId + " input[name=modal_contract_signed_date]").val());
            var contractSignedDate = inputDate.getTime() / 100000;
            //console.log("contractSignedDate : " + contractSignedDate);
            inputDate = new Date($("#" + parentFormId + " input[name=modal_contract_expire_date]").val());
            var contractExpireDate = inputDate.getTime() / 100000;
            //console.log("contractExpireDate : " + contractExpireDate);
            if ($(element).attr("name") == "modal_contract_sent_date") {
                if ((contractSentDate >= contractExpireDate)) {
                    setErrorMessage("sent date can't be more than or equal expire date.");
                    return false;
                } else {
                    return true;
                }
            } else if ($(element).attr("name") === "modal_contract_signed_date") {
                if ((contractSignedDate >= contractExpireDate)) {
                    setErrorMessage("signed date can't be more than or equal expire date.");
                    return false;
                }
                else if ((contractSignedDate < contractSentDate)) {
                    setErrorMessage("signed date can't be less than sent date.");
                    return false;
                }
                 else {
                    return true;
                }
            } else if ($(element).attr("name") === "modal_contract_expire_date") {
                if ((contractExpireDate < contractSignedDate) || (contractExpireDate < contractSentDate)) {
                    setErrorMessage("expire date can't be less than sent or signed date.");
                    return false;
                } else {
                    return true;
                }
            }
        }, function(params, element) {
            return getErroMessage();
        });
        /**
         * @author Jumana Jaber.
         */
        $.validator.addMethod("AfterStartDate", function(value, element) {
            var invoiceStartDate = new Date($("#invoice_date").val());
            invoiceStartDate = invoiceStartDate.getTime() / 100000;
            var InvoiceEndDate = new Date($("#due_date").val());
            InvoiceEndDate = InvoiceEndDate.getTime() / 100000;
            if (invoiceStartDate <= InvoiceEndDate) {
                return true;
            } else {
                return false;
            }
        }, "Due Date can't be less than invoice date");
        /**
         * @author Jumana Jaber.
         */
        $.validator.addMethod("isAfterStartDate", function(value, element) {
            var startdate = new Date($('#start_date').val());
            startdate = startdate.getTime() / 100000;
            var endday = new Date($('#end_date').val());
            endday = endday.getTime() / 100000;
            if (endday - startdate <= 0) {} else {
                return true;
            }
        }, "End date should be after start date");
        /**
         * override the email validation rule to add more advanced email validation
         * @author Yousef Mahmoud,
         */
        $.validator.addMethod("email", function(value, element) {
            return this.optional(element) || /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(value);
        }, "Please enter a valid email address.");
    };
    /**
     * Change the error message, we use this error message with the custom validation rules
     * when we want the new rule to return dynamic messages depending on the situation.
     * @param error: (string) the desired error message.
     * @author Yousef Mahmoud.
     */
    var setErrorMessage = function(error) {
        date_error_msg = "" + error;
    };
    /**
     * get the error message, we use this error message with the custom validation rules
     * when we want the new rule to return dynamic messages depending on the situation.
     * @return error: (string) the error message.
     * @author Yousef Mahmoud.
     */
    var getErroMessage = function() {
        return date_error_msg;
    }

    /**
     * A handler that will be called when the user try to submit invalid form,
     * and it will display a message at the top of the form that tells the user
     * why the submit failed, and how many fields is invalid.
     * @param event: (object) the form submit event, validator: (function) the validators
     * that had been applied to the form.
     * @return an error message that will be displayed at the top of the form.
     * @author Yousef Mahmoud.
     */
    var invalidFormHandler = function(event, validator) {
        // 'this' refers to the form
        var errors = validator.numberOfInvalids();
        if (errors) {
            var message = errors == 1 ?
                "You missed 1 field. It has been highlighted" :
                "You missed " + errors + " fields. They have been highlighted";
            $(this).find("div.form-error span").html(message);
            $(this).find("div.form-error").show();
            event.preventDefault();
            scrollToFormTop($(this));
        } else {
            $(this).find("div.form-error").hide();
        }
    };
    /**
     * go the tab that contains unvalid input when submit a form that contains multiple tabs.
     * @param object form.
     * @return move the user to the right tab.
     * @author Yousef Mahmoud.
     */
    var goToTheRightTab = function(formContainsTabs) {
        var formId = formContainsTabs.attr("id");
        var destTab; //the id of the tab that contains the invalid input.
        var destLi;
        $("#" + formId + " .nav-tabs li a").each(function() {
            var tabId = $(this).attr("href");
            currentLi = $(this).parent();
            $(tabId + " label.error").each(function() {
                if ($(this).attr("id") !== undefined && $(this).css("display") != "none") {
                    //get the first tab that have an error.
                    destTab = tabId;
                    destLi = currentLi;
                    //to break from the each loop
                    return false;
                }
            });
            //to breack from the each loop when we found the tab that contains the error.
            if (destTab !== undefined) {
                return false;
            }
        });
        formContainsTabs.find(".tab-pane.active").removeClass("active");
        formContainsTabs.find("li.active").removeClass("active");
        $(destTab).addClass("active");
        $(destLi).addClass("active");
    };
    /**
     * An error placement handler.
     * @param error: (string) the error message, element: (object) the invalid
     * element.
     * @return an error message that will be displayed inside the auto-generated
     * error label.
     * @author Yousef Mahmoud.
     */
    var errorFormPlacement = function(error, element) {
        error.insertAfter(element);
    };
    /**
     * to make the page scroll to the top of the  form.
     * @param form: the form we wants to go to its top side.
     * @author Yousef Mahmoud.
     */
    var scrollToFormTop = function(form) {
        if ($(form).parent().hasClass("modal-body") || $(form).parent().hasClass("modal-content")) {
            //TODO: add some animation for modals here. e.g.: blow up
        } else {
            $("html, body").animate({
                scrollTop: $(form).offset().top - 70
            }, 500);
            //console.log("offset: " + $(form).offset().top);
        }
    };
    /**
     * applay the validations rules at the forms.
     * @author Yousef Mahmoud.
     */
    var FormValidations = function() {
        //reset password form:
        resources.resetPasswordForm.validate(options.reset_password_options);
        //contact us form:
        resources.contactUsForm.validate(options.contact_us_options);
        //admin forms:
        resources.adminLoginForm.validate(options.admin_login_options);
        resources.createSchoolForm.validate(options.create_school_options);
        resources.addUsersToSchoolForm.validate(options.addusers_toschool_options);
        //agency forms    
        resources.addAgencyUserForm.validate(options.agency_options);
        resources.addAgencyForm.validate(options.agency_options);
        resources.editAgencyForm.validate(options.agency_options);
        resources.dynamicGeneratedAgencyForm.each(function() {
            $(this).validate(options.agency_options);
        });
        resources.addContractModalForm.validate(options.agency_options);
        resources.agencyOfficeForm.each(function() {
            $(this).validate(options.agency_options);
        });
        resources.addOfficeModalForm.validate(options.agency_options);
        resources.agencySettingForm.validate(options.agency_options);
        //content managment forms
        resources.addCategoryForm.validate(options.content_management_options);
        resources.addNewDocumentForm.validate(options.content_management_options);
        resources.addVideoForm.validate(options.content_management_options);
        resources.editVideoForm.validate(options.content_management_options);
        resources.newFileForm.validate(options.content_management_options);
        //invoice forms:
        resources.createInvoiceForm.validate(options.invoice_options);
        resources.updateInvoiceForm.validate(options.invoice_options);
        //ebrochure forms:
        resources.ebrochureForm.validate(options.ebrochure_options);
        //agency invoice
        resources.addInvoiceAgencyForm.validate(options.invoice_options);
        resources.updateInvoiceAgencyForm.validate(options.invoice_options);
        //social forms
        resources.renrenForm.validate(options.social_media_options);
        resources.weiboForm.validate(options.social_media_options);
        resources.wechatForm.validate(options.social_media_options);
        resources.bftvForm.validate(options.social_media_options);
        resources.facebookForm.validate(options.social_media_options);
        resources.twitterForm.validate(options.social_media_options);
        resources.instagramForm.validate(options.social_media_options);
        resources.pinterestForm.validate(options.social_media_options);
        resources.addCustomForm.validate(options.social_media_options);
        resources.customSocialForms.each(function() {
            $(this).validate(options.social_media_options);
        });
        // setup forms: 
        resources.setupAddUserForm.validate(options.setup_options);
        resources.AAPersonalInfoForm.validate(options.setup_options);
        resources.ADPersonalInfoForm.validate(options.setup_options);
        resources.IDPersonalInfoForm.validate(options.setup_options);
        resources.CDPersonalInfoForm.validate(options.setup_options);
        //agency setup forms:
        resources.agencyPersonalInfoForm.validate(options.setup_options);

        //overview forms
        resources.overviewForm.validate(options.overview_options);
        //attraction forms
        resources.addCategoryAttractionForm.validate(options.attraction_options);
        resources.attractionLinksForm.validate(options.attraction_options);
        //message center forms: 
        resources.messageCenterLogForm.validate(options.message_center_options);
        //student form
        resources.studentForm.validate(options.student_options);
        //school registration form:
        resources.schoolRegistrationForm.validate(options.school_registration_options);
        //school login form:
        resources.schoolLoginForm.validate(options.school_login_options);
        //agency login form:
        resources.agentLoginForm.validate(options.school_login_options);
        //school profile form:
        resources.schoolProfileInfoForm.validate(options.shcool_profile_options);
        resources.schoolProfilePassForm.validate(options.shcool_profile_options);
    };
    /**
     * bind the UI actions.
     * @author Yousef Mahmoud.
     */
    var bindUIActions = function() {
        $("input[name=contract_sent_date]").change(function() {
            $("input[name=contract_expire_date]").first().data("reval", true).valid();
            $("input[name=contract_expire_date]").first().data("reval", false);
            $("input[name=contract_signed_date]").first().data("reval", true).valid();
            $("input[name=contract_signed_date]").first().data("reval", false);
        });
        $("input[name=contract_signed_date]").change(function() {
            $("input[name=contract_expire_date]").first().data("reval", true).valid();
            $("input[name=contract_expire_date]").first().data("reval", false);
            $("input[name=contract_sent_date]").first().data("reval", true).valid();
            $("input[name=contract_sent_date]").first().data("reval", false);
        });
        $("input[name=contract_expire_date]").change(function() {
            $("input[name=contract_sent_date]").first().data("reval", true).valid();
            $("input[name=contract_sent_date]").first().data("reval", false);
            $("input[name=contract_signed_date]").first().data("reval", true).valid();
            $("input[name=contract_signed_date]").first().data("reval", false);
        });

        $("input[name=modal_contract_sent_date]").change(function() {
            $("input[name=modal_contract_expire_date]").first().data("reval", true).valid();
            $("input[name=modal_contract_expire_date]").first().data("reval", false);
            $("input[name=modal_contract_signed_date]").first().data("reval", true).valid();
            $("input[name=modal_contract_signed_date]").first().data("reval", false);
        });
        $("input[name=modal_contract_signed_date]").change(function() {
            $("input[name=modal_contract_expire_date]").first().data("reval", true).valid();
            $("input[name=modal_contract_expire_date]").first().data("reval", false);
            $("input[name=modal_contract_sent_date]").first().data("reval", true).valid();
            $("input[name=modal_contract_sent_date]").first().data("reval", false);
        });
        $("input[name=modal_contract_expire_date]").change(function() {
            $("input[name=modal_contract_sent_date]").first().data("reval", true).valid();
            $("input[name=modal_contract_sent_date]").first().data("reval", false);
            $("input[name=modal_contract_signed_date]").first().data("reval", true).valid();
            $("input[name=modal_contract_signed_date]").first().data("reval", false);
        });

        $("#addAgencyForm").submit(function() {
            goToTheRightTab($("#addAgencyForm"));
        });
    };

    /*
     * add validation rules for social forms based on feilds name suffix. we use
     * this way when we wants to add new validation rules based on spicific selcotrs.
     * @author Yousef Mahmoud.
     */
    var updateSocialMediaRules = function() {

        $(".social input[name$='_link']").each(function() {
            $(this).rules("add", {
                //url: true,
                ip_url: true,
                required: true,
                maxlength: 2048
            });
        });
    };
    return {
        init: function() {
            /**
             * override the JQuery validation plufin function "checkForm" so that now
             * we could validate dynamic generated failds in any form.
             * @return (function) overriden checkform function.
             * @see http://stackoverflow.com/questions/931687/using-jquery-validate-plugin-to-validate-multiple-form-fields-with-identical-nam/
             */
            $.validator.prototype.checkForm = function() {
                //overriden in a specific page
                this.prepareForm();
                for (var i = 0, elements = (this.currentElements = this.elements()); elements[i]; i++) {
                    if (this.findByName(elements[i].name).length !== undefined && this.findByName(elements[i].name).length > 1) {
                        for (var cnt = 0; cnt < this.findByName(elements[i].name).length; cnt++) {
                            this.check(this.findByName(elements[i].name)[cnt]);
                        }
                    } else {
                        this.check(elements[i]);
                    }
                }
                return this.valid();
            };
            /**
             * From the 1.9.0 Change Log of jQuery Validate:
             * Fixed #189 - :hidden elements are now ignored by default
             * To turn it back on simply do the following:
             * @see http://stackoverflow.com/questions/12308138/jquery-validator-plugin-with-displaynone-form-elements
             */
            $.validator.setDefaults({
                ignore: []
            });

            customValidation();
            resourcesInit();
            FormValidations();
            bindUIActions();
            updateSocialMediaRules();
        },
    };
})();