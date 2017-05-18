import * as Out from './Logger';
import * as Api from './ApiModule';
import * as Parser from './ParserModule';
import * as Sailing from './IsSailingModule';
import * as Speak from './SpeakModule';

export function handleIntentIsSailingWeather(
    location: string,
    onFinished: (string) => any) {
    Api.getCurrentForecast(
        location,
        (result) => {
            let forecast = Parser.parseToForecast(result);
            if (!forecast || forecast.length == 0)
                return handleError(onFinished);
            
            let wind = Sailing.getWindFromForecast(forecast, Date.now());
            if (!wind)
                return handleError(onFinished);
            
            let output = Speak.getPositiveResponseForWindSpeed(wind.speedBft);
            onFinished(output);
        },
        (error) => {
            return handleError(onFinished);
        }
    )
}

function handleError(onResult: (string) => any) {
    Out.log('handleError');
    onResult('error');
}