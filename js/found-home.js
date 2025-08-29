const animals = [
  {
    name: "Kaneli",
    img: "../images/cat4.jpg",
    date: "22.02.2024",
    story:
      "Kaneli oli löydetty hylättynä vanhan ladon takaa. Aluksi arka ja epäluuloinen, se vietti ensimmäiset päivät turvakodissa peiton alla piilossa. Kun uusi perhe tuli katsomaan kissoja, Kaneli uskaltautui varovasti nuuhkaisemaan heidän kättään – ja siitä alkoi sen uusi matka. Nyt Luna juoksee päivittäin perheen lasten kanssa pihalla, ja illat se viettää sohvalla kainalossa. Pelokas katse on vaihtunut iloiseen kissan elämään.",
  },
  {
    name: "Elmo",
    img: "../images/dog4.jpg",
    date: "13.06.2025",
    story:
      "Elmo oli elänyt monta vuotta kodittomana, vaellellen kaupungin kaduilla. Se oli laiha ja sen turkki oli takkuinen, kunnes se päätyi eläinsuojeluyhdistyksen hoitoon. Kun uusi omistaja astui huoneeseen,Elmo kiipesi heti tämän syliin – aivan kuin se olisi tiennyt, että koti oli viimein löytynyt. Nyt Elmo nauttii ikkunan edessä auringosta, ja sen lempipuuhaa on seurata maailman menoa turvassa omassa kodissa.",
  },
  {
    name: "Maija",
    img: "../images/dog5.jpg",
    date: "01.12.2023",
    story:
      "Maija, 10-vuotias sekarotuinen koira, oli joutunut etsimään uutta kotia omistajansa menehdyttyä. Monet ohittivat sen iän vuoksi, mutta eräs eläkeläispariskunta näki sen lempeän katseen ja päätti antaa Rol­lelle uuden mahdollisuuden. Nyt Maija saa rauhallisia metsälenkkejä, vatsanrapsutteluja ja enemmän rakkautta kuin koskaan. Pariskunta kertoo, että Rolle toi heidän elämäänsä iloa ja seuraa – ja Maija itse on vihdoin taas kotona.",
  },
];

generateImageGrid();

const modal = document.querySelector(".found-home-modal");
const storyLinks = document.querySelectorAll(".link");

storyLinks.forEach((link, index) => {
  console.log("clicked");
  link.addEventListener("click", () => {
    generateModalContent(index);
    modal.classList.add("active");
  });
});

function generateModalContent(index) {
  const modalContentContainer = document.querySelector(
    ".found-home-modal-content"
  );
  // remove content
  modalContentContainer.innerHTML = "";

  // create header
  const header = document.createElement("h3");
  header.innerHTML = animals[index]?.name;
  modalContentContainer.appendChild(header);

  // create story
  const story = document.createElement("p");
  story.innerHTML = animals[index]?.story;
  modalContentContainer.appendChild(story);

  // create close btn and add event listener
  const closeBtn = document.createElement("a");
  closeBtn.href = "#";
  closeBtn.className = "found-home-modal-close-btn";
  closeBtn.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';
  closeBtn.addEventListener("click", () => modal.classList.remove("active"));

  // add content to modal
  modalContentContainer.appendChild(closeBtn);
}

function generateImageGrid() {
  const grid = document.querySelector(".found-home-grid");
  for (let i = 0; i < animals.length; i++) {
    // create card
    const card = document.createElement("div");
    card.className = "found-home-card";

    // create top part of card
    const cardTop = document.createElement("div");
    cardTop.className = "found-home-card-top";
    cardTop.style.backgroundImage = `url('${animals[i]?.img}')`;

    // add top part to card
    card.appendChild(cardTop);

    // create bottom part of card
    const cardBottom = document.createElement("div");
    cardBottom.className = "found-home-card-bottom";
    const header = document.createElement("h4");
    header.innerHTML = animals[i]?.name;
    cardBottom.appendChild(header);
    const date = document.createElement("p");
    date.innerHTML = `Adoptoitu: ${animals[i]?.date}`;
    cardBottom.appendChild(date);
    const storyLink = document.createElement("a");
    storyLink.className = "link";
    storyLink.href = "#";
    storyLink.innerHTML = "Lue Tarinani ❤️";
    cardBottom.appendChild(storyLink);

    // add bottom part to card
    card.appendChild(cardBottom);

    // add card to grid
    grid.appendChild(card);
  }
}
