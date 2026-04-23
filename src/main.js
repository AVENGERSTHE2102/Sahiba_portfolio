import $ from 'jquery';
import anime from 'animejs/lib/anime.es.js';
// import 'protonet-jquery.inview'; // Loaded via CDN in index.html due to npm 404

// Luxy.js is not a standard npm module with exports usually, simpler to just use it if attached to window script or import if possible.
// For now, checking if luxy is available globally (linked in index.html) or we might need to find a way to import it.
// We will assume it's loaded via script tag in index.html for this iteration as it's a specific library.

$(document).ready(function () {

    // Smooth Scrolling with Luxy
    var isMobile = /iPhone|iPad|Android/i.test(navigator.userAgent);
    if (!isMobile && window.luxy) {
        luxy.init({
            wrapper: '#luxy',
            wrapperSpeed: 0.3,
        });
    }

    // Link Click Delay
    $('a.list-parent, a.menu-link-parent, a.logo-parent, a.n-p-link, a.btn-parent-s, a.img-parent-link').click(function (e) {
        e.preventDefault();
        var goTo = this.getAttribute("href");
        setTimeout(function () {
            window.location = goTo;
        }, 1100);
    });

    // Cursor Interaction
    $('a').on('mouseenter', function () {
        $('.cursor-dot').addClass('is-larger');
    });

    $('a').on('mouseleave', function () {
        $('.cursor-dot').removeClass('is-larger');
    });

    $('.open').on('tap', function () { $('body').toggleClass('no-scroll'); });

    // Tricksword / Stagger Text setup
    // Code by T.RICKS
    var tricksWord = document.getElementsByClassName("tricks");
    for (var i = 0; i < tricksWord.length; i++) {
        var wordWrap = tricksWord.item(i);
        wordWrap.innerHTML = wordWrap.innerHTML.replace(/(^|<\/?[^>]+>|\s+)([^\s<]+)/g, '$1<span class="tricksword">$2</span>');
    }

    var tricksLetter = document.getElementsByClassName("tricksword");
    for (var i = 0; i < tricksLetter.length; i++) {
        var letterWrap = tricksLetter.item(i);
        letterWrap.innerHTML = letterWrap.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    }

    // Stagger Text Code
    let staggerDistance = 10;
    let staggerHoverDuration = 600;
    let staggerOffsetDuration = 20;

    var tricksesWord = document.getElementsByClassName("stagger-text");
    for (var i = 0; i < tricksesWord.length; i++) {
        var wordWrap = tricksesWord.item(i);
        wordWrap.innerHTML = wordWrap.innerHTML.replace(/(^|<\/?[^>]+>|\s+)([^\s<]+)/g, '$1<span class="tricksesWord">$2</span>');
    }
    var tricksesLetter = document.getElementsByClassName("tricksesWord");
    for (var i = 0; i < tricksesLetter.length; i++) {
        var letterWrap = tricksesLetter.item(i);
        letterWrap.innerHTML = letterWrap.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    }

    $('.stagger-text').on('mouseenter mouseleave', function () {
        $(this).toggleClass('being-hovered');
    });

    $('.stagger-text').on('mouseenter', function () {
        var staggerText = anime.timeline({
            loop: false,
            autoplay: false,
        });
        staggerText
            .add({
                targets: ".stagger-text.being-hovered .letter",
                translateY: [0, -staggerDistance, staggerDistance, 0],
                opacity: [1, 0, 0, 1],
                easing: "easeOutExpo",
                duration: staggerHoverDuration,
                delay: (el, i) => 0 + staggerOffsetDuration * i
            });
        staggerText.play();
    });

    // Animations
    var slideIn = anime.timeline({ loop: false, autoplay: false });
    slideIn.add({
        targets: '.slide-in .letter',
        opacity: [0, 1],
        easing: "easeInOutQuad",
        duration: 2250,
        delay: (el, i) => 150 * (i + 1)
    }).add({
        targets: '.slide-in',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
    });

    var slideUp = anime.timeline({ loop: false, autoplay: false });
    slideUp.add({
        targets: '.slide-up .letter',
        translateY: ["1.1em", 0],
        opacity: [0, 1],
        translateZ: 0,
        duration: 750,
        delay: (el, i) => 50 * i
    }).add({
        targets: '.slide-up',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
    });

    var fadeUp = anime.timeline({ loop: false, autoplay: false });
    fadeUp.add({
        targets: '.fade-up .letter',
        translateY: [100, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 1400,
        delay: (el, i) => 300 + 20 * i
    });

    var fadeUp2 = anime.timeline({ loop: false, autoplay: false });
    fadeUp2.add({
        targets: '.fade-up2 .letter',
        translateY: [100, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 1400,
        delay: (el, i) => 200 + 10 * i
    });

    var rotateIn = anime.timeline({ loop: false, autoplay: false });
    rotateIn.add({
        targets: '.rotate-in .letter',
        translateY: ["1.1em", 0],
        translateX: ["0.55em", 0],
        translateZ: 0,
        rotateZ: [180, 0],
        duration: 750,
        easing: "easeOutExpo",
        delay: (el, i) => 50 * i
    }).add({
        targets: '.rotate-in',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
    });

    var popIn = anime.timeline({ loop: false, autoplay: false });
    popIn.add({
        targets: '.pop-in .letter',
        scale: [0, 1],
        duration: 1500,
        elasticity: 600,
        delay: (el, i) => 45 * (i + 1)
    }).add({
        targets: '.pop-in',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
    });

    // Play default animations
    slideIn.play();
    rotateIn.play();
    popIn.play();

    // Scroll Triggers
    $('#scroll-in').on('inview', function (event, isInView) {
        if (isInView) {
            fadeUp.play();
        }
    });

    $('#scroll-in2').on('inview', function (event, isInView) {
        if (isInView) {
            fadeUp2.play();
        }
    });

    // Custom Anime JS trigger removed. Element is animated by Webflow IX2 via data-w-id=ee195660...


    // Image Loop - Enhanced for robustness
    const loopImageDuration = 450;
    $(".loop-parent").each(function () {
        const $parent = $(this);
        const $images = $parent.find(".loop-image");
        if ($images.length === 0) return;

        setInterval(function () {
            const $active = $parent.find(".loop-image.shown-image");
            let nextIndex = 0;
            
            if ($active.length > 0) {
                const currentIndex = $images.index($active);
                nextIndex = (currentIndex + 1) % $images.length;
                $active.removeClass("shown-image");
            }
            
            $images.eq(nextIndex).addClass("shown-image");
        }, loopImageDuration);
    });
    // Loading Screen Animation
    function initLoadingScreen() {
        // Initial state
        $('.loading-screen-parent').css('display', 'flex');

        // Prepare Hero elements for reveal (hide them initially)
        $('.hero-text-a, .hero-text-b, .hero-text-c, .heading-sm, .link-container, .home-hero-btm .div-hide div').css('opacity', 0);

        let loadingTimeline = anime.timeline({
            easing: 'easeOutExpo',
            complete: function () {
                // Hide loading screen after animation
                anime({
                    targets: '.loading-screen-parent',
                    translateY: '-100%',
                    duration: 1000,
                    easing: 'easeInOutQuad',
                    complete: function () {
                        $('.loading-screen-parent').css('display', 'none');

                        // Reveal Header / Nav
                        anime({
                            targets: '.main-nav-parent.desktop',
                            translateY: ['-68%', '0%'],
                            duration: 1000,
                            easing: 'easeOutExpo'
                        });

                        // Reveal Home Hero Elements (mimicking "div-hide" reveal)
                        anime({
                            targets: ['.hero-text-a', '.hero-text-b', '.hero-text-c', '.heading-sm', '.link-container', '.home-hero-btm .div-hide div'],
                            translateY: ['100%', '0%'],
                            opacity: [0, 1],
                            duration: 1200,
                            delay: anime.stagger(100),
                            easing: 'easeOutExpo'
                        });
                    }
                });
            }
        });

        loadingTimeline
            .add({
                targets: '.loading-text-parent',
                opacity: [0, 1],
                scale: [3, 1],
                duration: 1500
            })
            .add({
                targets: '.loading-text-left',
                width: ['0%', '100%'],
                opacity: [0, 1],
                duration: 1000,
                offset: '-=800'
            })
            .add({
                targets: '.other-letters',
                opacity: [0, 1],
                translateX: [20, 0],
                delay: anime.stagger(100),
                duration: 800,
                offset: '-=800'
            })
            .add({
                targets: '.loading-text-parent',
                scale: 0.8, // subtle zoom out before exit
                duration: 500,
                delay: 500
            });
    }

    // Call loading screen animation
    initLoadingScreen();

});
