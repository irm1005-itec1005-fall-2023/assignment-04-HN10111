/* Assignment 04: Finishing a Todo List App
 *
 * 
 *
 */


//
// Variables
//

// Constants
const appContainer = document.getElementById("app");
const todoListContainer = document.getElementById("todoList");
const TomorrowListContainer = document.getElementById("TomorrowList");
const FutureListContainer = document.getElementById("todoListFuture");

//Todo Items Arrays
let todoList = [];
let Tomorrowtodo = [];
let Futuretodo = [];
let Todaytodo = [];

//New Todo for today
function addTodayItem(event) {
  event.preventDefault();

  const newItemInput = document.getElementById("newItem");
  const newItemValue = newItemInput.value.trim();

  if(newItemValue !=="") {
    const newItem = {
      text: newItemValue,
      completed: false,
    };

    Todaytodo.push(newItem);
    newItemInput.value = "";

    renderTodayTodo();
  }
}

//New Todo for tomorrow
function addTomorrowItem(event) {
  event.preventDefault();

  const newItemTomorrowInput = document.getElementById("newItemTomorrow");
  const newItemTomorrowValue = newItemTomorrowInput.value.trim();

  if (newItemTomorrowValue !== "") {
    const newItemTomorrow = {
      text: newItemTomorrowValue,
      completed: false,
    };

    Tomorrowtodo.push(newItemTomorrow);
    newItemTomorrowInput.value ="";

    renderTomorrowTodo();
  }
}

//New Todo for future
function addFutureItem(event) {
  event.preventDefault();

  const newItemFutureInput = document.getElementById("newItemFuture");
  const newItemFutureValue = newItemFutureInput.value.trim();

  if (newItemFutureValue !=="") {
    const newItemFuture = {
      text: newItemFutureValue,
      completed: false,
    };

    Futuretodo.push(newItemFuture);
    newItemFutureInput.value = "";

    renderFutureTodo();

  }
}

//Deleting Function for today's todo
function deleteItem(index) {
  Todaytodo.splice(index, 1);
  renderTodayTodo();
}

//Deleting Function for tomorrow's todo
function deleteTomorrowItem(index) {
  Tomorrowtodo.splice(index, 1);
  renderTomorrowTodo();
}

//Deleting Function for future's todo
function deleteTodayItem(index) {
  Futuretodo.splice(index, 1);
  renderFutureTodo();
}

//Marking today's todo as complete/ incomplete
function toggleComplete(index) {
  Todaytodo[index].completed = !Todaytodo[index].completed;
  renderTodayTodo();
}

//Marking tomorrow's todo as complete/ incomplete
function toggleTomorrowComplete(index) {
  Tomorrowtodo[index].completed = !Tomorrowtodo[index].completed;
  renderTomorrowTodo();
}

//Marking future's todo as complete/ incomplete
function toggleFutureComplete(index) {
  Futuretodo[index].completed = !Futuretodo[index].completed;
  renderFutureTodo();
}

//Rendering today's todo list
function renderTodayTodo() {
  todoListContainer.innerHTML = "";

  Todaytodo.forEach((item, index) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
      <span class="${item.completed ? 'completed' : ''}">${item.text}</span>
      <button onclick="toggleComplete(${index})" class="complete-button">✅</button>
      <button onclick="deleteItem(${index})" class="delete-button">❌</button>
    `;

    if (item.completed) {
      listItem.classList.add("complered");
    }

    todoListContainer.appendChild (listItem);

    //Fade-out for deleting item
    setTimeout (() =>{
      listItem.style.opacity = "1";
    }, 10);
  });
  console.log(Todaytodo);
}

//Rendering tomorrow's todo list
function renderTomorrowTodo() {
  TomorrowListContainer.innerHTML ="";

  Tomorrowtodo.forEach((item, index) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
      <span class="${item.completed ? 'completed' : ''}">${item.text}</span>
      <button onclick="toggleTomorrowComplete(${index})" class="complete-button">✅</button>
      <button onclick="deleteTomorrowItem(${index})" class="delete-button">❌</button>
    `;

    if (item.completed) {
      listItem.classList.add("completed");
    }
    TomorrowListContainer.appendChild(listItem);
  });
  console.log(Todaytodo);
}

//Rendering future's todo list
function renderFutureTodo() {
  FutureListContainer.innerHTML = "";

  Futuretodo.forEach((item, index) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
      <span class="${item.completed ? 'completed' : ''}">${item.text}</span>
      <button onclick="toggleFutureComplete(${index})" class="complete-button">✅</button>
      <button onclick="deleteTodayItem(${index})" class="delete-button">❌</button>
    `;

    if (item.completed) {
      listItem.classList.add("completed");
    }

    FutureListContainer.appendChild(listItem);
  });
  console.log(Futuretodo);
}

//Adding new todo for future
function addFutureItem(event) {
  event.preventDefault();
  
  const newItemFutureInput = document.getElementById("newItemFuture");
  const newItemFutureValue = newItemFutureInput.value.trim();

  if (newItemFutureValue !== "") {
    const newItemFuture = {
      text: newItemFutureValue,
      completed: false,
    };

    Futuretodo.push(newItemFuture);
    newItemFutureInput.value ="";

    renderFutureTodo();
  }
console.log(Futuretodo);
}

//Key handling
document.addEventListener("DOMContentLoaded", function () {
  let todayForm = document.getElementById("todayform");
  todayForm.addEventListener("submit", function (event) {
    event.preventDefault();
    addTodayItem(event);
  });

  let tomorrowForm = document.getElementById("tomorrowform");
  tomorrowForm.addEventListener("submit", function (event) {
    event.preventDefault();
    addTomorrowItem(event);
  });

  let futureForm = document.getElementById("futureform");
  futureForm.addEventListener("submit", function (event) {
    event.preventDefault();
    addFutureItem(event);
  });
});

function handleKeyPressTomorrow(event) {
  if (event.key ==="Enter") {
    event.preventDefault();
    document.getElementById("addbtntomorrow").click();
  }
}

function handleKeyPressFuture(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("addbtnFuture").click();
  }
}

//Form submit handling
let todayForm = document.getElementById("todayform");
todayForm.addEventListener("submit", addTodayItem);

let tomorrowForm = document.getElementById("tomorrowform");
tomorrowForm.addEventListener("submit", addTomorrowItem);

let futureForm = document.getElementById("futureform");
futureForm.addEventListener("submit", addFutureItem);
