var mobilenav= document.querySelector("#mobile-nav-list");
var menubutton= document.querySelector("#menu-button");
var cancelmenu= document.querySelector("#cancel-menu");
var navbarBg = document.querySelector("#nav-bar")


window.addEventListener('scroll', () => {
    if (window.scrollY > 1) {
        navbarBg.style.backgroundColor = 'white'
        navbarBg.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.3)'
        // alert('hi')
    } else {
        navbarBg.style.backgroundColor = 'transparent'
        navbarBg.style.boxShadow = 'none'

        
   }
})


menubutton.onclick = function(){
    menubutton.style.display = 'none'
    cancelmenu.style.display ='block'
    mobilenav.style.display = 'block'
}
cancelmenu.onclick = function(){
    cancelmenu.style.display = 'none'
    mobilenav.style.display = 'none'
    menubutton.style.display = 'block'

}
 mobilenav.onTogglemenubutton() = function() {
    mobilenav.classList.toggle('top')
 }


