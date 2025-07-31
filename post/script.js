//기본 URL
const API_BASE_URL = "http://jsonplaceholder.typicode.com";

//게시물 목록 컨테이너
const postListContainer = document.querySelector("#post-list-container");
//게시물 상세 컨테이너
const postDetailContainer = document.querySelector("#post-detail-container");
//게시물 목록 리스트
const postList = document.querySelector("#post-list");

//게시물 상세 제목
const detailTitle = document.querySelector("#detail-title");
//게시물 상세 아이디
const detailId = document.querySelector("#detail-id");
//게시물 상세 유저 아이디
const detailUserId = document.querySelector("#detail-user-id");
//게시물 상세 내용
const detailBody = document.querySelector("#detail-body");
//목록으로 돌아가기 버튼
const backBtn = document.querySelector("#back-btn");

/**게시물 목록 렌더링*/
async function fetchPosts() {
  try {
    const response = await fetch(`${API_BASE_URL}/posts`);
    if (!response.ok) {
      throw new Error("오류 발생");
    }
    const posts = await response.json();
    console.log(posts);

    postList.innerHTML = "";
    if (posts) {
      //각 게시물을 순회하며 제목과 버튼 요소를 포함한 리스트 삽입
      posts.forEach((post) => {
        postList.innerHTML +=
          /*html*/
          `<li>
            <span class="post-title" data-post-id="${post.id}">${post.title}</span>
            <button class="detail-btn"  data-post-id="${post.id}">상세보기</button>
          </li>`;
        //data-post-id="${post.id}" => dataset의 id를 부여
      });
    }
  } catch (error) {
    postList.innerHTML =
      /*html*/
      `<p class="loading-message" style="color: red">게시물 목록을 불러오는데 실패했습니다.</p>`;
  }
}

/**이벤트 핸들링*/
postList.addEventListener("click", (event) => {
  const target = event.target;

  //게시물 상세로 전환
  if (
    target.classList.contains("post-title") ||
    target.classList.contains("detail-btn")
  ) {
    console.log("POST-CLICK");
    const postId = target.dataset.postId; //dataset id
    if (postId) {
      fetchPostDetail(postId);
    }
  }
});

backBtn.addEventListener("click", (event) => {
  //게시물 목록으로 전환
  console.log("LIST-CLICK");
  changeContainer("post-list-container");
});

/**상세 게시물 요청 함수*/
async function fetchPostDetail(postId) {
  changeContainer("post-detail-container"); //상세로 전환
  detailTitle.textContent = "불러오는 중...";
  detailId.textContent = "";
  detailUserId.textContent = "";
  detailBody.textContent = "";

  try {
    const response = await fetch(`${API_BASE_URL}/posts/${postId}`);
    if (!response.ok) {
      throw new Error("오류 발생");
    }

    const post = await response.json();
    console.log(post);
    detailTitle.textContent = post.title;
    detailId.textContent = post.id;
    detailUserId.textContent = post.userId;
    detailBody.textContent = post.body;
  } catch (error) {
    alert("게시물 목록을 불러오는데 실패했습니다.");
    changeContainer("post-list-container"); //목록으로 전환
  }
}

/**게시물 목록-상세 전환 함수*/
function changeContainer(containerId) {
  const containers = document.querySelectorAll(".page-container");
  containers.forEach((container) => {
    container.classList.remove("active"); //두 페이지 모두 비활성화
  });
  //활성화 해야하는 페이지에 active 클래스 부여
  document.querySelector(`#${containerId}`).classList.add("active");
}

fetchPosts();
