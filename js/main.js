$(function(){

    /*---------menu & nav--------*/
   
    $("header li").on("click", function(){
        let i = $(this).index();
        let target = $("#container section").eq(i).offset().top;
        $("html, body").stop().animate({scrollTop:target})
    })






    /*-----------프로그레스-------*/
    let pr = 0;
    setInterval(function(){
        pr++;
        if(pr == 1){
            $(".progress_bar").stop().animate({"width":"100%"},1100)
        } else if (pr == 2) {
            $(".progress").stop().addClass("on")
        }
    })
       
    let count = 1;
        stop = setInterval(function(){
        count++;
            if(count > 100) {
                clearInterval(stop);
            } else { 
                $(".progress_text").text(`${count}%`)
                $(".progress_text").stop().animate({"opacity":"0"},1000)
            }
            
     },12.5)

   
    


/*---------container-------*/    
/*이미지 크기 효과*/

if($(window).width() < 768) {
    let gr = 0;
    setInterval(function(){
    gr++
    if (gr == 1){
      
        $(".grow_img1 div").stop().addClass("grow")
        $(".grow_img1 img").stop().addClass("on")

    } else if(gr == 2){
        // let imgList = document.querySelectorAll(".grow_img1 div");
        // imgList.forEach(img => {
        //     img.stop().css({"display":"none"}) 
        // });

        $(".grow_img1 div:nth-child(1)").stop().removeClass("grow"),function(){
            $(this).stop().css({"display":"none"}) 
        }
        $(".grow_img1 div:nth-child(2)").stop().removeClass("grow"),function(){
            $(this).stop().css({"display":"none"})
        }
        $(".grow_img1 div:nth-child(3)").stop().removeClass("grow"),function(){
            $(this).stop().css({"display":"none"})
        }
        $(".grow_img1 div:nth-child(4)").stop().removeClass("grow"),function(){
            $(this).stop().css({"display":"none"})
        }
        $(".grow_img1 img").stop().removeClass("on")
        

    } else if(gr == 3){
        $(".grow_img2 div").stop().addClass("grow")
        $(".grow_img2 img").stop().addClass("on")

    } else if(gr == 4){
        $(".grow_img2 div:nth-child(1)").stop().removeClass("grow"),function(){
            $(this).stop().css({"display":"none"}) 
        }
        $(".grow_img2 div:nth-child(2)").stop().removeClass("grow"),function(){
            $(this).stop().css({"display":"none"})
        }
        $(".grow_img2 div:nth-child(3)").stop().removeClass("grow"),function(){
            $(this).stop().css({"display":"none"})
        }
        $(".grow_img2 img").stop().removeClass("on")

    } else if(gr == 5){
        $(".grow_img3 div").stop().addClass("grow")
        $(".grow_img3 img").stop().addClass("on")

    } else if(gr == 6){
        $(".grow_img3 div:nth-child(1)").stop().removeClass("grow"),function(){
            $(this).stop().css({"display":"none"}) 
        }
        $(".grow_img3 div:nth-child(2)").stop().removeClass("grow"),function(){
            $(this).stop().css({"display":"none"})
        }
        $(".grow_img3 div:nth-child(3)").stop().removeClass("grow"),function(){
            $(this).stop().css({"display":"none"})
        }
        $(".grow_img3 img").stop().removeClass("on")

       
    } else if(gr == 7){
        $(".grow_img4 div").stop().addClass("grow")
        $(".grow_img4 img").stop().addClass("on")

    } else if(gr == 8){
        $(".grow_img4 div:nth-child(1)").stop().removeClass("grow"),function(){
            $(this).stop().css({"display":"none"}) 
        }
        $(".grow_img4 div:nth-child(2)").stop().removeClass("grow"),function(){
            $(this).stop().css({"display":"none"})
        }
        $(".grow_img4 img").stop().removeClass("on")

       gr = 0;
    } 
    

},2000)


} else {
    let gr = 0;
setInterval(function(){
    gr++
    if (gr == 1){
        $(".grow_img1 div:nth-child(1)").stop().animate({"width":"380px", "height":"420px"},500)
        $(".grow_img1 div:nth-child(2)").stop().animate({"width":"300px", "height":"360px"},500)
        $(".grow_img1 div:nth-child(3)").stop().animate({"width":"200px", "height":"280px"},500)
        $(".grow_img1 div:nth-child(4)").stop().animate({"width":"160px", "height":"200px"},500)
        
       
        

    } else if(gr == 2){
        $(".grow_img1 img").stop().removeClass("on")
        $(".grow_img1 div").stop().animate({"width":"0px", "height":"0px"})
    
       
    } else if(gr == 3){
        $(".grow_img2 div:nth-child(1)").stop().animate({"width":"200px", "height":"260px"},500)
        $(".grow_img2 div:nth-child(2)").stop().animate({"width":"200px", "height":"230px"},500)
        $(".grow_img2 div:nth-child(3)").stop().animate({"width":"220px", "height":"180px"},500)
        $(".grow_img2 img").stop().addClass("on")
       
        
    } else if(gr == 4){
        
        $(".grow_img2 img").stop().removeClass("on")
        $(".grow_img2 div").stop().animate({"width":"0px", "height":"0px"})
        
        
    } else if(gr == 5){
        $(".grow_img3 div:nth-child(1)").stop().animate({"width":"210px", "height":"270px"},500)
        $(".grow_img3 div:nth-child(2)").stop().animate({"width":"210px", "height":"240px"},500)
        $(".grow_img3 div:nth-child(3)").stop().animate({"width":"220px", "height":"180px"},500)
        $(".grow_img3 img").stop().addClass("on")


    } else if(gr == 6){
        $(".grow_img3 img").stop().removeClass("on")
        $(".grow_img3 div").stop().animate({"width":"0px", "height":"0px"})
        
    } else if (gr == 7){
        $(".grow_img4 div:nth-child(1)").stop().animate({"width":"210px", "height":"270px"},500)
        $(".grow_img4 div:nth-child(2)").stop().animate({"width":"220px", "height":"250px"},500)
        $(".grow_img4 img").stop().addClass("on")
        
    } else if (gr == 8){
        $(".grow_img4 img").stop().removeClass("on")
        $(".grow_img4 div").stop().animate({"width":"0px", "height":"0px"})
        
    } else if (gr == 9){
        $(".grow_img1 div:nth-child(1)").stop().animate({"width":"380px", "height":"420px"},500)
        $(".grow_img1 div:nth-child(2)").stop().animate({"width":"300px", "height":"360px"},500)
        $(".grow_img1 div:nth-child(3)").stop().animate({"width":"200px", "height":"280px"},500)
        $(".grow_img1 div:nth-child(4)").stop().animate({"width":"160px", "height":"200px"},500)
        $(".grow_img1 img").stop().addClass("on")
        gr = 1
        }
    },2300)


    }







        /*------------work벨트 효과----------*/ 
        $(window).on('scroll', function(){
        var wScroll = $(this).scrollTop();
        // console.log(wScroll)
        let offset1 = wScroll - $(".work_belt_wrap").offset().top;
        // console.log(offset1)
        let offset2 = wScroll - $(".illust_belt_wrap").offset().top;


        $(".work_belt1").css("transform","translateX("+ offset1 + "px)");
        $(".work_belt2").css("transform","translateX("+ -offset1 + "px)");
        $(".illust_belt1").css("transform","translateX("+ offset2 + "px)");
        $(".illust_belt2").css("transform","translateX("+ -offset2 + "px)");
        



        /*----------about페이드효과---------*/

        if(wScroll >= $(".about_wrap").offset().top - $(window).height()/2){
            $(".about_wrap").stop().addClass("show")
            $(".about_img").stop().addClass("show")
            $(".about_information").stop().addClass("show")
        } else {
            $(".about_wrap").stop().removeClass("show")
            $(".about_img").stop().removeClass("show")
            $(".about_information").stop().removeClass("show")

        }


        /*------------work페이드효과----------*/
        if(wScroll >= $(".work").offset().top - $(window).height()/2){
            $(".work").stop().addClass("show")
            $(".work_txtwrap").stop().addClass("show")
            $(".work_mok").stop().addClass("show")

        } else {
            $(".work").stop().removeClass("show")
            $(".work_txtwrap").stop().removeClass("show")
            $(".work_mok").stop().removeClass("show")
        }

        



    })
        

    



        //일러스트 gsap효과
        gsap.utils.toArray(".imgBox").forEach(function(imgBox) {
            gsap.timeline({
                scrollTrigger : {
                    trigger : imgBox,
                    start: "50% 100%",
                    end : "bottom top",
                    toggleClass: { targets: imgBox, className: "active"},
                    scrub : 1,
                    markers: false,
                },
            });
        });








})
