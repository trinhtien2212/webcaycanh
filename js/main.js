/*  ---------------------------------------------------
    Template Name: Ogani
    Description:  Ogani eCommerce  HTML Template
    Author: Colorlib
    Author URI: https://colorlib.com
    Version: 1.0
    Created: Colorlib
---------------------------------------------------------  */

'use strict';

// Material Select Initialization
$(document).ready(function() {
    $('.mdb-select').materialSelect();
    });

(function ($) {

    /*------------------
        Preloader
    --------------------*/
    $(window).on('load', function () {
        $(".loader").fadeOut();
        $("#preloder").delay(200).fadeOut("slow");

        /*------------------
            Gallery filter
        --------------------*/
        $('.featured__controls li').on('click', function () {
            console.log("Co vo");
            $('.featured__controls li').removeClass('active');
            $(this).addClass('active');
        });
        if ($('.featured__filter').length > 0) {
            var containerEl = document.querySelector('.featured__filter');
            var mixer = mixitup(containerEl);
        }

        $('.code_sale_controls li').on('click', function () {
            console.log('Co vo');
            $('.code_sale_controls li').removeClass('active');
            $(this).addClass('active');
        });
        if ($('.code_sale_filter').length > 0) {
            var containerEl1 = document.querySelector('.code_sale_filter');
            var mixer = mixitup(containerEl1);
        }
    });
    // Viet them
    $('#show_immediately').click(function (e) { 
        console.log("co vo0-------------");
        $('#addShow_imme').addClass('mixitup-control-active');
        
    });
    // end viet them

    /*------------------
        Background Set
    --------------------*/
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });

    //Humberger Menu
    $(".humberger__open").on('click', function () {
        $(".humberger__menu__wrapper").addClass("show__humberger__menu__wrapper");
        $(".humberger__menu__overlay").addClass("active");
        $("body").addClass("over_hid");
    });

    $(".humberger__menu__overlay").on('click', function () {
        $(".humberger__menu__wrapper").removeClass("show__humberger__menu__wrapper");
        $(".humberger__menu__overlay").removeClass("active");
        $("body").removeClass("over_hid");
    });

    /*------------------
        Navigation
    --------------------*/
    $(".mobile-menu").slicknav({
        prependTo: '#mobile-menu-wrap',
        allowParentLinks: true
    });

    /*-----------------------
        Categories Slider
    ------------------------*/
    $(".categories__slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 4,
        dots: false,
        nav: true,
        navText: ["<span class='fa fa-angle-left'><span/>", "<span class='fa fa-angle-right'><span/>"],
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        responsive: {

            0: {
                items: 1,
            },

            480: {
                items: 2,
            },

            768: {
                items: 3,
            },

            992: {
                items: 4,
            }
        }
    });


    $('.hero__categories__all').on('click', function () {
        $('.hero__categories ul').slideToggle(400);
    });

    /*--------------------------
        Latest Product Slider
    ----------------------------*/
    $(".latest-product__slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        dots: false,
        nav: true,
        navText: ["<span class='fa fa-angle-left'><span/>", "<span class='fa fa-angle-right'><span/>"],
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true
    });

    /*-----------------------------
        Product Discount Slider
    -------------------------------*/
    $(".product__discount__slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 3,
        dots: true,
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        responsive: {

            320: {
                items: 1,
            },

            480: {
                items: 2,
            },

            768: {
                items: 2,
            },

            992: {
                items: 3,
            }
        }
    });

    /*---------------------------------
        Product Details Pic Slider
    ----------------------------------*/
    $(".product__details__pic__slider").owlCarousel({
        loop: true,
        margin: 20,
        items: 4,
        dots: true,
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true
    });

    /*-----------------------
        Price Range Slider
    ------------------------ */
    var rangeSlider = $(".price-range"),
        minamount = $("#minamount"),
        maxamount = $("#maxamount"),
        minPrice = rangeSlider.data('min'),
        maxPrice = rangeSlider.data('max');
        
    rangeSlider.slider({
        range: true,
        min: minPrice,
        max: maxPrice,
        values: [minPrice, maxPrice],
        slide: function (event, ui) {
            minamount.val(ui.values[0]+'.000 VNĐ');
            maxamount.val(ui.values[1]+'.000 VNĐ');
        }
    });
    minamount.val(rangeSlider.slider("values", 0)+".000 VNĐ");
    maxamount.val(rangeSlider.slider("values", 1)+".000 VNĐ");

    /*--------------------------
        Select
    ----------------------------*/
    $("select").niceSelect();

    /*------------------
        Single Product
    --------------------*/
    $('.product__details__pic__slider img').on('click', function () {

        var imgurl = $(this).data('imgbigurl');
        var bigImg = $('.product__details__pic__item--large').attr('src');
        if (imgurl != bigImg) {
            $('.product__details__pic__item--large').attr({
                src: imgurl
            });
        }
    });

    /*-------------------
        Quantity change
    --------------------- */
    var proQty = $('.pro-qty');
    proQty.prepend('<span class="dec qtybtn">-</span>');
    proQty.append('<span class="inc qtybtn">+</span>');
    proQty.on('click', '.qtybtn', function () {
        var $button = $(this);
        var oldValue = $button.parent().find('input').val();
        if ($button.hasClass('inc')) {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        $button.parent().find('input').val(newVal);
    });

    // Header sale
    var ww = $(window).width();
    $(window).on("resize",function(){
        ww = $(window).width();
        if(ww < 980) {
            $("#sys_mod_filter").removeClass("fix-top");
            $("#sys_tmp_height_filter").remove();
        }
    });
    var sys_mod_filter = $("#sys_mod_filter");
    if(sys_mod_filter.length>0) {
        var filterOffTop = $("#sys_mod_filter").offset().top;
        $(window).on("scroll",function(){
            if (ww > 980) {
                var getOffTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
                if(getOffTop>filterOffTop) {
                    sys_mod_filter.addClass("fix-top");
                    if($("#sys_tmp_height_filter").length<=0) {
                        $("<div id='sys_tmp_height_filter'></div>").height($("#sys_mod_filter").outerHeight(true)).insertAfter("#sys_mod_filter");
                    }
                }else{
                    sys_mod_filter.removeClass("fix-top");
                    $("#sys_tmp_height_filter").remove();
                }
            }
        });
    }
    $("#sys_apply_filter").on("click",function(){
        var paramAjax = {
            keyword: $("#sys_txt_search").val(),
            cateId: $("#sys_selected_val").children("span").attr("data-cate-id"),
            minDayLeft: $("#sys_filter_days_left").val()[0],
            maxDayLeft: $("#sys_filter_days_left").val()[1]
        };
        console.log(paramAjax);
    });
    $("#sys_selected_val").on("click",function(e){
        $("#sys_list_dd_cate").fadeToggle(300);
        $("body").on("click.hideDropCate",function(){
            $("#sys_list_dd_cate").fadeOut(300);
            $("body").off("click.hideDropCate");
        });
        e.stopPropagation();
    });
    $("#sys_list_dd_cate").on("click","a",function(e) {
        $("#sys_selected_val").children("span").html($(this).html()).attr("data-cate-id", $(this).attr("data-cate-id"));
        $("#sys_list_dd_cate").fadeOut(300);
        $("body").off("click.hideDropCate");
        e.stopPropagation();
        return false;
    });
    $("#sys_apply_filter").on("click",function(){
        var paramAjax = {
            keyword: $("#sys_txt_search").val(),
            cateId: $("#sys_selected_val").children("span").attr("data-cate-id"),
            minDayLeft: $("#sys_filter_days_left").val()[0],
            maxDayLeft: $("#sys_filter_days_left").val()[1]
        };
        console.log(paramAjax);
    });

})(jQuery);
$(document).ready(function () {
    var select = document.getElementById('select');

// Append the option elements
// for (var i = -20; i <= 40; i++) {

//     var option = document.createElement("option");
//     option.text = i;
//     option.value = i;

//     select.appendChild(option);
// }
var html5Slider = document.getElementById('range');

noUiSlider.create(html5Slider, {
    start: [10, 30],
    connect: true,
    range: {
        'min': -20,
        'max': 40
    }
});
// 
var inputNumber = document.getElementById('text');
var inputNumber1 = document.getElementById('text1');

html5Slider.noUiSlider.on('update', function (values, handle) {

    var value = values[handle];

    if (handle) {
        inputNumber.value = value;
    } else {
        inputNumber1.value = value;
    }
});

// select.addEventListener('change', function () {
//     html5Slider.noUiSlider.set([this.value, null]);
// });

inputNumber.addEventListener('change', function () {
    html5Slider.noUiSlider.set([null, this.value]);
});
inputNumber1.addEventListener('change', function () {
    html5Slider.noUiSlider.set([null, this.value]);
});
});