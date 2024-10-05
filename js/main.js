/*global $*/
$(function() {
    'use strict';
    $('.product-info ul li').click(function () {
        $(this).addClass('active').siblings('li').removeClass('active');
        console.log($(this).data('class'))
        $('.product-info .choice div').hide();
        $('.' + $(this).data('class')).fadeIn();
    })
})