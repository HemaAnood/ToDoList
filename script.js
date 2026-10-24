const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Function to add a new task
function addTask() {
    const task = taskInput.value.trim();

    if (task === "") {
        alert("Please enter a task!");
        return;
    }

    // Create a new list item
    const listItem = document.createElement("li");

    // Create the task text
    const taskText = document.createElement("span");
    taskText.textContent = task;
    taskText.className = "task-text";

    // Toggle task completion status
    taskText.addEventListener("click", function () {
        taskText.classList.toggle("completed");
    });

    // Create the delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-button";

    // Remove the task
    deleteButton.addEventListener("click", function () {
        listItem.remove();
    });

    // Add elements to the list item
    listItem.appendChild(taskText);
    listItem.appendChild(deleteButton);

    // Display the task in the list
    taskList.appendChild(listItem);

    // Clear the input field
    taskInput.value = "";
    taskInput.focus();
}

// Add a task when Enter is pressed
taskInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});