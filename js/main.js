$(document).ready(function () {
    $(".navigator-toggle i").click(function () {
        $(".tuples-navigation").addClass("open");
    });
    $(".close").click(function () {
        $(".tuples-navigation").removeClass("open");
    });
});