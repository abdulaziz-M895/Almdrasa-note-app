export default function moveBetweenNotes(e) {
  const sidebarNote = e.currentTarget;

  document.querySelectorAll(".shownNote__note").forEach((note) => {
    if (note.classList.contains(`id-${sidebarNote.dataset.id}`)) {
      note.classList.remove("d-none");
    } else {
      note.classList.add("d-none");
    }
  });

  const activeSidebarNote = document.querySelector(".sidebar__note.active");

  if (activeSidebarNote) {
    activeSidebarNote.classList.remove("active");
  }
  
  sidebarNote.classList.add("active");
}
