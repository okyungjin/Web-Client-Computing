// 생성자 함수를 생성합니다.
function Constructor() { }
Constructor.property = 273; // property(멤버변수) 초기화
Constructor.method = function () { }; // 메서드 껍데기만 만들어
// 생성자 함수의 속성과 메소드를 출력합니다.
console.log(Constructor.property);
console.log(Constructor.method);

// 출력 [Function] : 그건 함수다
