// src/components/WeatherCard.tsx

interface WeatherCardProps {
    city: string;
    temp: number;
    description: string;
    humidity: number;
    wind: number;
    pressure: number;
}

export default function WeatherCard({ city, temp, description, humidity, wind, pressure }: WeatherCardProps) {
    return (
        <div className="max-w-sm w-full bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl shadow-2xl p-6 text-white mx-auto">

            {/* Gornji deo: Lokacija i ikonica */}
            <div className="flex justify-between items-start mb-6">
                <div>
                    <h2 className="text-2xl font-bold tracking-wide">{city}</h2>
                    <p className="text-blue-100 text-sm mt-1">{description}</p>

                </div>
                <div className="text-5xl drop-shadow-md">
                    ☀️
                </div>
            </div>

            {/* Srednji deo: Glavna temperatura */}
            <div className="flex justify-center items-center my-10">
                <h1 className="text-7xl font-extrabold tracking-tighter">{temp}</h1>
                <span className="text-3xl ml-1 font-medium self-start mt-2">C</span>
            </div>

            {/* Donji deo: Dodatni detalji (Vlažnost, Vetar, Pritisak) */}
            <div className="bg-white/20 rounded-2xl p-4 flex justify-between text-sm backdrop-blur-sm border border-white/10">
                <div className="flex flex-col items-center">
                    <span className="text-blue-100 mb-1 text-xs uppercase font-semibold">Vlažnost</span>
                    <span className="font-bold text-lg">{humidity}</span>
                </div>
                <div className="flex flex-col items-center">
                    <span className="text-blue-100 mb-1 text-xs uppercase font-semibold">Vetar</span>
                    <span className="font-bold text-lg">{wind}</span>
                </div>
                <div className="flex flex-col items-center">
                    <span className="text-blue-100 mb-1 text-xs uppercase font-semibold">Pritisak</span>
                    <span className="font-bold text-lg">{pressure}</span>
                </div>
            </div>

        </div>
    );
}