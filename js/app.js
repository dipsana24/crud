
(function setDefaultDate() {
  const today = new Date().toISOString().split("T")[0];
  if (dateInput) {
    dateInput.value = today;
  }
})();

// form submit = add / update
form.addEventListener("submit", handleSubmit);



// first render from localStorage
renderItems(getItems());
