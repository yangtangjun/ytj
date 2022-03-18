var countCXArr = [];
AOS.init({
    disable: 'mobile',
    easing: 'ease-out-back',
    duration: 2000
});
let bodywidth = document.body.clientWidth;
if (bodywidth >=769){
    var Scrollbar = window.Scrollbar;
    Scrollbar.initAll()
    var scrollbar = Scrollbar.get(document.querySelector('#my-scrollbar'))
    scrollbar.addListener((status) => {
        AOS.refresh();
        window.pageYOffset = scrollbar.scrollTop
    });
}
if (window.addEventListener)
    window.addEventListener('DOMMouseScroll', wheel, false);
window.onmousewheel = document.onmousewheel = wheel;//W3C
function wheel(event){
    var delta = 0;
    if (!event) event = window.event;
    if (event.wheelDelta) {
        delta = event.wheelDelta/120;
        if (window.opera) delta = -delta;
    } else if (event.detail) {
        delta = -event.detail/3;
    }
    if (delta)
        handle(delta);
}
function handle(delta) {
    if (delta <0){//向下
        $('header').addClass('header_active')
    }else{//向上
        $('header').removeClass('header_active')
    }
}
let dTimeStart=new Date();
let dTimeEnd=new Date('2022-3-13 0:0:00');
let dTimes=(dTimeEnd-dTimeStart)/1000;
function dTime(){
    if(dTimes>=0){
        dTimes-=1;
        let second=Math.floor(dTimes%60);
        let minute=Math.floor((dTimes/60)%60);
        let hour=Math.floor((dTimes/3600)%24);
        let day=Math.floor(dTimes/(3600*24));
        $(".StudyHard").text(day+' 天 '+hour+' 小时 '+minute+' 分 ' +second+' 秒 ');
    }
}
function cTime(){
    dTimes+=1;
    // 需要 秒 分钟 小时  天
    let second=Math.floor(dTimes%60);
    let minute=Math.floor((dTimes/60)%60);
    let hour=Math.floor((dTimes/3600)%24);
    let day=Math.floor(dTimes/(3600*24));
    day>=1?day:day+=1;
    $('.StudyHard').text(' 距 离 博 客 成 立 已 经 过 去 了 '+day+' 天 '+hour+' 小时 '+minute+' 分 '+second+' 秒 啦 ');
}
if(dTimes>=0){
    dTime();
    setInterval(dTime,1000);
}else{
    dTimes=-dTimes
    cTime();
    setInterval(cTime,1000);
    // $(".StudyHard").text("已经结束啦~");
}

$('.music').each(function (index,ele){
    console.log(ele)
    $('.section4 .content .item').click(function () {
        $(this).siblings().removeClass('active')
        $(this).toggleClass('active');
        ele.pause()
        $(this).find('.music')[0].play()
    })
    $(ele).on('ended',function(){
        console.log('音乐播放完毕！！！')
    })
})

setTimeout(()=>{
    $('.section4 .content .item').addClass('move_active')
},10)

$('.section .warp').mouseover(function () {
    $('.cursor_warp').addClass('scale_active')
})
$('.section .warp').mouseout(function () {
    $('.cursor_warp').removeClass('scale_active')
})


var id = 0;
$('body,html').mousemove(function (eve) {
    clearInterval(id);
    $('.cursor_warp').css('transform','scale(1.5)')
    id = setInterval(function(){
        $('.cursor_warp').css('transform','scale(1)')
    }, 300);
})


setTimeout(()=>{
    $('.section .warp .text:first-child span').addClass('transform_active')
    setTimeout(()=>{
        $('.section .warp .text:nth-child(2) span').addClass('transform_active')
    },200)
    setTimeout(()=>{
        $('.section .warp .text:nth-child(3) span').addClass('transform_active')
    },400)
    setTimeout(()=>{
        $('.section .warp .text:nth-child(4) span').addClass('transform_active')
    },600)
},10)