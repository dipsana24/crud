
(function setDefaultDate() {
  const today = new Date().toISOString().split("T")[0];
  if (dateInput) {
    dateInput.value = today;
  }
})();

// form submit = add / update
// form submit = add / update
// form.addEventListener("submit", handleSubmit); // Moved to form.js

// Event Listeners
itemsList.addEventListener("click", handleListClick);
clearBtn.addEventListener("click", handleClear);



// first render from localStorage
renderItems(getItems());
