const todoInput = document.querySelector("#todo-input");
const addTodoBtn = document.querySelector("#add-todo-btn");
const todoList = document.querySelector("#todo-list");

let todos = [];
let nextTodoId = 1;

//버튼 클릭 시 작동할 함수
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
