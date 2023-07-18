function Menu(){
    const placeForContentDisplay = document.createElement('div');
    placeForContentDisplay.classList.add('recipiesContent');

    cardCreator(placeForContentDisplay);

    return placeForContentDisplay;
}

function cardCreator(parent){
    for(let i = 1; i <= 9; i++) {
        const image = require(`./Assets/recipeImages/foodImage${i}.jpg`)
        const card = document.createElement('div');
        card.classList.add('card');

        console.log(image)
        
        const imagePart = document.createElement('div');
        imagePart.classList.add('imagePart');
        imagePart.style.backgroundImage = `url(${image})`

        const informationPart = document.createElement('div');
        informationPart.classList.add('informationPart');

        card.appendChild(imagePart);
        card.appendChild(informationPart);

        parent.append(card);
    }
}

export {Menu}