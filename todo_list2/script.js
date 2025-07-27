/**
 * localstorage
 * - 웹 브라우저가 제공하는 작은 데이터 저장 공간
 * - 로컬 스토리지는 항상 문자열 형태로 저장
 * - 이름(키)과 내용(값)이 한 쌍 => JSON 문자열 형태
 * - 함수
 *   setItem
 *   getItem
 *   removeItem
 */

const todoInput = document.querySelector("#todo-input");
const addTodoBtn = document.querySelector("#add-todo-btn");
const clearTodoBtn = document.querySelector("#clear-todo-btn");
const todoList = document.querySelector("#todo-list");

let todos = [];
let nextTodoId = 1;

//데이터를 로컬스토리지에 저장하는 함수
function saveTodoLocalStorage(todo) {
  localStorage.setItem(`${todo.id}`, JSON.stringify(todo)); //key, value(JSON 형태)
}

//로컬스토리지의 데이터를 불러오는 함수
function loadTodoLocalStorage() {
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i); //인덱스 번호로 key 반환
    const localStorageTodo = localStorage.getItem(key); //해당 key의 value 반환
    if (localStorageTodo) {
      todos = [...todos, JSON.parse(localStorageTodo)]; //객체 또는 배열 형태로 변환하여 목록 재할당
      console.log(todos);
      nextTodoId = Math.max(...todos.map((todo) => todo.id)) + 1; // 다음 목록의 id
    } else {
      todos = [];
      nextTodoId = 1;
    }
  }
  renderTodo();
}

//로컬스토리지의 데이터를 삭제하는 함수
function removeTodoLocalStorage(id) {
  localStorage.removeItem(`${id}`);
}

//RENDRING
function renderTodo() {
  todoList.innerHTML = "";

  todos.forEach((todo) => {
    const listItem = document.createElement("li");
    listItem.dataset.id = todo.id;
    listItem.classList.add("editing");

    if (todo.isEditing) {
      listItem.innerHTML = /*html*/ `
          <input type="text" class="edit-input" value="${todo.text}"> 
          <div class="todo-actions">
            <button class="save-btn">SAVE</button>
            <button class="cancel-btn">CANCEL</button>
          </div>
        `;
    } else {
      listItem.innerHTML = /*html*/ `
          <span class="todo-text">${todo.text}</span>
          <div class="todo-actions">
            <button class="edit-btn">EDIT</button>
            <button class="delete-btn">DEL</button>
          </div>
        `;
    }
    todoList.appendChild(listItem);
  });
}

//event : click
addTodoBtn.addEventListener("click", addTodo);

clearTodoBtn.addEventListener("click", clearTodo);

todoList.addEventListener("click", (event) => {
  const target = event.target;
  const listItem = target.closest("li[data-id]");
  if (!listItem) return;

  const todoId = parseInt(listItem.dataset.id);
  if (target.classList.contains("delete-btn")) {
    deleteTodo(todoId);
  } else if (target.classList.contains("edit-btn")) {
    editTodo(todoId);
  } else if (target.classList.contains("save-btn")) {
    const editInput = listItem.querySelector(".edit-input");
    saveTodo(todoId, editInput.value); //input value 전달
  } else if (target.classList.contains("cancel-btn")) {
    cancelTodo(todoId);
  }
});

//event : keypress
todoInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    addTodoBtn.click();
  }
});

//ADD
function addTodo() {
  console.log("CLICK ADD BUTTON");
  const todoText = todoInput.value.trim();

  if (todoText === "") {
    alert("There is no input value.");
    return;
  }

  const newTodo = {
    id: nextTodoId++,
    text: todoText,
    isEditing: false,
  };

  todos.push(newTodo);
  console.log(todos);
  saveTodoLocalStorage(newTodo); //로컬스토리지에 저장

  todoInput.value = "";
  todoInput.focus();

  renderTodo();
}

//DELETE
function deleteTodo(id) {
  if (!confirm("Are you sure you want to delete this todo?")) return;
  else {
    todos = todos.filter((todo) => todo.id !== id);
    removeTodoLocalStorage(id); //로컬스토리지에서 삭제
    renderTodo();
  }
}

//EDIT
function editTodo(id) {
  todos = todos.map((todo) =>
    todo.id === id ? { ...todo, isEditing: true } : todo
  );
  todos.map((todo) => console.log("isEditing : ", todo.isEditing));
  renderTodo();

  const editInput = todoList.querySelector(`li[data-id="${id}"] .edit-input`);
  if (editInput) {
    editInput.focus();
    editInput.select();
  }
}

//SAVE
function saveTodo(id, newText) {
  if (newText.trim() === "") {
    alert("There is no input value.");
    return;
  }

  todos = todos.map((todo) => {
    if (todo.id === id) {
      const editTodo = (todo = {
        ...todo,
        text: newText.trim(),
        isEditing: false,
      });
      saveTodoLocalStorage(todo); //다시 로컬스토리지에 저장
      return editTodo;
    }
    return todo;
  });
  renderTodo();
}

//CANCEL
function cancelTodo(id) {
  todos = todos.map((todo) =>
    todo.id === id ? { ...todo, isEditing: false } : todo
  );
  renderTodo();
}

//CLEAR
function clearTodo() {
  if (!confirm("Are you sure you want to permanently delete this todo list?"))
    return;

  todos = [];
  localStorage.clear();
}

//로컬 스토리지 데이터 가져오기
loadTodoLocalStorage();
renderTodo();
