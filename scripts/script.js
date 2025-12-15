/**
 * @field - createGuitarCard
 * @description - Function to create a card for one guitar
 * 
 * */
function createGuitarCard(guitar, index) {
  // add class 'guitar-card' to div
  const card = document.createElement("div");
  card.classList.add('guitar-card');
  
  // Get Name of the guitar and write it in h3 + add class 'title-card'
  const guitarName = document.createElement("h3");
  guitarName.textContent = `${guitar.name}`;
  guitarName.classList.add('title-card');
  card.appendChild(guitarName);
  

  // brand of the guitar in h3
  const guitarBrand = document.createElement("h3");
  guitarBrand.textContent = `Marque: ${guitar.brand}`;
  card.appendChild(guitarBrand);
  
  // model of the guitar in h4
  const guitarModel = document.createElement("h4");
  guitarModel.textContent = `Modèle: ${guitar.model}`;
  card.appendChild(guitarModel);
  
  // pickups of the guitar in p and add class 'pickups'
  const guitarPickups = document.createElement('p');
  guitarPickups.innerHTML = `- Micro manche: ${guitar.pickups.neck}<br>- Micro mid: ${guitar.pickups.middle}<br>- Micro chevalet: ${guitar.pickups.bridge}`;
  guitarPickups.classList.add('pickups');
  card.appendChild(guitarPickups);

  // neck of the guitar in p and add class 'neck'
  const guitarNeck = document.createElement("p");
  guitarNeck.textContent = `Manche: ${guitar.neck}`;
  guitarNeck.classList.add('neck');
  card.appendChild(guitarNeck);
  
  // frets of the guitar in p and add class 'frets'
  const guitarFrets = document.createElement("p");
  guitarFrets.textContent = `Nbr de frets: ${guitar.frets}`;
  guitarFrets.classList.add('frets');
  card.appendChild(guitarFrets);
  
  // body of the guitar in p and add class 'guitar-body'
  const guitarBody = document.createElement("p");
  guitarBody.textContent = `Corps: ${guitar.body}`;
  guitarBody.classList.add('guitar-body');
  card.appendChild(guitarBody);
  
  // vibrato of the guitar in p and add class 'vibrato'
  const guitarVibrato = document.createElement("p");
  guitarVibrato.textContent = `Vibrato: ${guitar.vibrato}`;
  guitarVibrato.classList.add('vibrato');
  card.appendChild(guitarVibrato);
  
  // picture of the guitar in img and add alt attribute
  const guitarPicture = document.createElement("img");
  guitarPicture.src = guitar.picture;
  guitarPicture.alt = `Photo de ${guitar.name}`;
  card.appendChild(guitarPicture);
  
  // create button to delete the guitar and add class 'button-delete' + event listener
  const buttonDelete = document.createElement("button");
  buttonDelete.textContent = "Supprimer";
  buttonDelete.classList.add("button-delete");
  buttonDelete.addEventListener("click", function() {
    deleteGuitar(index);
  });
  card.appendChild(buttonDelete);
  
  return card;
}

/**
 * @field - deleteGuitar
 * @description - delete a guitar from the collection and refresh the display
 * 
 * */
function deleteGuitar(index) {
  guitarCollection.splice(index, 1);
  display(guitarCollection);
}

/**
 * @field - forEach loop
 * @description - Loop through the guitarCollection and display each guitar card
 * 
 * */
guitarCollection.forEach(function(guitar, index) {
  const card = createGuitarCard(guitar, index);
  const container = document.getElementById("guitar-container");
  container.appendChild(card);
});

/**
 * @field - display
 * @description - Function to display the filtered guitars
 * 
 * */
function display(filtered) {
  const container = document.getElementById("guitar-container");
  container.innerHTML = "";
  filtered.forEach(function(guitar, index) {
  const card = createGuitarCard(guitar, index);
  container.appendChild(card);
  });
}

/**
 * @const {HTMLElement} select
 * @description - Select the first <select> element in the document
 * 
 * */
const select = document.getElementsByTagName("select")[0];

/**
 * @field - Event listener 'change'
 * @description - Listen for changes on the select element and filter the guitar collection accordingly
 * 
 */
select.addEventListener("change", function(event) {
  const filter = event.target.value;
  const filtered = guitarCollection.filter(function(guitar) {
  return filter === "all" || guitar.type === filter;
  });
  display(filtered);
});
