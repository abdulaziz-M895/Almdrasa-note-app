export default function createSideNote(title, breif, date, noteId) {
  const sideNote = document.createElement("li");

  sideNote.className = "sidebar__note";

  sideNote.innerHTML = `
  <p class="sidebar__title">${title}</p>
  <p class="sidebar__brief gray-text">${breif}</p>
  <div class="sidebar__details">
    <span class="sidebar__date">${date}</span>
    <button class="orange-hover-text">DELETE</button>
  </div>
  `;

  sideNote.dataset.id = noteId;

  return sideNote;
}
