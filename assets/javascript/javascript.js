var win = window;


$(win).on("resize", function (e) {
    var windowSize = win.outerWidth;
    console.log(win.outerWidth);
    console.log("Window size" + " " + windowSize);

    if (windowSize < 768) {
        $("#navButton").removeClass("hidden");
        $("nav h4").css("margin-top", "-30px");
        e.stopPropagation();
        console.log("button should be visible");
    } else {
        $("#navButton").addClass("hidden");
        $("nav h4").css("margin-top", "2px");
        e.stopPropagation();
    }
});




// Typewriter text on index.html
var interval = setInterval(typeWriter, Math.floor(Math.random() * (200 - 100) + 100));
var counter = 0;
var span = $("<span>");
$("#homeText").append(span);


function typeWriter() {
    var greeting = "Hello, World!  Welcome to my place.";
    var msg = greeting.split('');
    var letter = msg[counter];
    let str = msg;
    console.log(str.length);

    if (counter < str.length) {
        span.append(letter)
            .css("font-size","18px")
            .css("font-weight","bold")
            .css("color","#862d86");

        counter++;
        console.log("Counter = ", counter);
    } else {
        clearInterval(interval);
    }
}

// interval();

