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

export default function loadNotesFromStorage() {
  const notesList = JSON.parse(localStorage.getItem("notes")) || [];

  notesList.forEach((note) => {
    const {
      title: titleValue,
      author: authorValue,
      theNote: theNoteValue,
      isPinned,
      noteId: storedNoteId,
    } = note;

    const [createdNote, date, generatedNoteId] = createNote(
      titleValue,
      authorValue,
      theNoteValue
    );

    // Use the stored noteId instead of the generated one
    const noteId = storedNoteId || generatedNoteId;

    // Set the noteId on the created note element
    createdNote.classList.add(`id-${noteId}`);

    shownNoteList.append(createdNote);

    const briefNote =
      theNoteValue.length > 75
        ? `${theNoteValue.slice(0, 70)}...`
        : theNoteValue;

    const sideNote = createSideNote(titleValue, briefNote, date, noteId);

    sideNote.addEventListener("click", moveBetweenNotes);

    sideNote
      .querySelector(".sidebar__details button")
      .addEventListener("click", deleteNote);

    if (isPinned) {
      sidebarPinnedList.append(sideNote);
    } else {
      sidebarNormalList.append(sideNote);
    }

    sidebarNoteBtn.click();
    sideNote.click();
  });

  checkEmpty();
}