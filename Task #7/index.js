$(document).ready(function () {
    // Wikipedia API autocomplete suggestions
    $("#searchBox").autocomplete({
        source: function (request, response) {
            $.ajax({
                url: "https://en.wikipedia.org/w/api.php",
                dataType: "jsonp",
                data: {
                    action: "opensearch",
                    format: "json",
                    search: request.term
                },
                success: function (data) {
                    console.log(data)
                    response(data[1]); // Autocomplete results
                },
                error: function (err) {
                    console.log(err);
                }
            });
        },
        minLength: 3
    });

    // Search button click event
    $("#searchButton").click(function () {
        searchWikipedia();
    });

    // Enter key event
    $("#searchBox").keypress(function (event) {
        if (event.which == 13) {
            event.preventDefault();
            searchWikipedia();
        }
    });

    function searchWikipedia() {
        let query = $("#searchBox").val().trim();
        if (query.length < 3) return;

        $("#results").empty(); // Clear previous results

        $.ajax({
            url: "https://en.wikipedia.org/w/api.php",
            dataType: "jsonp",
            data: {
                action: "query",
                format: "json",
                list: "search",
                srsearch: query
            },
            success: function (data) {
                let results = data.query.search;
                results.forEach(item => {
                    $("#results").append(`
                                <div>
                                    <a href="https://en.wikipedia.org/wiki/${encodeURIComponent(item.title)}" target="_blank">${item.title}</a>
                                    <p>${item.snippet}...</p>
                                </div>
                            `);
                });
            }
        });
    }
});
