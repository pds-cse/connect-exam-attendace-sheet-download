// if this script only downloads the frist section's attendance sheet,
// chrome may have blocked pop-ups because of too many downloads.
// make sure you allow all pop-ups from connect in that case.

// Go to Connect -> Login -> Exam Controller -> Exam Attendance Sheet
// Select Academic Degree, Semester, and Course
// Developer Tools (Ctrl+Shift+I) -> Sources -> Left Pane (may be hidden) -> Snippets -> New Snipptes -> Paste code
// Ctrl + Enter to run

section_select = document.getElementById('mat-select-value-11').click();
sections = document.querySelectorAll('.mat-mdc-option');
downloadButton = document.querySelector('.btn.btn-success');

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

for(let i=0; i<sections.length; i++) {
  section = sections[i];
  section.click();
  downloadButton.click();
  await sleep(1000);
}