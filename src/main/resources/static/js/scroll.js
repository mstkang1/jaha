$(function() {
    // 메인화면 키비주얼 애니메이션 컨트롤러
    var controller = new ScrollMagic.Controller({
        globalSceneOptions: {
            duration: 900
        }
    });
    // 메인화면 자하생력 병 애니매이션
    var tween = TweenMax.to('.ani-jaha', 1, {
        scale: 1,
        x: -60,
        y: 720
    });
    // 애니메이션 시작지점 설정 (바위 배경 경계)
    var scene = new ScrollMagic.Scene({
        triggerElement: '.rock-bg',
        duration: '100%',
    })
    .setTween(tween)
    // .addIndicators()
    .addTo(controller)


    // nav 컨트롤러
    var navController = new ScrollMagic.Controller();
    
    // 태반 이야기
    new ScrollMagic.Scene(
        {
            triggerElement: ".placenta-wrap",
            triggerHook: "onCenter",
            duration: 2313
        })
        .setClassToggle(".menu1", "on")
        // .addIndicators()
        .addTo(navController);

    // 자하생력 이야기
    new ScrollMagic.Scene(
        {
            triggerElement: ".history-wrap",
            triggerHook: "onCenter",
            duration: 6349
        })
        .setClassToggle(".menu2", "on")
        // .addIndicators()
        .addTo(navController);

    // Q&A
    new ScrollMagic.Scene(
        {
            triggerElement: ".qna-wrap",
            triggerHook: "onCenter",
            duration: 1182
        })
        .setClassToggle(".menu3", "on")
        // .addIndicators()
        .addTo(navController);


    // 연혁 컨트롤러
    var historyController = new ScrollMagic.Controller();
    // 연혁
    new ScrollMagic.Scene({triggerElement: ".year2006",triggerHook: "onCenter", duration: 84, offset: 5})
        .setClassToggle(".year2006 .lamp", "on")
        // .addIndicators({indent:700})
        .addTo(historyController);
    new ScrollMagic.Scene({triggerElement: ".year2007",triggerHook: "onCenter", duration: 89, offset: 1})
        .setClassToggle(".year2007 .lamp", "on")
        // .addIndicators({indent:700})
        .addTo(historyController);
    new ScrollMagic.Scene({triggerElement: ".year2008",triggerHook: "onCenter", duration: 150, offset: 0})
        .setClassToggle(".year2008 .lamp", "on")
        // .addIndicators({indent:700})
        .addTo(historyController);
    new ScrollMagic.Scene({triggerElement: ".year2009",triggerHook: "onCenter", duration: 87, offset: 5})
        .setClassToggle(".year2009 .lamp", "on")
        // .addIndicators({indent:700})
        .addTo(historyController);
    new ScrollMagic.Scene({triggerElement: ".year2010",triggerHook: "onCenter", duration: 117, offset: 4})
        .setClassToggle(".year2010 .lamp", "on")
        // .addIndicators({indent:700})
        .addTo(historyController);
    new ScrollMagic.Scene({triggerElement: ".year2012",triggerHook: "onCenter", duration: 84, offset: 4})
        .setClassToggle(".year2012 .lamp", "on")
        // .addIndicators({indent:700})
        .addTo(historyController);
    new ScrollMagic.Scene({triggerElement: ".year2013",triggerHook: "onCenter", duration: 87, offset: 0})
        .setClassToggle(".year2013 .lamp", "on")
        // .addIndicators({indent:700})
        .addTo(historyController);
    new ScrollMagic.Scene({triggerElement: ".year2015",triggerHook: "onCenter", duration: 92, offset: 0})
        .setClassToggle(".year2015 .lamp", "on")
        // .addIndicators({indent:700})
        .addTo(historyController);
    new ScrollMagic.Scene({triggerElement: ".year2016",triggerHook: "onCenter", duration: 90, offset: 3})
        .setClassToggle(".year2016 .lamp", "on")
        // .addIndicators({indent:700})
        .addTo(historyController);
    new ScrollMagic.Scene({triggerElement: ".year2021",triggerHook: "onCenter", duration: 200, offset: 6})
        .setClassToggle(".year2021 .lamp", "on")
        // .addIndicators({indent:700})
        .addTo(historyController);


    // 연혁 사진
    var revealElements = $(".photo");
    
    for (var i=0; i<revealElements.length; i++) { // create a scene for each element
        new ScrollMagic.Scene({
            triggerElement: revealElements[i],  // y value not modified, so we can use element as trigger as well
            // offset: 100, // start a little later
            triggerHook: 'onCenter',
        })
        .setClassToggle(revealElements[i], "on") // add class toggle
        // .addIndicators({name: "photo " + (i+1), indent: 1300 }) // add indicators (requires plugin)
        .addTo(controller);
	}

    // 원료 컨트롤러
    var materialController = new ScrollMagic.Controller();
    // 원료
    new ScrollMagic.Scene({triggerElement: ".m-step1",triggerHook: "onCenter", duration: 194, offset:70})
        .setClassToggle(".m-step1", "on")
        // .addIndicators({indent:900})
        .addTo(materialController);
    new ScrollMagic.Scene({triggerElement: ".m-step2",triggerHook: "onCenter", duration: 200, offset:70})
        .setClassToggle(".m-step2", "on")
        // .addIndicators({indent:900})
        .addTo(materialController);
    new ScrollMagic.Scene({triggerElement: ".m-step3",triggerHook: "onCenter", duration: 196, offset:94})
        .setClassToggle(".m-step3", "on")
        // .addIndicators({indent:900})
        .addTo(materialController);
    new ScrollMagic.Scene({triggerElement: ".m-step4",triggerHook: "onCenter", duration: 223, offset:80})
        .setClassToggle(".m-step4", "on")
        // .addIndicators({indent:900})
        .addTo(materialController);


    // 완제품 컨트롤러
    var materialController = new ScrollMagic.Controller();
    // 완제품
    new ScrollMagic.Scene({triggerElement: ".c-step1",triggerHook: "onCenter", duration: 194, offset:81})
        .setClassToggle(".c-step1", "on")
        // .addIndicators({indent:900})
        .addTo(materialController);
    new ScrollMagic.Scene({triggerElement: ".c-step2",triggerHook: "onCenter", duration: 203, offset:82})
        .setClassToggle(".c-step2", "on")
        // .addIndicators({indent:900})
        .addTo(materialController);
    new ScrollMagic.Scene({triggerElement: ".c-step3",triggerHook: "onCenter", duration: 196, offset:62})
        .setClassToggle(".c-step3", "on")
        // .addIndicators({indent:900})
        .addTo(materialController);
    new ScrollMagic.Scene({triggerElement: ".c-step4",triggerHook: "onCenter", duration: 180, offset:69})
        .setClassToggle(".c-step4", "on")
        // .addIndicators({indent:900})
        .addTo(materialController);


    // GNB 이동
    controller.scrollTo(function (newpos) {
        TweenMax.to(window, 3,{scrollTo: {y: newpos}});
    });

    var menu = document.querySelector("nav>ul");
    menu.addEventListener("click", function (e) {
        var id = e.target.hash;
        e.preventDefault();
        controller.scrollTo(id);
        if (window.history && window.history.pushState) {
            history.pushState("", document.title, id);
        }
    });
});