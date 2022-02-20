const mainDiv = document.querySelector(".newtask");

document.getElementById("submit").addEventListener("click", (e) => {
  e.preventDefault();
  const taskName = document.getElementById("input");

  if (taskName.value) {
    const siblingDiv = document.createElement("div");
    siblingDiv.classList.add("list_item");
    siblingDiv.setAttribute("draggable", "true");
    siblingDiv.innerText = taskName.value;

    mainDiv.appendChild(siblingDiv);
    taskName.value = "";
    addEvent();
  } else alert("Enter Task Name");
});

function addEvent() {
  const list_items = document.querySelectorAll(".list_item");
  const lists = document.querySelectorAll(".list");
  let draggedItem = "";

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
        draggedItem = "";
      }, 0);
    });

    item.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      item.remove();
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
}
