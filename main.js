const addButton = document.getElementById("add-button");
const inputBox = document.getElementById("input-box");
const list = document.getElementById("list");

function crossOut(event) {
  const item = event.target;
  item.style.textDecoration = "line-through";
  setTimeout(
    (item) => {
      item.remove();
    },
    1000,
    item
  );
}

addButton.addEventListener("click", function (event) {
  const newItem = inputBox.value;
  const newLI = document.createElement("li");
  newLI.innerText = newItem;
  newLI.addEventListener("click", crossOut);
  list.appendChild(newLI);
  inputBox.value = "";
  event.preventDefault();
});
