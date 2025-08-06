/**
 * 유틸리티
 */

//요청할 서버의 기본 URL
const API_BASE_URL = "http://localhost:8080";

/** 페이지 전환 함수 */
function changePage(pageElement) {
  const pages = document.querySelectorAll(".page");
  pages.forEach((page) => {
    page.classList.remove("active");
  });
  pageElement.classList.add("active");
  window.scrollTo(0, 0); //스크롤 위치 초기화
}

/** AccessToken 디코딩 함수 */
function getPayload() {
  let token = "";
  if (localStorage.getItem("AccessToken") !== null) {
    token = localStorage.getItem("AccessToken");
  } else if (localStorage.getItem("findPasswordToken") !== null) {
    token = localStorage.getItem("findPasswordToken");
  } else {
    changePage(pageSignin);
    return null;
  }

  try {
    const payloadBase64 = token.split(".")[1]; //토큰의 payload 부분
    const decodedPayload = atob(payloadBase64); //디코딩
    const payload = JSON.parse(decodedPayload);

    return payload;
  } catch (error) {
    console.log("유효하지 않은 토큰입니다.", error);
  }
}

/** 날짜 포맷 함수 */
function formatDate(date) {
  const formattedDate = new Intl.DateTimeFormat("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  }).format(new Date(date));
  return formattedDate;
}
