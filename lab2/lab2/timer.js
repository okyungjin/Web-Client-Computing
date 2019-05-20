// 1초 후에
setTimeout(function () { // 익명함
    console.log("1초가 지났습니다.");
}, 1000);
// 1초마다 (1000ms), 반복적으로 실행하라
setInterval(function () {
    console.log("1초 마다 호출됩니다.");
}, 1000);
