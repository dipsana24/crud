
(function setDefaultDate() {
  const today = new Date().toISOString().split("T")[0];
  if (dateInput) {
    dateInput.value = today;
  }
})();

// form submit = add / update
form.addEventListener("submit", handleSubmit);

// click anywhere in the list (edit, delete, checkbox)
itemsList.addEventListener("click", handleListClick);

// clear all items
clearBtn.addEventListener("click", handleClear);

// first render from localStorage
renderItems(getItems());
