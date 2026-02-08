form.addEventListener("submit", handleSubmit);
itemsList.addEventListener("click", handleListClick);
clearBtn.addEventListener("click", () => {
  saveItems([]);
  renderItems([]);
});

renderItems(getItems());
