document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form")
  const taskList = document.getElementById("tasks")
  let tasks = []

form.addEventListener("submit", event => {
  event.preventDefault()

  const inputDescription = document.getElementById("new-task-description")
  const taskDescription = inputDescription.value

  const inputUser = document.getElementById("user")
  const taskUser = inputUser.value

  const inputDuration = document.getElementById("duration")
  const taskDuration = inputDuration.value

  const inputDueDate = document.getElementById("due-date")
  const taskDueDate = inputDueDate.value

  if (taskDescription.trim() !== "") {
    const taskItem = document.createElement("li")

    const taskText = document.createElement("span")
    taskText.textContent = `Task: ${taskDescription}`
    taskItem.appendChild(taskText)

    const userInfo = document.createElement("span")
    userInfo.textContent = `User: ${taskUser}`
    taskItem.appendChild(userInfo)

    const durationInfo = document.createElement("span")
    durationInfo.textContent = `Duration: ${taskDuration}`
    taskItem.appendChild(durationInfo)

    const dueDateInfo = document.createElement("span")
    dueDateInfo.textContent = `Due Date: ${taskDueDate}`
    taskItem.appendChild(dueDateInfo)

    const deleteButton = document.createElement("button")
    deleteButton.textContent = "Delete"
    deleteButton.addEventListener("click", () => {
      taskItem.remove();
    });
    taskItem.appendChild(deleteButton);

    const editButton = document.createElement("button");
    editButton.textContent = "Edit"
    editButton.addEventListener("click", () => {
      const updatedDescription = prompt("Enter the updated task description:")
      if (updatedDescription !== null && updatedDescription.trim() !== "") {
        taskText.textContent = `Task: ${updatedDescription}`
      }
      const updatedUser = prompt("Enter the updated user:")
      if (updatedUser !== null && updatedUser.trim() !== "") {
        userInfo.textContent = `User: ${updatedUser}`
      }
      const updatedDuration = prompt("Enter the updated duration:")
      if (updatedDuration !== null && updatedDuration.trim() !== "") {
        durationInfo.textContent = `Duration: ${updatedDuration}`
      }
      const updatedDueDate = prompt("Enter the updated due date:")
      if (updatedDueDate !== null && updatedDueDate.trim() !== "") {
        dueDateInfo.textContent = `Due Date: ${updatedDueDate}`
      }
    })
    taskItem.appendChild(editButton)

    taskList.appendChild(taskItem)

    inputDescription.value = ""
    inputUser.value = ""
    inputDuration.value = ""
    inputDueDate.value = ""
  }
})
});

 

