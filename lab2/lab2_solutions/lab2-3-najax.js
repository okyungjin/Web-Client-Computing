// najax.js
// npm install najax

let najax = $ = require('najax');
let fs=require('fs');

function getData(callback) {
    let tableData;
    $.get('https://www.google.com', callback);
    return tableData;
}

let detectErr = (err) => {
     if(err) {
           return console.log(err);
     }
     console.log("The file(google_page.html) was saved!");
};

let res = (response) => {
        tableData = response;
        //console.log(tableData);
        fs.writeFile(__dirname+"/temp/google_page.html", tableData, detectErr);
};

getData(res);
