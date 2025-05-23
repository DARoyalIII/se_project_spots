const settings = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__save-btn",
  inactiveButtonClass: "modal__save-btn_inactive",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error"
};

const showInputError = (formEl, inputEl, errorMessage) => {
  const errorMsgText = formEl.querySelector(`#${inputEl.id}-error`);
  inputEl.classList.add("modal__input_type_error");
  errorMsgText.textContent = errorMessage;
};

const hideInputError = (formEl, inputEl) => {
  const errorMsgText = formEl.querySelector(`#${inputEl.id}-error`);
  inputEl.classList.remove("modal__input_type_error");
  errorMsgText.textContent = "";
};

const checkInputValidity = (formEl, inputEl) => {
  if (!inputEl.validity.valid) {
    showInputError(formEl, inputEl, inputEl.validationMessage);
  } else {
    hideInputError(formEl, inputEl);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((input) => {
    return !input.validity.valid;
  });
};

const disableButton = (button) => {
  button.classList.add("modal__save-btn_inactive");
  button.disabled = true;
};


const toggleButtonState = (inputList, submitButton) => {
  if (hasInvalidInput(inputList)) {
    disableButton(submitButton);
  } else {
    submitButton.classList.remove("modal__save-btn_inactive");
    submitButton.disabled = false;
  }
};


const resetValidation = (formEl) => {
  const inputList = Array.from(formEl.querySelectorAll(".modal__input"));
  inputList.forEach((input) => {
    hideInputError(formEl, input);
  });
};

const setEventListeners = (formEl, config) => {
  const inputList = Array.from(formEl.querySelectorAll(config.inputSelector));
  const submitButton = formEl.querySelector(config.submitButtonSelector);

  toggleButtonState(inputList, submitButton, config);

  inputList.forEach((inputEl) => {
    inputEl.addEventListener("input", function () {
      checkInputValidity(formEl, inputEl, config);
      toggleButtonState(inputList, submitButton, config);
  });
});
};


const enableValidation = (config) => {
  const formList = document.querySelectorAll(config.formSelector);
  formList.forEach((formEl) => {
    setEventListeners(formEl, config);
  });
};

enableValidation(settings);

function closeModal(modalElement) {
  modalElement.classList.remove('modal_opened');
}
