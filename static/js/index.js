$('.each').each(function (index, item) {
    var text = $(item).html();
    var textArray = text.split('');
    var html = '';
    for (var i in textArray) {
        html += '<span>' + textArray[i] + '</span>';
    }
    $(item).html(html);
    $(this).find('span').each(function (index, ele) {
        var index = index * 0.07 + 0.05
        $(this).css({
            'transition-delay': index + 's',
        })
    })
})
scrollbar.addListener((status) => {
    AOS.refresh();
    window.pageYOffset = scrollbar.scrollTop
    let section2 = $('.index .section2').position().top+100;
    if (scrollbar.scrollTop >= section2){
        var top = (scrollbar.scrollTop-section2)*+0.7
        $('.index .section3 img').css({
            top:top+'px',
        })
    }
    $('.section4 .content .item').each(function (index, ele) {
        var index = index * 0.07 + 0.05
        $(this).css({
            'transition-delay': index + 's',
        })
    })
    let section3 = $('.index .section3').position().top
    if (scrollbar.scrollTop >= section3){
        setTimeout(()=>{
            $('.section4 .content .item').removeClass('move_active');
        },1500)
    }
    let section4 = $('.index .section4').position().top
    if (scrollbar.scrollTop >= section4){
        var parallax = (scrollbar.scrollTop-section2)*+0.5
        $('.index footer .background').css({
            top:parallax+'px',
        })
    }
});

var $quote = $(".des"),
    mySplitText = new SplitText($quote, {
        type: "words"
    }),
    splitTextTimeline = new TimelineLite();

TweenLite.set($quote, {
    perspective: 800
});
function kill() {
    splitTextTimeline.clear().time(0);
    mySplitText.revert();
}
mySplitText.split({
    type: "chars, words"
})
gsap.from(".des",{
    onStart(){
        splitTextTimeline.staggerFrom(mySplitText.chars, 0.6, {
            scale: 4,
            autoAlpha: 0,
            rotationX: -180,
            transformOrigin: "100% 50%",
            ease: Back.easeOut
        }, 0.02);
    },
    scrollTrigger: ".des", // 此行代码表示触发动画的元素，只需要增加该行代码，就可以实现想要的效果。
    opacity: 0,
    scale: 1,
    y: 120,
    rotationX: -180,
});

gsap.from(".brand .pics .item",1,{
    scrollTrigger: ".brand", // 此行代码表示触发动画的元素，只需要增加该行代码，就可以实现想要的效果。
    opacity: 0,
    scale: .5,
    autoAlpha: 0,
    x:20,
    y: 120,
});
sessionStorage.setItem('testKey','这是一个测试的value值');
if (!sessionStorage.getItem('testKey')) {
    setTimeout(()=>{
        $('.load_background .warp .text .item').addClass('opacity_active');
        $('.load_background .warp .text .item_1 span').addClass('opacity_active');
        setTimeout(()=>{
            $('.load_background .warp .text .item_1 span').removeClass('opacity_active');
            setTimeout(()=>{
                $('.load_background .warp .text .item_2 span').addClass('opacity_active');
                $('.load_background .warp .schedule').addClass('top_active');
                $('.loading img').addClass('active');
                setTimeout(()=>{
                    var load=0
                    var arr=new Array();
                    $('img').each(function (index,ele){
                        if($(this).attr('src')!==''){
                            arr.push($(this).attr('src'))
                        }
                    })
                    var len=arr.length
                    for(var i in arr){
                        var bimg=new Image();
                        bimg.src = arr[i];
                        bimg.onload = function () {
                            load+=1;
                            $('.load_background .warp .schedule .line').css({
                                width:load/len*100+'%',
                            })
                            if(len==load){
                                $('.load_background .warp .text .item_2 span').removeClass('opacity_active');
                                setTimeout(()=>{
                                    $('.load_background .warp .text .item_3 span').addClass('opacity_active');
                                    setTimeout(()=>{
                                        $('.load_background .warp .title').css({
                                            top: '-30px',
                                            opacity: '0',
                                        })
                                        setTimeout(()=>{
                                            $('.load_background .warp .content').css('opacity','1')
                                            $('.load_background').addClass('mode_active');
                                            let scale = 1;
                                            let mask = document.querySelector('.load_background');
                                            let inte = setInterval(()=>{
                                                scale = scale + 0.1
                                                mask.style.transform = "scale("+ scale +")"
                                            },10)
                                            setTimeout(()=>{
                                                $('.load_background').fadeOut('slow')
                                            },1800)
                                        },800)
                                    },400)
                                },700)
                            }
                        }
                    }
                },800)
            },1200)
        },1200)
    },10)
}else{
    $('.load_background').hide();
}
