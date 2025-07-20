/**
 * 프로미스 체이닝
 * 쇼핑몰 서버를 구현한다고 가정
 */
const serverDate = {
  name: "rin",
};

//로그인
function login(data) {
  const promiseLogin = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (data) {
        resolve(data);
      } else {
        reject(new Error("로그인 실패에 실패하였습니다."));
      }
    }, 3000);
  });
  return promiseLogin;
}

//장바구니
function addToCart(product) {
  const promiseAddToCart = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (product) {
        resolve(product);
      } else {
        reject(new Error("상품이 누락되었습니다."));
      }

      resolve(product);
    }, 3000);
  });
  return promiseAddToCart;
}

//결제
function checkOut(cardNumber, product) {
  const promiseCheckOut = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (cardNumber && product) {
        resolve(product);
      } else {
        reject(new Error("결제에 실패하였습니다."));
      }
    }, 3000);
  });
  return promiseCheckOut;
}

//프로미스 체이닝

  login(serverDate).then((data) => {
    console.log(
      `로그인에 성공하였습니다. ${data.name}님! 반갑습니다. 상품 페이지로 이동합니다.`
    );
    return addToCart("당근");
  })
  .then((product) => {
    console.log(`${product}을 담았습니다. 상품 결제 페이지로 이동합니다.`);
    return checkOut("1234-5678-1234-5678", product);
  })
  .then((product) => {
    console.log(
      `${product}에 대한 결제가 완료되었습니다. 주문내역 페이지로 이동합니다.`
    );
    return "감사합니다.";
  })
  .then((data) => console.log(data))
  .catch((error) => {
    console.log(error);
  });
