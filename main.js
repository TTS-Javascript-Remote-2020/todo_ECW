const addButton = $("#add-button");
const inputBox = $("#input-box");
const list = $("#list");

function crossOut(event) {
  const item = event.target;
  $(item).css("textDecoration", "line-through");
  setTimeout(
    (item) => {
      $(item).remove();
    },
    1000,
    item
  );
}

addButton.on("click", function (event) {
  const itemText = inputBox.val();
  const newItem = `<div><li class="item">${itemText}</li></div>`;

  list.append(newItem);
  itemNode = $(".item").last();
  itemNode.on("click", crossOut);
  inputBox.val("");
  event.preventDefault();
});
