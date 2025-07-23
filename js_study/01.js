//***** 변수 선언 *****

//let : 값을 재할당할 수 있는 변수 선언
let name = "rin";
console.log(name); //출력(Node.js 설치:JavaScript 런타임 환경)
console.log("hello world");
name = "rrrrrin";
console.log(name);

//const : 값을 변경할 수 없는 변수 선언
const age = 21;
console.log(age);
//age = 22; > TypeError: Assignment to constant variable.
//console.log(age)

//***** 연산자 *****

//동등 연산자
//== : 값 비교, 필요한 경우 암시적 타입 변환
let data1 = 10;
let data2 = "10";
let result1 = data1 == data2;
console.log(result1);

//일치 연산자
// === : 값과 타입을 모두 비교
let result2 = data1 === data2;
console.log(result2);

//typeof 연산자 : 변수의 데이터 타입 반환
console.log(typeof data1, typeof data2);
//문자열 연결과 숫자열 합산의 차이
console.log("1" + "2");
console.log(1 + 2);

//부정 연산자
console.log(!0);
console.log(!1);
console.log(!"");
console.log(!"a");
console.log(!null);
console.log(!!null); //해당 값을 명시적으로 boolean 타입으로 변환하는 방법

console.log("".length > 0); //false
console.log(!!"" === false); //true

//***** 객체 생성 *****
let data = {
  name: "lee",
  age: 21,
};
console.log(data);

//***** 조건문 *****
if (!data) {
  console.log("사용자 정보가 없습니다.");
} else if (data.name == "rin") {
  console.log("사용자 이름이 일치합니다.");
} else if (data.age == 21) {
  console.log("사용자의 이름은 일치하지 않지만 나이는 일치합니다.");
} else {
  console.log("사용자가 일치하지 않습니다.");
}

//***** 반복문 *****
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
