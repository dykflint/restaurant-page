function createHomePage(){
    // Set the content of the home page to empty
    const contentDiv = document.querySelector('#content');
    contentDiv.innerHTML = "";
    // Welcome Paragraph
    const welcomeParagraph = document.createElement('p');
    welcomeParagraph.innerText = "Welcome to Lynn's Table";
    welcomeParagraph.setAttribute('id', 'welcome-message');
    // Introduction text
    const introductionParagraph = document.createElement('p');
    introductionParagraph.innerText = "Here at Lynn's we pride ourselves in a lively atmosphere and our delicious food. Come and join the fun and festivities.";
    introductionParagraph.setAttribute('id', 'introduction');
    // Information Div (Hours, location, contact)
    const informationDiv = document.createElement('div');
    informationDiv.setAttribute('id', 'information');
    const hoursDiv = document.createElement('div');
    hoursDiv.setAttribute('id', 'hours');
    hoursDiv.innerText = 'Hours: Mon-Sun: 8AM-8PM';
    const locationDiv = document.createElement('div');
    locationDiv.setAttribute('id', 'location');
    locationDiv.innerText = 'Location: 123 Street, Royal Woods, Michigan';
    const contactDiv = document.createElement('div');
    contactDiv.setAttribute('id', 'contact');
    contactDiv.innerText = 'Contact us: 555-LOUD';
    // Add hours, location and contact to informationDiv
    informationDiv.appendChild(hoursDiv);
    informationDiv.appendChild(locationDiv);
    informationDiv.appendChild(contactDiv);
    // Add welcomeParagraph, introductionParagraph and informationDiv to Content
    contentDiv.appendChild(welcomeParagraph);
    contentDiv.appendChild(introductionParagraph);
    contentDiv.appendChild(informationDiv);
};

export default createHomePage;