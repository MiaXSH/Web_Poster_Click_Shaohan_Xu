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
let GmaxClicks = 5;

$(".green1").click(function(){
    // $(this).toggleClass('active');
    // $(".green1").toggleClass('active');
    // $("body").css("overflow", "auto");
    console.log("green-clicked")


    if(Gclicks < GmaxClicks){
        Gclicks++;
        $(this).animate({right:"-=20px"}, 200);
        $(".green2").animate({right:"-=20px"}, 200);
        
        $('audio#clickSound')[0].currentTime = 0;
        $('audio#clickSound')[0].play()
        // clickSound.play();

    }

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
        
    }
});


$(".green2").click(function(){
    // $("body").css("overflow", "auto");


    if(Gclicks < GmaxClicks){
        Gclicks++;
        $(this).animate({right:"-=20px"}, 200);
        $(".green1").animate({right:"-=20px"}, 200);


        $('audio#clickSound')[0].currentTime = 0;
        $('audio#clickSound')[0].play()
    }

    if(Gclicks === GmaxClicks){
        // $(".green").addClass('active');
        $(".green3").css('display', 'block');
        $(".Gback").css('display', 'block');
        // $("body").css("overflow", "auto");

        $('audio#clickSound')[0].currentTime = 0;
        $('audio#clickSound')[0].play()

        document.querySelector('.green3').scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'start'
        });

        
    }
});

$(".Gback").click(function(){
    // $(this).css('display', 'none');
    // $(".green").css('left', '-100px');
    // $(".green").off("click");

    $(".green1").animate({ right: "0vw" }, 200);
    $(".green2").animate({ right: "0vw" }, 200);

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
let RmaxClicks = 5;

$(".red1").click(function(){
    // $("body").css("overflow", "auto");

    if(Rclicks < RmaxClicks){
        Rclicks++;
        $(this).animate({top:"+=41px"}, 200);
        $(".red2").animate({top:"+=41px"}, 200);

        $('audio#clickSound')[0].currentTime = 0;
        $('audio#clickSound')[0].play()

    }

    if(Rclicks === RmaxClicks){
        // $(".red").addClass('active');
        // $(".red2").addClass('active');
        $(".red3").css('display', 'block');
        // $("body").css("overflow", "auto");
        $(".Rback").css('display', 'block');

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
        $(this).animate({top:"+=41px"}, 200);
        $(".red1").animate({top:"+=41px"}, 200);

        $('audio#clickSound')[0].currentTime = 0;
        $('audio#clickSound')[0].play()


    }

    if(Rclicks === RmaxClicks){
        // $(".red").addClass('active');
        // $(".red2").addClass('active');
        $(".red3").css('display', 'block');
        $("body").css("overflow", "auto");
        $(".Rback").css('display', 'block');

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

    $(".red1").animate({ top: "40vh" }, 200);
    $(".red2").animate({ top: "40vh" }, 200);
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
let YmaxClicks = 5;
// let animationDone = false;

$(".yellow").click(function(){
    
    if(Yclicks < YmaxClicks){
        Yclicks++;
        $(this).animate({left:"-=10px"}, 200);

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



        // $(".colourBlocks").animate({left:"+=100vw"}, 500);
        if ($(".colourBlocks").css("left", "0vw")){
            $(".colourBlocks").animate({left:"+=100vw"}, 500);}
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

    $(".yellow").animate({ left: "0vw" }, 200);
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
let BmaxClicks = 5;

$(".blue").click(function(){
    
    if(Bclicks < BmaxClicks){
        Bclicks++;
        $(this).animate({top:"-=10px"}, 200);

        $('audio#clickSound')[0].currentTime = 0;
        $('audio#clickSound')[0].play()
    }

    if(Bclicks === BmaxClicks){ //&& !animationDone

        
        // animationDone = true;

        // $(".yellow").addClass('active');
        // $(".red2").addClass('active');
        $(".blue2").css('display', 'block');
        $("body").css("overflow", "auto");
        
        $(".Bback").css('display', 'block');

        $('audio#clickSound')[0].currentTime = 0;
        $('audio#clickSound')[0].play()

        // $(".colourBlocks").animate({top:"+=100vh"}, 500);
        if ($(".colourBlocks").css("top", "0vw")){
            $(".colourBlocks").animate({top:"+=100vh"}, 500);

            
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

    $(".blue").animate({ top: "0vw" }, 200);
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

});