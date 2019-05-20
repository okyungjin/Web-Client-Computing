let request=require('request'); //require 외부에서 모듈을 가져오는
let fs=require('fs'); // 파일 시스템의 모듈을 가져와

// 현재 위치를 소스코드에 출력하라
// /Users/kyungj/4학년1학기/웹클라이언트컴퓨팅/lab2 이게 출력된다. 왜해? 결과를 이 위치에 저장하기 위해서 현재 위치를 알아야 함.
// __ underline 2개 있는 걸 시스템 변수라고 함, node.js가 만들어서 공유(?)하는 변수
console.log(__dirname);

// 네이버 홈페이지가 완전히 도착되면 실행되는 함수, 익명함수
// err : 에러를 잡기 위해
// body : 응답메세지의 알맹이 내용
// res :
// homepage : 홈페이지 마지막 바이트가 도착한 순간에 function(err, res, body) 실행해서 homepage에 저장
// fuctnion 실행 결과를 homepage에 그냥 쓴 것
// 5만 바이트를 한번에 받아서 한번에, 비동기식(request의 최종 목적은 홈페이지의 파일을 모두 받은 다음에 쓰는 것)
// 이 아래 라인을 시작만 시켜놓고 빠져나와서 다른 일을 하려고 아래 homepage.pipe 만들어놓음
let homepage=request('http://www.naver.com', x);
let x = function(err,res, body) {
    // 마지막 바이트 도착하면 이 함수 실행
    // 파일 쓰기 writleFile
    // __dirname : 현재 위치를 가리키는 시스템 변수
    // 이 경로에 저장해라, body의 알맹이 내용을, body가 비워져있으면 실행 안돼
    // funtion(err) : 혹시 에러 발생하면 처리해라, 에러 존재하면 if(err) 실행, 없으면 ~ was saved 출력하라
    fs.writeFile(__dirname+"/temp/naver_page.html", body, function(err) {
        // 여기부터
        if(err) {
            return console.log(err);
        }
        console.log("The file(naver_page.html) was saved!");
    }); // 여기까지 두번째 콜백 함
});

// 운영체제가 제공하는 pipe 메커니즘
// 50바이트를 일단 html에 쓴다. 다음에 70바이트가 오면 또 쓴다. stream형태, 보통 1000바이트씩 쪼개져서 옴
// 올때마다 즉각 실행하는 것
// 바쁘니까 얘 찾아와서 실행해 = callback함수
homepage.pipe(fs.createWriteStream(__dirname+"/temp/naver_page_pipe.html"));

// 5초 이후에 끝내
setTimeout(function(){
    var timeout=5000;
    homepage.pipe(fs.createWriteStream(__dirname+"/temp/naver_page_pipe_delay5000.html"));
    console.log('The file(naver_page_pipe_delay5000.html) was saved after '+timeout+'msec');
    }, 5000);

// 비동기식 메서드 vs 콜백함수
// 5초만에 왔다가 가정, 5초안에 첫번째 ㅗ // 5초 이이 형태 프로그래밍에서 자주 사용되는 형태이므로 잘 기억해둘 것.
