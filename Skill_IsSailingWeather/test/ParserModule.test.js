var expect = require('chai').expect;
var parserModule = require('../ParserModule');

describe('Parser for OpenWeatherApi', function() {
    describe('parseToForecast', function() {
        it('should return null for empty json', function() {
            var result = parserModule.parseToForecast('{}');
            expect(result).to.be.null
        });
        it('should return list of wind for test data', function() {
            var result = parserModule.parseToForecast(testData);
            expect(result).to.have.length.of(37);

            expect(result[0].speedMs).to.be.eql(5.87);
            expect(result[0].degree).to.be.eql(150);
            expect(result[0].timeUnix).to.be.eql(1495098000);
            expect(result[0].timeHuman).to.be.eql("2017-05-18 09:00:00");
        });
    });
    describe('parseToError', function() {
        it('should parse json to error', function() {
            let error = parserModule.parseToError(testDataError);
            expect(error.errorCode).to.be.eql('404');
        });
    });
});

let testDataError = `{
    "cod": "404",
    "message": "city not found"
}`;

let testData = `{
    "cod": "200",
    "message": 0.0025,
    "cnt": 37,
    "list": [
        {
            "dt": 1495098000,
            "main": {
                "temp": 296.58,
                "temp_min": 294.444,
                "temp_max": 296.58,
                "pressure": 1022.55,
                "sea_level": 1028.29,
                "grnd_level": 1022.55,
                "humidity": 73,
                "temp_kf": 2.14
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 5.87,
                "deg": 150
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2017-05-18 09:00:00"
        },
        {
            "dt": 1495108800,
            "main": {
                "temp": 297.91,
                "temp_min": 296.305,
                "temp_max": 297.91,
                "pressure": 1021.47,
                "sea_level": 1027.13,
                "grnd_level": 1021.47,
                "humidity": 68,
                "temp_kf": 1.61
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 6.7,
                "deg": 150.507
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2017-05-18 12:00:00"
        },
        {
            "dt": 1495119600,
            "main": {
                "temp": 298.25,
                "temp_min": 297.181,
                "temp_max": 298.25,
                "pressure": 1020.12,
                "sea_level": 1025.76,
                "grnd_level": 1020.12,
                "humidity": 60,
                "temp_kf": 1.07
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 6.07,
                "deg": 150.001
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2017-05-18 15:00:00"
        },
        {
            "dt": 1495130400,
            "main": {
                "temp": 296.31,
                "temp_min": 295.771,
                "temp_max": 296.31,
                "pressure": 1019.09,
                "sea_level": 1024.77,
                "grnd_level": 1019.09,
                "humidity": 58,
                "temp_kf": 0.54
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 4.32,
                "deg": 138.001
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2017-05-18 18:00:00"
        },
        {
            "dt": 1495141200,
            "main": {
                "temp": 292.35,
                "temp_min": 292.35,
                "temp_max": 292.35,
                "pressure": 1018.95,
                "sea_level": 1024.66,
                "grnd_level": 1018.95,
                "humidity": 61,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 4.31,
                "deg": 125.505
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2017-05-18 21:00:00"
        },
        {
            "dt": 1495152000,
            "main": {
                "temp": 290.915,
                "temp_min": 290.915,
                "temp_max": 290.915,
                "pressure": 1017.89,
                "sea_level": 1023.59,
                "grnd_level": 1017.89,
                "humidity": 67,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 4.82,
                "deg": 124.5
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2017-05-19 00:00:00"
        },
        {
            "dt": 1495162800,
            "main": {
                "temp": 289.865,
                "temp_min": 289.865,
                "temp_max": 289.865,
                "pressure": 1016.93,
                "sea_level": 1022.69,
                "grnd_level": 1016.93,
                "humidity": 69,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 4.96,
                "deg": 126.005
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2017-05-19 03:00:00"
        },
        {
            "dt": 1495173600,
            "main": {
                "temp": 292.039,
                "temp_min": 292.039,
                "temp_max": 292.039,
                "pressure": 1016.56,
                "sea_level": 1022.35,
                "grnd_level": 1016.56,
                "humidity": 69,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 5.96,
                "deg": 133.003
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2017-05-19 06:00:00"
        },
        {
            "dt": 1495184400,
            "main": {
                "temp": 295.66,
                "temp_min": 295.66,
                "temp_max": 295.66,
                "pressure": 1016.18,
                "sea_level": 1021.91,
                "grnd_level": 1016.18,
                "humidity": 71,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 6.72,
                "deg": 142.001
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2017-05-19 09:00:00"
        },
        {
            "dt": 1495195200,
            "main": {
                "temp": 297.706,
                "temp_min": 297.706,
                "temp_max": 297.706,
                "pressure": 1015.53,
                "sea_level": 1021.11,
                "grnd_level": 1015.53,
                "humidity": 67,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 6.6,
                "deg": 141.501
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2017-05-19 12:00:00"
        },
        {
            "dt": 1495206000,
            "main": {
                "temp": 298.468,
                "temp_min": 298.468,
                "temp_max": 298.468,
                "pressure": 1014.51,
                "sea_level": 1020.08,
                "grnd_level": 1014.51,
                "humidity": 58,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 6.46,
                "deg": 139.001
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2017-05-19 15:00:00"
        },
        {
            "dt": 1495216800,
            "main": {
                "temp": 296.896,
                "temp_min": 296.896,
                "temp_max": 296.896,
                "pressure": 1013.27,
                "sea_level": 1018.93,
                "grnd_level": 1013.27,
                "humidity": 55,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 5.81,
                "deg": 134.502
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2017-05-19 18:00:00"
        },
        {
            "dt": 1495227600,
            "main": {
                "temp": 294.041,
                "temp_min": 294.041,
                "temp_max": 294.041,
                "pressure": 1012.92,
                "sea_level": 1018.59,
                "grnd_level": 1012.92,
                "humidity": 57,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 6.06,
                "deg": 127.007
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2017-05-19 21:00:00"
        },
        {
            "dt": 1495238400,
            "main": {
                "temp": 292.358,
                "temp_min": 292.358,
                "temp_max": 292.358,
                "pressure": 1012.53,
                "sea_level": 1018.21,
                "grnd_level": 1012.53,
                "humidity": 60,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "02n"
                }
            ],
            "clouds": {
                "all": 8
            },
            "wind": {
                "speed": 6.02,
                "deg": 123.508
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2017-05-20 00:00:00"
        },
        {
            "dt": 1495249200,
            "main": {
                "temp": 290.496,
                "temp_min": 290.496,
                "temp_max": 290.496,
                "pressure": 1013.99,
                "sea_level": 1019.88,
                "grnd_level": 1013.99,
                "humidity": 69,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 5.28,
                "deg": 252.004
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2017-05-20 03:00:00"
        },
        {
            "dt": 1495260000,
            "main": {
                "temp": 286.855,
                "temp_min": 286.855,
                "temp_max": 286.855,
                "pressure": 1018.84,
                "sea_level": 1024.47,
                "grnd_level": 1018.84,
                "humidity": 73,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 64
            },
            "wind": {
                "speed": 8.81,
                "deg": 285.008
            },
            "rain": {
                "3h": 0.03
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2017-05-20 06:00:00"
        },
        {
            "dt": 1495270800,
            "main": {
                "temp": 287.429,
                "temp_min": 287.429,
                "temp_max": 287.429,
                "pressure": 1021.98,
                "sea_level": 1027.75,
                "grnd_level": 1021.98,
                "humidity": 74,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 92
            },
            "wind": {
                "speed": 8.12,
                "deg": 288.005
            },
            "rain": {
                "3h": 0.05
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2017-05-20 09:00:00"
        },
        {
            "dt": 1495281600,
            "main": {
                "temp": 289.135,
                "temp_min": 289.135,
                "temp_max": 289.135,
                "pressure": 1024.22,
                "sea_level": 1030.03,
                "grnd_level": 1024.22,
                "humidity": 73,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 76
            },
            "wind": {
                "speed": 6.72,
                "deg": 289.506
            },
            "rain": {},
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2017-05-20 12:00:00"
        },
        {
            "dt": 1495292400,
            "main": {
                "temp": 289.488,
                "temp_min": 289.488,
                "temp_max": 289.488,
                "pressure": 1025.49,
                "sea_level": 1031.21,
                "grnd_level": 1025.49,
                "humidity": 71,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 64
            },
            "wind": {
                "speed": 5.92,
                "deg": 299.501
            },
            "rain": {},
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2017-05-20 15:00:00"
        },
        {
            "dt": 1495303200,
            "main": {
                "temp": 289.267,
                "temp_min": 289.267,
                "temp_max": 289.267,
                "pressure": 1026.67,
                "sea_level": 1032.46,
                "grnd_level": 1026.67,
                "humidity": 66,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 64
            },
            "wind": {
                "speed": 4.62,
                "deg": 307.002
            },
            "rain": {},
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2017-05-20 18:00:00"
        },
        {
            "dt": 1495314000,
            "main": {
                "temp": 287.93,
                "temp_min": 287.93,
                "temp_max": 287.93,
                "pressure": 1028.42,
                "sea_level": 1034.25,
                "grnd_level": 1028.42,
                "humidity": 67,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03n"
                }
            ],
            "clouds": {
                "all": 36
            },
            "wind": {
                "speed": 3.77,
                "deg": 297.503
            },
            "rain": {},
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2017-05-20 21:00:00"
        },
        {
            "dt": 1495324800,
            "main": {
                "temp": 286.119,
                "temp_min": 286.119,
                "temp_max": 286.119,
                "pressure": 1029.78,
                "sea_level": 1035.58,
                "grnd_level": 1029.78,
                "humidity": 77,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 3.16,
                "deg": 290.003
            },
            "rain": {},
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2017-05-21 00:00:00"
        },
        {
            "dt": 1495335600,
            "main": {
                "temp": 283.798,
                "temp_min": 283.798,
                "temp_max": 283.798,
                "pressure": 1030.37,
                "sea_level": 1036.31,
                "grnd_level": 1030.37,
                "humidity": 92,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 1.6,
                "deg": 269.5
            },
            "rain": {},
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2017-05-21 03:00:00"
        },
        {
            "dt": 1495346400,
            "main": {
                "temp": 287.902,
                "temp_min": 287.902,
                "temp_max": 287.902,
                "pressure": 1031.2,
                "sea_level": 1036.98,
                "grnd_level": 1031.2,
                "humidity": 80,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 2.31,
                "deg": 274.511
            },
            "rain": {},
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2017-05-21 06:00:00"
        },
        {
            "dt": 1495357200,
            "main": {
                "temp": 290.605,
                "temp_min": 290.605,
                "temp_max": 290.605,
                "pressure": 1031.68,
                "sea_level": 1037.53,
                "grnd_level": 1031.68,
                "humidity": 81,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02d"
                }
            ],
            "clouds": {
                "all": 12
            },
            "wind": {
                "speed": 3.21,
                "deg": 280.504
            },
            "rain": {},
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2017-05-21 09:00:00"
        },
        {
            "dt": 1495368000,
            "main": {
                "temp": 292.24,
                "temp_min": 292.24,
                "temp_max": 292.24,
                "pressure": 1031.54,
                "sea_level": 1037.36,
                "grnd_level": 1031.54,
                "humidity": 77,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02d"
                }
            ],
            "clouds": {
                "all": 20
            },
            "wind": {
                "speed": 3.65,
                "deg": 281.503
            },
            "rain": {},
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2017-05-21 12:00:00"
        },
        {
            "dt": 1495378800,
            "main": {
                "temp": 292.656,
                "temp_min": 292.656,
                "temp_max": 292.656,
                "pressure": 1030.87,
                "sea_level": 1036.67,
                "grnd_level": 1030.87,
                "humidity": 68,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03d"
                }
            ],
            "clouds": {
                "all": 36
            },
            "wind": {
                "speed": 3.26,
                "deg": 296.001
            },
            "rain": {},
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2017-05-21 15:00:00"
        },
        {
            "dt": 1495389600,
            "main": {
                "temp": 291.643,
                "temp_min": 291.643,
                "temp_max": 291.643,
                "pressure": 1030.54,
                "sea_level": 1036.2,
                "grnd_level": 1030.54,
                "humidity": 63,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "02d"
                }
            ],
            "clouds": {
                "all": 8
            },
            "wind": {
                "speed": 1.97,
                "deg": 298.002
            },
            "rain": {},
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2017-05-21 18:00:00"
        },
        {
            "dt": 1495400400,
            "main": {
                "temp": 287.108,
                "temp_min": 287.108,
                "temp_max": 287.108,
                "pressure": 1030.72,
                "sea_level": 1036.51,
                "grnd_level": 1030.72,
                "humidity": 70,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "02n"
                }
            ],
            "clouds": {
                "all": 8
            },
            "wind": {
                "speed": 1.68,
                "deg": 295
            },
            "rain": {},
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2017-05-21 21:00:00"
        },
        {
            "dt": 1495411200,
            "main": {
                "temp": 284.931,
                "temp_min": 284.931,
                "temp_max": 284.931,
                "pressure": 1030.63,
                "sea_level": 1036.45,
                "grnd_level": 1030.63,
                "humidity": 81,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02n"
                }
            ],
            "clouds": {
                "all": 12
            },
            "wind": {
                "speed": 1.02,
                "deg": 329
            },
            "rain": {},
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2017-05-22 00:00:00"
        },
        {
            "dt": 1495422000,
            "main": {
                "temp": 283.777,
                "temp_min": 283.777,
                "temp_max": 283.777,
                "pressure": 1030.01,
                "sea_level": 1035.85,
                "grnd_level": 1030.01,
                "humidity": 84,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02d"
                }
            ],
            "clouds": {
                "all": 20
            },
            "wind": {
                "speed": 0.77,
                "deg": 45.501
            },
            "rain": {},
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2017-05-22 03:00:00"
        },
        {
            "dt": 1495432800,
            "main": {
                "temp": 289.206,
                "temp_min": 289.206,
                "temp_max": 289.206,
                "pressure": 1029.73,
                "sea_level": 1035.49,
                "grnd_level": 1029.73,
                "humidity": 74,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 2.03,
                "deg": 128.501
            },
            "rain": {},
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2017-05-22 06:00:00"
        },
        {
            "dt": 1495443600,
            "main": {
                "temp": 293.043,
                "temp_min": 293.043,
                "temp_max": 293.043,
                "pressure": 1028.99,
                "sea_level": 1034.74,
                "grnd_level": 1028.99,
                "humidity": 78,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02d"
                }
            ],
            "clouds": {
                "all": 12
            },
            "wind": {
                "speed": 2.51,
                "deg": 154.505
            },
            "rain": {},
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2017-05-22 09:00:00"
        },
        {
            "dt": 1495454400,
            "main": {
                "temp": 293.236,
                "temp_min": 293.236,
                "temp_max": 293.236,
                "pressure": 1027.97,
                "sea_level": 1033.62,
                "grnd_level": 1027.97,
                "humidity": 69,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 68
            },
            "wind": {
                "speed": 2.76,
                "deg": 174.008
            },
            "rain": {},
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2017-05-22 12:00:00"
        },
        {
            "dt": 1495465200,
            "main": {
                "temp": 294.196,
                "temp_min": 294.196,
                "temp_max": 294.196,
                "pressure": 1026.54,
                "sea_level": 1032.21,
                "grnd_level": 1026.54,
                "humidity": 67,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02d"
                }
            ],
            "clouds": {
                "all": 20
            },
            "wind": {
                "speed": 2.66,
                "deg": 170.001
            },
            "rain": {},
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2017-05-22 15:00:00"
        },
        {
            "dt": 1495476000,
            "main": {
                "temp": 293.106,
                "temp_min": 293.106,
                "temp_max": 293.106,
                "pressure": 1024.92,
                "sea_level": 1030.57,
                "grnd_level": 1024.92,
                "humidity": 61,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 56
            },
            "wind": {
                "speed": 2.56,
                "deg": 147.5
            },
            "rain": {},
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2017-05-22 18:00:00"
        },
        {
            "dt": 1495486800,
            "main": {
                "temp": 290.348,
                "temp_min": 290.348,
                "temp_max": 290.348,
                "pressure": 1024.29,
                "sea_level": 1030,
                "grnd_level": 1024.29,
                "humidity": 61,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 88
            },
            "wind": {
                "speed": 3.61,
                "deg": 139
            },
            "rain": {},
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2017-05-22 21:00:00"
        }
    ],
    "city": {
        "id": 2950159,
        "name": "Berlin",
        "coord": {
            "lat": 52.5244,
            "lon": 13.4105
        },
        "country": "DE"
    }
}
`;
