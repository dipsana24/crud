// form submit = add / update
form.addEventListener("submit", handleSubmit);

// click inside the list (edit / delete / checkbox)
itemsList.addEventListener("click", handleListClick);

// clear all
clearBtn.addEventListener("click", handleClear);

// initial render
renderItems(getItems());
