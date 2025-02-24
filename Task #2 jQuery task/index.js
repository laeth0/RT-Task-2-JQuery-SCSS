$(document).ready(function () {
    $('#move-right').click(function () {
        let lastBox = $('.left-box .card .element').last();
        if (lastBox.length)
            $('.right-box .card').append(lastBox);
        else
            alert("There are no more boxes to move!");
    });

    $('#move-left').click(function () {
        let lastBox = $('.right-box .card .element').last();
        if (lastBox.length)
            $('.left-box .card').append(lastBox);
        else
            alert("There are no more boxes to move!");
    });
});