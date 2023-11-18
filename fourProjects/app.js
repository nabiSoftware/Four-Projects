"use strict";

$(document).ready(function () {

    // ekran yuklenende 992px genislikden kicik ve ya beraber olanda isleyir bu funksiyalar
    if ($(window).width() <= 992) {
        $("#hamburgerMenu").click(function () {

            // - linklerin gizledilib ve ya gorsedilmesi
            $("nav a").slideToggle();

            // - icon change
            $(this).toggleClass("fa-bars fa-times");
        });

        $("nav a").click(function () {

            // - linklerin yuxariya dogru gizledilmesi
            $("nav a").slideUp();

            // - cancel iconun legv edib menu iconun elave edir 
            $("#hamburgerMenu").removeClass("fa-times").addClass("fa-bars");

        });
    }
});




