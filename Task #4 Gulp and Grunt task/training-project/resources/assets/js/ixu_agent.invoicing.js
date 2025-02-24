/**
* this module is for the invoicing page, it contains all needed
* functions to add,delete,display, and show the rows for both 
* create and update invoicing pages -for both shcool and agent-
* @return (Functions) inti(), updateTotalAmount(), deleteExistingRow(), deleteRow().
* @author Yousef Mahmoud.
*/

var InvoicingModule = (function() {    
    var resources, rowToDelete, newStudentNum = 0, newBillNum = 0;
    /**
    * initialize the UI resources.
    * @author Yousef Mahmoud.
    */
    var UIinit = function() {
        resources = {
            show_hide_checkbox: $(':input[type="checkbox"][name="custom_col"]'),
            custom_field: $('.custom-field'),
            total_invoice: $('.total-invoice-margin[name="total"]'),
            amount_field: $(':input[type="number"][name="amount[]"]'),
            init_amount_field: $(':input[type="hidden"][name="initAmount"]'),
            table_body: $('#input'),
            table_body_bill: $('#input_bill'),
            add_new_student: $('#ActionAddRow'),
            add_existing_student: $('#addExistingStudents'),
            delete_student: $('.btn[data-target="#confirm-delete"]'),
            delete_saved_student: $('.saved-row'),
            update_confirm_delete: $('#confirm-delete_student'),
            school_url: "/school/invoice/delete/student/",
            agency_url: "/agency/invoice/delete/student/",
            rows_count: function() {
                return $('#studentsTable tr').length;
            },
            amount_paid: $(':input[type="number"][name="amount_paid[]"]'),
            add_new_bill: $('#ActionNewBill'),
            delete_bill: $('.btn[data-target="#confirm-delete-bill-row"]'),
            delete_saved_bill: $('.saved-row-bill'),
            update_confirm_delete_bill: $('#confirm-delete_bill'),
            school_bill_url: "/school/invoice/delete/bill/",
            agency_bill_url: "/agency/invoice/delete/bill/",
            total_payments: $('.total-invoice-margin[name="total_payments"]'),
            amount_paid_field: $(':input[type="number"][name="amount_paid[]"]'),
            rows_bills_count: function() {
                return $('#billsTable tr').length;
            }
        };
        //Examine invoicing custom field checkbox status
        if (resources.show_hide_checkbox.is(":checked")) {
            resources.custom_field.show();
        } else {
            resources.custom_field.hide();
        }
        //Calculate the amount fileds of the invoice and set the result in the total output filed 
        resources.total_invoice.text(getTotalAmount());

        //Calculate the amount fileds of the payments and set the result in the total_payments output filed 
        resources.total_payments.text(getTotalAmountPayments());
        resources.amount_paid_field.change(getTotalAmountPayments());
    };
     /**
    * calculate the total amount from amount feilds.
    * @return (Int) the total amount.
    * @author Yousef Mahmoud.
    */
    var getTotalAmount = function() {
        var total = 0;
        resources.amount_field.each(function(i) {
            total += +this.value;
        });
        resources.total_invoice.attr("value", total);
        return total;
    };

    var getTotalAmountPayments = function() {
        var new_total_payments = 0;
        resources.amount_paid_field.each(function(i) {
            new_total_payments += +this.value;
        });
        resources.total_payments.attr("value", new_total_payments);
        return new_total_payments;
    };

    var getCurrentDate = function() {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!
        var yyyy = today.getFullYear();
        if (dd < 10) {
            dd = '0' + dd
        }
        if (mm < 10) {
            mm = '0' + mm
        }
        today = yyyy + '-' + mm + '-' + dd;
        return today;
    };
    var addInputRow = function() {
        resources.table_body.append("<tr><td><input name='date[]' type='date' value=" + getCurrentDate() + "></td>" +
            "<td><input placeholder= 'Name' name='student[]' type='text' id='student-" + newStudentNum + "'></td>" +
            "<td><input name='birth[]' type='date' value=" + getCurrentDate() + "></td>" +
            "<td><label class='select-with-icon'><select id='terms' name='term[]' class='user-success'>" +
            "<option value='spring'>Spring</option><option value='summer'>Summer</option>" +
            "<option value='fall'>Fall</option></select>" +
            "<i class='fa fa-caret-down' aria-hidden='true'></i></label></td>" +
            "<td><input placeholder= 'Amount' name='amount[]' id='amount-" + newStudentNum + "' type='number' value=" + resources.init_amount_field.val() + "></td>" +
            "<td class='custom-field' ><input name='other[]' placeholder= 'Custom value' type='text' value=''></td>" +
            "<td><button value='Delete' class='btn  btn-danger' data-toggle='modal' data-target ='#confirm-delete' type='button'>Delete</button></td>" +
            "<td class='hidden-cell'><input class='form-control' name='student_id[]' type='hidden' value='new'></td>" +
            "<td class='hidden-cell'><input class='form-control' name='student_invoice_id[]' type='hidden' value='new'></td>" +
            "</tr>");
        UIinit(); //update the resources
        bindUIActions();
        newStudentNum++;
    };

    var addInputRowBill = function() {
        resources.table_body_bill.append("<tr><td><input name='bill_date[]' type='date' value=" + getCurrentDate() + "></td>" +
            "<td><label class='select-with-icon'><select id='paid_by' name='paid_by[]' class='user-success'>" +
            "<option value='credit_card'>Credit Card</option><option value='check'>Check</option>" +
            "<option value='wire_transfer'>Wire Transfer</option><option value='others'>Others</option></select>" +
            "<i class='fa fa-caret-down' aria-hidden='true'></i></label></td>" +
            "<td><input placeholder= 'Amount' name='amount_paid[]' id='amount_paid" + newBillNum + "' type='number' value='0'></td>" + "<td><div class='checkbox-wrapper'><div class='rounded-checkbox'><label style='cursor:default'><input disabled='disabled' style='cursor:default;' name='is_paid[]' type='checkbox'><i class='fa fa-check-circle' aria-hidden='true'></i></label</div></div></td>"+
            "<td><button value='Delete' class='btn  btn-danger' data-toggle='modal' data-target ='#confirm-delete-bill-row' type='button'>Delete</button></td>" +
            "<td class='hidden-cell'><input class='form-control' name='agency_id[]' type='hidden' ></td>" +
            "<td class='hidden-cell'><input class='form-control' name='bill_details_id[]' type='hidden' value='new'></td>" +
            "</tr>");
        UIinit(); //update the resources
        bindUIActions();
        newBillNum++;
    };
        var addRowsForExistingStudents = function() {


         $("input:checkbox[name=student_checkbox]:checked").each(function() {
            var spring = "<option value='spring'>Spring</option>";
            if($(this).attr("term") == 0){
                spring = "<option value='spring' selected='selected'>Spring</option>";
            }
            var summer = "<option value='summer'>Summer</option>";
            if($(this).attr("term") == 1){
                summer = "<option value='summer' selected='selected'>Summer</option>";
            }
            var fall = "<option value='fall'>Fall</option></select>";
            if($(this).attr("term") == 2){
                fall = "<option value='fall' selected='selected'>Fall</option></select>";
            }

             resources.table_body.append("<tr><td><input name='date[]' type='date' value=" + getCurrentDate() + "></td>" +
            "<td><input placeholder= 'Name' name='student[]'  type='text' id='student-" + newStudentNum + "' value='"+$(this).attr("id")+"'></td>" +
            "<td><input name='birth[]' type='date' value=" + $(this).attr("birth_date")+ "></td>" +
            "<td><label class='select-with-icon'><select id='terms' name='term[]' class='user-success'>" +
            spring + summer + fall + 
            "<i class='fa fa-caret-down' aria-hidden='true'></i></label></td>" +
            "<td><input placeholder= 'Amount' name='amount[]' id='amount-" + newStudentNum + "' type='number' value=" + resources.init_amount_field.val() + "></td>" +
            "<td class='custom-field' ><input name='other[]' placeholder= 'Custom value' type='text' value=''></td>" +
            "<td><button value='Delete' class='btn  btn-danger' data-toggle='modal' data-target ='#confirm-delete' type='button'>Delete</button></td>" +
            "<td class='hidden-cell'><input class='form-control' name='student_id[]' type='hidden' value='"+$(this).attr("value")+"'></td>" +
            "<td class='hidden-cell'><input class='form-control' name='student_invoice_id[]' type='hidden' value='new'></td>" +
            "</tr>");
             newStudentNum++;
         });
       
        UIinit(); //update the resources
        bindUIActions();
                        
        $('#studentsModal').modal('hide'); // hide modal
        $("#studentsModal :input[type='checkbox']").each(function() {
                   $(this).prop('checked', false);
         });
    };
    /**
    * control the delete button status disabled or enabled.
    * @author Yousef Mahmoud.
    */
    var updateDeleteButton = function() {
        if (resources.rows_count() <= 2) {
            $("button[data-target ^='#confirm-delete']").first().prop('disabled', true);
        }
        else {
            $("button[data-target ^='#confirm-delete']").first().prop('disabled', false);
        }
    };
    /**
    * bind the UI actions.
    * @author Yousef Mahmoud.
    */
    var bindUIActions = function() {
        //Add or remove invoicing custom field    
        resources.show_hide_checkbox.click(function() {
            if (this.checked) {
                resources.custom_field.show();
            } else {
                resources.custom_field.hide();
            }
        });
        // add new row to the invoicing table
        resources.add_new_student.on('click', function(e) {
            e.preventDefault();
            e.stopImmediatePropagation();
            addInputRow();
            updateDeleteButton();
        });

        // add new row to the bills invoicing table
        resources.add_new_bill.on('click', function(e) {
            e.preventDefault();
            e.stopImmediatePropagation();
            addInputRowBill();
            updateDeleteButton();
        });
        resources.amount_paid_field.change(getTotalAmountPayments());
        resources.add_existing_student.on('click', function(e) {
            e.preventDefault();
            e.stopImmediatePropagation();
            addRowsForExistingStudents();
            updateDeleteButton();
        });
        // get the row you want to delete
        resources.delete_student.click(function(e) {
            rowToDelete = e.target;
        });
        resources.delete_bill.click(function(e) {
            rowToDelete = e.target;
        });

        resources.delete_saved_student.on('click', function(e) {
            resources.update_confirm_delete.find('.btn-ok').attr('id', 'delete_' + $(e.target).data('id'));
        });

        resources.delete_saved_bill.on('click', function(e) {
            resources.update_confirm_delete_bill.find('.btn-ok').attr('id', 'delete_' + $(e.target).data('id'));
        });
    };

    var delete_agent_student = function(btn) {
        $.ajax({
            type: "GET",
            url: resources.agency_url + btn.attr('id'),
            data: ''
        }).done(function(msg) {
            if (msg == 'success') {
                $(btn).parents('tr').first().remove();
                UIinit();
            } else {
                //TODO:here we should replace the alert with more appropriate message box
                //the msg = "You should have at least one student" it is returned from the invoiceController
                alert(msg);
            }
        });
    };

    var delete_school_student = function(btn) {
        $.ajax({
            type: "GET",
            url: resources.school_url + btn.attr('id'),
            data: ''
        }).done(function(msg) {
            if (msg == 'success') {
                $(btn).parents('tr').first().remove();
                UIinit();
            } else {
                //TODO:here we should replace the alert with more appropriate message box
                //the msg = "You should have at least one student" it is returned from the invoiceController
                alert(msg);
            }
        });
    };

    var delete_agency_bill = function(btn) {
        $.ajax({
            type: "GET",
            url: resources.agency_bill_url + btn.attr('id'),
            data: ''
        }).done(function(msg) {
            if (msg == 'success') {
                $(btn).parents('tr').first().remove();
                UIinit();
            } else {
                //TODO:here we should replace the alert with more appropriate message box
                //the msg = "You should have at least one student" it is returned from the invoiceController
                alert(msg);
            }
        });
    };

    var delete_school_bill = function(btn) {
        $.ajax({
            type: "GET",
            url: resources.school_bill_url + btn.attr('id'),
            data: ''
        }).done(function(msg) {
            if (msg == 'success') {
                $(btn).parents('tr').first().remove();
                UIinit();
            } else {
                //TODO:here we should replace the alert with more appropriate message box
                //the msg = "You should have at least one student" it is returned from the invoiceController
                alert(msg);
            }
        });
    };
    return {
        /**
        * initialize the module.
        * @author Yousef Mahmoud.
        */
        init: function() {
            UIinit();
            bindUIActions();
            updateDeleteButton();
        },
        /**
        * update the total amount.
        * @return (Function) getTotalAmount().
        * @author Yousef Mahmoud.
        */
        updateTotalAmount: function() {
            return getTotalAmount();
        },

        updateTotalAmountPayments: function() {
            return getTotalAmountPayments();
        },
        //delete a row from invoicing table
        /**
        * delete a row from the invoicing table.
        * @author Yousef Mahmoud.
        */
        deleteRow: function() {
            if (resources.rows_count() <= 2) {
                //TODO:here we should replace the alert with more appropriate message box
                //alert('You should have at least one saved student!');
            } else {
                $(rowToDelete).parents('tr').first().remove();
                updateDeleteButton();
                UIinit();
            }
        },

        deleteRowBill: function() {
            $(rowToDelete).parents('tr').first().remove();
            UIinit();
        },

        deleteExistingRow: function(id) {
            var btn = $('#' + id.replace('delete_', ''));
            if (resources.rows_count() <= 2) {
                //TODO:here we should replace the alert with more appropriate message box
                //alert('You should have at least one saved student!');
            } else {
                if ($('.update-agency').length) {
                    delete_agent_student(btn);
                } else if ($('.update-school').length)
                    delete_school_student(btn);
                updateDeleteButton();
            }
        },

        deleteExistingRowBill: function(id) {
            var btn = $('#' + id.replace('delete_', ''));
                if ($('.update-agency').length) {
                    delete_agent_bill(btn);
                } else if ($('.update-school').length)
                    delete_school_bill(btn);
        }
    };
})();