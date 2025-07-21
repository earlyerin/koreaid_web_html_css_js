/**
 * async : 비동기 함수 정의 키워드, 해당 함수는 promise 객체를 반환
 * await : 비동기 함수 동기 호출 키워드,
 *         비동기 함수의 promise가 recolve될 때까지 기다렸다가 해당 결과를 변수에 할당
 *         (async 함수 내부 에서만 사용 가능)
 */

const promise = new Promise((resolve) => resolve("개발자"));

//비동기 함수 정의
async function getData() {
  return promise; //어떤 반환값을 적더라도 이행(fulfilled) 상태의 프로미스 객체 형태로 반환(중첟X)
}
const user = getData();
console.log(user);
user.then((name) => console.log(name)); //"개발자"

function getUserReq() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("사용자 데이터를 받아옴");
      return resolve("rin");
    }, 2000);
  });
}

//async, await 사용 ver
async function getUserData() {
  const result = await getUserReq(); //비동기 함수 작업이 완료될 때까지 다음 작업을 하지 않고 대기
  return result; //await를 사용하여 해당 함수의 작업이 끝날 때까지 기다렸다가 결과 반환 가능
}

//프로미스 사용 ver
function getDataPromise() {
  return getUserReq().then((data) => {
    return data;
  });
}

const userData = getUserData();
userData.then((name) => console.log(name)); //"rin"

async function getUser() {
  await getUserReq();
  return "rin";
}

async function getTodo() {
  await getUserReq();
  return ["eating breakfast", "sleeping"];
}

async function getTodoData() {
  const user = await getUser();
  const todo = await getTodo();
  console.log(`user : ${user}, todo : ${todo}`);
}

getTodoData();
