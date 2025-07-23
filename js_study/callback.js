/**
 * 콜백(callback) 함수
 * - 다른 함수의 인자로 전달되는 함수
 *
 * 비동기 콜백함수
 * - 비동기 작업이 완료된 후에 호출되는 콜백함수
 */

//서버에서 받아온 데이터
const data = {
  name: "rin",
};

//비동기 작업 완료 후 수행될 함수
function printData(data) {
  console.log(data);
}

function getData(callback) {
  setTimeout(() => {
    //비동기 작업 (서버에서 데이터를 받아오는데 1초 걸린다고 가정)
    console.log("서버에서 데이터를 받아왔습니다.");
    callback(data); //비동기 작업 완료 후 수행될 함수 호출
  }, 1000);
}

getData((data) => printData(data)); //보통 익명 함수 사용

/**
 * 쇼핑몰 서버를 구현한다고 가정
 */
//로그인
function login(username, callback) {
  setTimeout(() => {
    callback(username);
  }, 1000); //요청을 처리하는데 1초 걸린다고 가정
}

//장바구니
function addToCart(product, callback) {
  setTimeout(() => {
    callback(product);
  }, 1000); //요청을 처리하는데 1초 걸린다고 가정
}

//결제
function checkOut(cardNumber, product, callback) {
  setTimeout(() => {
    callback(product, cardNumber);
  }, 1000); //요청을 처리하는데 1초 걸린다고 가정
}

//콜백 지옥(callback hell!!!)
login("rin", (username) => {
  console.log(`${username}님이 로그인했습니다.`);
  addToCart("smartphone", (product) => {
    console.log(`"${product}" 장바구니에 담았습니다.`);
    checkOut("1234-5678-1234-5678", product, (product, cardNumber) => {
      console.log(`"${product}"에 대한 결제가 완료 되었습니다.`);
      console.log(` 카드번호 : ${cardNumber}`);
    });
  });
});
