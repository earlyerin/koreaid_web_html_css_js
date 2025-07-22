//
let studentList = []; //전역으로 사용되는 상태 역할

//전체 페이지의 메인 컴포넌트 역할
function app() {
  const appInfo = {
    title: "Component Study",

    //toLocaleDateString => 현재 날짜를 지역 형식에 맞는 문자열로 반환
    date: new Date().toLocaleDateString(),
    author: "rin",
  };

  return `
    <div>
        <h1>제목: ${appInfo.title}</h1>
        <h2>작성일: ${appInfo.date}</h2>
        <h3>작성자: ${appInfo.author}</h3>
        ${studentRegister()}
        <ul class="student-list"></ul>
    </div>
    `;

}


