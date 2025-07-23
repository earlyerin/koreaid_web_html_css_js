//***** 객체 *****

//객체 선언 (key, value 형태)
const student = {
  name: "rin",
  age: 21,
};
console.log(student);
console.log(student.name);
console.log(student.age);
console.log(student["name"]);
console.log(student["age"]);
const a = "name";
const b = "age";
console.log(student[a]);
console.log(student[b]);

student[a] = "lee";
console.log(student);
student.name = "leeeeee";
console.log(student);

//객체 내 익명함수 추가
student.printName = () => console.log("이름 : ", student.name);
student.printName();

const loginButton = {
  text: "로그인",
  value: "text",
  onclick: () => {
    console.log(loginButton.text);
  },
};
loginButton.onclick();

loginButton.onclick = () => {
  console.log("로그인 버튼을 클릭하였습니다.");
};
loginButton.onclick();

console.log(typeof loginButton); //Object

//객체의 기능
//Object.keys() : 객체의 키 반환
const loginButtonKeys = Object.keys(loginButton);
console.log(loginButtonKeys);
for (let i = 0; i < loginButtonKeys.length; i++) {
  const keyName = loginButtonKeys[i];
  console.log(loginButton[keyName]);
}

//Object.valeus() : 객체의 값 반환
const loginButtonValues = Object.values(loginButton);
console.log(loginButtonValues);
for (let i = 0; i < loginButtonKeys.length; i++) {
  console.log(loginButtonKeys[i], " : ", loginButtonValues[i]);
}

//Object.entries() : 객체의 키,값 반환
const loginButtonEntries = Object.entries(loginButton);
console.log(loginButtonEntries);
for (let i = 0; i < loginButtonEntries.length; i++) {
  const entry = loginButtonEntries[i];
  const key = entry[0];
  const value = entry[1];
  console.log(entry, key, value);
}

console.log("--향상된 for문--");
for (let entry of loginButtonEntries) {
  const key = entry[0];
  const value = entry[1];
  console.log(entry, key, value);
}
