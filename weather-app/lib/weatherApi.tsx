import {WeatherResponse} from "@/types/Weatherresponse";

export async function  getWeatherApi(city: string):Promise<WeatherResponse> {
    const apiKey = process.env.OPENWEATHER_API_KEY;

    if (!apiKey) {
        throw new Error('Missing API key');
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=sr`;

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(response.statusText);
    }

    return response.json() as Promise<WeatherResponse>;


}