import { Button } from "@/components/ui/button";
import Image from "next/image";
import Hero from "@/public/socials.jpg";

export default function HeroSection() {
  return (
    <section className="py-5 lg:py-10 bg-gray-100 dark:bg-gray-900"> 
      <div className="container mx-auto flex flex-col md:flex-row items-center px-4 lg:px-14 space-y-8 md:space-y-0 md:space-x-12 justify-between">
        {/* Text Section md:space-x-12 md:w-1/2 */}
        <div className="w-full flex flex-col items-start space-y-4 mt-5 lg:mt-0">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 dark:text-white">
            Take Control of Your Social Media
          </h1>
          <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300">
            Teeweety helps you plan, schedule, and analyze your social media
            posts with AI-powered insights.
          </p>
          <Button className="text-sm lg:text-lg rounded-sm py-5 font-semibold hover:bg-none">Get Started</Button>
        </div>

        {/* Image Section */}
        <div className="w-full order-first lg:order-last">
          <Image
            src={Hero}
            alt="Hero Image"
          />
        </div>
      </div>
    </section>
  );
}
