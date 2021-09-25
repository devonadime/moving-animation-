const path = {

    curviness: 0,
    autoRotate: true,
    values: [{ x: 1000, y: -30 }]

};

const tween = new TimelineLite();

tween.add(

    TweenLite.to(".scooter", 1, {

        bezier: path,
        ease: Power1.easeInOut

    })
);


const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({

    triggerElement: '.animation',
    duration: 950,

})
    .setTween(tween)
    .addIndicators()
    .addTo(controller);