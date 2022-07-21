var pokemonArray = pokemons;

var elBody = document.querySelector(".bodyPokemon");

function renderPokemons(array, wrapper) {
  // elBody.innerHTML = null;

  var divContainer = document.createElement("div");
  divContainer.classList = "container";

  var divRow  = document.createElement("div");
  divRow.classList = "row g-4";
  for (const item of array) {


  var divCol  = document.createElement("div");
  divCol.classList = "col-3 text-center joxa";

  var divCard  = document.createElement("div");
  divCard.classList = "joxa card shadow border border-dark";
  divCard.style.borderRadius = "20px";



  var newImg = document.createElement("img");
  newImg.src = item.img;
  newImg.classList = "card-img-top text-center";
  newImg.style.width = "200px";
  newImg.style.height = "200px";
  newImg.style.margin = "auto";
  newImg.style.margin = "auto";
  newImg.style.paddingTop = "15px";


  var divCardBody  = document.createElement("div");
  divCardBody.classList = "card-body";

  var elH5  = document.createElement("h5");
  elH5.classList = "card-title";
  elH5.textContent = item.name;

  var eltext  = document.createElement("p");
  eltext.classList = "card-text mb-0";
  eltext.textContent = item.height;

  var eltext2  = document.createElement("p");
  eltext2.classList = "card-text";
  eltext2.textContent = item.weight;
  
  divRow.appendChild(divCol);
  divCol.appendChild(divCard);
  divCard.appendChild(newImg);
  divCard.appendChild(divCardBody);
  divCardBody.appendChild(elH5);
  divCardBody.appendChild(eltext);
  divCardBody.appendChild(eltext2);

  console.log(elBody);

  }

  wrapper.appendChild(divContainer);
  divContainer.appendChild(divRow);

}
renderPokemons(pokemonArray, elBody);