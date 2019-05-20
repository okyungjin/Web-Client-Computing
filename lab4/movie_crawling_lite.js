
const cheerio = require('cheerio');
const request = require('request');
const iconv = require('iconv-lite');
const express = require('express');

const app = express();
let url = "https://movie.naver.com/movie/running/current.nhn";
request({ url, encoding: null }, function (error, response, body) {
    let htmlDoc = iconv.decode(body, 'UTF-8');
    let resultArr = [];

    const $ = cheerio.load(htmlDoc);
    let colArr = $("dl.lst_dsc") // 영화가 몇개의 라인인지 for문
    var names;
    let output = ""
    for (let i = 0; i < colArr.length; i++) {
        output += "<style>";
        output += ".row { width: 990px; text-align: left; margin-top: -10px; margin-bottom: -10px; }";
        output += ".block {  width: 330px; vertical-align: middle; display: inline-block; line-height: 7px; }​";
        output += ".block h5 { margin-bottom: 1.71429rem; margin-top: 1.71429rem; }";
        output += "</style>";

        let title = $(`div.lst_wrap > ul > li:nth-child(${i + 1}) > dl > dt > a`).text(); // i+1 child(~)의 주소를 동적으로 생성하기 위해서 +1씩
        let src = $(`div.lst_wrap > ul > li:nth-child(${i + 1}) > div > a > img`).attr('src'); // src 변수 안의 문자열을 가져와라
        let image = $(`div.lst_wrap > ul > li:nth-child(${i + 1}) > div > a`).html();
        let genre = '';
        $(`div.lst_wrap > ul > li:nth-child(${i + 1}) > dl > dd:nth-child(3) > dl > dd:nth-child(2) > span.link_txt > a`).each(function (index, obj) {
            genre += $(this).text() + ', ';
        });
        genre = genre.substring(0, genre.length - 2);
        resultArr.push({ title: title, src: src, image: image, genre: genre });
    }
    console.log(resultArr)
});

// 이미지 가져올 때 img태그로 해도 되고 img src로 가져와도 돼
// lab4-수정/movieServer.js 실행하면 나오는 예시처럼 + 장르
// 영화 100개 다 가져오기
// 1. 인터넷에서 가져오기 2. 필요한 정보 추출 3. 화면에 띄우기


// #old_content > table > tbody > tr:nth-child(2) > td.title > div > a
// #old_content > table > tbody > tr:nth-child(3) > td.title > div > a
