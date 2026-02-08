const STORAGE_KEY = "grocery_items";

function getItems() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

function saveItems(items) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}
