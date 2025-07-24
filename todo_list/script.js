const todoInput = document.querySelector("#todo-input");
const addTodoBtn = document.querySelector("#add-todo-btn");
const todoList = document.querySelector("#todo-list");

let todos = [];
let nextTodoId = 1;

//삽입
function renderTodo() {
  todoList.innerHTML = "";

  todos.forEach((todo) => {
    const listItem = document.createElement("li"); //태그
    /**
     * Data Set의 id 사용
     * - dataset이란 요소에 추가적인 사용자 정의 데이터 저장
     * - 개발자가 특정 HTML 요소에 추가적인 데이터를 저장할 목적으로 사용
     * - 브라우저는 dataset의 속성을 해석하지 않음
     * */
    listItem.dataset.id = todo.id;
    listItem.classList.add("editing"); //클래스

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

    //todoList 자식으로 listItem 객체 전달, 삽입
    todoList.appendChild(listItem);
  });
}

//ADD 버튼 클릭 시 작동할 함수
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
    isEditing: false, //수정 중인지 여부를 나타내는 플래그
  };

  todos.push(newTodo);
  console.log(todos);

  todoInput.value = ""; //입력창 초기화
  todoInput.focus(); //입력창 커서 자동 활성화

  renderTodo();
}

/**
 * 함수 VS 함수()
 * - 괄호 명시하지 않은 경우 해당 이벤트가 발생했을 때 함수 작동
 * - 괄호를 명시하는 경우 리소드 렌더링 시 함수 호출
 */
//event : click (클릭)
addTodoBtn.addEventListener("click", addTodo);

//event : keypress (키보드 입력, 입력키 전달)
todoInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    addTodoBtn.click(); //Enter를 누르면 버튼 클릭으로 간주
  }
});

//event : click (클릭)
//클릭 이벤트에 대해 li 태그 내 dataset의 id 속성을 통해 클릭된 요소 구분
//해당 요소에 대한 이벤트 렌더링
todoList.addEventListener("click", (event) => {
  const target = event.target; //클릭된 요소
  const listItem = target.closest("li[data-id]"); //해당 요소의 가장 가까운 부모(li,dataset의 id 속성을 가짐)
  if (!listItem) return; //li 요소를 찾지 못했다면 함수 종료

  const todoId = parseInt(listItem.dataset.id);
  if (target.classList.contains("delete-btn")) {
    //클래스명이 delete-btn과 일치하면
    deleteTodo(todoId);
  } else if (target.classList.contains("edit-btn")) {
    //클래스명이 edit-btn과 일치하면
    editTodo(todoId);
  } else if (target.classList.contains("save-btn")) {
    const editInput = listItem.querySelector(".edit-input"); //li 내 input 요소 저장
    saveTodo(todoId, editInput.value); //input value 전달
  } else if (target.classList.contains("cancel-btn")) {
    cancelTodo(todoId);
  }
});

//삭제
function deleteTodo(id) {
  if (!confirm("정말 삭제하시겠습니까?")) return;
  else {
    todos = todos.filter((todo) => todo.id !== id);
    renderTodo();
  }
}

//수정
function editTodo(id) {
  todos = todos.map((todo) =>
    todo.id === id
      ? { ...todo, isEditing: true } //상태 변경
      : { ...todo, isEditing: false }
  );
  renderTodo();

  const editInput = todoList.querySelector(`li[data-id="${id}"] .edit-input`);
  if (editInput) {
    editInput.focus(); //입력창 커서 자동 활성화
    editInput.select(); //요소의 value 드래그
  }
}

//수정 후 저장
function saveTodo(id, newText) {
  if (newText.trim() === "") {
    alert("There is no input value.");
    return;
  }
  todos = todos.map((todo) =>
    todo.id === id
      ? { ...todo, text: newText.trim(), isEditing: false }
      : { ...todo }
  );
  renderTodo();
}

//수정 취소
function cancelTodo(id) {
  if (todo.id === id) todos = { ...todos, isEditing: false };
  renderTodo();
}
