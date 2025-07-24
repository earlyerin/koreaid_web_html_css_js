/**
 * input 요소에 대한 기본적인 틀 구현
 */
function studentRegisterInput({ type, name, onkeyup, placeholder}) {
  return (
    /*html*/
    `<div>
            <input type='${type}' name='${name}' autocomplete='off' onkeyup='${onkeyup}(event)' placeholder='${placeholder}'>
        </div>`
  );
  /**
   * onkeyup : 함수명(매개변수)
   * 키보드를 눌렀다 땠을 때, 해당 키를 이벤트로 인식하고
   * 전체 입력 데이터 객체(KeyboardEvent)를 해당 함수의 인자로 전달
   */
}

