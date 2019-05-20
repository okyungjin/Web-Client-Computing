// request.js
// npm install request

let request=require('request');
let fs=require('fs');

console.log(__dirname);

let detectErr = function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file(naver_page.html) was saved!");
};

let file = function(err, res, body){
    fs.writeFile(__dirname+"/temp/naver_page.html", body, detectErr);
};

let homepage=request('http://www.naver.com', file);

homepage.pipe(fs.createWriteStream(__dirname+"/temp/naver_page_pipe.html")); // 즉각적으로 그때그때 실행

let time = function(){
    var timeout=5000;
    homepage.pipe(fs.createWriteStream(__dirname+"/temp/naver_page_pipe_delay5000.html"));
    console.log('The file(naver_page_pipe_delay5000.html) was saved after '+timeout+'msec');
  };

setTimeout(time, 5000);
