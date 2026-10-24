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
    const li = document.createElement("li");

    // Create task text
    const span = document.createElement("span");
    span.textContent = task;
    span.className = "task-text";

    // Mark task as completed or not completed
    span.onclick = function() {
        li.classList.toggle("completed");
    };

    // Create delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-btn";

    // Delete task
    deleteButton.onclick = function() {
        li.remove();
    };

    // Add elements to the list item
    li.appendChild(span);
    li.appendChild(deleteButton);

    // Add task to the list
    taskList.appendChild(li);

    // Clear input box
    taskInput.value = "";
    taskInput.focus();
}

// Add a task by pressing Enter
taskInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});
