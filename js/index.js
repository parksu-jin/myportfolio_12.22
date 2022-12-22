import $ from 'jquery'

$(function(){
  // 연결 되었는지 확인 완료
  // $('body').css('background-color','red')
let windowW = $(window).width()

if(windowW >= 1450){
  nav()
}else if(windowW < 1449 && windowW >= 980){
  nav()
}else if(windowW < 979 && windowW >= 580){
  tNav()
}else if(windowW < 579){
  tNav()
}

// 
$(windowW).noConflict('resize',function(e){
  window.location.reload()
})

})
function nav(){
$('nav li>a').on('click',function(e){
  const navA = $(this).attr('href')
  const aPos = $(navA).offset().top
  const headerHeight = $('header').innerHeight()
  $('html,body').animate({scrollTop:aPos-headerHeight},800)
  return false
})
}
function tNav(){
let navW = $('header>div>nav').width()
$('header .btn').on('click',function(e){
  $(this).hide()
  $('header>div>nav').animate({left:0},400)
})
}
