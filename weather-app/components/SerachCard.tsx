"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBar() {
    const [city, setCity] = useState("");
    const router = useRouter();

    const searchCity = (e: React.FormEvent) => {
        e.preventDefault();

        if (city.trim() !== "") {
            router.push(`/weather/${city.trim()}`);
        }
    }

    return (
        <form
            onSubmit={searchCity}
            // Dodali smo "staklo" pozadinu celoj formi
            className="w-full max-w-md mb-10 flex gap-2 p-2 bg-black/20 backdrop-blur-md rounded-full border border-white/20 shadow-lg"
        >
            <input
                type="text"
                placeholder="Unesi ime grada..."
                value={city}
                onChange={(e) => setCity(e.target.value)}
                // Input je sada proziran (bg-transparent), tekst je beo
                className="flex-1 px-6 py-3 bg-transparent text-white placeholder-gray-300 focus:outline-none focus:ring-0 text-lg"
            />
            <button
                type="submit"
                // Dugme je dobilo moderniji, mekši izgled
                className="px-8 py-3 bg-white/20 text-white font-medium rounded-full hover:bg-white/30 transition-all backdrop-blur-sm border border-white/10"
            >
                Traži
            </button>
        </form>
    );
}