const Features = () => {
  const features = [
    {
      title: "AI-Driven Scheduling",
      description:
        "AI Analysis of user activity patterns and engagement trends to determine the best times to post for each social media platform, ensuring maximum reach and engagement.",
      icon: "🧠",
    },
    {
      title: "Bulk Upload and Calendar View",
      description:
        "Upload and schedule multiple posts at once using Teeweety's bulk upload feature and manage your content through an interactive calendar interface.",
      icon: "📅",
    },
    {
      title: "Post Performance Analytics",
      description:
        "Detailed analytics on post performance, including metrics like reach, engagement, click-through rates, and conversions.",
      icon: "📊",
    },
  ];

  return (
    <section className="bg-white dark:bg-gray-800 py-20 font-geistMono">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-10 font-geistSans">
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
