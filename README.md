# 🌤️ Next.js Weather App

A modern, fast, and responsive web application for tracking weather forecasts. This project is built using the latest web technologies, focusing on an excellent user experience and a clean "Glassmorphism" design.

## 🚀 Tech Stack

- **Framework:** Next.js 15+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Data Fetching:** OpenWeather API
- **Architecture:** React Server & Client Components

## ✨ Key Features

- **Real-time Search:** Search for current weather conditions in any city worldwide.
- **Dynamic Routing:** Utilizes Next.js dynamic routes (`/prognoza/[grad]`) for seamless navigation.
- **Dynamic Backgrounds:** The background image automatically adapts based on current weather conditions (e.g., Clear, Rain, Snow, Clouds).
- **Glassmorphism UI:** Modern user interface with frosted glass (backdrop-blur) effects that blend perfectly with the dynamic backgrounds.
- **Async Data Handling:** Efficient API data fetching with full adherence to Next.js 15+ standards for `Promise` parameters.

## 🛠️ Local Development Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Configure Environment Variables:**
   Create a `.env.local` file in the root directory and add your OpenWeather API key:
   ```env
   NEXT_PUBLIC_WEATHER_API_KEY=your_api_key_here
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **View the app:**
   Open your browser and visit `http://localhost:3000`.
