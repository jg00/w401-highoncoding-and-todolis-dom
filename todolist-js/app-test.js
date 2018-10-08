

let enterTask = document.getElementById("enterTask");

let liItem = document.createElement("li")

let ulItems = document.getElementById("taskList")

addButton.addEventListener("click", function() {
    // console.log(enterTask.value)

    let n = liItem.appendChild(enterTask)

    ulItems.appendChild(n)
  

})


