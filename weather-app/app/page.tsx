// src/app/page.tsx

import WeatherCard from "@/components/WeatherCard";
import {getWeatherApi} from "@/lib/weatherApi";

export default async function  Home() {
  const data = await getWeatherApi("Novi Pazar")
  return (



      <main className="min-h-screen bg-slate-100 flex flex-col items-center justify-center p-4">

        <div className="w-full max-w-md mb-8 text-center">
          <h1 className="text-3xl font-extrabold text-slate-800 mb-2">
            Trenutno Vreme
          </h1>
          <p className="text-slate-500">

          </p>
        </div>


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