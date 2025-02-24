/**
* this is a module that responsible for sarching and sorting in all pages.
* @return init() function.
* @author Yousef Mahmood
*/
var SortAndSearchModule = (function() {
    var resources;
    /**
    * initialize the UI resources.
    * @author Yousef Mahmoud.
    */
    var UIinit = function() {
        resources = {
            sort_menu: $('.sortby-panel .sortby-menu'),
            sortby_concept: $('.sortby-panel span#sortby_concept'),
            grid_item: $('.grid-item'),
            grid_items: $('.grid-items'),
            modal_grid_items: $('.modal-grid-items'),
            search_input: $('.search-input'),
            modal_search_input: $('.modal-search-input'),
                /**
                * get the grid-item parents based on the parent ID selector.
                * @return (Array) array contains all the parents IDs selectors.
                * @author Yousef Mahmoud.
                */
            grid_items_id: function() {
                var id = [],
                    i = 0;
                $('.grid-item').parent().each(function() {
                    id[i] = $('#' + $(this).attr('id'));
                    i++;
                });
                return id;
            },
            /**
            * get the grid-items based on the parent ID selector.
            * @return (Array) array contains all the grid-items selectors.
            * @author Yousef Mahmoud.
            */
            grid_items_list: function() {
                //var list = $('.grid-item').parent().attr('id');
                var list = [],
                    i = 0;
                $('.grid-item').parent().each(function() {
                    list[i] = $('#' + $(this).attr('id') + ' > .grid-item');
                    i++;
                });
                return list;
            }
        };
        //to sort the items once you open the page
        sortList(".invoice-title", "down");
        sortList(".agency-name", "down");
        sortList(".file-name", "down");
        sortList(".student-name", "down");
        sortList(".name", "down");
    };
    /**
    * sort a list that consists of grid-items.
    * @param param: (String) the criteria which is followed to sort the list, 
      sortType: (String) the sort type decreasing or increasing.
    * @author Yousef Mahmoud, Salman Shtayeh.
    */
    var sortList = function(param, sortType) {
        function sortEm(a, b) {
            //console.log("sort-value: " + $(param, a).text() );
            //compare numbers insted of texts!
            if(param === ".file-bytes" || param === ".number") {
                if (sortType === "down")
                    return parseFloat( $(param, a).text() ) <= parseFloat( $(param, b).text() ) ? -1 : 1;
                else 
                    return parseFloat( $(param, a).text() ) >= parseFloat( $(param, b).text() ) ? -1 : 1;
            }
            //compare timestamps insted of text dates.
            else if(param === ".file-updatedAt") {
                if (sortType === "down")
                    return new Date($(param, a).text()).getTime() / 1000 <= new Date($(param, b).text()).getTime() / 1000 ? -1 : 1;
                else 
                    return new Date($(param, a).text()).getTime() / 1000 >= new Date($(param, b).text()).getTime() / 1000 ? -1 : 1;
            }
            //sort by string.
            else {
                if (sortType === "down")
                    return $(param, a).text().toLowerCase() <= $(param, b).text().toLowerCase() ? -1 : 1;
                else 
                    return $(param, a).text().toLowerCase() >= $(param, b).text().toLowerCase() ? -1 : 1;
            }
        }
        var i = 0;
        $(resources.grid_items_list()).each(function() {
            $(this).sort(sortEm).prependTo(resources.grid_items_id()[i]);
            i++;
        });
    };
       /**
        * bind the UI actions.
        * @author Yousef Mahmoud, Salman Shtayeh.
        */
    var bindUIActions = function() {
        //evnt handling to sort the grid items
        resources.sort_menu.find('a').on("click", function(e) {
            // e.preventDefault();
            // e.stopImmediatePropagation();
            var param = $(this).attr("href").replace("#", "");
            var concept = $(this).text();
            //var conceptParentID = $(this).parents("div[role='tabpanel']").attr("id");
            resources.sortby_concept.text(concept);
            //to make the newwest invoice appaer in top od page insted the bottom
            if(param === "invoice-date" || param === "agency-offices" ||  param === "file-bytes" || param === "file-updatedAt" || param === "files-count" || param === "number")
            {
                sortList('.' + param + '', "up");
            }
            else
            {
                sortList('.' + param + '', "down");
            }
        });
        //evnt handling to filter the grid items
        resources.search_input.change(function() {
            var filter = $(this).val();
            if (filter == "") {
                $(resources.grid_items).find(".grid-item").show();
            } else if (filter) {
                //var sel = $(".sortby-menu").val();               
                $(resources.grid_items).find(".grid-item .term:not(:Contains(" + filter + "))").parents('.grid-item').hide();
                $(resources.grid_items).find(".grid-item .term:Contains(" + filter + ")").parents('.grid-item').show();
            }
            return false;
        }).keyup(function() {
            $(this).change();
        });

        resources.modal_search_input.change(function() {
            var filter = $(this).val();
            if (filter == "") {
                $(resources.modal_grid_items).find(".modal-grid-item").show();
            } else if (filter) {
                //var sel = $(".sortby-menu").val();               
                $(resources.modal_grid_items).find(".modal-grid-item .modal-term:not(:Contains(" + filter + "))").parents('.modal-grid-item').hide();
                $(resources.modal_grid_items).find(".modal-grid-item .modal-term:Contains(" + filter + ")").parents('.modal-grid-item').show();
            }
            return false;
        }).keyup(function() {
            $(this).change();
        });
    };
    return {
       /**
        * intialize the Module.
        * @author Yousef Mahmoud.
        */
        init: function() {
            UIinit();
            bindUIActions();
        }
    };
})();