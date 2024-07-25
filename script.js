const btn = document.querySelector(".search-button");
const selectCar = document.querySelector(".select-car");
const carImg = document.querySelector(".car-img");
const carModel = document.querySelector(".car-model");
const dropOffInput = document.querySelector(".drop-off-input");
const pickUpInput = document.querySelector(".pick-up-input");
const dropOffP = document.querySelector(".drop-off-p");
const pickUpDate = document.querySelector(".pick-up-date");
const pickUpOption = document.querySelector(".pick-up-option");
const pickUpP = document.querySelector(".pick-up-location");
const dropOffSelect = document.querySelector(".drop-off-select");
const dropOffLocation = document.querySelector(".drop-off-information");
const scrollContainer = document.querySelector(".scroll-container");
const none = document.querySelector("none");
const reservationClose = document.querySelector(".reservation-close");
const errorTitle = document.querySelector(".error-title");
const errorCloseIcon = document.querySelectorAll(".error-close-icon");
const selector = document.querySelectorAll(".selector");
const dateInput = document.querySelector(".date-input");
const body = document.querySelector("body");
const shadow = document.querySelector(".shadow");
const confirmTitle = document.querySelector(".confirm-title");
const bookingBtn = document.querySelector(".booking-button");
const priceForRent = document.querySelector(".price-for-rent");
const model = document.querySelector(".model");
const mark = document.querySelector(".mark");
const year = document.querySelector(".year");
const rentFleetImg = document.querySelector(".rent-fleet-img");
const btnForChooseBmw = document.querySelector(".btn-for-choose-bmw");
const btnForChooseMercedes = document.querySelector(".btn-for-choose-mercedes");
const faqs = document.querySelectorAll(".faq");
const question = document.querySelectorAll(".question");
const answerP = document.querySelectorAll(".answer-p");
const scrollUp = document.querySelector(".scroll-up");
const allLinks = document.querySelectorAll("a:link");
const btnsForMobile = document.querySelector(".div-mobile-nav");
const header = document.querySelector(".header");

btn.addEventListener("click", function (event) {
  event.preventDefault();
  carImg.src = `img/car-${selectCar.value}.png`;
  carModel.textContent = `${selectCar.value}`;
  dropOffP.textContent = `${dropOffInput.value} /`;
  pickUpDate.textContent = `${pickUpInput.value} /`;
  pickUpP.textContent = `${pickUpOption.value}`;
  dropOffLocation.textContent = `${dropOffSelect.value}`;
  scrollContainer.classList.remove("none");

  selector.forEach((element) => {
    if (element.value === "Select") {
      errorTitle.classList.remove("none");
      scrollContainer.classList.add("none");
    }
  });

  if (dateInput.value === "") {
    errorTitle.classList.remove("none");
    scrollContainer.classList.add("none");
  }

  if (scrollContainer.classList.contains("none")) {
    body.style.overflow = "visible";
  } else {
    body.style.overflow = "hidden";
    shadow.classList.remove("none");
  }
});

reservationClose.addEventListener("click", function () {
  scrollContainer.classList.add("none");
  body.style.overflow = "visible";
  shadow.classList.add("none");
});

for (let i = 0; i < errorCloseIcon.length; i++) {
  errorCloseIcon[i].addEventListener("click", function () {
    errorTitle.classList.add("none");
    confirmTitle.classList.add("none");
  });
}

shadow.addEventListener("click", function () {
  scrollContainer.classList.add("none");
  shadow.classList.add("none");
  body.style.overflow = "visible";
});

bookingBtn.addEventListener("click", function () {
  confirmTitle.classList.remove("none");
  scrollContainer.classList.add("none");
  shadow.classList.add("none");
  body.style.overflow = "visible";
  errorTitle.classList.add("none");
});

btnForChooseBmw.addEventListener("click", function () {
  btnForChooseMercedes.classList.remove("colored-btn");
  btnForChooseBmw.classList.add("colored-btn");
  rentFleetImg.src = `img/car-Bmw G80.png`;
  model.textContent = "G80";
  mark.textContent = "Bmw";
  year.textContent = "2017";
});

btnForChooseMercedes.addEventListener("click", function () {
  btnForChooseMercedes.classList.add("colored-btn");
  btnForChooseBmw.classList.remove("colored-btn");
  rentFleetImg.src = `img/car-Mercedes-AMG Gt.png`;
  model.textContent = "Amg Gt";
  mark.textContent = "Mercedes";
  year.textContent = "2016";
});

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faqs.forEach((otherFaq) => {
      if (otherFaq !== faq && otherFaq.classList.contains("active")) {
        otherFaq.classList.remove("active");
      }
    });

    faq.classList.toggle("active");
  });
});

question.forEach((questions) => {
  questions.addEventListener("click", () => {
    question.forEach((otherquestions) => {
      if (
        otherquestions !== questions &&
        otherquestions.classList.contains("active-question")
      ) {
        otherquestions.classList.remove("active-question");
      }
    });

    questions.classList.toggle("active-question");
  });
});

answerP.forEach((AnswerP) => {
  AnswerP.addEventListener("click", () => {
    question.forEach((questions) => {
      questions.classList.remove("active-question");
    });
  });
});

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 500) {
    scrollUp.classList.add("show-scroll");
  } else {
    scrollUp.classList.remove("show-scroll");
  }
});

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    if (href !== "#" && href.startsWith("#")) {
      const sectionEL = document.querySelector(href);
      console.log(sectionEL);
      sectionEL.scrollIntoView({ behavior: "smooth" });
    }
  });
});

btnsForMobile.addEventListener("click", function () {
  header.classList.toggle("navbar");
  body.classList.toggle("hidden");
});
