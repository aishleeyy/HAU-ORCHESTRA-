const navMenu = document.getElementById('menu') 
const navToggle = document.getElementById('hamburger') 


if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active') 
    })
}



