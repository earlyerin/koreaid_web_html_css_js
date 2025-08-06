/**
 * 메인 => 초기 진입, 이벤트 연결
 */

/**
 * *** DOMContentLoaded ***
 * HTML 문서의 로드 및 파싱이 완료되었을 때 이벤트 핸들링
 * => 로컬 스토리지에 토큰이 있는 경우 (로그아웃하지 않았으며 토큰이 유효한 경우)
 *    페이지 리로딩이나 재방문 시에 로그인된 사용자 화면 유지
 */
document.addEventListener("DOMContentLoaded", async () => {
  const token = localStorage.getItem("AccessToken");
  if (token) {
    //메뉴 전환
    navSignin.style.display = "none";
    navSignup.style.display = "none";
    //사용자 아이디 삽입
    const user = await getUser();
    navUserName.textContent = `${user.userName}님`;
    await renderBoard(); //token이 확인되었으므로 게시판 페이지로 전환
  } else {
    //token이 없을 경우
    navUserName.style.display = "none";
    navSignout.style.display = "none";
    changePage(pageSignin);
  }
});

//메뉴 버튼
navSignup.addEventListener("click", () => {
  changePage(pageSignup);
});
navSignin.addEventListener("click", () => {
  changePage(pageSignin);
});
navBoard.addEventListener("click", renderBoard);
navWrite.addEventListener("click", () => {
  const token = localStorage.getItem("AccessToken");
  if (!token) {
    alert("로그인이 필요합니다.");
    changePage(pageSignin);
    return;
  }
  changePage(pageWrite);
});
navSignout.addEventListener("click", signoutHandler);
navUserName.addEventListener("click", renderUserPage);
