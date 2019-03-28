let userInput = document.getElementById('userInput');
let button = document.getElementById('enter');
let ul = document.querySelector("ul");
let li = document.querySelector("li");

//Creates new list item

button.addEventListener("click", function() {
	if (userInput.value != ""){
	let li = document.createElement("li");
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
