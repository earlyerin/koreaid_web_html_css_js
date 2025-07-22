const submitButton = document.querySelector(".input-submit");
//onclick : 해당 요소 클릭에 대한 이벤트 속성
//리스트 추가
submitButton.onclick = () => {
  const input = document.querySelector(".inputs");
  const dataList = document.querySelector(".data-list");

  //입력이 없는데 버튼을 누를 경우
  if (input.value === "") {
    alert("입력이 없습니다.");
    return;
  }

  dataList.innerHTML += `<li>${input.value}</li>`;
  input.value = ""; //입력창 초기화
};
