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
var interval = setInterval(typeWriter, Math.floor(Math.random() * (250 - 100) + 100));
var counter = 0;
var span = $("<span>");
$("#homeText").delay(1500).append(span);


function typeWriter() {
    var greeting = "Hello, World!";
    var msg = greeting.split('');
    var letter = msg[counter];
    let str = msg;

    if (counter < str.length) {
        span.append(letter)
            .css("font-size", "22px")
            .css("color", "#862d86");
        counter++;
    } else {
        clearInterval(interval);
    }
}


$(window).on("load", function () {
    let completeChk = sessionStorage.getItem("animate");
    if(completeChk) {
        $("#profilePic").css("opacity","1").css("margin-top","0px");
    }
    else {
        introFade();
    }

});

function introFade() {

    $("#profilePic").animate({
        "opacity": "1",
        "margin-top": "0px"
    }, 1800);
    
    sessionStorage.setItem("animate","complete");
};



