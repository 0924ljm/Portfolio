$(document).ready(function(){
    let sec1 = $('#skills_info').offset().top;
    let sec2 = $('#portfolios').offset().top;
    let sec3 = $('#about_me').offset().top;
    let sec4 = $('#contact').offset().top;
    $(window).scroll(function(){
        let s_top = $(window).scrollTop();
        if(s_top >= sec1-100){
            $('.side_nav').css({
                display: "flex",
            })
        }
        else{
            $('.side_nav').css({
                display: "none",
            })
        }

        if(s_top >= sec1-500){
            $('.inner_bar').css({
                animation: "bar 1.5s forwards",
            })
        }
    })
    $(document).on('click', '.link_skills', function () {
        $('html, body').animate({
            scrollTop: sec1 - 30
        }, 300)
    })
    $(document).on('click', '.link_portfolios', function () {
        $('html, body').animate({
            scrollTop: sec2 - 30
        }, 300)
    })
    $(document).on('click', '.link_about_me', function () {
        $('html, body').animate({
            scrollTop: sec3 - 30
        }, 300)
    })
    $(document).on('click', '.link_contact', function () {
        $('html, body').animate({
            scrollTop: sec4
        }, 300)
    })
    $('.top_btn').click(function(){
        $('html, body').animate({
            scrollTop: 0
        }, 600)
    })


    // ====================== 인사말 ======================
    var typingBool = false; 
    var typingIdx=0; 
    var txt_index = 0;
    var greetings_length = $(".greetings ul li").length;

    var typingTxt = $(".greetings ul li").eq(txt_index).text(); 
    typingTxt=typingTxt.split("");
    if(typingBool==false){
        typingBool=true; 
        var tyInt = setInterval(typing,80);
    } 
        
    function typing(){ 
        $(".typing_greetings ul li").removeClass("on");
        $(".typing_greetings ul li").eq(txt_index).addClass("on");
        if(typingIdx<typingTxt.length){
            $(".typing_greetings ul li").eq(txt_index).append(typingTxt[typingIdx]);
            typingIdx++; 
        } 
        else { 
            if(txt_index<greetings_length-1){
                txt_index++; 
                typingIdx=0;
                typingBool = false; 
                typingTxt = $(".greetings ul li").eq(txt_index).text(); 
                clearInterval(tyInt);
                setTimeout(function(){
                tyInt = setInterval(typing,80);
                },500);
            } 
            else if(txt_index==greetings_length-1){
                clearInterval(tyInt);
            }
        } 
    }
})