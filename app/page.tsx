import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Chatbot from "./components/Chatbot";
import HowitWorks from "./components/HowitWorks";
export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0f1f14] transition-colors duration-300">
      <Navbar />
      <Hero />
      <Chatbot />
      <HowitWorks />



    </div>
  );
}
