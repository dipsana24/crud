const form = document.getElementById("item-form");
const nameInput = document.getElementById("item-input");
const dateInput = document.getElementById("date-input");
const submitBtn = document.getElementById("submit-btn");
const errorMsg = document.getElementById("error-msg");

// this is shared with events.js (global variable)
let editId = null;

function updateButtonState() {
  if (errorMsg) errorMsg.textContent = "";

  if (nameInput.value.trim()) {
    submitBtn.disabled = false;
    submitBtn.style.opacity = "1";
  } else {
    submitBtn.disabled = true;
    submitBtn.style.opacity = "0.7";
  }
}

// call once on load
updateButtonState();

function handleSubmit(e) {
  e.preventDefault();

  const name = nameInput.value.trim();
  const date = dateInput.value; // can be empty

  if (!name) {
    if (errorMsg) errorMsg.textContent = "Please enter an item name";
    return;
  }
  if (errorMsg) errorMsg.textContent = "";

  let items = getItems();

  if (editId) {
    // update existing
    items = items.map((item) =>
      item.id === editId ? { ...item, name, date } : item,
    );
    editId = null;
    submitBtn.textContent = "Add Item";
  } else {
    // add new
    const newItem = {
      id: Date.now(),
      name,
      date,
      completed: false,
    };
    items.push(newItem);
  }

  saveItems(items);
  renderItems(items);

  nameInput.value = "";
  dateInput.value = "";
  updateButtonState();
}

// update button state while typing
nameInput.addEventListener("input", updateButtonState);

// form submit = add / update
form.addEventListener("submit", handleSubmit);
