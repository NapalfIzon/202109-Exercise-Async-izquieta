import speak from "./speak.js";
import processDataFunctions from "./processData.js";

const { getUserId, getUserDataById, getFinesByDNI } = processDataFunctions;

const elementoSpeak = document.querySelector(".display");
const idElement = document.querySelector(".id .data");
const dniElement = document.querySelector(".dni .data");
const multasElement = document.querySelector(".fines .data");
const searchButton = document.querySelector(".action button");
const loadingElement = document.querySelector(".loading");

const showLoading = () => {
  loadingElement.classList.add("on");
};

const hideLoading = () => {
  loadingElement.classList.add("off");
};

const showError = (errorMessage) => {
  errorElement.textContent = errorMessage;
  errorElement.classList.toggle("on");
  setTimeout(() => {
    errorElement.classList.remove("off");
  }, 2000);
};

searchButton.addEventListener("click", () => {
  getUserId("marta")
    .then((id) => {
      idElement.textContent = id;
      return getUserDataById(id);
    })
    .then(({ dni }) => {
      dniElement.textContent = dni;
    })
    .then((multas) => {
      multasElement.textContent = multas.reduce((finalText, multa) => {
        `${finalText}${multa.total}, `;
      }, "");
    })
    .catch((errorMessage) => showError(errorMessage))
    .finally(() => {
      hideLoading();
    });
});

speak(elementoSpeak, 1000);
