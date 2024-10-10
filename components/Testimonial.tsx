const Testimonials = () => {
  const testimonials = [
    {
      name: "Jane Doe",
      role: "Marketing Specialist",
      quote:
        "Teeweety has transformed the way I manage social media, saving me countless hours every week!",
      image: "/path-to-jane-image.jpg",
    },
    {
      name: "John Smith",
      role: "Content Creator",
      quote:
        "The AI recommendations are spot-on and helped me grow my audience faster than ever.",
      image: "/path-to-john-image.jpg",
    },
  ];

  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-12">
          What Our Users Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mx-auto mb-4"
              />
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                "{testimonial.quote}"
              </p>
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                {testimonial.name}
              </h4>
              <p className="text-gray-500 dark:text-gray-400">
                {testimonial.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
