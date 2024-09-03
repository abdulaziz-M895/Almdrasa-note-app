import addNote from "./addNote";
import deleteNote from "./deleteNote";
import {
  addNoteSectionForm,
  closeNotesElement,
  deleteBtns,
  searchNoteInput,
  shownNoteAddNoteElement,
  sidebarAddNotesCloseElement,
  sidebarAddNotesElement,
  sidebarElement,
  sidebarMenuIcon,
  sidebarMobileSearchIcon,
  sidebarNotes,
  SidebarNotesAndAddNotes,
  sidebarSearchBox,
} from "./elements";
import moveBetweenNotes from "./moveBetweenNotes";
import NotesAndAddNotesHandler from "./NotesAndAddNotesHandler";
import searchNotes from "./searchNotes";

export default function initListeners() {
  // mobile
  sidebarMobileSearchIcon.addEventListener("click", () =>
    sidebarSearchBox.classList.toggle("shown")
  );

  sidebarMenuIcon.addEventListener("click", () =>
    sidebarAddNotesElement.classList.toggle("shown")
  );
  sidebarAddNotesCloseElement.addEventListener("click", () =>
    sidebarAddNotesElement.classList.toggle("shown")
  );

  // open/close sidebar notes list
  closeNotesElement.addEventListener("click", () =>
    sidebarElement.classList.toggle("hidden_notes")
  );

  // add/show notes
  SidebarNotesAndAddNotes.forEach((span) => NotesAndAddNotesHandler(span));
  NotesAndAddNotesHandler(shownNoteAddNoteElement, true);

  // make note and add it to the dom
  addNoteSectionForm.addEventListener("submit", addNote);

  // delete notes
  deleteBtns.forEach((btn) => btn.addEventListener("click", deleteNote));

  // move between notes
  sidebarNotes.forEach((note) =>
    note.addEventListener("click", moveBetweenNotes)
  );

  // search notes
  searchNoteInput.addEventListener("input", searchNotes);
}
