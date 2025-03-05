let mirrorball = document.getElementById('mirrorball');
let model = document.getElementById('model');
let blob_1 = document.getElementById('blob-1');
let spotlight = document.getElementById('spotlight'); 
let heading = document.getElementById('heading');
let header = document.querySelector('header');
let menu = document.getElementById("nav-menu");

    

window.addEventListener('scroll', function(){
    let value = window.scrollY;
        if (window.innerWidth > 768){
        mirrorball.style.top = value * 1.05 + 'px';
        model.style.top = value * 0.5 + 'px';
        blob_1.style.top = value * 0.5 + 'px';
        spotlight.style.top = value * 0.5 + 'px';
    }
});
    
function toggleMenu() {
    menu.classList.toggle("show-menu");
}



