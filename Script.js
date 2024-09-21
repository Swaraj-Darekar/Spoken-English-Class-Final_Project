let navbar = document.querySelector('header .nav');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.add('active');
}

document.querySelector('#nav-close').onclick = () => {
    navbar.classList.remove('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
}



// Course Slider starts

new Swiper('.card-wrapper', {

    loop: true,
    spaceBetween: 30,


      // autoplay configuration
      autoplay: {
        delay: 3000,  // Delay between slides in milliseconds (3000ms = 3 seconds)
        disableOnInteraction: false,  // Keeps autoplay even after user interaction (like clicking or swiping)
    },

    // pagination bullets
    pagination: {
        el: '.swiper-pagination',
        clickable:true,
        dynaicBullets: true
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // responsive breakpoints
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        },
    }

});


//   Course slider ends
