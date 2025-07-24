/**
 * 전체 웹페이지의 기본적인 틀
 */
let studentList = []; //전역으로 사용되는 배열(학생 목록)

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


