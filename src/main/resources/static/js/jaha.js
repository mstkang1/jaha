$(function() {

    // 모바일 햄버거 메뉴
    $('.hamburger-btn').on('click', function(e) {
        e.preventDefault();
        $(this).hide();
        $('nav').toggleClass('on');
        $('.hamburger-btn-x>a').addClass('on');
        $('.dim').addClass('on');
        // $('body').css("pointer-events","none");
    });
    $('.hamburger-btn-x').on('click', function(e) {
        e.preventDefault();
        $('.hamburger-btn').show(); 
        $('nav').toggleClass('on');
        $(this).children().removeClass('on');
        $('.dim').removeClass('on');
        // $('body').css("pointer-events","auto");
    });

    $('.scroll-stop').click(function() {
        $('body').on('scroll touchmove mousewheel', function(e) {
            e.preventDefault();
            e.stopPropagation();
            return false;
        });
    });
    $('.scroll-play').click(function() {
        $('body').off('scroll touchmove mousewheel');
    });

    // 자하거엑스 : products DIM
    $('.products li').each(function(idx) {
        $(this).on('mouseover', function() {
            $(this).siblings().removeClass('on');
            $(this).addClass('on');
        });
        $(this).on('mouseout', function() {
            $(this).removeClass('on');
        });
        // 각 li 요소 클릭했을 때 팝업 띄우기
        $(this).on('click', function(e) {
            var popup = $(this).parent().siblings();
            popup.eq(idx).fadeIn(300).show();
            $('body').css("pointer-events","none");
            // console.log(idx);
        });
    });

    // 자하생력액 : brand2 light
    $('.brand2 li').each(function(idx) {
        
        $(this).on('mouseover', function() {
            $(this).siblings().removeClass('on');
            $(this).addClass('on');
        });
        $(this).on('mouseout', function() {
            $(this).removeClass('on');
        });
        
        // 각 li 요소 클릭했을 때 팝업 띄우기
        // $(this).on('click', function() {
        //     console.log(idx);
        //     // $(this).parent().parent().siblings().eq(idx+1).fadeIn(300).show();
        // });
    });

   
    // // qna 펼침목록
    $('.qna>ul>li').click(function(){
        $(this).siblings().removeClass('on');
        $(this).addClass('on');
        $('.qna>ul>li>ul').slideUp();
        if ($(this).children('.qna>ul>li>ul').is(':hidden')){
            $(this).children('.qna>ul>li>ul').slideDown();
        } else{
            $(this).children('.qna>ul>li>ul').slideUp();
            $(this).removeClass('on');
        }
    });


    // 자하생력 히스토리
    var historySwiper = new Swiper(".jahaHistory", {
        spaceBetween: 20,
        slidesPerView: 3,
        centeredSlides: false,
        speed: 1000,
        keyboard: {
            enabled: true,
        },
        loop: true,
        autoplay: false,
        pagination: {
            el: ".swiper-pagination",
            type: "progressbar",
        },
    });

    var productJaha = new Swiper(".productJaha", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: false,
      navigation: {
        nextEl: ".product-button-next",
        prevEl: ".product-button-prev",
      },
    });
});

//팝업 열기
function openPopup(modalname) {
    document.get
    $("." + modalname).fadeIn(300);
    $('body').css("pointer-events","none");
}

function closePopup(modalname) {
    document.get
    $("." + modalname).fadeOut(300);
    $('body').css("pointer-events","auto");
}

function openPopupDim(modalname) {
    document.get
    $("." + modalname).fadeIn(300);
    $('body').css("pointer-events","none");
    $('.dim').addClass('on');
}

function closePopupDim(modalname) {
    document.get
    $("." + modalname).fadeOut(300);
    $('body').css("pointer-events","auto");
    $('.dim').removeClass('on');
}

function popupWindow() {
    window.open("terms.html","popup", "width=320, height=500, left=0, top=0, scrollbars=no,titlebar=no,status=no,resizable=no,fullscreen=no");
}

// 2023.04.28 함수추가
function pageMove(seq){
    var offset = $("#menu" + seq).offset();
    $('html, body').animate({scrollTop : offset.top}, 700);
}