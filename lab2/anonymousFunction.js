// 익명 함수, 함수는 익명이지만 실행하기 위해 let test
// test가 익명함수 전체를 가리킴
// 여기는 정의만 하고 실행은X
﻿let test = function () {
    console.log("함수의 첫 번째 줄");
    console.log("함수의 두 번째 줄");
};

// 실행
test();

// test 포인터 변수는 함수를 가리킴
console.log(test);
