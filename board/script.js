//요청할 서버의 기본 URL
const API_BASE_URL = "http://localhost:8080";

const pageSignin = document.querySelector("#page-signin");
const pageSignup = document.querySelector("#page-signup");
const pageBoard = document.querySelector("#page-board");
const pageWrite = document.querySelector("#page-write");

const navSignin = document.querySelector("#nav-signin");
const navSignup = document.querySelector("#nav-signup");
const navBoard = document.querySelector("#nav-board");
const navWrite = document.querySelector("#nav-write");

const signupForm = document.querySelector("#signup-form");

/** 이벤트 핸들링 */
//메뉴 버튼
navSignin.addEventListener("click", (event) => {
  changePage(pageSignin);
});

navSignup.addEventListener("click", (event) => {
  changePage(pageSignup);
});

navBoard.addEventListener("click", (event) => {
  changePage(pageBoard);
});

navWrite.addEventListener("click", (event) => {
  changePage(pageWrite);
});

//회원가입
signupForm.addEventListener("submit", signupHandler);

/** 페이지 전환 함수 */
function changePage(pageElement) {
  const pages = document.querySelectorAll(".page");
  pages.forEach((page) => {
    page.classList.remove("active");
  });
  pageElement.classList.add("active");
}

/** 회원가입 요청 함수 */
async function signupHandler(event) {
  event.preventDefault(); //form의 기본 동작 비활성화

  const usernameInput = document.querySelector("#signup-id");
  const passwordInput = document.querySelector("#signup-password");
  const emailInput = document.querySelector("#signup-email");

  //서버로 보낼 데이터 객체(Spring Boot의 SignupReqDto의 필드 형식과 일치하도록 작성)
  const signupData = {
    userName: usernameInput.value,
    password: passwordInput.value,
    userEmail: emailInput.value,
  };

  if (!signupData.userName || !signupData.password || !signupData.userEmail) {
    alert("모든 항목을 입력해 주세요.");
    return;
  }

  try {
    //요청
    const response = await fetch(`${API_BASE_URL}/auth/signup`, {
      //option
      method: "POST", //요청방식
      headers: {
        "Content-Type": "application/json", //요청 본문의 데이터 형식 명시
      },
      body: JSON.stringify(signupData), //요청본문(RequestBody)
    });

    //요청 응답 결과
    const responseData = await response.json();
    if (responseData.status !== "successs") {
      alert(responseData.message);
    } else {
      alert(responseData.message);
      signupForm.reset(); //입력 내용 초기화
      changePage(pageSignin); //로그인 페이지로 전환
    }
  } catch (error) {
    //요청 자체를 실패한 경우
    console.log("회원가입 요청 오류 발생 : ", error);
    alert("회원가입 중 오류가 발생했습니다.");
  }
}
