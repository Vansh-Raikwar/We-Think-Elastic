let t = gsap.timeline();
t.from(".pi , .exp h2",{
    x:-50,
    opacity:0,
    deloy:0.2,
    duration:0.5,
    stagger:1,
    
})
t.from(".page1 h1 ",{
    y:50,
    opacity:0,
    
    duration:0.8,
    stagger:1
})
t.from(" .page1 h2",{
    y:50,
    opacity:0,
    duration:0.8,
    stagger:1
})
gsap.from(".page2 video",{
    scale:0,
    delay:5,
    duration:2,
    scrollTrigger:{
        trigger:".page2",
        scoller:"body",
        scrub:1
    }
})
gsap.from(".page3 h3 p",{
    y:50,
    opacity:0,
    duration:0.8,
    stagger:1,
    scrollTrigger:{
        trigger:".page3 ",
        scroller:"body",
        scrub:true,
        pin:true
    }
})
gsap.to(".page6 h2",{
    transform:"translateX(-150%)",
    
    scrollTrigger:{
        trigger:".page6",
        scroller:"body",
        
        scrub:6,
        marker:true,
        pin:true,
        marker:true
    }
})
const videos = document.querySelectorAll("video")


let a = document.querySelector(".video1");
a.addEventListener("mouseover", function () {
    a.play();
});