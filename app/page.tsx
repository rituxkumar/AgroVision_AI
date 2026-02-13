import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0f1f14] transition-colors duration-300">
      <Navbar />

      <div className="pt-32 text-center">
        <h1 className="text-4xl font-bold text-green-600 dark:text-green-400">
          🌱 Welcome to AgroVision AI
        </h1>
      </div>


    </div>
  );
}
