// 함수를 선언합니다.
function callTenTimes(callback) {
    // 10회 반복합니다.
    for (let i = 0; i < 10; i++) {
        // 매개 변수로 전달된 함수를 호출합니다.
        // 외부에서 들어온 함수를 실행하는 함수
        callback();
    }
}
// 변수를 선언합니다.
callTenTimes(function () {
    console.log('함수 호출');
});

// 홈페이지에서 많이 보이는 패턴임. 너무 많이 등장하기 때문에 이런 방식이 의미 있음
// 익명함수
