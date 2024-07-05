let myArray = [10, 20, 30];
//kind of same as python
console.log(myArray[0]);
myArray[0] = 40;
console.log(myArray[0]);
myArray = [2, "hello", true, { nam: "john" }, [1, 2, 3]];

console.log(Array.isArray(myArray));

//adding elements to the array
myArray.push(100);
console.log(myArray);

//remove the last element
myArray.pop();

//remove the first element
myArray.shift();

//remove the element at index 1
myArray.splice(1, 1);
console.log(myArray);

let todoArray = [];

function addTodo() {
  let input = document.querySelector(".todo-input");
  let date = document.querySelector(".date-input");
  todoArray.push({ input: input.value, date: date.value });
  input.value = "";

  renderTodos();
}

function deleteTodo(index) {
  todoArray.splice(index, 1);
  renderTodos();
}

function renderTodos() {
  let todos = document.querySelector(".todos");
  let innerHtmls = "";

  for (let i = 0; i < todoArray.length; i++) {
    innerHtmls += `
        <div> ${todoArray[i].input}</div>
        <div> ${todoArray[i].date}</div>
            
               
                <button onclick="deleteTodo(${i})" class="delete-btn" style="margin-left:20px">delete</button>
            `;
  }

  todos.innerHTML = innerHtmls;
}
