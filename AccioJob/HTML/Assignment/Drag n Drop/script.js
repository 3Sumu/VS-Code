const list_items = document.querySelectorAll(".list_item");
const lists = document.querySelectorAll(".list");

let draggedItem = null;

for (let i = 0; i < list_items.length; i++) {
  const item = list_items[i];

  item.addEventListener("dragstart", (e) => {
    console.log("dragstrt");
    draggedItem = item;
    setTimeout(() => {
      item.style.display = "none";
    }, 0);
  });

  item.addEventListener("dragend", () => {
    console.log("dragend");
    setTimeout(() => {
      draggedItem.style.display = "block";
      draggedItem = null;
    }, 0);
  });

  for (let j = 0; j < lists.length; j++) {
    const list = lists[j];

    list.addEventListener("dragover", (e) => {
      e.preventDefault();
    });

    list.addEventListener("dragenter", function (e) {
      e.preventDefault();
      list.style.backgroundColor = "rgba(208, 228, 26,0.5)";
    });

    list.addEventListener("dragleave", function (e) {
      list.style.backgroundColor = "rgba(208, 228, 26,1)";
    });

    list.addEventListener("drop", function (e) {
      list.append(draggedItem);
      list.style.backgroundColor = "rgba(208, 228, 26,1)";
    });
  }
}
