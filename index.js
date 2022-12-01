// window.addEventListener('scroll',() => {
//     // if ((document.body.scrollTop > 100  || document.documentElement.scrollTop > 100)){
//     //     $("#yumiya").fadeIn(4000)
//     //     console.log("yumiya")
//     // }
//     console.log(document.body.scrollTop)
// })

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
        // document.getElementById("terminalBG").style.backgroundImage = "url('section1light.jpg')"
        // document.getElementById("media").style.backgroundColor = "rgba(50, 50, 50, 0.7)";
        // document.getElementById("skills").style.backgroundColor = "rgba(40, 40, 40, 0.5)";
        // document.getElementById("textBox").style.color = dark;
        document.getElementById("experience").style.backgroundColor = white;
        document.getElementById("subject").style.color = dark;
        document.getElementById("description").style.color = dark;
        document.getElementById("description2").style.color = dark;
        document.getElementById("description3").style.color = dark;
        document.getElementById("description4").style.color = dark;
        document.getElementById("project").style.backgroundColor = white;
        document.getElementById("projectDesc").style.color = dark;
        // var cols = document.getElementsByClassName('navButton');
        // for(i = 0; i < cols.length; i++) {
        //     cols[i].style.color = dark;
        // }
        // cols = document.getElementsByClassName('navBar');
        // for(i = 0; i < cols.length; i++) {
        //     cols[i].style.borderBottom = "solid rgb(23,23,23) 1px";
        //     // cols[i].style.backgroundImage = "linear-gradient(rgba(255,255,255,0.0),rgba(255,255,255,0.5),rgba(255,255,255,0.5)";
        // }
    }

    //to dark
    if(option % 2 ==0){
        document.getElementById("circ").style.backgroundColor = white;
        document.getElementById("smallCirc").style.backgroundColor = dark;
        document.getElementById("scrolldown").style.color = light;
        document.getElementById("Name").style.backgroundColor = dark;
        document.getElementById("message").style.color = light;
        // document.getElementById("terminalBG").style.backgroundImage = "url('section1dark.jpg')"
        // document.getElementById("media").style.backgroundColor = "rgba(5, 5, 5, 0.3)";
        // document.getElementById("skills").style.backgroundColor = "rgba(23, 23, 23, 0.856)";
        document.getElementById("textBox").style.color = light;
        document.getElementById("experience").style.backgroundColor = dark;
        document.getElementById("subject").style.color = light;
        document.getElementById("description").style.color = light;
        document.getElementById("description2").style.color = light;
        document.getElementById("description3").style.color = light;
        document.getElementById("description4").style.color = light;
        document.getElementById("project").style.backgroundColor = dark;
        document.getElementById("projectDesc").style.color = light;
        // var cols = document.getElementsByClassName('navButton');
        // for(i = 0; i < cols.length; i++) {
        //     cols[i].style.color = light;
        // }
        // cols = document.getElementsByClassName('navBar');
        // for(i = 0; i < cols.length; i++) {
        //     cols[i].style.borderBottom = "solid #bdbdbd 1px";
        //     // cols[i].style.backgroundImage = "linear-gradient(rgba(255,255,255,0.0),rgba(255,255,255,0.0))";
        // }
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
function welcomeMessage(i){
    var welcome = ["こんにちは!","Xin Chào!","Hello!"]
    setTimeout(() => {
            $("#welcomeMessage").animate({
                opacity: "0"
            },1000,() => {
                document.getElementById("welcomeMessage").innerHTML = welcome[i%3];
                i++;
                $("#welcomeMessage").animate({
                    opacity: "1"
                },1000,welcomeMessage(i))
            });   
    },1500);
}

//This function displays the terminal animation on screen
function wait(){
    document.getElementById("intro").style.opacity = "1";
    document.getElementById("animate").style.opacity = "1";
    // var scrolled = false;

    // window.addEventListener('scroll',() => {
        // if (((document.body.scrollTop > 790)  || (document.documentElement.scrollTop > 790)) && scrolled == false){
            // scrolled = true;
            console.log("Start Terminal Typing Animation")
            //adding a terminal line
            setTimeout(() => {
                document.getElementById("disp").innerHTML = "<m style='color: #ffffff'>me@MyWebSite</m>:<m style='color: #397e9c '>/JEREMY_NGUYEN</m>$ More about me and my projects on my <a href='https://www.linkedin.com/in/jeremu2907/' class='link' target='_blank'>LinkedIn</a> and <a href='https://github.com/jeremu2907' class='link2' target='_blank'>GitHub</a><br><br>";
            }, 6300);
            
            //Creating new terminal line
            setTimeout(() => {
                document.getElementById("animate").innerHTML = "<div class='typing intro'><m style='color: #ffffff'>me@MyWebSite</m>:<m style='color: #397e9c '>/JEREMY_NGUYEN</m>$ <span>More about me and my projects on my<a href='https://www.linkedin.com/in/jeremu2907/' class='link' target='_blank'> LinkedIn</a> and <a href='https://github.com/jeremu2907' class='link2' target='_blank'>GitHub</a></span></div><br>"
            },300);

            setTimeout(() => {
                document.getElementById("media").style.maxHeight = "1000px";
                document.getElementById("animate").innerHTML = "<div class='typing2 intro'><m style='color: #ffffff'>me@MyWebSite</m>:<m style='color: #397e9c ''>/JEREMY_NGUYEN</m>$ Email me at <a href='mailto:jeremu2907@gmail.com? target='_blank'' style='color:rgb(250,250,250);'>jeremu2907@gmail.com</a><div>"
            },6300)

            setTimeout(() => {
                document.getElementById("animate").style.height = "auto";
                document.getElementById("animate").innerHTML = "";
                document.getElementById("disp1").innerHTML = "<m style='color: #ffffff'>me@MyWebSite</m>:<m style='color: #397e9c ''>/JEREMY_NGUYEN</m>$ Email me at <a href='mailto:jeremu2907@gmail.com? target='_blank'' style='color:rgb(250,250,250);'>jeremu2907@gmail.com</a>";
            }, 12300);
        // }
    // })
}

//This function display the side bar in section 2
function leftPanelPopOut(){
    var scrolled = false;

    window.addEventListener('scroll',() => {
        if (((document.body.scrollTop > 1375 && document.body.scrollTop < 2175)  || 
            (document.documentElement.scrollTop > 1375 && document.documentElement.scrollTop < 2175)) && scrolled == false){
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
// //This function collapes side bar when mouse leaves the section
// $(document).ready(function(){
//     $("#moreInformation").mouseleave(function(){
//         $("#list").animate({left: '-100%'},1000,"easeInQuart");
//         $("#list2").animate({left: '-100%'},1000,"easeInQuart");
//       $("#skills").animate({left: '-25%'}, 1500, "easeInQuart");
//       console.log("Left Panel In")
//     });
// });

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

function clickWelcome(){
    document.getElementById("Name").scrollIntoView({behavior: "smooth"})
}

function clickAbout(){
    document.getElementById("mainPage").scrollIntoView({behavior: "smooth"})
    // document.getElementById("message").style.color = "pink"
}

function clickSkills(){
    document.getElementById("skills").scrollIntoView({behavior: "smooth"})
    // document.getElementById("message").style.color = "pink"
}

function clickProjects(){
    document.getElementById("project").scrollIntoView({behavior: "smooth"})
    // document.getElementById("message").style.color = "pink"
}

function clickExperience(){
    document.getElementById("experience").scrollIntoView({behavior: "smooth"})
    // document.getElementById("message").style.color = "pink"
}


//Function Calls
setTimeout(() => {
    welcomeMessage(0);
}, 2800);

ClickListen();
Arrow();

var terminal = false;
function openterminal(){
    $("#clickBox").css("-webkit-animation", "none");
    $("#clickBox").css("-moz-animation", "none");
    $("#clickBox").css("-ms-animation", "none");
    $("#clickBox").css("animation", "none");
    
    document.getElementById("clickBox").style.backgroundColor = "rgba(0,0,0,1)";
    document.getElementById("clickBox").style.width = "0px";
    document.getElementById("clickBox").style.height = "8vw";
    document.getElementById("clickBox").innerText = "";

    if(terminal === true)
        return;

    setTimeout(() => {
        terminal = true;
        console.log("clicked")
        if($(window).width() < $(window).height())
            document.getElementById("media").style.width = 'calc(8vw + 84ch)';
        else
            document.getElementById("media").style.width = '65vw'
        // document.getElementById("media").style.height = "auto";
        setTimeout(() => {
            document.getElementById("media").style.padding = "4vw";
            document.getElementById("intro").innerHTML = `<m style="color: #ffffff">me@MyWebSite</m>:<m class="tooltip" style="color: #397e9c ">/JEREMY_NGUYEN<span class="tooltiptext">This is my name</span></m>$ cat intro.txt
            <br><br>
            Hi, I'm <r style="color:white">Jeremy Nguyen</r> and I am a computer science student at <r style="color:orange">UT Dallas</r>
            <br>
            I also work at the Texas Army National Guard as a construction engineer
            <!-- I am experienced in C, C++, Java, and JavaScript -->
            <br><br>
            If you would like to know more about me, please take a look at my 
            <a href="./JeremyNguyenResume.pdf" class="link3 tooltip"target="_blank"><u style="text-decoration:none;">resume
                <span class="tooltiptext">This is my resume</span></u>
            </a><br><br>
            <m id="disp"></m>
            <m id="disp1"></m>
            <div id="animate" style="height:2vh;">
                <div class="typing0">
                    <m style="color: #ffffff">me@MyWebSite</m>:<m style="color: #397e9c ">/JEREMY_NGUYEN</m>$
                </div>
                <br>
            </div>`
            document.getElementById("intro").style.opacity = "1";
            document.getElementById("animate").style.opacity = "1";
            document.getElementById("media").style.maxHeight = "900px";
            setTimeout(wait(), 1000);
        }, 1000)
    },300);
}