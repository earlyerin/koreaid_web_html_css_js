/**
 * 
 */
//window.onload 웹페이지의 리소스가 전부 로드되어 사용되는 시정에 실행(한 번만 정의 가능하므로 분담 사용 불가)
window.onload = () => {
  const root = document.querySelector("#root"); //id='root'인 요소 노드
  render(root); //렌더링
};

//랜더링 함수
function render(targetElement) {
  targetElement.innerHTML = app(); //HTML을 반환받아 해당 요소 내부에 추가
}
