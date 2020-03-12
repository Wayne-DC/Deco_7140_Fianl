// Check for video loading complete
$(document).ready(function () {
    console.log("ss")
    $(".name-text").remove();
    $(".email-text").remove();
    var video = document.getElementById("index-video");

    video.onloadeddata = function() {
        $('#video-text-overlay').removeClass('d-none');

        $('#rotate').rotaterator({
            fadeSpeed: 1500,
            pauseSpeed: 300
        });
    }

//responsive menu button
    $("#menu-button").click(function(){
        console.log("test")
        $("#menu-content").slideToggle()
    })

// drop-down fuction, to show more content
    $("#history-development__more").click(function(){
        $("#history-development").fadeIn()
    })

    $("#history-finish__more").click(function(){
        $("#history-finish").fadeIn()
    })

// tip function.
    $("#success").click(function(){
          
    })

})

// interact function
// record the input from users.(name, email)
var name;
var email;
function handleNameChange(value){
    console.log(value)
    name = value
}
function handleEmailChange(value){
    console.log(value)
    email= value
}

// show the information that recorded to the user.(name, email)
function finish(){
    $("#success").show();

// clear the variable
    $(".name-text").remove();
    $(".email-text").remove();
    $("#name").append(
        $("<p class='name-text'>").text(name)
    )
    $("#email").append(
        $("<p class='email-text'>").text(email)
    )
}


// ratate pictures
//import the parameter
//set variable(to count the quantity of picture)
var picIndex = 0;
//determine parameter(time gap of changing pictures)
var timeInterval = 2000;
//get array of pictures
var pic = new Array();
pic[0] = "images/activity-background-horse.png";
pic[1] = "images/activity-background-animals.png";
pic[2] = "images/activity-background-buildings.png";
pic[3] = "images/activity-background-sun.png";
//import fuction
setInterval(swithPic,timeInterval);

function swithPic()
{
    //import the parameter by id('pictures')
    var obj = document.getElementById("pictures");
    //cycling the picture by index
    if (picIndex == pic.length - 1) 
    {
        picIndex = 0;
    }
    else
    {
        picIndex += 1;
    }
    obj.src = pic[picIndex];
}




// ratate text - this fuction reference from https://codepen.io/AmruthPillai/pen/axvqB
(function ($) {
    $.fn.extend({
        rotaterator: function (options) {

            var defaults = {
                fadeSpeed: 500,
                pauseSpeed: 100,
                child: null
            };

            var options = $.extend(defaults, options);

            return this.each(function () {
                var o = options;
                var obj = $(this);
                var items = $(obj.children(), obj);
                items.each(function () {
                    $(this).hide();
                })
                if (!o.child) {
                    var next = $(obj).children(':first');
                } else {
                    var next = o.child;
                }
                $(next).fadeIn(o.fadeSpeed, function () {
                    $(next).delay(o.pauseSpeed).fadeOut(o.fadeSpeed, function () {
                        var next = $(this).next();
                        if (next.length == 0) {
                            next = $(obj).children(':first');
                        }
                        $(obj).rotaterator({
                            child: next,
                            fadeSpeed: o.fadeSpeed,
                            pauseSpeed: o.pauseSpeed
                        });
                    })
                });
            });
        }
    });
})(jQuery);
