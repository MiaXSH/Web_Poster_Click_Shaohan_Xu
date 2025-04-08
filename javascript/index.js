// window.onload = function() {
//     document.querySelector('.colourBlocks').scrollIntoView({
//       behavior: 'smooth',
//       block: 'start',
//       inline: 'start'
//     });
// }

// setTimeout(function() {
//     document.body.style.overflow = 'hidden';
// }, 2000);

// function setup(){
//     noCanvas();

//     clickSound = createAudio('Cartoon Toy Gun Shoot Cap Gun Single 01.wav');
//     if(mouseIsPressed){
//         clickSound.play();
//     }
// }

// function draw(){
//     if(mouseIsPressed){
//         clickSound.play();
//     }
// }



$(document).ready(function() {




let Gclicks = 0;
let GmaxClicks = 3;

$(".green1").click(function(){
    // $(this).toggleClass('active');
    // $(".green1").toggleClass('active');
    // $("body").css("overflow", "auto");
    console.log("green-clicked")


    if(Gclicks < GmaxClicks){
        Gclicks++;
        $(this).animate({right:"-=50px"}, 200);
        $(".green2").animate({right:"-=50px"}, 200);
        
        $('audio#clickSound')[0].currentTime = 0;
        $('audio#clickSound')[0].play()
        // clickSound.play();
    } 
    // evertime the user clicks, this green block will move for alittle bit
    //untill they clicked to the fifth time

    if(Gclicks === GmaxClicks){
        // $(".green").addClass('active');
        $(".green3").css('display', 'block');
        $(".Gback").css('display', 'block');
        $("body").css("overflow", "auto");

        $('audio#clickSound')[0].currentTime = 0;
        $('audio#clickSound')[0].play()

        document.querySelector('.green3').scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'start'
        });
    } // if they clicked to the fifth time, a bigger green block that covers the whole screen will showup
});


$(".green2").click(function(){
    // $("body").css("overflow", "auto");


    if(Gclicks < GmaxClicks){
        Gclicks++;
        $(this).animate({right:"-=50px"}, 200);
        $(".green1").animate({right:"-=50px"}, 200);


        $('audio#clickSound')[0].currentTime = 0;
        $('audio#clickSound')[0].play()
    }

    if(Gclicks === GmaxClicks){
        // $(".green").addClass('active');
        $(".green3").css('display', 'block');
        $(".green3").css('left', 'calc(100vw + 150px)');

        // setTimeout(function() {
        //     $(".green3").css('left', 'calc(100vw + 150px)');
        // }, 200);



        $(".Gback").css('display', 'block');
        // $("body").css("overflow", "auto");

        $('audio#clickSound')[0].currentTime = 0;
        $('audio#clickSound')[0].play()

        document.querySelector('.green3').scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'start'
        });
    } // as my green blocks is a irregular shape, I have to use two green blocsk to form this irregular shape
    // thus I need to apply the clicking 5 times affecct to the two blocks to no matter the user clicked on which part
    // of the irregular shape, they can all recieve the same effect
});

$(".Gback").click(function(){
    // $(this).css('display', 'none');
    // $(".green").css('left', '-100px');
    // $(".green").off("click");
    $(".green3").css('left', '100vw');

    $(".green1").animate({ right: "0vw" }, 800);
    $(".green2").animate({ right: "0vw" }, 800);

    // $(".green").removeClass('active');
    $(".green1").removeClass('active');
    $(".Gback").css('display', 'none');

    document.querySelector('.colourBlocks').scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'start'
    });

    $('audio#clickSound')[0].currentTime = 0;
    $('audio#clickSound')[0].play()

    setTimeout(function() {
        $(".green3").css('display', 'none');
    }, 700);

    $("body").css("overflow", "auto");

   
    Gclicks = 0;
    // location.reload();

    // setTimeout(function() {
    //     location.reload();
    // }, 200);

});

let Rclicks = 0;
let RmaxClicks = 3;

$(".red1").click(function(){
    // $("body").css("overflow", "auto");

    if(Rclicks < RmaxClicks){
        Rclicks++;
        $(this).animate({top:"+=80px"}, 200);
        $(".red2").animate({top:"+=80px"}, 200);

        $('audio#clickSound')[0].currentTime = 0;
        $('audio#clickSound')[0].play()

    }

    if(Rclicks === RmaxClicks){
        // $(".red").addClass('active');
        // $(".red2").addClass('active');
        $(".red3").css('display', 'block');
        // $("body").css("overflow", "auto");
        $(".Rback").css('display', 'block');
        $(".red3").css('top', 'calc(100vh + 240px)');



        $('audio#clickSound')[0].currentTime = 0;
        $('audio#clickSound')[0].play()

        document.querySelector('.red3').scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'start'
        });
    }
});

$(".red2").click(function(){
    // $("body").css("overflow", "hidden");
    // $("body").css("overflow", "auto");


    if(Rclicks < RmaxClicks){
        Rclicks++;
        $(this).animate({top:"+=80px"}, 200);
        $(".red1").animate({top:"+=80px"}, 200);

        $('audio#clickSound')[0].currentTime = 0;
        $('audio#clickSound')[0].play()


    }

    if(Rclicks === RmaxClicks){
        // $(".red").addClass('active');
        // $(".red2").addClass('active');
        $(".red3").css('display', 'block');
        $("body").css("overflow", "auto");
        $(".Rback").css('display', 'block');
        $(".red3").css('top', 'calc(100vh + 240px)');


        $('audio#clickSound')[0].currentTime = 0;
        $('audio#clickSound')[0].play()

        document.querySelector('.red3').scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'start'
        });
    }
});


$(".Rback").click(function(){

    $(".red3").css('top', '100vh');


    $(".red1").animate({ top: "40vh" }, 800);
    $(".red2").animate({ top: "40vh" }, 800);
    // $(".red3").css('display', 'none');

    $(".Rback").css('display', 'none');
    // $("body").css("overflow", "hidden");

    $('audio#clickSound')[0].currentTime = 0;
        $('audio#clickSound')[0].play()

    document.querySelector('.colourBlocks').scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'start'
    });

    setTimeout(function() {
        $(".red3").css('display', 'none');
    }, 700);

    Rclicks = 0;
});



let Yclicks = 0;
let YmaxClicks = 3;
// let animationDone = false;

$(".yellow").click(function(){
    
    if(Yclicks < YmaxClicks){
        Yclicks++;
        $(this).animate({left:"-=50px"}, 200);

        $('audio#clickSound')[0].currentTime = 0;
        $('audio#clickSound')[0].play()
    }

    if(Yclicks === YmaxClicks ){ //&& !animationDone
        // $(".yellow").addClass('active');
        // $(".red2").addClass('active');
        $(".yellow2").css('display', 'block');
        $("body").css("overflow", "auto");
        // $(".colourBlocks").css("left", "100vw");
        // animationDone = true;

        $(".yellow2").css('left', 'calc(-100vw - 150px)');


        var moveAmount = $(window).width() + 150;
        // $(".colourBlocks").animate({left:"+=100vw"}, 500);
        if ($(".colourBlocks").css("left", "0vw")){
            $(".colourBlocks").animate({left: "+=" + moveAmount + "px"}, 500);}
             //else {}
        
        document.querySelector('.yellow2').scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'start'
        });


        
        $(".Yback").css('display', 'block');


        $('audio#clickSound')[0].currentTime = 0;
        $('audio#clickSound')[0].play()

        // document.querySelector('.yellow2').scrollIntoView({
        //     behavior: 'smooth',
        //     block: 'start',
        //     inline: 'start'
        // });
        // animationDone = true;

    }
});

$(".Yback").click(function(){
    $(".yellow2").css('left', '-100vw');

    $(".yellow").animate({ left: "0vw" }, 800);
    // $(".yellow").css('left', '0');

    $(".Yback").css('display', 'none');
    // $(".yellow2").css('display', 'none');
    // $(".colourBlocks").css('left', '0');
    $(".colourBlocks").animate({ left: "0vw" }, 500);
    // $("body").css("overflow", "hidden");

    // $(".colourBlocks").animate({left:"-=100vw"}, 200);

    $('audio#clickSound')[0].currentTime = 0;
    $('audio#clickSound')[0].play()
   
    Yclicks = 0;
    animationDone = false;
});


let Bclicks = 0;
let BmaxClicks = 3;

$(".blue").click(function(){
    
    if(Bclicks < BmaxClicks){
        Bclicks++;
        $(this).animate({top:"-=50px"}, 200);

        $('audio#clickSound')[0].currentTime = 0;
        $('audio#clickSound')[0].play()
    }

    if(Bclicks === BmaxClicks){ //&& !animationDone

        $(".blue2").css('top', 'calc(-100vh - 149px)');

        // animationDone = true;

        // $(".yellow").addClass('active');
        // $(".red2").addClass('active');
        $(".blue2").css('display', 'block');
        $("body").css("overflow", "auto");
        
        $(".Bback").css('display', 'block');

        $('audio#clickSound')[0].currentTime = 0;
        $('audio#clickSound')[0].play()

        var moveAmount = $(window).height() + 149;
        // $(".colourBlocks").animate({top:"+=100vh"}, 500);
        if ($(".colourBlocks").css("top", "0vw")){
            $(".colourBlocks").animate({top:"+=" + moveAmount + "px"}, 500);

            
        } //else {}

        document.querySelector('.blue2').scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'start'
        });

        // document.querySelector('.blue2').scrollIntoView({
        //     behavior: 'smooth',
        //     block: 'start',
        //     inline: 'start'
        // });
    }

    
});

$(".Bback").click(function(){
    $(".blue2").css('top', '-100vh');
    $(".blue").animate({ top: "0vw" }, 800);
    // $(".yellow").css('left', '0');

    $(".Bback").css('display', 'none');
    // $(".colourBlocks").css('left', '0');
    $(".colourBlocks").animate({ top: "0vw" }, 500);
    // $("body").css("overflow", "hidden");

    // $(".blue2").css('display', 'none');

    // $(".colourBlocks").animate({left:"-=100vw"}, 200);

    $('audio#clickSound')[0].currentTime = 0;
        $('audio#clickSound')[0].play()
   
    Bclicks = 0;
    animationDone = false;

});







// hover

$(".yellow").hover(
    function() {
        $(this).css('background-color', 'rgb(190, 162, 2)');
        $("#speaker1").css('transform','scale(1.4)');
        $("#speaker1").css('left','-9vw');
        $("#speaker1").css('top','27vw');
        $("#speaker1").css('color','rgb(245, 232, 132)');
        // $("#speaker1").css('font-size','7vw');

        // $("#speaker1").css('margin','160 auto');
        $("#speaker1").css('rotate','85deg');
    },
    function() {
        $(this).css('background-color', 'rgb(245, 217, 6)')
        $("#speaker1").css('transform','scale(1)');
        $("#speaker1").css('left','-7vw');
        $("#speaker1").css('top','20vw');
        $("#speaker1").css('color','black');
        // $("#speaker1").css('font-size','5vw');

        // $("#speaker1").css('margin','40 auto');
        $("#speaker1").css('rotate','90deg');

    }
);
      

$(".red1, .red2").hover(
    function() {
        $(".red1").css('background-color', 'rgb(166, 48, 35)');
        $(".red2").css('background-color', 'rgb(166, 48, 35)');
        $("#speaker2").css('transform','scale(1.4)');
        $("#speaker2").css('margin','130 30');
        $("#speaker2").css('rotate','-30deg');
        $("#speaker2").css('left','7vw');
        $("#speaker2").css('color','rgb(246, 191, 185)');
        // $("#speaker2").css('top','24vw');

    },
    function() {
        $(".red1").css('background-color', 'rgb(235, 82, 66)');
        $(".red2").css('background-color', 'rgb(235, 82, 66)');
        $("#speaker2").css('transform','scale(1)');
        $("#speaker2").css('margin','90 70');
        $("#speaker2").css('rotate','0deg');
        $("#speaker2").css('left','0vw');
        $("#speaker2").css('color','black');
        // $("#speaker2").css('left','-7vw');
        // $("#speaker2").css('top','20vw');


    }
);

$(".blue").hover(
    function() {
        $(this).css('background-color', 'rgb(2, 157, 218)');
        $("#speaker3").css('transform','scale(1.4)');
        $("#speaker3").css('left','12vw');
        $("#speaker3").css('color','rgb(138, 222, 239)');

        $("#speaker3").css('margin','160 auto');
        $("#speaker3").css('rotate','15deg');
    },
    function() {
        $(this).css('background-color', 'rgb(34, 205, 239)')
        $("#speaker3").css('transform','scale(1)');
        $("#speaker3").css('left','5vw');
        $("#speaker3").css('color','black');

        $("#speaker3").css('margin','40 auto');
        $("#speaker3").css('rotate','0deg');

    }
);

$(".green1, .green2").hover(
    function() {
        $(".green1").css('background-color', 'rgb(83, 158, 9)');
        $(".green2").css('background-color', 'rgb(83, 158, 9)');
        $("#speaker4").css('transform','scale(1.2)');
        $("#speaker4").css('left','2vw');
        $("#speaker4").css('color','rgb(194, 244, 144)');
        // $("#speaker4").css('top','-1vw');

        // $("#speaker4").css('margin','160 auto');
        $("#speaker4").css('rotate','-4deg');

    },
    function() {
        $(".green1").css('background-color', 'rgb(135, 220, 51)');
        $(".green2").css('background-color', 'rgb(135, 220, 51)');
        $("#speaker4").css('transform','scale(1)');
        $("#speaker4").css('left','0vw');
        $("#speaker4").css('color','black');
        // $("#speaker2").css('left','-7vw');
        $("#speaker4").css('top','0vw');

        // $("#speaker4").css('margin','40 auto');
        $("#speaker4").css('rotate','0deg');
    }
);


});