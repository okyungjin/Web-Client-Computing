// request_forcast.js

let request = require('request');
let moment = require('moment');
let apiURI = 'http://api.openweathermap.org/data/2.5/forecast?q=Busan&units=metric&lang=kr&appid=1df33c019687c7318e4a15c63611ee78';

request(apiURI, function(err, res, body) {
    if(err)
        console.log(err);
    else {
        res = JSON.parse(body);
        for(let i = 0; i < res.cnt; i++) {
            let date = moment.unix(res.list[i].dt)
            console.log('----------------------------------------------------------');
            console.log('예보일시: ' + date.toString());
            console.log('날씨: ' + res.list[i].weather[0].description);
            console.log('평균온도: ' + res.list[i].main.temp + ' (°C)');
            console.log('최저온도: ' + res.list[i].main.temp_min + ' (°C)');
            console.log('최고온도: ' + res.list[i].main.temp_max + ' (°C)');
            console.log('풍속: ' + res.list[i].wind.speed + ' (m/sec)');
            console.log('습도: ' + res.list[i].main.humidity + ' (%)');
        }
    }
});
