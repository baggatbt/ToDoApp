let userInput = document.getElementById('userInput');
let button = document.getElementById('enter');
let ul = document.querySelector("ul");
let li = document.querySelector("li");
let i = 0;


//Creates new list item
button.addEventListener("click", function() {
	if (userInput.value != ""){
	let li = document.createElement("li");
	//assign the next numerical ID value to the newly created list item
	li.setAttribute("id", i++ );
	li.setAttribute("class", "text" );
	li.setAttribute("draggable", "true");
	li.setAttribute("ondragstart", "dragstart_handler(event);");
	li.appendChild(document.createTextNode(userInput.value));
	ul.appendChild(li);
	userInput.value =''; 
}
})


//Removes a list item on click
ul.addEventListener("click",function() {
	let itemToBeRemoved = (event.target);
	if (itemToBeRemoved != ul){

		itemToBeRemoved.remove();
	}
})

//Allows user to press enter to add a list item as well as clicking the button
userInput.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("enter").click();
  }
});

function dragstart_handler(ev) {
 console.log("dragStart");
 // Add the target element's id to the data transfer object
 ev.dataTransfer.setData("text/plain", ev.target.id);
}

function dragover_handler(ev) {
 ev.preventDefault();
 // Set the dropEffect to move
 ev.dataTransfer.dropEffect = "move"
}
function drop_handler(ev) {
 ev.preventDefault();
 // Get the id of the target and add the moved element to the target's DOM
 var data = ev.dataTransfer.getData("text/plain");
 ev.target.appendChild(document.getElementById(data));
}