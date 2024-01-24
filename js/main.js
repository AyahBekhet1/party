$(document).ready(function () {
    
    loopcounter('myCountdown');

  
    $(' textarea').textcounter({
        type: "character",
        max: 100,
        countDown:true,
        stopInputAtMaximum :true,
        countDownText :" %d Character Remaining"   

      });
   
    ////Open Button
    $('.home-overlay span').click(function (){
        if($('.nav-bar').css('left')=='-250px'){

            $('.nav-bar').animate({'left':0},500)
            $('.open').animate({'left':"250px"},500)
            $('.home-content').animate({'left':"20%"},500)

        }else if ($('.nav-bar').css('left')== '0px'){

           $('.nav-bar').animate({'left':'-250px'} , 500)
           $('.open').animate({'left':"0px"},500)
           $('.home-content').animate({'left':"0%"},500)
        }
    })

    ////Close Button
    $('.close').click(function (){
        $('.nav-bar').animate({'left':'-250px'} , 500)
        $('.open').animate({'left':"0px"},500)
        $('.home-content').animate({'left':"0%"},500)
    })


    $('.toggle-sec h3').click(function (e){
        if($(e.target).next('p').css('display')=='none'){

            $(e.target).siblings('p').css("display",'none')
            $(e.target).next('p').slideToggle(500)

        }else if($(e.target).next('p').css('display')=='block'){

            $(e.target).siblings('p').slideUp(500)
        }
    })

    $("a[href^='#']").click(function (e){
        let aHref = e.target.getAttribute('href')

        let sectionOffset = $(aHref).offset().top;
        
        $("body , html").animate({scrollTop:sectionOffset},1000)
    })

});