/**
 * 프로미스 체이닝
 * - 여러가지 비동기 작업을 연속적으로 수행 가능
 * - promise.then().then().then().....
 */
const serverDate = {
  name: "rin",
};

function getData() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = serverDate;
      //   const data = null;
      if (data) {
        console.log("서버 요청 성공");
        resolve(data);
      } else {
        console.log("서버 요청 실패");
        reject(new Error("네트워크 문제 발생"));
      }
    }, 500);
  });
  return promise;
}

//프로미스 체이닝
const promise = getData();
promise
  .then((data) => getData())
  .then((data) => getData())
  .then((data) => console.log(data));


