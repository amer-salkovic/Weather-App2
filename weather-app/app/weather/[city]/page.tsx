import {getWeatherApi} from "@/lib/weatherApi";
import Link from "next/link";
import WeatherCard from "@/components/WeatherCard";

export default async function  CityWeather({params}: {params: {city: string}}) {
    const resolvedParams = await params
    const cityName = decodeURIComponent(resolvedParams.city);
    const data = await getWeatherApi(cityName)


    return (
        <main className="min-h-screen bg-slate-100 flex flex-col items-center justify-center p-4">
            <div className="w-full max-w-sm mb-6">
                <Link href= "/" className="text-blue-600 font-medium hover:text-blue-800 transition">
                    &larr; Nazad na pretragu
                </Link>
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
    )

}
