const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

document.addEventListener('mousemove', function (dets) {
    document.querySelector('.cursor').style.top = `${dets.y}px`
    document.querySelector('.cursor').style.left = `${dets.x}px`
})

var time = document.querySelector('#time')
setInterval(() => {
    var newDate = new Date().toLocaleTimeString()
    time.textContent = newDate
}, 1000);



function valueSetter() {
    gsap.set(".section1-main span h1", { marginTop: "14vh", });
    gsap.set(".child h1", { marginTop: "15vh", });
    gsap.set(".parent2 .child2", { marginTop: "-25px", });
    gsap.set(".parent3 .child3", { marginTop: "24px", });
    gsap.set(".section1-btm-nav h4,.section1-btm-nav>p", { opacity: "0", });
    gsap.set(".section1", { width: "0%", });
    gsap.set(".close-elem span h1", { marginTop: "42vh", });
    gsap.set(".close", { height: "0%", });
    gsap.set(".about-main", { width: "0%", });
    gsap.set(".blogs-main", { width: "0%", });
    gsap.set(".contact-main", { width: "0%", });
}

function menuAnimate() {
    let menuu = document.querySelector('.menuu');
    let menu = document.querySelector('.menu');

    menuu.addEventListener('click', function () {
        menu.style.display = 'flex';

        var tl2 = gsap.timeline();
        tl2

            .to(".close", {
                height: '100%',
                duration: 1,
                ease: Expo.easeInOut
            })

            .to(".close-elem span h1", {
                marginTop: 0,
                duration: .5,
                delay: -.2,
                ease: Expo.ease
            })

            .to(".about-main", {
                width: '50%',
                duration: .8,
                delay: -.8,
                ease: Expo.ease
            })

            .to(".blogs-main", {
                width: '100%',
                duration: .5,
                delay: -.6,
                ease: Expo.ease
            })

            .to(".contact-main", {
                width: '100%',
                duration: .5,
                delay: -.4,
                ease: Expo.ease
            })
    })

    document.querySelector('.close-elem').addEventListener('click', function () {
        var tl3 = gsap.timeline();
        tl3

            .to(".contact-main", {
                width: '0%',
                duration: .3,
                ease: Expo.ease
            })
            .to(".blogs-main", {
                width: '0%',
                duration: .3,
                delay: -.1,
                ease: Expo.ease
            })
            .to(".about-main", {
                width: '0%',
                duration: .4,
                delay: -.2,
                ease: Expo.ease
            })
            .to(".close-elem span h1", {
                marginTop: '42vh',
                duration: .5,
                delay: -.5,
                ease: Expo.ease
            })

            .to(".close", {
                height: '0%',
                duration: .5,
                delay: -.3,
                ease: Expo.easeInOut
            })

        setTimeout(() => {
            menu.style.display = 'none';
        }, 1000);
    })
}

function animetHomePage() {
    var tl = gsap.timeline();

    tl.to(".section1", {
        width: "100%",
        duration: .4,
        ease: Expo.easeInOut
    })

    tl.to(".child h1, .parent3 .child3", {
        marginTop: 0,
        stagger: .1,
        duration: 1.8,
        ease: Expo.easeInOut
    })

    tl.to(".parent2 .child2", {
        marginTop: 0,
        delay: -.5,
        stagger: .2,
        duration: .5,
        ease: Expo.ease
    })

    tl.to(".section1-btm-nav h4,.section1-btm-nav>p", {
        opacity: 1,
        ease: Expo.ease
    })
}

var tl = gsap.timeline();

tl

    .to(".section1-main span h1", {
        marginTop: 0,
        duration: 1,
        stagger: 1,
        ease: Expo.easeInOut
    })
    .to(".section1-main span h1", {
        marginTop: "-20vh",
        duration: 1,
        stagger: 1,
        ease: Expo.easeInOut,
        onComplete: function () {
            animetHomePage();
        }
    })



function animetSection2() {
    var div1 = document.querySelector(".div1");
    var div1ImageDiv = document.querySelector(".div1 .image img");
    var div1Image = document.querySelector(".div1 .image");
    var text1 = div1.querySelector('h1');
    var div1H5 = div1.querySelector('h5');

    div1.addEventListener("mousemove", function (dets) {
        div1ImageDiv.style.scale = 1;
        div1Image.style.top = (dets.y - 150) + "px";
        div1Image.style.left = (dets.x - 400) + "px";
        div1Image.style.rotate = '-15deg';
        div1H5.style.opacity = '.3';
        document.querySelector('.cursor').style.display = "none"
        gsap.to(text1, {
            opacity: 0.3,
            x: 40,
            duration: .5,
            Expo: Expo.ease
        })
    })

    div1.addEventListener("mouseleave", function (dets) {
        div1ImageDiv.style.scale = 0;
        div1H5.style.opacity = '1';
        document.querySelector('.cursor').style.display = "block"

        gsap.to(text1, {
            opacity: 1,
            x: 0,
            duration: .5,
            Expo: Expo.ease
        })
    })

    var div2 = document.querySelector(".div2");
    var div2ImageDiv = document.querySelector(".div2 .image img");
    var div2Image = document.querySelector(".div2 .image");
    var text2 = div2.querySelector('h1');
    var div2H5 = div2.querySelector('h5');

    div2.addEventListener("mousemove", function (dets) {
        div2ImageDiv.style.scale = 1;
        div2Image.style.top = (dets.y - 250) + "px";
        div2Image.style.left = (dets.x - 400) + "px";
        div2Image.style.rotate = '15deg';
        div2H5.style.opacity = '.3';
        document.querySelector('.cursor').style.display = "none"

        gsap.to(text2, {
            opacity: 0.3,
            x: 40,
            duration: .5,
            Expo: Expo.ease
        })
    });


    div2.addEventListener("mouseleave", function (dets) {
        div2ImageDiv.style.scale = 0;
        div2H5.style.opacity = '1';
        document.querySelector('.cursor').style.display = "block"

        gsap.to(text2, {
            opacity: 1,
            x: 0,
            duration: .5,
            Expo: Expo.ease
        })
    })

    var div3 = document.querySelector(".div3");
    var div3ImageDiv = document.querySelector(".div3 .image img");
    var div3Image = document.querySelector(".div3 .image");
    var text3 = div3.querySelector('h1');
    var div3H5 = div3.querySelector('h5');

    div3.addEventListener("mousemove", function (dets) {
        div3ImageDiv.style.scale = 1;
        div3Image.style.top = (dets.y - 450) + "px";
        div3Image.style.left = (dets.x - 400) + "px";
        div3Image.style.rotate = '-15deg';
        div3H5.style.opacity = '.3';
        document.querySelector('.cursor').style.display = "none"
        gsap.to(text3, {
            opacity: 0.3,
            x: 40,
            duration: .5,
            Expo: Expo.ease
        })
    })

    div3.addEventListener("mouseleave", function (dets) {
        div3ImageDiv.style.scale = 0;
        div3H5.style.opacity = '1';
        document.querySelector('.cursor').style.display = "block"

        gsap.to(text3, {
            opacity: 1,
            x: 0,
            duration: .5,
            Expo: Expo.ease
        })
    })
}



valueSetter();
animetSection2()
menuAnimate();