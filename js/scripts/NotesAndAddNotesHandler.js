import { addNoteSectionElement, shownNoteElement } from "./elements";

export default function NotesAndAddNotesHandler(span, isShownNoteBtn = false) {
  span.addEventListener("click", () => {
    if (span.classList.contains("addNote")) {
      if (!isShownNoteBtn) {
        span.parentElement.classList.add("addNote");
      } else {
        document.querySelector(".sidebar__addNotes").classList.add("addNote");
      }

      shownNoteElement.classList.add("d-none");
      addNoteSectionElement.classList.remove("d-none");
    } else {
      if (!isShownNoteBtn) {
        span.parentElement.classList.remove("addNote");
      } else {
        document
          .querySelector(".sidebar__addNotes")
          .classList.remove("addNote");
      }

      shownNoteElement.classList.remove("d-none");
      addNoteSectionElement.classList.add("d-none");
    }
  });
}
