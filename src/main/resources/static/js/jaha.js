$(function() {

    // 모바일 햄버거 메뉴
    $('.hamberger-btn>button').on('click', function() {
        $('nav').toggleClass('on');
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
            // console.log(idx);
        });
    });

    // 자하생력액 : brand2 light
    $('.brand2 li').each(function() {
        $(this).on('mouseover', function() {
            $(this).siblings().removeClass('on');
            $(this).addClass('on');
        });
        $(this).on('mouseout', function() {
            $(this).removeClass('on');
        });
        
        // 각 li 요소 클릭했을 때 팝업 띄우기
        $(this).on('click', function() {
            $(this).parent().parent().siblings().fadeIn(300).show();
        });
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


    // 주변 약국찾기
   $('.location button').each(function(idx) {
        $(this).on('click', function(e) {
            e.preventDefault();
            // console.log(idx);
            $(this).addClass('on');
            $(this).siblings().removeClass('on');
            $(this).parent().siblings().removeClass('on');
            $(this).parent().siblings().eq(idx).addClass('on');
        });
   });
   $('.distance button').each(function(idx) {
        $(this).on('click', function(e) {
            e.preventDefault();
            $(this).addClass('on');
            $(this).siblings().removeClass('on');
        });
    });
    $('.juso button').each(function(idx) {
        $(this).on('click', function(e) {
            e.preventDefault();
            $(this).addClass('on');
            $(this).siblings().removeClass('on');
        });
    });
});

//팝업 열기
function openPopup(modalname) {
    document.get
    $("." + modalname).fadeIn(300);
}

function closePopup(modalname) {
    document.get
    $("." + modalname).fadeOut(300);
}