// 함수를 선언합니다.
function print(name, count) {
    // 함수 매개 변수 초기화
    count = count || 1;
    // parameter에 input이 없으면 기본값으로 설정해주는 기능
    // count에 값이 설정이 되어있으면 ok
    // 설정이 되어있지 않으면 1 ||가 OR
    // 함수 본문
    console.log(`${name}이/가 ${count}개 있습니다.`)
}
// 함수를 호출합니다.
print("사과"); // 에러 발생하지 않고 실행됌
