// najax_forcast.js

let najax = $ = require('najax');
let apiURI = 'http://api.openweathermap.org/data/2.5/weather?q=Seoul&units=metric&lang=kr&appid=1df33c019687c7318e4a15c63611ee78';
$.get({
            url: apiURI,
            dataType: 'json',
            success: function(res) {
				console.log('-----------------------------');
				console.log('도시: '+ res.name);
				console.log('국가: '+ res.sys.country );
				console.log('날씨: '+ res.weather[0].description);
                console.log(`평균온도: ${res.main.temp} (°C)`);
				console.log(`최저온도: ${res.main.temp_min} (°C)`);
				console.log(`최고온도: ${res.main.temp_max} (°C)`);
				console.log(`풍속: ${res.wind.speed} (m/sec)`);
                console.log(`습도: ${res.main.humidity} (%)`);
				console.log('-----------------------------');
    		}
})
