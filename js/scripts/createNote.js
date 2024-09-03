import { format } from "date-fns";

export default function createNote(title, author, theNote) {
  const note = document.createElement("li");

  note.className = "shownNote__note d-none";

  const date = `${format(
    new Date(),
    "MMM"
  )} ${new Date().getDate()}, ${new Date().getFullYear()}`;

  note.innerHTML = `
  <h1 class="shownNote__title">
    ${title}
  </h1>
  <p class="shownNote__date gray-text">${date}</p>
  <p class="shownNote__text">${theNote}</p>
  `;

  note.dataset.author = author;

  const noteId = Number(new Date().getTime());

  return [note, date, noteId];
}