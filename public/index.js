window.onload = () => {
    document.getElementById("cover").style.backgroundColor = "var(--light-clr-bg)";
    setTimeout(() => {
        document.getElementById("cover").querySelectorAll(["h1","h3"]).forEach((e)=>{
            e.style.whiteSpace = "nowrap";
            e.style.fontSize = "1000px";
        })
        document.getElementById("cover").style.opacity = "0";
        setTimeout(() => {
            document.getElementById("cover").style.visibility="hidden";
        },1000)
    }, 2000)
}