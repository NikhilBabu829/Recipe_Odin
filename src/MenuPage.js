function Menu(){
    const placeForContentDisplay = document.createElement('div');
    placeForContentDisplay.classList.add('recipiesContent');

    cardCreator(placeForContentDisplay);

    return placeForContentDisplay;
}


function cardCreator(parent){
    const recipeInfo = [
        'A versatile handheld meal, sandwiches offer endless flavor combinations with bread, fillings, and condiments of your choice.',
        'Pasta, a beloved Italian staple, comes in various shapes and pairs perfectly with diverse sauces for satisfying meals.',
        'Dumplings, a popular bite-sized delight, are filled with savory ingredients and can be steamed, fried, or boiled.',
        'Controversial but loved by some, pineapple pizza combines sweet fruit with savory toppings for a unique taste.',
        'Crispy and flavorful, chicken wings are a finger-licking delight, often enjoyed with various sauces and seasonings.',
        'A classic breakfast combo, bacon and eggs make for a hearty and delicious start to the day.',
        'Chicken burgers offer a tasty alternative to beef, with tender chicken patty and flavorful toppings for satisfying bites.',
        'Ramen with succulent prawns and a perfectly cooked egg creates a harmonious blend of flavors and textures.',
        'A whole cooked chicken, juicy and tender, makes for a convenient and delicious centerpiece for any meal.'
    ]
    const dishName = [
        'Sandwhich',
        'Pasta',
        'Dumplings',
        'Pineapple Pizza',
        'Chicken Wings',
        'Bacon & Eggs',
        'Chicken Cheese Burger',
        'Ramen with Prawns and Egg',
        'Cooked Whole Chicken'
    ]
    const dishPrice = [
        '2.00',
        '3.00',
        '2.00',
        '4.00',
        '4.00',
        '3.00',
        '4.00',
        '5.00',
        '20.00'
    ]    
    for(let i = 0; i <= 8; i++) {
        const image = require(`./Assets/recipeImages/foodImage${i+1}.jpg`)
        const card = document.createElement('div');
        card.classList.add('card');

        console.log(image)
        
        const imagePart = document.createElement('div');
        imagePart.classList.add('imagePart');
        imagePart.style.backgroundImage = `url(${image})`

        const informationPart = document.createElement('div');
        informationPart.classList.add('informationPart');
        namingAndPricing(informationPart, dishName[i], recipeInfo[i], dishPrice[i])

        card.appendChild(imagePart);
        card.appendChild(informationPart);

        parent.append(card);
    }
}

function namingAndPricing(div, dishName, dishInfo, dishPrice){
    const headingTwo = document.createElement('h2');
    headingTwo.innerText = dishName

    const paragraph = document.createElement('p');
    paragraph.innerText = dishInfo

    const cost = document.createElement('h3');
    cost.innerText = `${dishPrice}$`

    div.appendChild(headingTwo);
    div.appendChild(paragraph);
    div.appendChild(cost);
}

export {Menu}