const btn = document.querySelector(".add-btn");
let index = 1;

//onclick 속성의 경우 하나의 이벤트만 적용 가능
btn.onclick = () => {
  const addRow = document.querySelector(".table");

  const name = document.querySelector("#input-name");
  const age = document.querySelector("#input-age");
  const address = document.querySelector("#input-address");

  if (name.value === "" || age.value === "" || address.value === "") {
    alert("입력이 누락되었습니다.");
    return;
  }

  addRow.innerHTML += `<tr>
    <td>${index}</td>
    <td>${name.value}</td>
    <td>${age.value}</td>
    <td>${address.value}</td>
    </tr>`;

  index += 1;

  name.value = "";
  age.value = "";
  address.value = "";
  alert("추가 완료!");
};

//addEventListener 속성의 경우 여러 이벤트를 적용 가능
btn.addEventListener("click", function () {});
