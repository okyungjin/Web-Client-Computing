// 변수를 생성합니다.
let primitiveNumber = 273;
// 메소드를 추가합니다.
// primitiveNumber가 실행될 때 객체로 넘어(?)가는데 그때를 이용하겠다.
Number.prototype.method = function () {
    return 'Primitive Method';
};
// 메소드를 실행합니다.
console.log(primitiveNumber.method());

// primitiveNumber.method()을 실행하면 객체로 매핑된다. -> Number.prototype.method 자동으로 실행
