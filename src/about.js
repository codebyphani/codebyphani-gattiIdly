export default function createAboutPage() {
    //export div element
    const aboutContent = ` <div class="about-section">
      <h2 class="text-primary">About Gatti Chutney</h2>
      <p class="lead"><strong>Authenticity. Quality. Simplicity.</strong></p>
      <p>Gatti Chutney was born out of a love for authentic South Indian breakfast and a passion for creating chutneys that elevate every dish. Our mission is to provide a simple yet extraordinary dining experience, focusing on high-quality ingredients and traditional recipes.</p>
      <h3>Our Philosophy</h3>
      <ul class="list-group">
        <li class="list-group-item"><strong>In-House Preparation:</strong> Every item on our menu is prepared fresh in-house, ensuring top-notch quality and flavor.</li>
        <li class="list-group-item"><strong>Signature Chutneys:</strong> Our chutneys are the heart of our menu, crafted with care and unique ingredients you won't find elsewhere.</li>
        <li class="list-group-item"><strong>Simplicity and Quality:</strong> We believe in keeping things simple, with a limited menu that allows us to perfect each dish.</li>
      </ul>
      <p>Come and enjoy a breakfast experience that celebrates the essence of South Indian cuisine, right here at Gatti Chutney.</p>
    </div>`
    // Populate about document structure in content
   // divContent.innerHTML = aboutContent;
    return aboutContent
};