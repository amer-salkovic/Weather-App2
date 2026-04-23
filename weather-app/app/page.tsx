// src/app/page.tsx

import WeatherCard from "@/components/WeatherCard";
import {getWeatherApi} from "@/lib/weatherApi";
import WeatherSearch from "@/components/SerachCard";

function makeBackground(vreme: string) {
    switch (vreme) {
        case "Clear":
            return "/sun.jpg";
        case "Clouds":
            return "/cloud.jpg";
        case "Rain":
        case "Drizzle":
            return "/rain.jpg";
        case "Snow":
            return "/snow.jpg";
        default:
            return "/default.jpg"; // Uvek imaj rezervnu sliku!
    }
}




export default async function  Home() {
  const data = await getWeatherApi("Novi Pazar")
    const weather = data.weather[0].main;


    const backgroundImage =  makeBackground(weather)
  return (



      <main className="min-h-screen bg-slate-100 flex flex-col items-center justify-center p-4"
            style={{

                backgroundImage: ` url('${backgroundImage}')`
            }}>

        <div className="w-full max-w-md mb-8 text-center">
          <h1 className="text-3xl font-extrabold text-slate-800 mb-2">
            Trenutno Vreme
          </h1>
          <p className="text-slate-500">

          </p>
        </div>


          <WeatherSearch />


        <WeatherCard
            city={data.name}
            temp={data.main.temp}
            description={data.weather[0].description}
            humidity={data.main.humidity}
            wind={data.wind.speed}
            pressure={data.main.pressure}
        />

      </main>
  );
}