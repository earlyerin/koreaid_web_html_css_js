//***** 비구조 할당 문법 *****
const student = {
  name: "rin",
  address: "Ulsan",
  age: 21,
  phone: "010-1234-5678",
};

const { name, address } = student;
console.log(name, address);

/**
 * REST 문법(...나머지 속성을 담을 객체명 or 배열명)
 * 나머지 속성들을 새로운 객체 또는 배열로 묶을 때 사용
 */
const { age, phone, ...a } = student;
console.log(age, phone, a);

const numbers = [1, 2, 3, 4, 5];
const [n1, n2, ...ns] = numbers;
console.log(n1, n2, ns);

/**
 * Spread 문법(...기존 객체명 or 배열명)
 * 기존 객체의 모든 속성을 새로운 객체에 복사하거나,
 * 새로운 속성을 추가한 새로운 객체를 생성할 때 사용
 */
const newStudent = {
  ...student, //student 객체의 모든 속성을 복사
  gender: "female", //새로운 속성 추가
};
console.log(newStudent);

const newNumbers = [...numbers, 6, 7];
console.log(newNumbers);

let names = ["name1"];
function addName(name) {
  names = [...names, name];
}
addName("name2");
addName("name3");
console.log(names);

let obj = {
  data1: "data1",
  data2: "data2",
};
function addProps(props) {
  obj = {
    ...obj, //기존 객체의 속성들
    ...props, //새로 추가할 속성들(객체 형태로 추가되므로 Spread 문법으로 작성)
  };
}
addProps({ data3: "data3", data4: "data4" });
console.log(obj);
