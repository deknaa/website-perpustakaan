function showHamburgerMenu(){
    let x = document.getElementsByClassName('toggle-menu').innerHTML;
    console.log(x);

    if(x == "x"){
        console.log("Hamburger Menu Close.");
        document.getElementsByClassName('toggle-menu');
        document.getElementsByClassName('nav-list').style.display="none";
    }else{
        console.log("Hamburger Menu Open.");
        document.getElementsByClassName('toggle-menu').innerHTML="x";
        document.getElementsByClassName('nav-list').style.display="block";
    }
}