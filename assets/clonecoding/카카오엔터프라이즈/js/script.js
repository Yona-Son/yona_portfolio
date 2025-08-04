 //scroll animation
$(function(){
    $('.animate').scrolla({
        moblie : true,  //모바일버전시 활성화
        once: false //스크롤시 딱 한번만 하고 싶을 때 true, 반복하고 싶을 때 false
    });
});

// .visual 
$(function() {
    $(".slide").slick({ 
         arrows: true, //화살표 사용함
         dots: false, //닷츠
         autoplay: true, //자동재생
         fade: true, //페이드인 효과        
         autoplaySpeed: 5000, //재생시간
         pauseOnHover:false, //마우스 오버시 슬라이드 멈춤 해제
        pauseOnFocus:false, //포커스시 슬라이드 멈춤 해제
    });
}); 

//온클래스 스크립트
var scrollNum = 0 ;
scrollNum = $(document).scrollTop();
fixHeader();

function fixHeader(){
    if(scrollNum > 50){
        $("header").addClass("on");
    } else {
        $("header").removeClass("on");
    }
}

//윈도우창 조절시 이벤트
$(window).on('scroll resize',function(){
    scrollNum = $(document).scrollTop();
    fixHeader();
});

//스크롤배너
$(function(){
    $("#scroller").simplyScroll();
    $("#scroller2").simplyScroll({direction:'backwards'});
});
