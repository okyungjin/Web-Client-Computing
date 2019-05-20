// 문자열 <-> 숫자

// 변수를 선언합니다.
let inputA = "52";
// inputB는 실수형 문자열
let inputB = "52.273";
// 숫자 + 문자
let inputC = "1401동"
// parseInt() 함수의 기본적인 사용
console.log(parseInt(inputA))
// parseInt() 함수와 parseFloat() 함수의 차이
console.log(parseInt(inputB))
console.log(parseFloat(inputB))
// 문자열 뒤에 숫자가 아닌 문자가 포함되어 있을 때
// 이럴경우 자바스크립트에서는 숫자만 뽑아서 결과를 보여줌
console.log(parseInt(inputC));
