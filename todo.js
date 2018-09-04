//create event listener

var taskHandler = function() {
    console.info('clicked');
    //Step-3 get the task - check if it is null
    var input = document.querySelector("#task");
    var task = input.value;
    if ((null == task) || ("" == task.trim())){
        return;
    } 

    //step 4 . add to ol
    var taskList = document.querySelector("#task-list");
    var li = document.createElement("li");
    li.textContent = task.trim();
    taskList.appendChild(li);
    input.value = null;
}

var saveHandler = function() {
    var taskList = document.querySelector("#task-list");
    console.log(taskList.children.length);
    var c=0;
    while(c<task.children.length){
        console.log("li = ", taskList.children[c].textContent);
        c++;

    }
}


//Step-2 register the event listener
document
    .querySelector("#addBtn")
    .addEventListener("click", taskHandler)
