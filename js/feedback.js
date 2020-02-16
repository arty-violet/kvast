
var feedbackForm = document.querySelector(".feedback-form");
var feedbackName = feedbackForm.querySelector(".feedback-form__input--name");
var feedbackPhone = feedbackForm.querySelector(".feedback-form__input--phone");
var feedbackEmail = feedbackForm.querySelector(".feedback-form__input--email");


feedbackForm.addEventListener("submit", function (evt) {
  if (!feedbackName.value || !feedbackPhone.value || !feedbackEmail.value) {
    evt.preventDefault();
    feedbackName.classList.add("feedback-form__input--error");
    feedbackPhone.classList.add("feedback-form__input--error");
    feedbackEmail.classList.add("feedback-form__input--error");
      
  } else {
    evt.preventDefault();
    feedbackName.classList.remove("feedback-form__input--error");
    feedbackPhone.classList.remove("feedback-form__input--error");
    feedbackEmail.classList.remove("feedback-form__input--error");
  }
});
