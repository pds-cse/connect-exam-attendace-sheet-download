# Automated Exam Attendance Sheet Download from *[CONNECT](https://connect.bracu.ac.bd/)*

This script automates the downloading of exam attendance sheets from *[CONNECT](https://connect.bracu.ac.bd/)*. If the script only downloads the first section's attendance sheet, Browser may have blocked pop-ups due to too many downloads. Make sure you allow all pop-ups from *[CONNECT](https://connect.bracu.ac.bd/)* in that case. This was tested in Chrome, Edge, and Firefox.

## How to Use

1. **Navigate to Connect**  
   - Log in to *[CONNECT](https://connect.bracu.ac.bd/)*.
   - Go to ***Exam Controller*** -> ***Exam Attendance Sheet***.
   - Select ***Academic Degree***, ***Semester***, and ***Course***.

2. **Run the [Script](#script)**  
   - Open ***Developer Tools*** (Ctrl + Shift + I).
   - Go to the ***Sources*** tab.
   - In the left pane, find ***Snippets*** (may be hidden).
   - Create a ***New Snippet*** and paste the [Script](#script)
 below.
   - Press ***Ctrl + Enter*** to run.

## Script
Check the [script](main.js) file.

## Notes
- The script will iterate through all available sections and download attendance sheets for each.
- If only the first section is downloaded, check broser's pop-up settings and allow pop-ups for Connect.
- Adjust the `sleep(1000);` value if needed to ensure downloads are processed correctly.

Feel free to contribute or suggest improvements! 🚀
