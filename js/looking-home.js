const animals = [
  {
    name: "Misty",
    species: "cat",
    age: 6,
    sex: "Naaras",
    img: "../images/cat1.jpg",
    description:
      "Uteliasta ja seurallinen maatiaiskissa, tykkää sylissä olosta.",
  },
  {
    name: "Rex",
    species: "dog",
    age: 1,
    sex: "Uros",
    img: "../images/dog1.jpg",
    description: "Energiaa täynnä oleva pentu, kaipaa aktiivista omistajaa.",
  },
  {
    name: "Luna",
    species: "cat",
    age: 2,
    sex: "Naaras",
    img: "../images/cat2.jpg",
    description: "Itsenäinen ja leikkisä, sopii rauhalliseen kotiin.",
  },
  {
    name: "Max",
    species: "dog",
    age: 5,
    sex: "Uros",
    img: "../images/dog2.jpg",
    description: "Rauhallinen ja lempeä, sopii lapsiperheeseen.",
  },
  {
    name: "Nelli",
    species: "cat",
    age: 12,
    sex: "Naaras",
    img: "../images/cat3.jpg",
    description: "Hellyydenkipeä seniorikissa, nauttii rauhallisesta elämästä.",
  },

  {
    name: "Bella",
    species: "dog",
    age: 3,
    sex: "Naaras",
    img: "../images/dog3.jpg",
    description: "Iloinen ja leikkisä sekarotuinen, rakastaa ulkoilua.",
  },
];

const filter = document.getElementById("looking-home-filter");
const grid = document.querySelector(".looking-home-grid");

generateGrid(animals);

filter.addEventListener("change", () => {
  // remove content from grid
  grid.innerHTML = "";

  const value = filter.value;
  // filter animals by options
  const filterAnimals =
    value === "all"
      ? animals
      : animals.filter((animal) => animal.species === value);
  console.log(filterAnimals);
  // generate new grid
  generateGrid(filterAnimals);
});

function generateGrid(animalList) {
  for (let i = 0; i < animalList.length; i++) {
    // create card
    const card = document.createElement("div");
    card.className = "looking-home-card";

    // create top part of card
    const cardTop = document.createElement("div");
    cardTop.className = "looking-home-card-top";
    cardTop.style.backgroundImage = `url('${animalList[i]?.img}')`;
    card.appendChild(cardTop);

    // create bottom part of card
    const cardBottom = document.createElement("div");
    cardBottom.className = "looking-home-card-bottom";
    const name = document.createElement("h4");
    name.innerHTML = animalList[i]?.name;
    cardBottom.appendChild(name);
    const gender = document.createElement("p");
    gender.innerHTML = animalList[i]?.sex;
    cardBottom.appendChild(gender);
    const desc = document.createElement("p");
    cardBottom.appendChild(desc);
    desc.innerHTML = animalList[i]?.description;
    const link = document.createElement("a");
    link.className = "looking-home-card-bottom-link";
    link.innerHTML = "Adoptoi minut ❤️";
    link.href = "adoptoi.html";
    cardBottom.appendChild(link);

    card.appendChild(cardBottom);

    // add card to grid
    grid.appendChild(card);
  }
}

function filterAnimals() {}
