const initialCards = [
  {
    name:"Val Thorens",
    link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg"

  },
  {
    name:"Restaurant terrace",
    link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg"
  },
  {
    name:"An outdoor cafe",
    link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg"
  },
  {
    name:"A very long bridge, over the forest and through the trees",
    link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg"
  },
  {
    name:"Tunnel with morning light",
    link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg"
  },
  {
    name:"Mountain house",
    link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg"
  }
];

const profileEdit = document.querySelector(".profile__edit-button");
const editModal = document.querySelector("#edit-modal");
const closeModal = document.querySelector(".modal__close-btn");

profileEdit.addEventListener("click", function () {
  editModal.classList.add("modal_opened");
});

closeModal.addEventListener("click", function () {
  editModal.classList.remove("modal_opened");
});

const profileName = document.querySelector(".profile__title");
const profileSub = document.querySelector(".profile__subtitle");
const editModalName = document.querySelector("#name");
const editModalDescrip = document.querySelector("#description");

editModalName.value = profileName.textContent;
editModalDescrip.value = profileSub.textContent;

const profileFormElement = document.querySelector(".modal__form");

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = editModalName.value;
  profileSub.textContent = editModalDescrip.value;
  editModal.classList.remove("modal_opened");
}

profileFormElement.addEventListener("submit", handleProfileFormSubmit);

const cardTemplate = document.querySelector("#card-template");
const cardsList = document.querySelector(".cards__list")

function getCardElement(data) {
  const cardElement = cardTemplate.content.querySelector(".card").cloneNode(true);

  const cardNameEle = cardElement.querySelector(".card__info");
  const cardImgEle = cardElement.querySelector(".card__image");
  cardImgEle.alt = data.name;

  cardNameEle.textContent = data.name;
  cardImgEle.src = data.link;

  return cardElement;
}

for (let i = 0; i < initialCards.length; i++) {
  const cardElement = getCardElement(initialCards[i]);
  cardsList.append(cardElement);
}
