function switchTheme(option){
    let white = "white";
    let black = "black";
    let dark = "rgb(23,23,23)"
    let light = "#bdbdbd"

    //to light
    if(option % 2 == 1){
        document.getElementById("circ").style.backgroundColor = black;
        document.getElementById("scrolldown").style.color = dark;
        document.getElementById("smallCirc").style.backgroundColor = white;
        document.getElementById("Name").style.backgroundColor = white;
        document.getElementById("message").style.color = black;
        document.getElementById("mainPage").style.backgroundImage = 'url("section1light.jpg")';
        document.getElementById("media").style.backgroundColor = "rgba(5, 5, 5, 0.5)";
        document.getElementById("moreInformation").style.backgroundImage = 'url("section2light.jpg")';
        document.getElementById("skills").style.backgroundColor = "rgba(255, 255, 255, 0.751)"
        document.getElementById("textBox").style.color = black;
        document.getElementById("experience").style.backgroundColor = white;
        document.getElementById("subject").style.color = dark;
        document.getElementById("description").style.color = dark;
        document.getElementById("description2").style.color = dark;
        document.getElementById("description3").style.color = dark;
        document.getElementById("description4").style.color = dark;
    }

    //to dark
    if(option % 2 ==0){
        document.getElementById("circ").style.backgroundColor = white;
        document.getElementById("smallCirc").style.backgroundColor = dark;
        document.getElementById("scrolldown").style.color = light;
        document.getElementById("Name").style.backgroundColor = dark;
        document.getElementById("message").style.color = light;
        document.getElementById("mainPage").style.backgroundImage = 'url("section1dark.jpg")';
        document.getElementById("media").style.backgroundColor = "rgba(5, 5, 5, 0.7)";
        document.getElementById("moreInformation").style.backgroundImage = 'url("section2dark.jpg")';
        document.getElementById("skills").style.backgroundColor = "rgba(23, 23, 23, 0.751)"
        document.getElementById("textBox").style.color = light;
        document.getElementById("experience").style.backgroundColor = dark;
        document.getElementById("subject").style.color = light;
        document.getElementById("description").style.color = light;
        document.getElementById("description2").style.color = light;
        document.getElementById("description3").style.color = light;
        document.getElementById("description4").style.color = light;
    }
}
//White and dark mode
function ClickListen() {
    $(document).ready(function(){
        var timesClicked = 0;
        $("#dayNight").click(function(){
            timesClicked++;
            console.log(timesClicked);
            switchTheme(timesClicked);
        })
    })
}

//Arrow Pointing direction
function Arrow(){
    window.addEventListener('scroll',() => {
        if (document.body.scrollTop > 3600 || document.documentElement.scrollTop > 3600){
            document.getElementById("scrolldown").innerHTML = "↑";
        }
        else if(document.body.scrollTop < 3600 || document.documentElement.scrollTop < 3600){
            document.getElementById("scrolldown").innerHTML = "↓";
        }
    })
}

//Chaning Hello
function welcomeMessage(){
    var welcome = ["Hello!","こんにちは!","Xin Chào!"]
    var i = 0;
    setTimeout(() => {
        setInterval(() =>{
            document.getElementById("welcomeMessage").innerHTML = welcome[i%3];
            i++;
        },2500);    
    },1000);
}

//This function displays the terminal animation on screen
function wait(){
    var scrolled = false;

    window.addEventListener('scroll',() => {
        if (((document.body.scrollTop > 800)  || (document.documentElement.scrollTop > 800)) && scrolled == false){
            scrolled = true;
            console.log("Start Terminal Typing Animation")
            //adding a terminal line
            setTimeout(() => {
            document.getElementById("disp").innerHTML = "<br><m style='color: #65a450'>me@MyWebSite</m>:<m style='color: #397e9c '>/JEREMY_NGUYEN</m>$ More about me and my projects on my <a href='https://www.linkedin.com/in/jeremu2907/' class='link' target='_blank'>LinkedIn</a> and <a href='https://github.com/jeremu2907' class='link2' target='_blank'>GitHub</a><br>";
            }, 6300);
            
            //Creating new terminal line
            setTimeout(() => {
                document.getElementById("animate").innerHTML = "<div class='typing intro'><m style='color: #65a450'>me@MyWebSite</m>:<m style='color: #397e9c '>/JEREMY_NGUYEN</m>$ More about me and my projects on my<a href='https://www.linkedin.com/in/jeremu2907/' class='link' target='_blank'> LinkedIn</a> and <a href='https://github.com/jeremu2907' class='link2' target='_blank'>GitHub</a></div>"
            },300);

            setTimeout(() => {
                document.getElementById("animate").innerHTML = "<div class='typing2 intro'><m style='color: #65a450'>me@MyWebSite</m>:<m style='color: #397e9c ''>/JEREMY_NGUYEN</m>$ Email me at <a href='mailto:jeremu2907@gmail.com? target='_blank'' style='color:rgb(210, 209, 209);'>jeremu2907@gmail.com</a><div>"
            },6300)
        }
    })
}

//This function display the side bar in section 2
function leftPanelPopOut(){
    var scrolled = false;

    window.addEventListener('scroll',() => {
        if (((document.body.scrollTop > 1675 && document.body.scrollTop < 2175)  || 
            (document.documentElement.scrollTop > 1675 && document.documentElement.scrollTop < 2175)) && scrolled == false){
            $("#skills").animate({left: '0%'},1000,"easeOutQuart");
            console.log("Left Panel Out");
    
            scrolled = true;
            setTimeout(()=>{
                scrolled = false;
            },2000);

            $("#list").animate({left: '0%'},1500,"easeOutQuart");
            $("#list2").animate({left: '0%'},1500,"easeOutQuart");
        }

        
    })
}
//This function collapes side bar when mouse leaves the section
$(document).ready(function(){
    $("#moreInformation").mouseleave(function(){
        $("#list").animate({left: '-100%'},1000,"easeInQuart");
        $("#list2").animate({left: '-100%'},1000,"easeInQuart");
      $("#skills").animate({left: '-25%'}, 1500, "easeInQuart");
      console.log("Left Panel In")
    });
});

//This function slides experiences from left to right
function experienceFadeFromLeft(){
    var scrolled = false;
    var title = ["#arng", "#xforce", "#numerade", "#mathnasium"];
    var i = 0;

    window.addEventListener('scroll',() => {
        if ((document.body.scrollTop > 2675  || document.documentElement.scrollTop > 2675) && scrolled == false){
            scrolled = true;
            var loop=setInterval(()=>{
                $(title[i]).animate({
                    left: "50%"
                },1000,"easeOutExpo");
                i++;
                console.log("Wait")
                if(i == title.length)
                    clearInterval(loop);
            },400);
        }
    })
}



//Function Calls
welcomeMessage();
wait();
leftPanelPopOut();
experienceFadeFromLeft();
ClickListen();
Arrow();
