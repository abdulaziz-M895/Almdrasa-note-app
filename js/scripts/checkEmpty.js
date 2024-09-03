const emptyListElement = document.createElement("li");
emptyListElement.className = "shownNote__EmptyList";
emptyListElement.innerHTML = `
              <img
                class="EmptyList__img"
                src="./images/icon-empty.svg"
                alt="list is empty"
              />
              <p>Nothing here yet. Start taking notes!</p>
`;

export default function checkEmpty() {
  const noteList = document.querySelector(".shownNote__list");

  if (noteList.children.length > 0) {
    emptyListElement.remove();
  } else {
    noteList.append(emptyListElement);
  }
}
