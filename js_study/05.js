//***** 클래스 *****

class Student {
  name;
  age;

  //생성자 : 클래스의 인스턴스를 생성할 때 호출되는 메서드
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

//인스턴스 생성
const newStudent1 = new Student("rin", 21);
console.log(newStudent1);
console.log(newStudent1.name);
