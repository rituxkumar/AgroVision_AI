import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Chatbot from "./components/Chatbot";
import HowItWorks from "./components/HowItWorks";
import { SparklesPreview } from "./components/SparklesPreview";
import { ThreeDCardDemo } from "./components/ThreeDCardDemo";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0f1f14] transition-colors duration-300">

      <Hero />
      <Chatbot />

      <SparklesPreview />
      {/* feature sction  */}
      <ThreeDCardDemo />
      <HowItWorks />
      <Testimonials />
      <Footer />



    </div>
  );
}
