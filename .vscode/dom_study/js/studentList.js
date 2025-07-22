//
function handleDeleteButtonOnclick(studentId) {
  if (!confirm("삭제하시겠습니까?")) return; //삭제창에서 취소를 클릭한 경우

  studentList = studentList.filter((student) => student.id !== studentId); //삭제할 id의 객체를 제외하고 저장
  loadStudentList(); //삭제 후 목록
}

function loadStudentList() {
  const studentLis = studentList
    .map((student) => {
      const text = `${student.id}. ${student.name}(${student.age} - ${student.address})`;
      return `
        <li>
            ${text}
            <button onclick="handleDeleteButtonOnclick(${student.id})">삭제</button>
        </li>
        `;
    })
    .join(""); //배역 요소 문자열로 연결

  const studentListUl = document.querySelector(".student-list");
  studentListUl.innerHTML = studentLis; //ul 태그 내 추가
}
