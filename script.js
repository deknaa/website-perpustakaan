function showHamburgerMenu(){
    let toggleMenu = document.getElementById('toggle-menu');
    let navList = document.getElementById('nav-list');
    let toggleIcon = document.getElementById('toggle-icon');

    if(toggleMenu.innerHTML === 'x'){
        console.log("Hamburger Menu Close.");
        toggleMenu.innerHTML = "";
        navList.style.display = "none";
    }else{ 
        console.log("Hamburger Menu Open.");
       toggleMenu.innerHTML = "x";
       navList.style.display = "block";
    }
}