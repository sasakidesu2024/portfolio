"use strict";

// $(function () {
//     // ボタンがクリックされたら発動
//     $(".hamburger").on("click", function () {
//         // ドロワーメニュー部分のアニメーション
//         $(".slide-menu").toggleClass("is-active");
//         // ボタン部分のアニメーション
//         $(".hamburger").toggleClass("is-active");
//     });
// });

// 同じ内容



$(function () {
    $('.hamburger').click(function () {
        $('.hamburger, .slide-menu').toggleClass('active');
    });
});//scroll_effect


// WORKSの絵がスクロールしたら順番に出てくる 2行目から


jQuery(function ($) {
    $(window).on('load scroll', function () {

        var box = $('.fadeup');
        var animated = 'active';

        box.each(function () {

            var boxOffset = $(this).offset().top;
            var scrollPos = $(window).scrollTop();
            var wh = $(window).height();

            if (scrollPos > boxOffset - wh + 100) {
                $(this).addClass(animated);
            }
        });
    });
})

// topにいくボタン

$(function () {
    var pagetop = $('#page-top');
    pagetop.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            pagetop.fadeIn();
        } else {
            pagetop.fadeOut();
        }
    });
    pagetop.click(function () {
        $('body, html').animate({ scrollTop: 0 }, 500);
        return false;
    }); 
});
