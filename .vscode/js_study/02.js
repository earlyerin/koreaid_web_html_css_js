//***** 함수 *****
//1. 일반 함수
function function_name1(data1, data2) {
  console.log("함수 호출");
  let data = null;
  console.log(data1);
  console.log(data2);
  return data;
}

const result1 = function_name1(); //undefined
console.log(result1); //null (매개변수값이 없으므로 반환값 없음)

const function_name2 = function_name1; //함수를 변수에 할당
const result2 = function_name2(10, 20); // 10 20
console.log(result2); //null

const result3 = function_name2(10); //10 undefined
console.log(result3); //null

//2. 익명 함수 : 이름이 없는 임시 함수, 주로 변수에 할당하거나 다른 함수의 인수로 사용
const function_name3 = function (data1, data2) {
  //function_name3 이라는 변수에 익명함수 할당
};

//3. 화살표 함수
/**
 * 규칙
 * 1) 매개변수가 하나이면 ()괄호 생략 가능
 * 2) 실행문이 한줄이면 {}괄호 생략 가능
 * 3) {}괄호 생략 시 값만 입력하면 해당 값이 반환값
 * 4) {}괄호를 작성할 경우 return 키워드 명시
 */
const function_name4 = (data1, data2) => {
  return "result3";
};

const fx1 = () => console.log("fx1 호출");
const fx2 = (n) => console.log(n, "출력");
const fx3 = (n) => n + 1;
const fx4 = (n) => {
  console.log(n, "출력");
  return n + 1;
};
const fx5 = (a, b) => a * b;
fx1();
console.log(fx3(10));

function a() {
  //빈 함수
}

const result4 = function_name1();
console.log(result4);

//4. 고차 함수
const aa = () => {
  console.log("aa함수 호출");
  return "aa함수 리턴값";
};

const bb = (fxx1) => {
  console.log("bb함수 호출");
  return fxx1;
};

const aaa = (fxx1, fxx2) => {
  console.log("aaa함수 호출");
  console.log(fxx1());
  console.log(fxx2());
  return "aaa함수 리턴값";
};

console.log(aaa(bb(aa), bb(aa)));
