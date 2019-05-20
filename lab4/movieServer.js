// 모듈을 추출합니다.
const express = require('express');
// 서버를 생성합니다.
const app = express();
let output = ""
// request 이벤트 리스너를 설정합니다.
app.use((request, response) => {
    // 데이터소스: https://movie.naver.com/movie/running/current.nhn
    //여기 5줄 건들지 말기, 줄 맞추는 코드
    output += "<style>";
    output += ".row { width: 990px; text-align: left; margin-top: -10px; margin-bottom: -10px; }";
    output += ".block {  width: 330px; vertical-align: middle; display: inline-block; line-height: 7px; }​";
    output += ".block h5 { margin-bottom: 1.71429rem; margin-top: 1.71429rem; }";
    output += "</style>";


    output += "<div class='row'>";
    output += "<div class='block'>";
    output += "<h2>1</h2>";
    output += "</div>";
    output += "<div class='block'>";
    output += '<img src="https://movie-phinf.pstatic.net/20190306_280/1551849045570X4iac_JPEG/movie_image.jpg?type=m99_141_2" alt="돈">';
    output += "</div>";
    output += "<div class='block'>";
    output += "<h5>제목: 돈</h5>";
    output += "<h5>예매율: 53.29%</h5>";
    output += "<h5>개요: 범죄</h5>";
    output += "<h5>감독: 박누리</h5>";
    output += "<h5>출연: 류준열, 유지태, 조우진</h5>";
    output += "</div>";
    output += "</div>";
    output += "<hr/>";

    output += "<div class='row'>";
    output += "<div class='block'>";
    output += "<h2>2</h2>";
    output += "</div>";
    output += "<div class='block'>";
    // 서버 프로그램에서는 문자열이지만 브라우저에서는 사진으로 인식함
    output += '<img src="https://movie-phinf.pstatic.net/20190225_72/1551069530582h2huX_JPEG/movie_image.jpg?type=m99_141_2" alt="캡틴 마블">';
    output += "</div>";
    output += "<div class='block'>";
    output += "<h5>제목: 캡틴 마블</h5>";
    output += "<h5>예매율: 24.86%</h5>";
    output += "<h5>개요: 액션, 모험</h5>";
    output += "<h5>감독: 애너 보든, 라이언 플렉</h5>";
    output += "<h5>출연: 브리 라슨, 사무엘 L. 잭슨, 벤 멘델슨, 주드 로</h5>";
    output += "</div>";
    output += "</div>";
    output += "<hr/>";

    response.send(output);
});
// 서버를 실행합니다.
app.listen(52273, () => {
    console.log('Server running at http://127.0.0.1:52273');
});
