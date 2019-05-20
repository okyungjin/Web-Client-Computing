// 변수를 선언합니다.
let array = ["사과", "배", "포도", "딸기", "바나나"];
// 반복을 수행합니다.
for (let i in array) { // i는 for 안에서만 존재
    // 출력합니다.
    console.log(`${i}번째 요소: ${array[i]}`);
    console.log('${i}번')
}
console.log("----- 구분선 -----");
// 반복을 수행합니다.
for (let item of array) {
    // 출력합니다.
    console.log(item);
}

// in of 구분
// of는 배열변수 안의 값
