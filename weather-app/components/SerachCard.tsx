"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function WeatherSearch() {
    const [city, setCity] = useState("");
    const router = useRouter();

    const searchCity = (e: React.FormEvent) => {
        e.preventDefault();

        if (city.trim() !== "") {
            router.push(`/weather/${city.trim()}`);
        }
    }

    return (
        <form onSubmit={searchCity} className="w-full max-w-md mb-8 flex gap-2">
            <input
                type="text"
                placeholder="Unesi ime grada..."
                value={city}
                onChange={(e) => setCity(e.target.value)}
                // Dodata je klasa 'text-black' na sam početak:
                className="text-black flex-1 px-4 py-3 rounded-2xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
            />
            <button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-2xl hover:bg-blue-700 transition shadow-sm"
            >
                Traži
            </button>
        </form>
    );
}