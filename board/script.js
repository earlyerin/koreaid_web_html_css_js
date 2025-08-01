//요청할 서버의 기본 URL
const API_BASE_URL = "http://localhost:8080";

//페이지
const pageSignin = document.querySelector("#page-signin");
const pageSignup = document.querySelector("#page-signup");
const pageBoard = document.querySelector("#page-board");
const pageWrite = document.querySelector("#page-write");
const pageBoardPost = document.querySelector("#page-board-post");

//메뉴
const menu = document.querySelector("#menu-container");

//로그인 및 회원가입 폼
const signupForm = document.querySelector("#signup-form");
const signinForm = document.querySelector("#signin-form");

//게시글
const postList = document.querySelector("#post-list");
const post = document.querySelector("#post");
const writeForm = document.querySelector("#write-form");

/** 이벤트 핸들링 */
//메뉴 버튼
menu.addEventListener("click", (event) => {
  const target = event.target;
  if (target.id === "signout-btn") {
    //로그아웃
    signoutHandler();
  } else if (target.id === "nav-signin") {
    //로그인
    changePage(pageSignin);
  } else if (target.id === "nav-signup") {
    //회원가입
    changePage(pageSignup);
  } else if (target.id === "nav-board") {
    //게시판
    renderBoard();
  } else if (target.id === "nav-write") {
    //글쓰기
    const token = localStorage.getItem("AccessToken");
    if (!token) {
      alert("로그인이 필요합니다.");
      changePage(pageSignin);
      return;
    }
    changePage(pageWrite);
  }
});

//회원가입 버튼
signupForm.addEventListener("submit", signupHandler);

//로그인 버튼
signinForm.addEventListener("submit", signinHandler);

//작성 완료 버튼
writeForm.addEventListener("submit", addBoard);

//게시글 상세 버튼
postList.addEventListener("click", (event) => {
  const target = event.target;
  if (
    target.classList.contains("post-title") ||
    target.classList.contains("detail-btn")
  ) {
    const postId = target.dataset.postId;
    if (postId) {
      renderBoardPost(postId);
    }
  }
});

//게시글 목록 버튼
post.addEventListener("click", (event) => {
  const target = event.target;
  if (target.id === "back-btn") {
    renderBoard();
  }
});
/**
 * *** 동적 삽입 요소에 대한 이벤트 핸들러 사용 ***
 * 초기 JS 실행 시점에 아직 HTML에 존재하지 않는 요소에는 직접적으로 이벤트 핸들러를 등록 불가
 * 따라서 JS에서 동적으로 삽입하는 요소에 대해 이벤트 핸들링하기 위해서는
 * 이미 HTML에 명시된 상위 요소에 대해 작성하며 익명함수를 통해 세부내용 구현
 */

/** 페이지 전환 함수 */
function changePage(pageElement) {
  const pages = document.querySelectorAll(".page");
  pages.forEach((page) => {
    page.classList.remove("active");
  });
  pageElement.classList.add("active");
}

/** 로그인 전후 사용자 화면 전환 함수 */
function changeHeader(userName) {
  menu.innerHTML = "";
  if (userName) {
    menu.innerHTML =
      /*html*/
      `<nav>
          <button id="nav-board" class="btn-menu">게시판</button>
          <button id="nav-write" class="btn-menu">글쓰기</button>
      </nav>
      <div>
       <span class="menu-id">${userName}님</span>
        <button id="signout-btn" class="btn-menu">로그아웃</button>
      </div>`;
  } else {
    menu.innerHTML =
      /*html*/
      `<nav>
          <button id="nav-signin" class="btn-menu">로그인</button>
          <button id="nav-signup" class="btn-menu">회원가입</button>
          <button id="nav-board" class="btn-menu">게시판</button>
          <button id="nav-write" class="btn-menu">글쓰기</button>
      </nav>`;
  }
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

    //응답
    const responseData = await response.json();
    if (responseData.status !== "success") {
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

/** 로그인 요청 함수 */
async function signinHandler(event) {
  event.preventDefault();

  const usernameInput = document.querySelector("#signin-id");
  const passwordInput = document.querySelector("#signin-password");

  const signinData = {
    userName: usernameInput.value,
    password: passwordInput.value,
  };

  if (!signinData.userName || !signinData.password) {
    alert("모든 항목을 입력해 주세요.");
    return;
  }

  try {
    //요청
    const response = await fetch(`${API_BASE_URL}/auth/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signinData),
    });

    //응답
    const responseData = await response.json();
    if (responseData.status !== "success") {
      alert(responseData.message);
    } else {
      alert(responseData.message);
      localStorage.setItem("AccessToken", responseData.data); //토큰을 로컬스토리지에 저장
      signinForm.reset();

      changeHeader(signinData.userName); //로그인 사용자 화면으로 전환

      changePage(pageBoard); //게시판 페이지로 전환
      renderBoard();
    }
  } catch (error) {
    console.log("로그인 요청 오류 발생 : ", error);
    alert("로그인 중 오류가 발생했습니다.");
  }
}

/** 로그아웃 요청 함수 */
function signoutHandler() {
  changeHeader();
  changePage(pageSignin);
  localStorage.removeItem("AccessToken"); //토큰 제거
}

/** 게시판 목록 조회 및 렌더링 함수*/
async function renderBoard() {
  const token = localStorage.getItem("AccessToken");
  if (!token) {
    alert("로그인이 필요합니다.");
    changePage(pageSignin);
    return;
  }

  try {
    const response = await fetch(`${API_BASE_URL}/board/list`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`, //서버에서 해당 토큰 인증
      },
    });
    const responseData = await response.json();

    if (responseData.status !== "success") {
      alert(responseData.message);
      changePage(pageWrite); //게시물 작성 페이지로 전환
    } else {
      postList.innerHTML = "";
      responseData.data.forEach((post) => {
        postList.innerHTML +=
          /*html*/
          `<li>
            <span class="post-title" data-post-id="${post.boardId}">${post.title}</span>
            <button class="detail-btn"  data-post-id="${post.boardId}">상세보기</button>
          </li>`;
      });
    }
    changePage(pageBoard);
  } catch (error) {
    console.log(error);
    postList.innerHTML =
      /*html*/
      `<p class="loading-message" style="color: red">게시물 목록을 불러오는데 실패했습니다.</p>`;
  }
}

/** 게시판 상세 조회 및 렌더링 함수*/
async function renderBoardPost(postId) {
  try {
    const token = localStorage.getItem("AccessToken");
    const response = await fetch(`${API_BASE_URL}/board/${postId}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const responseData = await response.json();

    if (responseData.status !== "success") {
      alert(responseData.message);
      changePage(pageBoard);
    } else {
      const formattedDate = new Intl.DateTimeFormat("ko-KR", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: false,
      }).format(new Date(responseData.data.regDt));

      post.innerHTML =
        /*html*/
        `<h3 id="post-title">${responseData.data.title}</h3>
         <p id="post-info">
            게시물 ID: <span>${responseData.data.boardId}</span> 
            | 작성자: <span>${responseData.data.userName}</span> 
            | 작성일:  <span>${formattedDate}</span> 
         </p>
         <p id="post-content">${responseData.data.content}</p>
         <button id="back-btn">← 목록으로 돌아가기</button>`;

      changePage(pageBoardPost);
    }
  } catch (error) {
    alert("게시물 목록을 불러오는데 실패했습니다.");
    changePage(pageBoard);
  }
}

/** AccessToken 디코딩 함수 */
function getPayload() {
  const token = localStorage.getItem("AccessToken");
  if (!token) {
    alert("로그인이 필요합니다.");
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

/** 게시글 추가 요청 함수 */
async function addBoard(event) {
  event.preventDefault();

  const userInfo = getPayload();
  const writeTitle = document.querySelector("#write-title");
  const writeContent = document.querySelector("#write-content");

  const addBoardData = {
    title: writeTitle.value,
    content: writeContent.value,
    userId: userInfo.jti, //디코딩한 토큰의 userId
  };

  try {
    const token = localStorage.getItem("AccessToken");

    const response = await fetch(`${API_BASE_URL}/board/add`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addBoardData),
    });
    const responseData = await response.json();

    if (responseData.status !== "success") {
      alert(responseData.message);
      return;
    }

    alert(responseData.message);
    writeForm.reset();

    renderBoardPost(responseData.data); //해당 글 상세 페이지로 이동
  } catch (error) {
    console("글 추가 요청 오류 : ", error);
    alert("게시글 추가 중 오류가 발생했습니다.");
  }
}
