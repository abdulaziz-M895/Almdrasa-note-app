import { searchNoteInput } from "./elements";

export default function searchNotes() {
  const sidebarNotes = document.querySelectorAll(".sidebar__note");

  searchNoteInput.addEventListener("input", () => {
    const inputValue = searchNoteInput.value.toLowerCase();

    sidebarNotes.forEach((note) => {
      const noteTitle = note
        .querySelector(".sidebar__title")
        .textContent.toLowerCase();

      if (noteTitle.includes(inputValue)) {
        note.classList.remove("d-none");
      } else {
        note.classList.add("d-none");
      }
    });
  });
}
