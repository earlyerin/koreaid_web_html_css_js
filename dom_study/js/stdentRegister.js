/**
 * 
 */
let studentInputValue = {
  id: 0,
  name: "",
  age: "",
  address: "",
};

function handleRegisterOnkeyup(e) {
  studentInputValue = {
    ...studentInputValue,
    [e.target.name]: e.target.value, //이벤트로 부터 받아온 속성
  };
}

const hebdleRegisterOnclick = (e) => {
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
  loadStudentList(); //등록 후 목록
};

function studentRegister() {
  return `
        <div>
            ${studentRegisterInput({
              type: "text",
              name: "name",
              onkeyup: "handleRegisterOnkeyup",
            })}
            ${studentRegisterInput({
              type: "text",
              name: "name",
              onkeyup: "handleRegisterOnkeyup",
            })}
            ${studentRegisterInput({
              type: "text",
              name: "name",
              onkeyup: "handleRegisterOnkeyup",
            })}
            <div>
                <button onclick="hebdleRegisterOnclick(event)">등록</button>
            </div>
        </div>
    `;
}
