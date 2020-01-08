// This makes the header text follow the mouse as it moves in the webpage
$("html").mousemove(function (event) {
    $("#heading").offset({
        left: event.pageX,
        top: event.pageY
    });
});

