const cheerio = require('cheerio');
const request = require('request');
const iconv = require('iconv-lite');
const express = require('express')

let url = "https://movie.naver.com/movie/running/current.nhn";
let output = "";

request({ url, encoding: null }, function (error, response, body) {
    let htmlDoc = iconv.decode(body, 'UTF-8');
    const $ = cheerio.load(htmlDoc);
    let colArr = $("dl.lst_dsc");

    for (let i = 0; i < colArr.length; i++) {
        let title = $(`div.lst_wrap > ul > li:nth-child(${i + 1}) > dl > dt > a`).text();
        let image = $(`div.lst_wrap > ul > li:nth-child(${i + 1}) > div > a`).html();
        
        let genre = '';
        $(`div.lst_wrap > ul > li:nth-child(${i + 1}) > dl > dd:nth-child(3)
            > dl > dd:nth-child(2) > span.link_txt > a`).each(function (index, obj) {
                genre += $(this).text() + ', ';
        });
        genre = genre.substring(0, genre.length - 2);

        let director = '';
        $(`div.lst_wrap > ul > li:nth-child(${i + 1}) > dl > dd:nth-child(3)
            > dl > dd:nth-child(4) > span > a`).each(function (index, obj) {
                director += $(this).text() + ', ';
        });
        director = director.substring(0, director.length - 2);

        let actors = '';
        $(`div.lst_wrap > ul > li:nth-child(${i + 1}) > dl > dd:nth-child(3)
            > dl > dd:nth-child(6) > span > a`).each(function (index, obj) {
                actors += $(this).text() + ', ';
        });
        actors = actors.substring(0, actors.length - 2);

        let bookingrate = $(`div.lst_wrap > ul > li:nth-child(${i + 1})
            > dl > dd.star > dl.info_exp > dd > div > span.num`)
        
        output += "<style>";
        output += ".row { width: 990px; text-align: left; margin-top: -10px; margin-bottom: -10px; }";
        output += ".block {  width: 330px; vertical-align: middle; display: inline-block; line-height: 7px; }​";
        output += ".block h5 { margin-bottom: 1.71429rem; margin-top: 1.71429rem; }";
        output += "</style>";
        output += "<div class='row'>";
        output += "<div class='block'>";
        output += `<h2>${i+1}</h2>`;
        output += "</div>";
        output += "<div class='block'>";  
        output += image;
        output += "</div>";
        output += "<div class='block'>";
        output += `<h5>제목: ${title}</h5>`
        output += `<h5>예매율: ${bookingrate}%</h5>`
        output += `<h5>개요: ${genre}</h5>`
        output += `<h5>감독: ${director}</h5>`
        output += `<h5>출연: ${actors}</h5>`
        output += "</div>";
        output += "</div>";
        output += "<hr/>";
    }
});

const app = express();
app.use((request, response) => {
    response.send(output);
});
// 서버를 실행합니다.
app.listen(52273, () => {
    console.log('Server running at http://127.0.0.1:52273');
});


// #content > div.article > div:nth-child(1) > div.lst_wrap > ul > li:nth-child(1) > dl > dd:nth-child(3) > dl > dd:nth-child(6) > span > a:nth-child(1)