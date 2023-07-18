function navbar(){
    const navbar = document.createElement('div');
    navbar.classList.add('navBar');

    const anchorInNav = document.createElement('a');
    anchorInNav.innerText = "BON APPÉTIT"
    anchorInNav.classList.add('home')

    const paragraphInNav = document.createElement('p');
    paragraphInNav.innerText = "Get Eating!";

    const anotherAnchorInNav = document.createElement('a');
    anotherAnchorInNav.innerText = "Menu";
    anotherAnchorInNav.classList.add('menu')

    navbar.appendChild(anchorInNav);
    navbar.appendChild(paragraphInNav);
    navbar.appendChild(anotherAnchorInNav);

    return navbar;
}

export {navbar}
