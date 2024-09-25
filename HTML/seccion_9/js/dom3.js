
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
    const tasksList = document.getElementById("tasksList");
    const deleteButton = document.createElement("button");
    function addTask() {
        
        if (taskText !== "") {
            let newLi = document.createElement("li");
            let newul = document.createElement("ul");
            
            li.textContent = taskText;

            newLi.appendChild(newul);
            newul.appendChild(newbutton);
            tasksList.appendChild(newLi);

            
            newP.textContent = newText;
            newButton.textContent = "Eliminar";
            newP.onclick = function() { 
                tasksList.removeChild(li);


            };
            li.appendChild(deleteButton);
            li.onclick = function() {
                li.classList.toggle("completed");
            };
            tasksList.appendChild(li);
            taskInput.value = "";


        }

}
btnaddTask.addEventListener("click", addTask);