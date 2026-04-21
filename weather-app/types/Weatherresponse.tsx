// types/weather.ts

// Ovde tačno opisujemo strukturu JSON-a koji nam vraća OpenWeather API
export interface WeatherResponse {
    name: string; // Ime grada
    main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        humidity: number;
    };
    weather: {
        id: number;
        main: string;
        description: string;
        icon: string;
    }[]; // Uglaste zagrade znače da je ovo niz (array)
    wind: {
        speed: number;
        deg: number;
    };
}