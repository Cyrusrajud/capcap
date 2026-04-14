// Run this when the page loads to show existing data
window.onload = function() {
    displayAttendance();
};

function submitData() {
    let name = document.getElementById("name").value;
    let dept = document.getElementById("dept").value;
    let id = document.getElementById("id").value;
    let message = document.getElementById("message");

    if (name === "" || dept === "" || id === "") {
        message.innerText = "Please fill all fields!";
        message.style.color = "red";
        return;
    }

    // 1. Create a Student Object
    let newEntry = {
        studentName: name,
        department: dept,
        studentId: id
    };

    // 2. Get existing data from LocalStorage (JSON database)
    // If it doesn't exist, create an empty array
    let attendanceData = JSON.parse(localStorage.getItem("attendanceDB")) || [];

    // 3. Add new entry to the array
    attendanceData.push(newEntry);

    // 4. Save updated array back to LocalStorage as a JSON String
    localStorage.setItem("attendanceDB", JSON.stringify(attendanceData));

    // Success UI updates
    message.innerText = "Attendance recorded successfully!";
    message.style.color = "green";
    
    // Clear inputs and refresh the table
    clearInputs();
    displayAttendance();
}

function displayAttendance() {
    let table = document.getElementById("table");
    let attendanceData = JSON.parse(localStorage.getItem("attendanceDB")) || [];

    // Clear the table first (except the header row)
    table.innerHTML = `
        <tr>
            <th>Name</th>
            <th>Department</th>
            <th>Student ID</th>
        </tr>`;

    // Loop through JSON data and create rows
    attendanceData.forEach(student => {
        let row = table.insertRow();
        row.insertCell(0).innerText = student.studentName;
        row.insertCell(1).innerText = student.department;
        row.insertCell(2).innerText = student.studentId;
    });
}

function clearInputs() {
    document.getElementById("name").value = "";
    document.getElementById("dept").value = "";
    document.getElementById("id").value = "";
}