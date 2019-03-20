let userInput = document.getElementById('userInput');
let button = document.getElementById('enter');
let ul = document.querySelector("ul");

button.addEventListener("click", function() {
	let li = document.createElement("li");
	li.appendChild(document.createTextNode(userInput.value));
	ul.appendChild(li);
	newListItem.value ='';
})

