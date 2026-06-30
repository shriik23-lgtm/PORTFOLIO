const menu=document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menu.onclick= () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

const typed = new Typed('.multiple-text',{
    strings:['Frontend Developer'],
    typeSpeed:80,
    backSpeed:80,
    backDelay:1200,
    loop:true,
})
const navLinks = document.querySelectorAll('.navbar a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('bx-x');
        navbar.classList.remove('active');
    });
});

