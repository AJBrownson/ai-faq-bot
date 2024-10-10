import { Button } from "./ui/button";

const CTASection = () => {
    return (
      <section className="bg-blue-600 dark:bg-blue-700 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Revolutionize Your Social Media Management?
          </h2>
          <Button size="lg" className="bg-white text-blue-600">
            Try Teeweety for Free
          </Button>
        </div>
      </section>
    );
  };
  
  export default CTASection;
  