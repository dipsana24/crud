const clearBtn = document.getElementById("clear-btn");

function handleListClick(e) {
  const li = e.target.closest(".item");
  if (!li) return;

  const id = Number(li.dataset.id); // Convert to number
  let items = getItems();

  // Checkbox
  if (e.target.classList.contains("item-checkbox")) {
    items = items.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );
    saveItems(items);
    renderItems(items);
    return;
  }

  // Delete button (handle click on button or icon)
  if (e.target.closest(".btn-delete")) {
    items = items.filter((item) => item.id !== id);
    saveItems(items);
    renderItems(items);
    return;
  }

  // Edit button
  if (e.target.closest(".btn-edit")) {
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
}
