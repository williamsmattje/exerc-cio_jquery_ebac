function addTask() {
    var taskInput = document.getElementById("task");
    var taskTable = document.getElementById("taskTable");
    var newRow = taskTable.insertRow(taskTable.rows.length);

    var cell1 = newRow.insertCell(0);
    cell1.appendChild(document.createTextNode(taskInput.value));

    var cell2 = newRow.insertCell(1);
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.onchange = function() {
        toggleTaskCompletion(this);
    };
    cell2.appendChild(checkbox);

    taskInput.value = "";
}

function toggleTaskCompletion(checkbox) {
    var row = checkbox.parentNode.parentNode;
    if (checkbox.checked) {
        row.cells[0].classList.add("completed");
    } else {
        row.cells[0].classList.remove("completed");
    }
}