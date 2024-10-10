import { Button } from "@/components/ui/button";
import Image from "next/image";
import Hero from "@/public/socials.jpg"


export default function HeroSection() {
  return (
    <section className="bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-4 space-y-8 md:space-y-0 md:space-x-12">
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <Image
            src={Hero}
            alt="Hero Image"
            className="w-96 h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 flex flex-col items-start space-y-4">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
            Take Control of Your Social Media
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Teeweety helps you plan, schedule, and analyze your social media posts with AI-powered insights.
          </p>
          <Button size="lg">
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
};
