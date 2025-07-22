//Quiry Select
const title1 = document.getElementById("title"); //태그의 id를 통해 선택
console.log(title1);
console.log({ title1 });

const titles = document.getElementsByClassName("title"); //태그의 class를 통해 선택
console.log(titles);

const h3 = document.getElementsByTagName("h3"); //태그명을 통해 선택
console.log(h3);

const d1 = document.getElementById("d1");
const d2 = document.getElementById("d2");
console.log(d1);
console.log(d2);

//querySelector, querySelectorAll : CSS 모든 선택자 사용 가능
const h3s = document.querySelectorAll("h3"); 
console.log(h3s);

const title2 = document.querySelector("#title"); //id 선택
console.log(title2);
console.log(title2.innerHTML);
//innerHTML : 요소의 내부 구조를 가져오거나 요소에 대해 설정하는 속성

title2.innerHTML = "다른 제목";

const titles2 = document.querySelectorAll(".title"); //class 다중 선택

const parent = document.querySelector("#d1");
const child = parent.querySelector("#d2");
child.innerHTML = "rin"; //아이디가 d2인 태그의 내용 추가

const parent_child = document.querySelector("#d1 > #d2");
console.log(parent_child);

parent_child.innerHTML = "<p>innerHTML</p>"; //아이디가 d2인 div태그를 p태그로 변경, 내용을 rin에서 innerHTML로 변경
// parent_child.innerText = "<p>innerHTML</p>";

const students = [
  { name: "rin", age: 21, address: "Ulsan" },
  { name: "lee", age: 22, address: "Busan" },
  { name: "ye", age: 23, address: "Chicago" },
];

const studentTableTbody = document.querySelector(".student-table > tbody");
//테이블 내용 추가
const studentTrs = students.map((student, index) => {
  return `<tr>
    <td>${index + 1}</td>
    <td>${student.name}</td>
    <td>${student.age}</td>
    <td>${student.address}</td>
    </tr>`;
});
//join([seperator(구분자)]) : 배열의 모든 요소를 연결하여 하나의 문자열로 반환
studentTableTbody.innerHTML = studentTrs.join("");

//스타일 적용
const tdList = document.querySelectorAll("td");
tdList.forEach((td) => (td.style = "border: 1px solid black"));

//아이디 부여
const studentTable = document.querySelector(".student-table");
studentTable.id = "table-student";

//클래스 부여
studentTable.classList.add("student");

//클래스 제거
studentTable.classList.remove("student-table");
