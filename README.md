# Automated Exam Attendance Sheet Download from Connect

This script automates the downloading of exam attendance sheets from Connect. If the script only downloads the first section's attendance sheet, Chrome may have blocked pop-ups due to too many downloads. Make sure you allow all pop-ups from Connect in that case.

## How to Use

1. **Navigate to Connect**  
   - Log in to Connect.
   - Go to **Exam Controller** -> **Exam Attendance Sheet**.
   - Select **Academic Degree**, **Semester**, and **Course**.

2. **Run the Script**  
   - Open **Developer Tools** (Ctrl + Shift + I).
   - Go to the **Sources** tab.
   - In the left pane, find **Snippets** (may be hidden).
   - Create a **New Snippet** and paste the script below.
   - Press **Ctrl + Enter** to run.

## Script
```js
// Ensure pop-ups are allowed in Chrome for multiple downloads

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
```

## Notes
- The script will iterate through all available sections and download attendance sheets for each.
- If only the first section is downloaded, check your Chrome pop-up settings and allow pop-ups for Connect.
- Adjust the `sleep(1000);` value if needed to ensure downloads are processed correctly.

Feel free to contribute or suggest improvements! 🚀
