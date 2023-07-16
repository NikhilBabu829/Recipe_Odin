import FirstImage from './Assets/Salad1.jpg';
import SecondImage from './Assets/Salad.jpg';

function sectionOne(){
    const dotImage = document.createElement('div');
    dotImage.classList.add('image');

    const InformationSpace = document.createElement('div');
    InformationSpace.classList.add('informationSpace');
    
    const paragraphOneInInformationSpace = document.createElement('p');
    paragraphOneInInformationSpace.innerText = "BON APPÉTIT"
    
    const h1InInformationSpace = document.createElement('h1');
    h1InInformationSpace.innerText = "RESTAURANT"

    const paragraphTwoInInformationSpace = document.createElement('p');
    paragraphTwoInInformationSpace.innerText = "Where every bite is a masterpiece, every sip is a revelation, and every moment is a celebration of culinary artistry."

    const btnInInformationSpace = document.createElement('button');
    btnInInformationSpace.classList.add('menu_btn');
    btnInInformationSpace.innerText = "CULINARY CATALOGUE"

    InformationSpace.appendChild(paragraphOneInInformationSpace) 
    InformationSpace.appendChild(h1InInformationSpace) 
    InformationSpace.appendChild(paragraphTwoInInformationSpace)
    InformationSpace.appendChild(btnInInformationSpace) 
    
    dotImage.appendChild(InformationSpace);

    return dotImage
}

function sectionTwo(){
    const secondPhase = document.createElement('div');
    secondPhase.classList.add('anotherBlock');

    const contentInSecondPhase = document.createElement('div');
    contentInSecondPhase.classList.add('storySection');
    
    const introSection = document.createElement('div');
    introSection.classList.add('intro');

    const paragraphInIntro = document.createElement('p');
    paragraphInIntro.innerText = "CULINARY EUPHORIA"

    const headingInIntro = document.createElement('h1')
    headingInIntro.innerText = "OUR STORY"

    const paragraphTwoInIntro = document.createElement('p');
    paragraphTwoInIntro.innerText = "In the beginning, a restaurant is born from a vision. It starts with a passionate chef or entrepreneur, driven by a love for food and a desire to share their culinary creations. With careful planning, a menu is crafted, a space is created, and a team is assembled, all in anticipation of welcoming guests to a memorable dining experience."

    introSection.appendChild(paragraphInIntro)
    introSection.appendChild(headingInIntro)
    introSection.appendChild(paragraphTwoInIntro)

    contentInSecondPhase.appendChild(introSection);

    const addons = document.createElement('div');
    addons.classList.add('newestAddons');

    const imageOne = document.createElement('img');
    imageOne.src = FirstImage;
    imageOne.alt = "Image of Salad";

    const imageTwo = document.createElement('img');
    imageTwo.src = SecondImage;
    imageTwo.alt = "Image of Salad";

    addons.appendChild(imageOne);
    addons.appendChild(imageTwo);

    contentInSecondPhase.appendChild(addons);

    const fameName = document.createElement('div')
    fameName.classList.add('nameOfFame');

    const fameHeading = document.createElement('h2');
    fameHeading.innerText = "XYZ";

    fameName.appendChild(fameHeading);
    
    contentInSecondPhase.appendChild(fameName);


    secondPhase.appendChild(contentInSecondPhase);

    return secondPhase
}

function sectionThree(){
    const ingredients = document.createElement('div');
    ingredients.classList.add('ingredients');
    
    const firstPhase = document.createElement('div');
    firstPhase.classList.add('ingred');

    const paragraphOne = document.createElement('p');
    paragraphOne.innerText = "CULINARY EUPHORIA"

    const h2 = document.createElement('h2');
    h2.innerText = "ORDER ONLINE"

    const paragraphTwo = document.createElement('p');
    paragraphTwo.innerText = "Satisfy Your Cravings with Just a Few Clicks - Order Food Online for a Deliciously Convenient Meal!"

    const orderButton = document.createElement('button');
    orderButton.classList.add('menu_btn');
    orderButton.innerText = "Order Now!";

    firstPhase.appendChild(paragraphOne);
    firstPhase.appendChild(h2);
    firstPhase.appendChild(paragraphTwo);
    firstPhase.appendChild(orderButton);

    ingredients.appendChild(firstPhase);

    const secondPhase = document.createElement('div');
    secondPhase.classList.add('title');

    const h1InSecondPhase = document.createElement('h1');
    h1InSecondPhase.innerText = "BON APPÉTIT"

    const paragraphInSecondPhase = document.createElement('p');
    paragraphInSecondPhase.innerText = "Come Again!"

    secondPhase.appendChild(h1InSecondPhase);
    secondPhase.appendChild(paragraphInSecondPhase);

    ingredients.appendChild(secondPhase);
    
    return ingredients
}

export {sectionOne, sectionTwo, sectionThree}
