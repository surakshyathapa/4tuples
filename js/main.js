$(document).ready(function () {

    //menu show hide
    $(".navigator-toggle i").click(function () {
        $(".tuples-navigation").addClass("open");
    });
    $(".close").click(function () {
        $(".tuples-navigation").removeClass("open");
    });

    // scroll to top
    $("a[href='#top']").click(function () {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });
});