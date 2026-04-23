import {getWeatherApi} from "@/lib/weatherApi";
import Link from "next/link";
import WeatherCard from "@/components/WeatherCard";


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


export default async function  CityWeather({params}: {params: {city: string}}) {
    const resolvedParams = await params
    const cityName = decodeURIComponent(resolvedParams.city);
    const data = await getWeatherApi(cityName)

    const weather = data.weather[0].main;


    const backgroundImage =  makeBackground(weather)



    return (
        // Dodali smo bg-cover i sliku sa Unsplash-a za test (možeš je kasnije promeniti)
        <main
            className="min-h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center p-4"
            style={{

                backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url('${backgroundImage}')`
            }}
        >

            {/* Dugme za povratak (sada sa belim tekstom zbog tamne pozadine) */}
            <div className="w-full max-w-4xl mb-6 flex justify-between items-center">
                <Link href="/" className="text-white/80 font-medium hover:text-white transition bg-black/20 px-4 py-2 rounded-xl backdrop-blur-md border border-white/10">
                    &larr; Nova pretraga
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
    );

}
