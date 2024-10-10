import { Button } from "./ui/button";

export default function CTASection() {
  return (
    <section className="bg-gray-200 dark:bg-gray-900 py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-700 dark:text-white mb-6">
          Ready to Revolutionize Your Social Media Management?
        </h2>
        <Button className="font-semibold hover:bg-none py-4 rounded">
          Get started now
        </Button>
      </div>
    </section>
  );
}
