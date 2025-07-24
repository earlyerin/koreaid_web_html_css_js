/**
 * (input,button)요소 삽입과 학생 등록에 대한 이벤트 핸들러
 */
//사용자가 입력한 데이터를 담을 객체
let studentInputValue = {
  id: 0,
  name: "",
  age: "",
  address: "",
};

//input의 onkeyup 속성
//사용자의 입력으로 부터 데이터를 전달받아 저장하는 함수
function handleRegisterOnkeyup(e) {
  studentInputValue = {
    ...studentInputValue,
    [e.target.name]: e.target.value, //이벤트로 부터 받아온 데이터
  };
}

//button의 onclick 속성
//사용자가 버튼을 누르면, 입력된 데이터와 id를 객체에 담은 후 학생 목록에 추가
const handleRegisterOnclick = (e) => {
  //   let newId = 1;
  //   if (studentList.length > 0) {
  //     const lastStudent = studentList[studentList.length - 1]; //마지막 요소 저장
  //     newId = lastStudent.id + 1; //id 재할당
  //   }

  const newStudent = {
    ...studentInputValue,
    id: studentList.length + 1, //newId
  };

  studentList = [...studentList, newStudent];

  console.log(newStudent);
  loadStudentList(); //등록 후 목록 삽입
};

//input & button 노드 요소 삽입
function studentRegister() {
  return /*html*/ `
        <div>
            ${studentRegisterInput({
              type: "text",
              name: "name",
              onkeyup: "handleRegisterOnkeyup",
              placeholder: "이름을 입력하세요.",
            })}
            ${studentRegisterInput({
              type: "text",
              name: "age",
              onkeyup: "handleRegisterOnkeyup",
              placeholder: "나이를 입력하세요.",
            })}
            ${studentRegisterInput({
              type: "text",
              name: "address",
              onkeyup: "handleRegisterOnkeyup",
              placeholder: "주소를 입력하세요.",
            })}
            <div>
                <button onclick="handleRegisterOnclick(event)">등록</button>
            </div>
        </div>
    `;
}
