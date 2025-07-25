/**
 * Fetch
 * - 자바스크립트에서 네트워크 요청을 보낼 때 사용
 * - 비동기적으로 수행 가능한 요청 API (Promise 기반)
 * - 형식
 *  fetch(url,option)
 *  .then(response => {
 *      //응답 객체 확인 및 처리
 *  })
 */
const fetchButton = document.querySelector("#fetch-btn");
const postContainer = document.querySelector("#post-container");

//
const API_URL = "https://jsonplaceholder.typicode.com/posts/1";

//요청된 데이터를 가져오는 비동기 함수
async function getData() {
  //
  postContainer.innerHTML = /*html*/ `<p class="placeholder-text">게시물 데이터 불러오는 중...</p>`;

  //예외 처리
  try {
    const response = await fetch(API_URL); //처리 대기
    console.log(response);
    //Response {type: 'cors', url: 'https://jsonplaceholder.typicode.com/posts/1', redirected: false, status: 200, ok: true, …}

    if (!response.ok) {
      throw new Error(`Exception: ${response.status}/ ${response.statusText}`);
    }

    //응답 바디를 JSON 형태로 파싱
    const postData = await response.json();
    console.log(postData);

    //데이터 삽입
    postContainer.innerHTML =
      /*html*/
      `<h2>${postData.title}</h2><p>${postData.body}</p>`;
    postContainer.style.borderColor = "#28a745";
    postContainer.style.boxShadow = "0 0 0 2px rgba(40, 167, 69, 0.2)";

  } catch (error) {
    console.log("failed", error);
    postContainer.innerHTML = /*html*/ `<p class="placeholder-text" style="color: red">데이터를 불러오는데 실패했습니다. <br/> ${error.message}</p>`;
    postContainer.style.borderColor = "#dc3545";
    postContainer.style.boxShadow = "0 0 0 2px rgba(220, 53, 69, 0.2)";
  }
}

fetchButton.addEventListener("click", getData);
