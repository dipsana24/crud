const clearBtn = document.getElementById("clear-btn");

function handleListClick(e) {
  const items = getItems();
  const li = e.target.closest(".item");
  if (!li) return;

  const id = li.dataset.id;
  let newItems = items;

  // toggle checkbox
  if (e.target.classList.contains("item-checkbox")) {
    newItems = items.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item,
    );
    saveItems(newItems);
    renderItems(newItems);
    return;
  }

  // delete
  if (e.target.classList.contains("btn-delete")) {
    newItems = items.filter((item) => item.id !== id);
    saveItems(newItems);
    renderItems(newItems);
    return;
  }

  // edit
  if (e.target.classList.contains("btn-edit")) {
    const item = items.find((item) => item.id === id);
    if (!item) return;

    nameInput.value = item.name;
    dateInput.value = item.date || "";
    editId = id;
    submitBtn.textContent = "Update Item";
  }
}

function handleClear() {
  saveItems([]);
  renderItems([]);
}
