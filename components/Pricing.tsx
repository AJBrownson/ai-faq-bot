import { Button } from "./ui/button";

const Pricing = () => {
    const plans = [
      {
        title: 'Basic Plan',
        price: '$9/month',
        features: ['5 social accounts', 'Basic analytics', 'Email support'],
      },
      {
        title: 'Pro Plan',
        price: '$29/month',
        features: ['15 social accounts', 'Advanced analytics', 'Priority support'],
      },
      {
        title: 'Enterprise Plan',
        price: 'Contact us',
        features: ['Unlimited social accounts', 'Custom analytics', '24/7 support'],
      },
    ];
  
    return (
      <section className="bg-white dark:bg-gray-800 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-12">Choose Your Plan</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div key={index} className="border p-6 rounded-lg shadow-md bg-gray-100 dark:bg-gray-900">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">{plan.title}</h3>
                <p className="text-2xl font-bold mb-4">{plan.price}</p>
                <ul className="text-gray-600 dark:text-gray-300 mb-6 space-y-2">
                  {plan.features.map((feature, i) => (
                    <li key={i}>• {feature}</li>
                  ))}
                </ul>
                <Button>Get Started</Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Pricing;
  