const Features = () => {
  const features = [
    {
      title: "AI-Powered Insights",
      description:
        "Get automatic recommendations based on your social media performance.",
      icon: "🧠",
    },
    {
      title: "Easy Scheduling",
      description: "Plan and automate your posts across platforms with ease.",
      icon: "📅",
    },
    {
      title: "Analytics Dashboard",
      description:
        "Track engagement and see what works best for your audience.",
      icon: "📊",
    },
  ];

  return (
    <section className="bg-white dark:bg-gray-800 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-10">
          Features That Make a Difference
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-100 dark:bg-gray-900 p-6 rounded-lg shadow-md"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
