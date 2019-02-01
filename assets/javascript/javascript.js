var win = window;


console.log("Test");


$(win).on("resize", function(e){
    var windowSize = win.outerWidth;
    console.log(win.outerWidth);
    console.log("Window size" + " " + windowSize);

    if(windowSize < 768){
        $("#navButton").removeClass("hidden");
        $("nav h4").css("margin-top", "-30px");
        e.stopPropagation();
        console.log("button should be visible");
    } else {
        $("#navButton").addClass("hidden");
        $("nav h4").css("margin-top", "2px");
        e.stopPropagation();
    }
})



