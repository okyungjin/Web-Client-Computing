// 함수를 선언합니다.
function callTenTimes(callback) {
    console.log("-----");
    // 10회 반복합니다.
    for (let i = 0; i < 10; i++) {
        // 매개 변수로 전달된 함수를 호출합니다.
        callback();
    }
}

let f_anon = function () { // 익명함수, f_anon은 포인터 함수
    console.log('함수 호출');
};

let f_arrow = () => { // 익명함수, f_arrow는 포인터 함수
    console.log('함수 호출');
};

// 변수를 선언합니다.
callTenTimes(f_anon);
callTenTimes(f_arrow);

// callback.js 처럼도 할 수 있지만 이렇게 따로 빼서 작성할 수 있음.
