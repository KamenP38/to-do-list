// Add tasks to the list
// 1. On button click add the task

let ul = document.getElementById("tasksList");
let input = document.getElementById("userinput");
let buttonAdd = document.querySelector("#enter");
let points = parseInt(document.getElementById("points").innerHTML);

function inputLength(){
    return input.value.length;
}

function addTask() {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";

    // With the addition of a new task, add 2 buttons next to it
    // Complete Task
    // Remove Task
    let button = document.createElement("button");
    button.className = 'gg';
    button.setAttribute("onclick", "completed(this)");
    button.appendChild(document.createTextNode("✅"));
    li.appendChild(button);

    let button2 = document.createElement("button");
    button2.className = 'sad';
    button2.setAttribute("onclick", "removed(this)");
    button2.appendChild(document.createTextNode("🗑️"));
    li.appendChild(button2);
};

function removeItem(el){
    el.parentElement.remove();
};

function completed(el){
    el.parentElement.classList.toggle("gg");
    setTimeout(function(element){
        element.parentElement.remove();
    }, 500, el);
    points = points + 10;
    document.getElementById("points").innerHTML = JSON.stringify(points);
};

function removed(el){
    el.parentElement.classList.toggle("sad");
    setTimeout(function(element){
        element.parentElement.remove();
    }, 500, el);
    points = points - 5;
    document.getElementById("points").innerHTML = JSON.stringify(points);
};

// strike element function
// function strike(el){
//     el.classList.toggle("done");
// };

// remove item function

function addListAfterClick(){
	if(inputLength() > 0){
		addTask();
	}
};

function addListAfterKeypress(event){
	if(inputLength() > 0 && event.keyCode === 13){
		addTask();
	}
};

buttonAdd.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);