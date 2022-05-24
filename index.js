

//This function displays the terminal animation on screen
function wait(){
    //adding a terminal line
    setTimeout(() => {
    document.getElementById("disp").innerHTML = "<br><m style='color: #65a450'>me@MyWebSite</m>:<m style='color: #397e9c '>/JEREMY_NGUYEN</m>$ More about me and my projects on my <a href='https://www.linkedin.com/in/jeremu2907/' class='link' target='_blank'>LinkedIn</a> and <a href='https://github.com/jeremu2907' class='link2' target='_blank'>GitHub</a><br>";
    }, 10000);
    
    //Creating new terminal line
    setTimeout(() => {
        document.getElementById("animate").innerHTML = "<div class='typing intro'><m style='color: #65a450'>me@MyWebSite</m>:<m style='color: #397e9c '>/JEREMY_NGUYEN</m>$ More about me and my projects on my<a href='https://www.linkedin.com/in/jeremu2907/' class='link' target='_blank'> LinkedIn</a> and <a href='https://github.com/jeremu2907' class='link2' target='_blank'>GitHub</a></div>"
    },4000);

    setTimeout(() => {
        document.getElementById("animate").innerHTML = "<div class='typing2 intro'><m style='color: #65a450'>me@MyWebSite</m>:<m style='color: #397e9c ''>/JEREMY_NGUYEN</m>$ Email me at <a href='mailto:jeremu2907@gmail.com? target='_blank'' style='color:rgb(210, 209, 209);'>jeremu2907@gmail.com</a><div>"
    },10000)
}
wait();

//This function display the side bar in section 2
 async function leftPanelPopOut(){
    var scrolled = false;

    window.addEventListener('scroll',() => {
        if (((document.body.scrollTop > 700 && document.body.scrollTop < 1200)  || 
            (document.documentElement.scrollTop > 700 && document.documentElement.scrollTop < 1200)) && scrolled == false){
            $("#skills").animate({left: '0%'});
            console.log("out");
    
            scrolled = true;
            setTimeout(()=>{
                scrolled = false;
            },1200);
        }
    })
}
leftPanelPopOut();

//This function collapes side bar when mouse leaves the section
$(document).ready(function(){
    $("#moreInformation").mouseleave(function(){
      $("#skills").animate({left: '-25%'});
    });
});