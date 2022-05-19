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
window.addEventListener('scroll',() => {
    if ((document.body.scrollTop > 800 && document.body.scrollTop < 805) || 
        (document.documentElement.scrollTop > 800 && document.documentElement.scrollTop < 805)){
        $("#skills").animate({left: '0%'});
        console.log("out");
        
        //Removing any running event listener for scrolling
        window.removeEventListener('scroll',()=>{});
    }
})

//This function collapes side bar when mouse leaves the section
$(document).ready(function(){
    $("#moreInformation").mouseleave(function(){
      $("#skills").animate({left: '-25%'});
    });
});