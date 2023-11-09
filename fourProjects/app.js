"use strict";

$(document).ready(function () {
    $("#hamburgerMenu").click(function () {
        $("nav a").slideToggle();
        $(this).toggleClass("fa-bars fa-times");
    });
});