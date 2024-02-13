let taskList = document.getElementById('tasklist');
let taskInput = document.getElementById('taskInput');
taskInput.addEventListener("keydown",
function(event) {
    if (event.keyCode === 13){
        event.preventDefault();
        addTask();
    }
});

let total = document.getElementById('total');
let totalValue = Number(total.textContent);

function addTask(){
let taskText = taskInput.value

if(taskText===""){
    return;
}

totalValue++; 
total.textContent = totalValue;

let li = document.createElement('li')

li.innerHTML = taskText;

let editButton = document.createElement('button');
    
editButton.innerHTML = '<ion-icon name="create-outline" class="modify"></ion-icon>'
    
editButton.onclick = function(){
    editTask(li)
}

let deleteButton = document.createElement('button')

deleteButton.innerHTML= '<ion-icon name="trash-outline" class="delete"></ion-icon>'

deleteButton.onclick = function(){
    deleteTask(li)
}

li.appendChild(editButton);
li.appendChild(deleteButton);

taskList.appendChild(li);

taskInput.value = '';
}

function editTask(task){
    let taskTextElement = task.firstChild;
    let taskText = taskTextElement.textContent;

let newTaskText = prompt('Modifier la tâche:', taskText)

if(newTaskText === null || newTaskText === ""){
    return;
}

taskTextElement.textContent = newTaskText;
}

function deleteTask(task){
    totalValue--;
    total.textContent = totalValue;
    taskList.removeChild(task);
}


