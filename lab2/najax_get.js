// npm install najax

// $ : 이거 변수임, 제이쿼리 안에 네이젝스. 인터넷 관련 메서드 정의
// jQuery를 쓰면 보안에러 생겨서 najax에서 가져와
let najax = $ = require('najax');
let fs=require('fs');

function getData(callback) {
    let tableData;
    // $ : jQuery라이브러리를 가리키는 것
    // get : 사이트에 가서 뭐 하나 들고(이미지, 음악 등)을 가져와라, najax의 메서드
    $.get('https://www.google.com', callback);
    return tableData;
}
// 여기부터
getData(callback);  // 여기까지(중괄호 닫히는 순간)가 콜백이라는 변수가 실제로 들고있는 익명함수
//

let table = function (response) {
    tableData = response;
    //console.log(tableData);
    fs.writeFile(__dirname+"/temp/google_page.html", tableData, detectErr);
};

let detectErr = function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file(google_page.html) was saved!");
};
