"use client";

import { useEffect, useState } from "react";
import { CloudSun, MapPin } from "lucide-react";

export default function Weather() {

  const [temp, setTemp] = useState<number | null>(null);
  const [city, setCity] = useState<string>("Detecting...");
  const [error, setError] = useState<string>("");

  // temperature
  const fetchTemperature = async (lat: number, lon: number) => {

    try {

      const res = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
      );

      const data = await res.json();

      if (data?.current_weather?.temperature !== undefined) {

        setTemp(Math.round(data.current_weather.temperature));

      }

    } catch {

      setTemp(null);

    }

  };

  // city
  const fetchCity = async (lat: number, lon: number) => {

    try {

      const res = await fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`,
        {
          headers: {
            Accept: "application/json"
          }
        }
      );

      const data = await res.json();

      const shortName = data.display_name
        ?.split(",")
        .slice(0, 2)
        .join(", ");

      setCity(shortName || "Unknown");

    } catch {

      setCity("Unknown");

    }

  };

  // get location (mobile-safe)
  useEffect(() => {

    const getLocation = () => {

      if (!navigator.geolocation) {

        setError("Geolocation not supported");
        return;

      }

      navigator.geolocation.getCurrentPosition(

        async (pos) => {

          const lat = pos.coords.latitude;
          const lon = pos.coords.longitude;

          console.log("Live:", lat, lon);

          await Promise.all([
            fetchTemperature(lat, lon),
            fetchCity(lat, lon)
          ]);

        },

        async (err) => {

          console.log("Error:", err.message);

          setError("Location blocked");

          // fallback Delhi
          await Promise.all([
            fetchTemperature(25.59, 85.13),
            fetchCity(25.59, 85.13)
          ]);

        },

        {
          enableHighAccuracy: true,
          timeout: 20000,
          maximumAge: 0
        }

      );

    };

    // small delay helps mobile
    setTimeout(getLocation, 500);

  }, []);

  return (

    <div className="flex items-center gap-2 text-green-600 font-medium">

      <CloudSun size={18} />
      <p className="text-[12px] sm:text-xl">
{temp !== null ? `${temp}°C` : "--"}
      </p>

      

      <span className="flex items-center gap-1 text-gray-600 dark:text-white">

        <MapPin size={14} />
        <p className="text-[11px] sm:text-xl text-center">
 {city}
        </p>

       

      </span>

      {/* {error && (
        <span className="text-red-500 text-xs">
          ({error})
        </span>
      )} */}

    </div>

  );

}
