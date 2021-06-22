//go back to top button
const scrollUP = document.querySelector('#goTopBtn');

window.addEventListener('scroll', () => {
    if(window.pageYOffset > 100) {
        scrollUP.classList.add("active");
    }
    else{
        scrollUP.classList.remove("active");
    }
    
});