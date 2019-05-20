// 모듈을 추출합니다.
const express = require('express'); // import같은 의미
// 서버를 생성합니다.
const app = express(); // express 모듈 추가해서 app 객체변수 생성
app.use(express.static('public')); // public으로 초기화하겠다, 기본위치가 public이다. 상위레벨의 폴더는 보여지지 않는다.
// public 안에 너가 요청하는 파일이 있으면 보내준다.
// request 이벤트 리스너를 설정합니다.
app.get('*', (request, response) => { // public안에 있으면 주고 없으면 에러 발생
    response.send(404);
    response.send('해당 경로에는 아무것도 없습니다.');
});
// 서버를 실행합니다.
app.listen(52273, () => {
    console.log('Server running at http://127.0.0.1:52273');
}); // 이 주소에서 홈페이지 서비스
