interface WeatherCardProps {
    city: string;
    temp: number;
    description: string;
    humidity: number;
    wind: number;
    pressure: number;
}

export default function WeatherCard({ city, temp, description, humidity, wind, pressure }: WeatherCardProps) {
    // Automatski uzimamo današnji datum na srpskom
    const date = new Date().toLocaleDateString('sr-RS', {
        weekday: 'long', day: 'numeric', month: 'short', year: 'numeric'
    });

    return (
        <div className="w-full max-w-4xl flex flex-col md:flex-row rounded-[2rem] overflow-hidden shadow-2xl bg-black/10 text-white backdrop-blur-md border border-white/20">

            {/* Leva strana: Glavna temperatura i grad */}
            <div className="flex-1 p-10 flex flex-col justify-end min-h-[300px] md:min-h-[450px]">
                <div className="flex items-end gap-4 drop-shadow-lg">
                    <h1 className="text-8xl md:text-9xl font-bold tracking-tighter">{Math.round(temp)}°</h1>
                    <div className="mb-4">
                        <h2 className="text-4xl md:text-5xl font-semibold tracking-wide">{city}</h2>
                        <p className="text-gray-200 text-sm mt-2">{date}</p>
                    </div>
                </div>
            </div>

            {/* Desna strana: Detalji o vremenu (Tamnije staklo) */}
            <div className="w-full md:w-[400px] bg-black/40 backdrop-blur-2xl p-10 flex flex-col justify-center border-l border-white/10">

                <h3 className="text-gray-400 text-sm font-medium mb-2 uppercase tracking-wider">Detalji vremena...</h3>
                <p className="text-xl font-semibold mb-10 uppercase tracking-wide">{description}</p>

                <div className="space-y-6">
                    <div className="flex justify-between items-center border-b border-white/10 pb-4">
                        <span className="text-gray-300">Vlažnost</span>
                        <div className="flex items-center gap-3">
                            <span className="font-medium text-lg">{humidity}%</span>
                            <span className="text-blue-300 text-xl">💧</span>
                        </div>
                    </div>

                    <div className="flex justify-between items-center border-b border-white/10 pb-4">
                        <span className="text-gray-300">Vetar</span>
                        <div className="flex items-center gap-3">
                            <span className="font-medium text-lg">{Math.round(wind * 3.6)} km/h</span>
                            <span className="text-gray-300 text-xl">💨</span>
                        </div>
                    </div>

                    <div className="flex justify-between items-center border-b border-white/10 pb-4">
                        <span className="text-gray-300">Pritisak</span>
                        <div className="flex items-center gap-3">
                            <span className="font-medium text-lg">{pressure} mb</span>
                            <span className="text-gray-300 text-xl">🌡️</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}