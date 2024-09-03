import checkEmpty from "./checkEmpty";
import createNote from "./createNote";
import createSideNote from "./createSideNote";
import deleteNote from "./deleteNote";
import {
  shownNoteList,
  sidebarNormalList,
  sidebarNoteBtn,
  sidebarPinnedList,
} from "./elements";
import moveBetweenNotes from "./moveBetweenNotes";

export default function addNote(e) {
  e.preventDefault();

  const form = e.target;
  const titleValue = form.querySelector("#title").value;
  const authorValue = form.querySelector("#author").value;
  const theNoteValue = form.querySelector("#yourNote").value;

  if (!titleValue.trim() || !authorValue.trim() || !theNoteValue.trim()) {
    return;
  }

  const [note, date, noteId] = createNote(
    titleValue,
    authorValue,
    theNoteValue
  );

  // Add the id class here
  note.classList.add(`id-${noteId}`);

  shownNoteList.append(note);

  const briefNote =
    theNoteValue.length > 55 ? `${theNoteValue.slice(0, 50)}...` : theNoteValue;

  const sideNote = createSideNote(titleValue, briefNote, date, noteId);

  sideNote.addEventListener("click", moveBetweenNotes);

  sideNote
    .querySelector(".sidebar__details button")
    .addEventListener("click", deleteNote);

  if (e.submitter.classList.contains("pinned")) {
    sidebarPinnedList.append(sideNote);
  } else {
    sidebarNormalList.append(sideNote);
  }

  sidebarNoteBtn.click();
  sideNote.click();

  checkEmpty();

  form.reset();

  const notesList = JSON.parse(localStorage.getItem("notes")) || [];

  const noteObj = {
    noteId,
    title: titleValue,
    author: authorValue,
    theNote: theNoteValue,
    isPinned: e.submitter.classList.contains("pinned"),
  };

  notesList.push(noteObj);

  localStorage.setItem("notes", JSON.stringify(notesList));
}
