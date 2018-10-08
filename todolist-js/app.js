
// Text element
let task = document.getElementById("enterTask");

// Get the ul element list
let ulList = document.getElementById("taskList");


// Completed element list
let ulListComplete = document.getElementById("taskListComplete");


// // checkbox
// let checkbox = document.createElement("checkbox");
// checkbox.name = "checkbox";
// checkbox.value = "moveToComplete"
// checkbox.id = "moveToComplete"


addButton.addEventListener('click',function(){

    // checkbox
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = "checkbox";
    checkbox.value = "moveToComplete";
    checkbox.id = "moveToComplete";



    // ul, li 
    // console.log(task.value);

    // create a list element
    let liItem = document.createElement("li")

    // get the text value from the textbox
    let taskText = task.value
    // console.log(taskText);
    

    // append new liItem element to ul
    ulList.appendChild(liItem)


    // append text value entered
    liItem.innerHTML = taskText;



    // append a checkbox
    liItem.appendChild(checkbox);
    




    // Pending to Completed
    checkbox.addEventListener("click", function(){

        // Create a new li for elements to be moved to completed list
        let liItemComp = document.createElement("li")

        // Get text value from current
        // let taskTextComp = ulListComplete.value
        //  let taskTextComp = liItem.value
         let taskTextComp = liItem.innerHTML 

        
        // Append to the completed list
        ulListComplete.appendChild(liItemComp)


        // Show the text
        liItemComp.innerHTML = taskTextComp;


        // Remove items from original pending list
        ulList.removeChild(this.parentElement)



    })





})
