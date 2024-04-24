let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.add('active');
}

document.querySelector('#nav-close').onclick = () => {
    navbar.classList.remove('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
}


/* Get in touch script */
function sendwhatsapp() {
    var phonenumber = "+919850775215";

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var message = document.querySelector('.message').value;

    var url = "https://wa.me/+919850775215"+"?text="
    +" Name : " + name +"%0a"
    +" Email : " + email +"%0a"
    +" Phone No : " + phone +"%0a"
    +" Message : " + message +"%0a%0a";

    window.open(url, '_blank').focus();
}

