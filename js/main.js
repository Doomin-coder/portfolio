$(function(){

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



/*------------work벨트 효과----------*/ 
// $(window).on("scroll", function(){
//     let sc = $(".work_belt_wrap").offset().top
//     console.log(sc)

// })

$(window).on('scroll', function(){
    var wScroll = $(this).scrollTop();
    // console.log(wScroll)
    let offset1 = wScroll - $(".work_belt_wrap").offset().top;
    // console.log(offset1)


    $(".work_belt1").css("transform","translateX("+ offset1 + "px)");
    $(".work_belt2").css("transform","translateX("+ -offset1 + "px)");
    

    if(wScroll >= $(".about_wrap").offset().top - $(window).height()/2){
        $(".about_wrap").stop().addClass("show")
        $(".about_img").stop().addClass("show")
        $(".about_information").stop().addClass("show")

    }





    })

    











})
