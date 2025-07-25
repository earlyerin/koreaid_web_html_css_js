//***** 배열 *****

//선언
const arr1 = [];
const arr2 = new Array();

//push : 배열의 마지막에 요소 추가
arr1.push(10);
arr1.push(20);
arr1.push(30);
arr1.push(40);
console.log(arr1);

arr2.push(10);
arr2.push(20);
arr2.push(30);
arr2.push(40);
console.log(arr2);
//const로 선언한 변수의 재할당을 금지하지만, 참조하는 객체(배열)의 내용 변경 가능

console.log(arr1 === arr2); //false (객체의 참조 주소 비교)

const obj1 = { key1: "value1", key2: "value2" };
const obj2 = { key1: "value1", key2: "value2" };
console.log(obj1);
console.log(obj1 == obj2); //false (객체의 참조 주소 비교)

//pop : 배열의 마지막 요소 제거 후 해당 요소 반환
const names = ["name1", "name2", "name3", "name4"];
names.push("name5");
console.log(names);
console.log("pop:", names.pop());

//splice(삽입 인덱스, 제거할 개수, 추가할 요소) : 요소 수정/삽입/제거
names.splice(1, 0, "name6");
console.log("splice:", names);

//find : 요소 검색
const findfx = (n) => n == "name6";
const foundName = names.find(findfx);
console.log("find:", foundName);

//includes : 값 포함 여부
console.log(names.includes("name6"));

const numbers = [1, 2, 3, 4, 5];
//filter : 필터링
console.log(numbers.filter((n) => n % 2 === 0));
const odd = numbers.filter((n) => n % 2 != 0);
console.log(odd);

//map : 배열의 모든 요소에 대해 주어진 함수에 적용한 결과로 배열을 반환
console.log(numbers.map((n) => n * 10));

//***** 객체 배열 *****
const students = [
  { name: "name1", age: 19 },
  { name: "name2", age: 18 },
  { name: "name3", age: 15 },
  { name: "name4", age: 17 },
  { name: "name5", age: 19 },
];
//검색
console.log(students.find((s) => s.name === "name3"));

//필터
console.log(students.filter((s) => s.age === 19));

//적용
console.log((student) => {
  if (student.age === 19) {
    return {
      name: student.name,
    };
  }
  return student;
});

//***** JSON(JavaScript Object Notation) *****
//JSON.stringify() : 자바스크립트 객체 또는 배열을 JSON 문자열로 변환
const json1 = JSON.stringify(arr1);
const json2 = JSON.stringify(arr2);
console.log(json1);
console.log(typeof json2);
console.log(json1 === json2); //true (문자열의 값과 타입 비교)

const json3 = JSON.stringify(obj1);
const json4 = JSON.stringify(obj2);
console.log(json3);
console.log(json4);

//JSON.parse() : JSON 문자열을 자바스크립트 객체 또는 배열로 변환
