

const clearBtn = document.getElementById("clear-btn");

function handleListClick(e) {
  const li = e.target.closest(".item");
  if (!li) return;

  const id = li.dataset.id;
  let items = getItems();

itemsList.addEventListener("click", handleListClick);
clearBtn.addEventListener("click", handleClear);

  if (e.target.classList.contains("item-checkbox")) {
    items = items.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );
    saveItems(items);
    renderItems(items);
    return;
  }

  // delete button
  if (e.target.classList.contains("btn-delete")) {
    items = items.filter((item) => item.id !== id);
    saveItems(items);
    renderItems(items);
    return;
  }

  // edit button
  if (e.target.classList.contains("btn-edit")) {
    const item = items.find((it) => it.id === id);
    if (!item) return;

    nameInput.value = item.name;
    dateInput.value = item.date || "";
    editId = id;
    submitBtn.textContent = "Update Item";
    updateButtonState();
  }
}

function handleClear() {
  const items = getItems();
  if (!items.length) return;

  const ok = confirm("Clear all items?");
  if (!ok) return;

  saveItems([]);
  renderItems([]);
  nameInput.value = "";
  dateInput.value = "";
  editId = null;
  submitBtn.textContent = "Add Item";
  updateButtonState();
  e.target.classList.contains("item-checkbox")
e.target.classList.contains("btn-delete")
e.target.classList.contains("btn-edit")

}
