// 변수를 생성합니다.
let primitiveNumber = 273;
// 메소드를 추가합니다.
// primitiveNumber에 강제로 method 추가하려는 것(에러 발생)
// 에러 : 메서드를 등록할 수 없는 자료형 (변수)
primitiveNumber.method = function () {
    return 'Primitive Method';
};
// 메소드를 실행합니다.
console.log(primitiveNumber.method());
