// npm install request
let request=require('request');
let fs=require('fs');

console.log(__dirname);

let func1 = function(){
    var timeout=5000;
    homepage.pipe(fs.createWriteStream(__dirname+"/temp/naver_page_pipe_delay5000.html"));
    console.log('The file(naver_page_pipe_delay5000.html) was saved after '+timeout+'msec');
};


let func2 = function(err, res, body) {
    fs.writeFile(__dirname+"/temp/naver_page.html", body, func1);
        console.log("The file(naver_page.html) was saved!");
};

let homepage=request('http://www.naver.com', func2);

let func3 = function(err) {
    if(err)
        return console.log(err);
};

homepage.pipe(fs.createWriteStream(__dirname+"/temp/naver_page_pipe.html"));
setTimeout(func1, 5000);
