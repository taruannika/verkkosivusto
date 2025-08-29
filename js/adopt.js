const modal = document.querySelector(".adopt-modal");
const sendButton = document.querySelector(".adopt-send-btn");
const inputs = document.querySelectorAll(".adopt-input");

function closeModal() {
  modal.classList.remove("active");
}

function openModal() {
  let error = false;
  inputs.forEach((input) => {
    const errorSpan = input.parentElement.querySelector(".error-message");
    if (input.value.trim() === "") {
      error = true;
      errorSpan.textContent = "Tämä kenttä on pakollinen";
    } else {
      errorSpan.textContent = "";
    }
  });

  if (!error) {
    modal.classList.add("active");
    inputs.forEach((input) => (input.value = ""));
  }
}
