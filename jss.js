$(document).ready(function(){
  $(".top-btn").click(function(){
    // $("html , body").scrollTop(800)
    $("html , body").animate({
      "scrollTop": 0 ,
    },200)
  })
  
function SwiperBox1__init(){
  const swiper = new Swiper(".swiper-box1 .swiper", {
  // Optional parameters
  loop: true,
  autoplay:{
    disableOnInteraction : false
  },
  // If we need pagination
  pagination: {
    el: ".swiper-box1 .swiper-pagination"
  },
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-box1 .swiper-button-next",
    prevEl: ".swiper-box1 .swiper-button-prev"
  },
  // And if we need scrollbar

});
}
SwiperBox1__init();

function SwiperBox2__init(){
   var swiper = new Swiper(".swiper-box2 .mySwiper", {
        slidesPerView: 4,
        spaceBetween: 20,
        loopFillGroupWithBlank: true,
        pagination: {
          el: ".swiper-box2 .swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-box2 .swiper-button-next2",
          prevEl: ".swiper-box2 .swiper-button-prev2",
        },
      });
}
SwiperBox2__init();

function SwiperBox3__init() {
  var menu = Array();
  menu.push("설 차례상")
  menu.push("설 음식")
  menu.push("국/찌개/탕")
  menu.push("어린이 반찬")
  menu.push("메인요리")
  menu.push("무침")
  menu.push("볶음")
  menu.push("조림")
  menu.push("소분야채")
  menu.push("쿠킹박스")
  menu.push("김치/절임/젓갈")
  var swiper = new Swiper(".swiper-box3 .mySwiper", {
    slidesPerView: 4,
    spaceBetween: 10,
    slidesPerGroup: 4,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-box3 .swiper-pagination3",
      clickable: true,
        renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (menu[index]) + '</span>';
      },
    },
    navigation: {
      nextEl: ".swiper-box3 .swiper-button-next3",
      prevEl: ".swiper-box3 .swiper-button-prev3"
    }
  });
}

SwiperBox3__init();

$(".footer > .footer-bottom > .con > .bottom > p:nth-child(2)").click(function(){
  $(".footer > .footer-bottom > .con > .hidden-wrap").toggleClass("active");
})


})

$(window).scroll(function () {
  let scrollTop = $(this).scrollTop()

  if (scrollTop >= 900) {
    $(".top-btn").addClass("active")
  } else if (scrollTop < 900) {
    $(".top-btn").removeClass("active")
  }

  


})