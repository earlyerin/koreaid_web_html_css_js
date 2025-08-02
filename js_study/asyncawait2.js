//사용자 정보를 가져오는 비동기 함수
async function getUser() {
  const data = {
    name: "rin",
    age: 21,
  };
  return data;
}
//비동기 함수 정의
async function signinHandler() {
  /**
   * await
   * - 비동기 함수는 기본적으로 promise 객체를 반환하지만
   *   await 키워드로 호출했을 경우 "리턴값"을 반환
   * - 또한 비동기 함수 내에서 동기 작업에 해당
   */
  const userInfo = await getUser(); //비동기 함수의 리턴값!!!
  /**
   * 로그인을 구현했다고 가정 ...
   */
  console.log(userInfo);
}
signinHandler();

const userInfo = getUser(); //비동기 함수의 프로미스 객체!!!
console.log(userInfo);
userInfo.then((user) => console.log(user)); //프로미스 객체이므로 후처리 가능
