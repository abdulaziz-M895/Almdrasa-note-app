import swal from "sweetalert";
import checkEmpty from "./checkEmpty";

export default function deleteNote(e) {
  e.stopPropagation();

  const deleteBtn = e.currentTarget;

  swal({
    title: "Are you sure?",
    text: "Once deleted, you will not be able to recover this note!",
    icon: "warning",
    buttons: [true, "DELETE"],
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      const sidebarNote = deleteBtn.parentElement.parentElement;
      const noteId = sidebarNote.dataset.id;
      const notActiveSidebarNote = document.querySelector(
        ".sidebar__note:not(.active)"
      );

      if (notActiveSidebarNote && sidebarNote.classList.contains("active")) {
        notActiveSidebarNote.click();
      }

      sidebarNote.remove();
      document.querySelector(`.id-${noteId}`).remove();

      checkEmpty();

      const notesList = JSON.parse(localStorage.getItem("notes")) || [];

      const index = notesList.findIndex(
        (note) => note.noteId === parseInt(noteId)
      );

      notesList.splice(index, 1);

      localStorage.setItem("notes", JSON.stringify(notesList));
    }
  });
}
