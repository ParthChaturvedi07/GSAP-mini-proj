function page1Animation(){
var tl = gsap.timeline()

tl.from("nav h1, nav h4, nav button",{
    y:-40,
    duration:0.7, 
    delay:0.5,
    opacity:0,
    stagger:0.15
})

tl.from(".center-part1 h1",{
    x:-300,
    opacity:0,
    duration:0.5
},"-=0.3")

tl.from(".center-part1 p",{
    x:1200,
    opacity:0,
    duration:0.4
})

tl.from(".center-part1 button",{
    opacity:0,
    duration:0.4
})

tl.from(".center-part2 img",{
    opacity:0,
    delay:0.2,
    x:200
},"-=0.3")
}
page1Animation()

function page2Animation(){
var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:".section1-bottom img",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top -50%",
        scrub:2
    }
})

tl2.from(".section1-bottom img",{
    opacity:0,
    y:30,
    stagger:0.15,
    duration:0.6,
})

tl2.from(".services",{
    x:-300,
    opacity:0,
    duration:0.5,
})

//Line1
tl2.from(".elem.line1.left",{
    x:-300,
    opacity:0,
    duration:0.8
},"anim1")

tl2.from(".elem.black.line1.right",{
    x:300,
    opacity:0,
    duration:0.8
},"anim1")

//Line2
tl2.from(".elem.black.line2.left",{
    x:-300,
    opacity:0,
    duration:0.8
},"anim2")

tl2.from(".elem.line2.right",{
    x:300,
    opacity:0,
    duration:0.8
},"anim2")

//line3
tl2.from(".elem.line3.left",{
    x:-300,
    opacity:0,
    duration:0.8
},"anim3")

tl2.from(".elem.black.line3.right",{
    x:300,
    opacity:0,
    duration:0.8
},"anim3")

}
page2Animation()

function page3Animation(){

    var tl3 = gsap.timeline({
        scrollTrigger:{
            trigger:".section3 .team",
            scroller:"body",
            markers:true,
            start:"top 60%",
            end:"top 30%",
            scrub:2
        }
    })

    tl3.from(".team",{
        x:300,
        opacity:0,
        duration:1,
    })

    //Line3
    tl3.from(".elem2.line3.baye",{
        x:-300,
        opacity:0,
        duration:0.8
    },"anim3")

    tl3.from(".elem2.line3.up",{
        y:-300,
        opacity:0,
        duration:0.8
    },"anim3")

    tl3.from(".elem2.line3.daye",{
        x:300,
        opacity:0,
        duration:0.8
    },"anim3")

    //line4
    tl3.from(".elem2.line4.baye",{
        x:-300,
        opacity:0,
        duration:0.8
    },"anim4")

    tl3.from(".elem2.line4.down",{
        y:300,
        opacity:0,
        duration:0.8
    },"anim4")
        
    tl3.from(".elem2.line4.daye",{
            x:300,
            opacity:0,
            duration:0.8
    },"anim4")

}

page3Animation()