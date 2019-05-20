
function callWebService(callback) {
    let second = 0;

    // setInterval 2초마다 계속 실행되는데 callback 함수가 정지해
    let id = setInterval(function () {
        second += 1;
        console.log(`${second}초가 지났습니다.`);
    }, 1000);

    let stoptime = Math.floor(Math.random() * 6) + 2; // random값을 생성하는 statement
    // 0~6사의의 값이 생성되는데 더하기 2해주면 -> 2~8사이의 숫자가 생성
    // floor : 내림 함수

    setTimeout(function () { // 한번만 호출(일회성),
        clearInterval(id); callback(stoptime);
        // 이 콜백 함수는 2번째 라인의 콜백에서 온 것
    }, stoptime * 1000); // stop되는 지, stoptime이 랜덤하게 5라고 결졍되면 5000ms(5sec) 후에 callback함수를 실행하라

}

let evaluateSpeed = (stoptime) =>  {
    // 시간을 읽어서 초 별로 출력 하는
    // (실습2-2)  이 위치에 채워 넣을 것
    console.log(`stoptime : ${stoptime}`);
    if (stoptime <= 3)
        console.log("빠르네!!\n");
    else if (stoptime > 3 && stoptime <= 6)
        console.log("수고했어!\n");
    else
        console.log("느리다. 서둘러\n")

};

callWebService(evaluateSpeed);
// 23번 라인의 매개변수인 evaluateSpeed가 callback함수
// 화살표 함수도 눈에 익혀놓기, 이런 구조 자주 나와
