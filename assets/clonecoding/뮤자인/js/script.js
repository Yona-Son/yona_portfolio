//1. p태그의 위로 튕기는 기본속성 제거
$(document).on('click', 'a[href="#"]', function(e){
    e.preventDafault();
})

//2 .스크롤 애니메이션
$(function(){
    $('.animate').scrolla({
        mobile: true,
        once: false 
    });
});

//3 .배경색 변경
$(window).on('scroll resize', function(){
    var scrollTop = 0; //변수스크롤의 초기값을 0으로 준다.
    scrollTop = $(document).scrollTop();
    bgColor();

    function bgColor() {
        if(scrollTop > 1400){  //변수 스크롤탑이 1400보다 클 경우
            $('body').addClass('on');
        } else {
            $('body').removeClass('on');
        } if(scrollTop > 2700) {
            $('body').removeClass('on');
        }
    }
});

// 4.햄버거메뉴
$(function(){
    $(".menuOpen button.open").on("click", function(){
        $(".menuOpen .menuWrap").addClass("on");
    });
    $(".menuOpen .menuWrap .close").on("click", function(){
        $(".menuOpen .menuWrap").removeClass('on');
    });
});


//mainmenu span.bar
$(function(){
    $(".gnb li a").on("mouseenter focus", function(){
        var bar = $(this).position().left;
        var width = $(this).width();
            $('span.bar').css({'left': bar + 'px', 'width': width + 'px', 'opacity' :1});
        });
        $(".gnb li a").on("mouseleave", function(){
            $('span.bar').css({'left': 0 ,'width': 0, 'opacity' : 0});
    });
});


$(function() {
    $('.svgAni').find('path').each(function( i, path ) {  
    var length = path.getTotalLength();
    //alert(length);
    });
});