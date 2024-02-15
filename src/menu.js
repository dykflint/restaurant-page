import Lasagna from './images/lasagna.png';
import Pizza from './images/pizza.png';
import Spaghetti from './images/spaghetti.png';
import Dumplings from './images/dumpling.png';

function createMenu() {
    // Set the content of the home page to empty
    const contentDiv = document.querySelector('#content');
    contentDiv.innerHTML = "";
    // Menu div and its items
    const menuDiv = document.createElement('div');
    menuDiv.setAttribute('id', 'menu');
    const lasagna = createMenuItem("lasagna", "Lynn's Lasagna", "12$", Lasagna, "left");
    const pizza = createMenuItem("pizza", "Lynn's Pizza", "18$", Pizza, "right");
    const spaghetti = createMenuItem("spaghetti", "Lynn's Spaghettii", "18$", Spaghetti, "left");
    const dumplings = createMenuItem("dumplings", "Lynn's Dumplings", "12$", Dumplings, "right");
    // Append all menu items to menu div
    menuDiv.appendChild(lasagna);
    menuDiv.appendChild(pizza);
    menuDiv.appendChild(spaghetti);
    menuDiv.appendChild(dumplings);
    contentDiv.appendChild(menuDiv);
}

function createMenuItem(idName, itemName, price, imgSource, imgPosition){
    // Item Div
    const itemDiv = document.createElement('div');
    itemDiv.setAttribute('id', idName);
    // Name
    const pName = document.createElement('p');
    pName.innerText = itemName;
    // Price
    const pPrice = document.createElement('p');
    pPrice.innerText = price;
    pPrice.setAttribute('id', 'price');
    // Image
    const itemImg = document.createElement('img');
    itemImg.setAttribute('id', imgPosition);
    itemImg.src = imgSource;
    // Append all children to itemDiv
    itemDiv.appendChild(pName);
    itemDiv.appendChild(pPrice);
    itemDiv.appendChild(itemImg);

    return itemDiv;
}

export default createMenu;