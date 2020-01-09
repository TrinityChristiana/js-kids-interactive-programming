// This animates the heading in a square

let topOffset = 25;
let leftOffset = 25;

let moveHeading = function () {
    $("h1").offset({
        left: leftOffset,
        top: topOffset
    });

    if (leftOffset < 425 && topOffset == 25){
        leftOffset++;
    }  else if (leftOffset == 425 && topOffset < 425) {
        topOffset++;
    } else if (leftOffset > 25 && topOffset == 425) {
        leftOffset--;
    } else if (topOffset > 25 && leftOffset == 25){
        topOffset--;
    }
    console.log("words");
};

let doSetInterval = (interval) => {
    return setInterval(moveHeading, interval);
}

let interval = 100;
let intervalId = doSetInterval(interval);
console.log(typeof interval);
let stopAnimation = () => {
    clearInterval(intervalId);
}

let clicks = 0;

$("h1").click(function (){

    if (clicks < 10){
        clicks++;
        interval = interval / 2;
        clearInterval(intervalId);
        intervalId = doSetInterval(interval);
        console.log(interval);
    } else if (clicks == 10){
        clearInterval(intervalId);
        $("h1").html(`You win!!!`);        
    }
});


$("p").click(function () {
    // console.log(typeof interval);
    // clearInterval(intervalId);
    // $("h1").html(`You win!!!`);
});


// (Mousemove event) This makes the header text follow the mouse as it clicks in the webpage

/* $("html").mousemove(function (event) {
    $("#heading").offset({
        left: event.pageX,
        top: event.pageY
    });
}); */


// (Follow the clicks) This makes the header text follow the mouse as it clicks in the webpage

/* $("html").click(function (event) {
    $("#heading").offset({
        left: event.pageX,
        top: event.pageY
    });
}); */

