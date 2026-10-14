let input = document.querySelector("#taskInput");
let button = document.querySelector("#btnInput");
let taskList = document.querySelector("#taskList");

button.addEventListener("click", function () {
    console.log(input.value);
    if (input.value.trim() !== "") {
        let tasks = document.createElement("li");
        tasks.textContent = input.value;
        tasks.addEventListener("click", function(){
            tasks.classList.toggle("completed");
        });
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        tasks.appendChild(deleteBtn);
        deleteBtn.addEventListener("click", function(event){
            event.stopPropagation();
            tasks.remove();
            input.focus();
        });
        taskList.appendChild(tasks);
        input.value = "";
        input.focus();
    }
});
input.addEventListener("keydown", function(even){
            console.log(even.key);
            if(even.key === "Enter"){
                button.click();
            }
     });