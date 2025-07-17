//***** 비구조할당(구조 분해) *****

const student = {
  name: "rin",
  age: 21,
  address: "Ulsan",
};

//일반적인 방식
const studentName = student.name;
const studentAge = student.age;

//배열이나 객체의 속성을 해체하여 개별 변수에 할당하는 문법
const { name: studentName1, age: studentAge2 } = student;
//name(객체의 속성명) : studentName1(값을 할당할 변수명)

console.log(studentName);
console.log(studentAge);
console.log(studentName1);
console.log(studentAge2);

//함수에서 객체를 매개변수로 전달하여 비구조할당
function printStudentInfo({ name, address: addr, age }) {
  console.log("이름은 ", name);
  console.log("나이는 ", age);
  console.log("주소는 ", addr);
}
printStudentInfo(student);

//주의할 점 : 각 객체의 속성명이 같은 경우(변수명을 다르게 할당)
const s1 = {
    name:"rin",
    age: 21
}

const s2 = {
    name: "lee",
    age: 22
}

const {name:name1, age:age1} = s1
const {name:name2, age:age2} = s2

//배열 비구조 할당 : 배열의 요소를 순서대로 새로운 변수에 할당
const numbers = [1,2,3,4,5];
const [num1, num2, num3] = numbers;
console.log(numbers);
console.log(num1);
console.log(num2);
console.log(num3);

