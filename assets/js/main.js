// copy to menu desktop for menu mobile
// copy to menu desktop for menu mobile
function copyMenu() {
    // copy from .header-main .dpt-button to .off-canvas .departaments
    var dptDesktop = document.querySelector(".dpt-categories");
    var dptMobile = document.querySelector(".dpt-categories-mobile");
    dptMobile.innerHTML = dptDesktop.innerHTML;
}

copyMenu();


// click event, mobile menu
var openNav = document.querySelector('.trigger');
var closeNav = document.querySelector('.btn-close');
var offCanvas = document.querySelectorAll('.site-off');

openNav.addEventListener('click', () => {
	offCanvas.forEach(nav_el => { nav_el.classList.add('visible') });
});

closeNav.addEventListener('click', () => {
	offCanvas.forEach(nav_el => { nav_el.classList.remove('visible') });
});