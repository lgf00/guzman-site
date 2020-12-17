$(document).ready(function() {
    let time = 1000;
    let offset = 200;
    $('#div1').fadeIn(time);
    $('#div2').delay(time - offset).fadeIn(time);
    $('#div3').delay((time - offset) * 2).fadeIn(time);
    $('#div4').delay((time - offset) * 3).fadeIn(time);
    $('#div5').delay((time - offset) * 4).fadeIn(time);
    $('#div6').delay((time - offset) * 5).fadeIn(time);
    $('#div7').delay((time - offset) * 6).fadeIn(time);
    $('#div8').delay((time - offset) * 7).fadeIn(time);
    $('#div9').delay((time - offset) * 8).fadeIn(time);
    $('#div10').delay((time - offset) * 9).fadeIn(time);
    $('#enter').delay((time - offset) * 9).fadeIn(time);

    // $(".image").hover(function() {
    //     $(this).css("filter", "grayscale(0%)");
    //     $(this).css("z-index", "2");
    //     console.log("hover");
    // }, function() {
    //     $(this).css("filter", "grayscale(100%");
    //     $(this).css("z-index", "auto");
    // })
    $(".image").click(function() {
        $(this).toggleClass("fullscreen");
        $(this).addClass("color");
    })
});

