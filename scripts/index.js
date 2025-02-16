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

// Profile elements
const profileEdit = document.querySelector(".profile__edit-button");
const profileName = document.querySelector(".profile__title");
const profileSub = document.querySelector(".profile__subtitle");
const newPost = document.querySelector(".profile__newpost-button");

// Modal elements
const editModal = document.querySelector("#edit-modal");
const closeModal = editModal.querySelector(".modal__close-btn");
const editModalName = editModal.querySelector("#name");
const editModalDescrip = editModal.querySelector("#description");
const profileFormElement = document.querySelector(".modal__form");
const profileForm = document.forms["profile-form"];

// Card elements
const cardTemplate = document.querySelector("#card-template");
const cardsList = document.querySelector(".cards__list");

// New post elements
const postModal = document.querySelector("#post-modal-add");
const postClose = postModal.querySelector(".modal__close-btn");
const postFormElement = postModal.querySelector(".post-modal__form");
const addImage = postModal.querySelector("#image");
const addCaption = postModal.querySelector("#caption");


// Picture preview
const picModal = document.querySelector("#preview-modal");
const picModalImg = picModal.querySelector(".pic-modal__img");
const picModalCap = picModal.querySelector(".pic-modal__title");
const PicModalExit = picModal.querySelector(".pic-modal__close");

// Profile edit modal events
closeModal.addEventListener("click", () => {
  exitModal(editModal);
});

profileEdit.addEventListener("click", () => {
  editModalName.value = profileName.textContent;
  editModalDescrip.value = profileSub.textContent;
  openModal(editModal);
});

profileFormElement.addEventListener("submit", handleProfileFormSubmit);

// New post modal events
newPost.addEventListener("click", () => {
  openModal(postModal);
});

postClose.addEventListener("click", () => {
  exitModal(postModal);
})

postFormElement.addEventListener("submit", handleNewPostSubmit);

// Opening modals
function openModal(modal) {
  modal.classList.add("modal_opened");
}

// Exiting moodals
function exitModal(modal) {
  modal.classList.remove("modal_opened");
}

// Submitting updated profile data
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = editModalName.value;
  profileSub.textContent = editModalDescrip.value;
  exitModal(editModal);
}

// Creating new cards and appending array data
function getCardElement(data) {
  const cardElement = cardTemplate.content.querySelector(".card").cloneNode(true);
  const cardDelete = cardElement.querySelector(".card__delete");
  const cardHeart = cardElement.querySelector(".card__heart");
  const cardNameEle = cardElement.querySelector(".card__info");
  const cardImgEle = cardElement.querySelector(".card__image");

  cardImgEle.alt = data.name;
  cardNameEle.textContent = data.name;
  cardImgEle.src = data.link;
  cardsList.append(cardElement);

  // Picture preview
  cardImgEle.addEventListener("click", () => {
    openModal(picModal);
    picModalImg.src = data.link;
    picModalImg.alt = data.name;
    picModalCap.textContent = data.name;
  });

  PicModalExit.addEventListener("click", () => {
    exitModal(picModal);
  })


  // Toggle like
  cardHeart.addEventListener("click", () => {
    cardHeart.classList.toggle("card__heart_liked");
  });

  // Remove card
  cardDelete.addEventListener("click", () => {
    cardElement.remove();
  });

  return cardElement;
}

initialCards.forEach(getCardElement);

// Submitting new post data
function handleNewPostSubmit(evt) {
  evt.preventDefault();
  addImage.value;
  addCaption.value;
  const newCard = { name: addCaption.value, link: addImage.value};
  console.log(newCard);
  const cardEl = getCardElement(newCard);
  cardsList.prepend(cardEl);
  exitModal(postModal);
}













