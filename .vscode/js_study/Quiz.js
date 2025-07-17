/**
 * score 변수에 임의의 값 할당
 * 조건에 따라서 등급 부여
 * A : 90점 이상
 * B : 90점 미만 ~ 80점 이상
 * C : 80점 미만 ~ 70점 이상
 * F : 나머지
 */

let student = {
  id: 20250102,
  name: "rin",
  score: 88,
};

function addGrade(grade) {
  student = {
    ...student,
    grade: grade,
  };
}

if (student.score >= 90) {
  addGrade("A");
} else if (student.score >= 80) {
  addGrade("B");
} else if (student.score >= 70) {
  addGrade("C");
} else {
  addGrade("F");
}
console.log(student);

/**
 * for문을 이용해서 1~20 중 짝수만 출력
 */

for (let i = 1; i <= 20; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

/**
 * 1. title, author, publisherYear 속성을 포함한 book객체 생성
 * 2. book객체의 title, author 속성 출력(점 표기법과 비구조할당 방식)
 * 3. book객체에 getAge() 메서드 추가
 *    현재 연도(new Data().getFullYear())에서 publisherYear을 뺀 값을 반환
 * 4. getAge() 호출 후 출력
 * 5. book객체에 새로운 속성 genre를 추가하고 값할당(예. 판타지)
 * 6. book객체의 title, publisherYear을 수정
 */

//1
let book = {
  title: "Harry Potter and the Chamber of Secrets",
  author: "J.K Rowling",
  publisherYear: 2002,
};

//2
console.log("title:", book.title);
console.log("author:", book.author);
console.log("publisherYear:", book.publisherYear);

console.log(({ title, author, publisherYear } = book));

//3
//3
book.getAge = () => {
  return new Date().getFullYear() - book.publisherYear;
};
//4
console.log("book age : ", book.getAge());

//5
book.genre = "fantasy";
console.log(book);

//6
book.title = "Harry Potter and the Prisoner of Azkaban";
book.publisherYear = 2004;
console.log(book);

/**
 * 1. 50000원 이상인 제품만 필터링해서 expensiveProducts 배열에 넣고 출력
 * 2. products배열에서 각 제품의 이름과 가격만 포함하는 productNamesAndPrices배열 만들기
 *    [{name: "노트북", price: 1200000}, {}...]
 * 3. products배열에서 category가 전자제품인 제품만 선택해서 각 제품의 이름과 가격을
 *    10%할인한 discountProducts배열을 만드세요
 */

const products = [
  { id: 1, name: "노트북", price: 1200000, catefory: "전자제품" },
  { id: 2, name: "태블릿", price: 100000, catefory: "전자제품" },
  { id: 3, name: "컴퓨터", price: 800000, catefory: "전자제품" },
  { id: 4, name: "책", price: 10000, catefory: "여가" },
  { id: 4, name: "컵", price: 15000, catefory: "주방" },
];
//1
const expensiveProducts = products.filter((product) => product.price >= 50000);
console.log(expensiveProducts);
//2
const productNamesAndPrices = products.map((product) => {
  product = {
    name: product.name,
    price: product.price,
  };
  return product;
});
console.log(productNamesAndPrices);

//3
const discountProducts = products
  .filter((product) => product.catefory === "전자제품")
  .map((product) => {
    product = {
      ...product,
      price: product.price - product.price / 10,
    };
    return product;
  });
console.log(discountProducts);
