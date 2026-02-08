

const itemsList = document.getElementById("items-list");
const itemsCount = document.getElementById("items-count");

function escapeHtml(text) {
  const div = document.createElement("div");
  div.innerText = text;
  return div.innerHTML;
}

function renderItems(items) {
  itemsList.innerHTML = "";

  if (!items || items.length === 0) {
    itemsList.innerHTML =
      '<li style="text-align:center; color:#9ca3af; padding:6px;">No items yet</li>';
    if (itemsCount) itemsCount.textContent = "0 items";
    return;
  }

  items.forEach((item) => {
    const li = document.createElement("li");

    // check if overdue (date < today and not completed)
    const isOverdue =
      item.date &&
      !item.completed &&
      new Date(item.date) < new Date(new Date().toDateString());

    li.className = "item" + (isOverdue ? " item-overdue" : "");
    li.dataset.id = item.id;

    li.innerHTML = `
      <div class="item-left">
        <input type="checkbox" class="item-checkbox" ${
          item.completed ? "checked" : ""
        } />
        <div class="item-texts">
          <span class="item-name ${item.completed ? "completed" : ""}">
            ${escapeHtml(item.name)}
          </span>
          <span class="item-date">${item.date ? item.date : ""}</span>
        </div>
      </div>

      <div class="action-buttons">
        <button class="btn-edit" title="Edit" data-id="${item.id}">✏️</button>
        <button class="btn-delete" title="Delete" data-id="${item.id}">🗑️</button>
      </div>
    `;

    itemsList.appendChild(li);
  });

  if (itemsCount) {
    itemsCount.textContent = `${items.length} item${
      items.length === 1 ? "" : "s"
    }`;
  }
}
