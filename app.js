
var input = document.getElementById("input");
var add_button = document.getElementById("input-btn");
var items_list = document.getElementById("items_list");
var span_java = document.getElementById("span_java");

add_button.addEventListener("click", function () {
    if (!input.value) return alert("Enter any Task")
    var list = `<ol class="taskList"> <div class="java_list_container">  <span id="span_parent"> ${input.value} </span>  
    
    <button  class="edit" onclick="editfun(this)"> 
    <i class="fa-solid fa-pen-to-square"></i> </button> <button class="delete"  onclick="deletefun(this)">
     <i class="fa-solid fa-delete-left"></i> </button>
     </div> </ol>`
    items_list.innerHTML += list;
    input.value = "";
})

function editfun(element) {
    // console.log(element.previousElementSibling.innerText);
    var previousValue = element.previousElementSibling.innerText;
    var updated = prompt("Edit the Value", previousValue);
    element.previousElementSibling.innerText = updated;
}

function deletefun(element) {
    // console.log(elemet.parentElement.parentElement.parentElement.parentElement)
    element.parentElement.parentElement.remove()
}