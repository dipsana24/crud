const form = document.getElementById("item-form");
const nameInput = document.getElementById("item-input");
const dateInput = document.getElementById("date-input");
const submitBtn = document.getElementById("submit-btn");

let editId = null; // id of the item being edited, if any

function handleSubmit(e) {
  e.preventDefault();

  const name = nameInput.value.trim();
  const date = dateInput.value; // can be empty

  if (!name) return;

  let items = getItems();

  if (editId) {
    // update
    items = items.map((item) =>
      item.id === editId ? { ...item, name, date } : item,
    );
    editId = null;
    submitBtn.textContent = "Add Item";
  } else {
    // add new
    items.push({
      id: Date.now().toString(),
      name,
      date,
      completed: false,
    });
  }

  saveItems(items);
  renderItems(items);

  nameInput.value = "";
  dateInput.value = "";
}
