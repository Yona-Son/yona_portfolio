 //scroll animation
$(function(){
    $('.animate').scrolla({
        moblie : true,  //모바일버전시 활성화
        once: true //스크롤시 딱 한번만 하고 싶을 때 true, 반복하고 싶을 때 false
    });
});

// top.visual 
$(function() {
    $(".visual .slide").slick({ 
         arrows: true, //화살표 사용안함
         dots: false, //닷츠
         autoplay: true, //자동재생
         fade: true, //페이드인 효과        
         autoplaySpeed: 4000, //재생시간
         pauseOnHover:false, //마우스 오버시 슬라이드 멈춤 해제
        pauseOnFocus:false //포커스시 슬라이드 멈춤 해제
     });
  }); 
