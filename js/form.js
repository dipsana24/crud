const itemsList = document.getElementById("items-list");

function renderItems(items) {
  itemsList.innerHTML = "";

  items.forEach((item) => {
    const li = document.createElement("li");

    li.innerHTML = `
      <span>${item.name}</span>
      <div>
        <button class="edit" data-id="${item.id}">Edit</button>
        <button class="delete" data-id="${item.id}">Delete</button>
      </div>
    `;

    itemsList.appendChild(li);
  });
}
