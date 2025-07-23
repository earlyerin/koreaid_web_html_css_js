/**
 * 프로미스(Promise)
 * - 기본적으로 자바스크립트의 비동기 처리에 사용되는 객체
 * - 프로미스 객체의 속성(state, result)
 *   state => 대기(pending): 초기 상태, 비동기 작업이 아직 완료되지 않은 상태
 *            result = undefined
 *         => 이행(fullfilled) : 비동기 작업이 성공적으로 완료된 상태
 *            result = value(성공적으로 완료된 결과값)
 *         => 거부(rejected) : 비동기 작업이 실패한 상태
 *            result = error(실패한 이유)
 * - 프로미스 객체 생성 시 생성자의 인자로 콜백함수 전달 (executor, 객체 생성과 동시에 즉시 실행)
 *   executor의 인자 => resolve: 비동기 작업 성공 시 호출하는 함수
 *                   => reject: 비동기 작업 실패 시 호출하는 함수
 *
 * [한 눈에 보기!]
 * new Promise(executor)
 *
 *      ┌──── resolve(value) ──── 상태: "pending" ──── reject(error) ─────┐
 *      ↓   					            결과: undefined						              ↓
 * 상태: "fulfilled"                        								       상태: "rejected"
 * 결과: value                              								       결과: error
 */

//서버에서 받아온 데이터
const serverDate = {
  name: "rin",
};

function getData() {
  //프로미스 객체 생성
  const promise = new Promise((resolve, reject) => {
    //executer
    setTimeout(() => {
      const data = serverDate;
      //   const data = null;
      if (data) {
        console.log("서버 요청 성공");
        resolve(data); //결과값
      } else {
        console.log("서버 요청 실패");
        reject(new Error("네트워크 문제 발생")); //에러 객체
      }
    }, 3000);
  });
  console.log(promise); //pending
  return promise;
}

/**
 * 프로미스 핸들러(후속처리, 체이닝)
 * then() : 프로미스가 이행(fullfilled)되었을 때 수행할 코드
 *          (즉, resovle 함수가 실행되면 then 함수에서 후속처리, result를 전달)
 *
 * catch() : 비동기 작업 실패 시 수행할 코드
 * finally() : 작업 성공 여부와 상관 없이 수행할 코드
 */
const promise = getData();

promise
  .then((data) => {
    console.log("데이터를 가져오는데 성공했습니다.");
    const name = data.name;
    console.log(`아이디는 "${name}"입니다.`);
  })
  .catch((error) => {
    console.log("***에러 처리 구문 작성***");
  })
  .finally(() => {
    console.log("------ 마무리 작업 ------");
  });
