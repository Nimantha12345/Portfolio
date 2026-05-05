document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Typed.js Initialization
    // HTML එකේ class="text" ලෙස ඇති තැනට අකුරු ටයිප් වීම සිදු වේ
    if(document.querySelector(".text")) {
        var typed = new Typed(".text", {
            strings: [" SE Undergraduate", " IT Student"],
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 1000,
            loop: true,
        });
    }

    // 2. MixItUp Portfolio Section
    // ඔබේ HTML එකේ class="projects-gallery" සහ class="port-box" ඇති නිසා මෙසේ විය යුතුය
    try {
        var mixer = mixitup('.projects-gallery', {
            selectors: {
                target: '.port-box' 
            },
            animation: {
                duration: 500
            }
        });
    } catch (e) {
        console.log("MixItUp error: projectsgallery element not found.");
    }

    // 3. Circle Skill Initialization
    const circles = document.querySelectorAll('.circle');
    circles.forEach(elem => {
        var dots = elem.getAttribute("data-dots");
        var marked = elem.getAttribute("data-percent");
        var percent = Math.floor(dots * marked / 100);
        var points = "";
        var rotate = 360 / dots;

        for (let i = 0; i < dots; i++) {
            points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
        }
        elem.innerHTML = points;

        const pointsMarked = elem.querySelectorAll('.points');
        for (let i = 0; i < percent; i++) {
            if(pointsMarked[i]) {
                pointsMarked[i].classList.add('marked');
            }
        }
    });

    // 4. Active Menu Selection
    let menuLi = document.querySelectorAll('header ul li a');
    let sections = document.querySelectorAll('section');

    function activeMenu() {
        let len = sections.length;
        // ස්ක්‍රෝල් කරන විට අදාළ සෙක්ෂන් එකට අනුව මෙනූ එකේ 'active' ක්ලාස් එක මාරු කරයි
        while (--len && window.scrollY + 97 < sections[len].offsetTop) {}
        menuLi.forEach(sec => sec.classList.remove("active"));
        if(menuLi[len]) {
            menuLi[len].classList.add("active");
        }
    }

    activeMenu();
    window.addEventListener("scroll", activeMenu);

    // 5. Sticky Navbar
    const header = document.querySelector("header");
    window.addEventListener("scroll", function() {
        header.classList.toggle("sticky", window.scrollY > 50);
    });

    // 6. Mobile Menu Toggle
    let menuIcon = document.querySelector('#menu-icon');
    let navlist = document.querySelector('.navlist');

    if(menuIcon) {
        menuIcon.onclick = () => {
            menuIcon.classList.toggle('bx-x');
            navlist.classList.toggle('open');
        };
    }
});

