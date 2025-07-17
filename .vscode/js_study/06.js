//***** 단축 평가 논리 연산 *****

// &&(AND) : 앞의 값이 true 일 때 뒤의 값을 반환, false 이면 false
const name = "rin";
console.log(!!name && !!"lee"); //true
console.log(false && 10); //false
console.log(true && 10); //10
console.log(!!name && 0); //0

// ||(OR) : 앞의 값이 false 일 때 뒤의 값을 반환, true 이면 true
console.log(false || 10); //10
console.log(true || 10); // true

// ??(nullish) : 병합 연산자
// 앞의 값이 null 또는 undefined가 아니면 앞의 값 반환, 그 외에는 뒤의 값 반환
console.log(null ?? 100); //100
console.log(undefined ?? 100); //100
console.log(name ?? null); //rin
console.log(0 ?? 100); //0
console.log("" ?? 100); //""(빈 문자열)
