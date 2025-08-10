import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X, Star, Zap, Crown, Shield } from 'lucide-react';

const pricingPlans = [
  {
    name: 'Starter',
    description: 'Perfect for small businesses and startups',
    price: { monthly: 299, yearly: 2990 },
    icon: Zap,
    color: 'from-blue-400 to-blue-600',
    features: [
      'Responsive Website Design',
      'Up to 5 Pages',
      'Basic SEO Optimization',
      'Contact Form Integration',
      'Mobile Optimization',
      '3 Months Support',
      'Basic Analytics Setup'
    ],
    notIncluded: [
      'E-commerce Functionality',
      'Advanced Integrations',
      'Custom Development'
    ],
    popular: false
  },
  {
    name: 'Professional',
    description: 'Ideal for growing businesses',
    price: { monthly: 599, yearly: 5990 },
    icon: Star,
    color: 'from-purple-400 to-purple-600',
    features: [
      'Everything in Starter',
      'Up to 15 Pages',
      'Advanced SEO Optimization',
      'E-commerce Integration',
      'Payment Gateway Setup',
      'Social Media Integration',
      '6 Months Support',
      'Advanced Analytics',
      'Blog/News Section',
      'Newsletter Integration'
    ],
    notIncluded: [
      'Custom Mobile App',
      'Advanced Automation'
    ],
    popular: true
  },
  {
    name: 'Enterprise',
    description: 'For large organizations with complex needs',
    price: { monthly: 1299, yearly: 12990 },
    icon: Crown,
    color: 'from-yellow-400 to-yellow-600',
    features: [
      'Everything in Professional',
      'Unlimited Pages',
      'Custom Development',
      'Mobile App Development',
      'Advanced Integrations',
      'Multi-language Support',
      '12 Months Support',
      'Priority Support',
      'Custom Analytics Dashboard',
      'Advanced Security Features',
      'Performance Optimization',
      'Dedicated Account Manager'
    ],
    notIncluded: [],
    popular: false
  }
];

const addOns = [
  {
    name: 'Mobile App Development',
    description: 'Native iOS and Android applications',
    price: 2500,
    icon: Shield
  },
  {
    name: 'Advanced SEO Package',
    description: 'Comprehensive SEO optimization and monitoring',
    price: 500,
    icon: Star
  },
  {
    name: 'Social Media Management',
    description: 'Monthly social media content and management',
    price: 300,
    icon: Zap
  },
  {
    name: 'Maintenance & Updates',
    description: 'Monthly website maintenance and updates',
    price: 150,
    icon: Shield
  }
];

const faqs = [
  {
    question: 'What is included in the support period?',
    answer: 'Our support includes bug fixes, minor updates, technical assistance, and guidance on using your website or application. We provide email and phone support during business hours.'
  },
  {
    question: 'Can I upgrade or downgrade my plan?',
    answer: 'Yes, you can change your plan at any time. When upgrading, you\'ll pay the difference immediately. When downgrading, the change will take effect at your next billing cycle.'
  },
  {
    question: 'Do you offer custom development?',
    answer: 'Absolutely! We specialize in custom development solutions. Contact us to discuss your specific requirements and get a personalized quote.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, bank transfers, and PayPal. For enterprise clients, we also offer invoice-based billing with NET 30 terms.'
  },
  {
    question: 'Is there a setup fee?',
    answer: 'No, there are no setup fees for any of our plans. The price you see is exactly what you pay to get started.'
  }
];

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleAddOn = (addOnName: string) => {
    setSelectedAddOns(prev => 
      prev.includes(addOnName) 
        ? prev.filter(name => name !== addOnName)
        : [...prev, addOnName]
    );
  };

  const calculateTotal = (planPrice: number) => {
    const addOnTotal = addOns
      .filter(addOn => selectedAddOns.includes(addOn.name))
      .reduce((sum, addOn) => sum + addOn.price, 0);
    return planPrice + addOnTotal;
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
              Simple,{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Transparent
              </span>{' '}
              Pricing
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Choose the perfect plan for your business. No hidden fees, no surprises. 
              Scale up or down as your needs change.
            </p>
          </motion.div>

          {/* Billing Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-10 flex justify-center"
          >
            <div className="flex items-center bg-white dark:bg-gray-800 rounded-lg p-1 shadow-lg">
              <button
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  !isYearly 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                }`}
                onClick={() => setIsYearly(false)}
              >
                Monthly
              </button>
              <button
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  isYearly 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                }`}
                onClick={() => setIsYearly(true)}
              >
                Yearly
                <span className="ml-2 bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                  Save 17%
                </span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative rounded-2xl bg-white dark:bg-gray-800 p-8 shadow-lg ${
                  plan.popular 
                    ? 'ring-2 ring-blue-600 scale-105' 
                    : 'hover:shadow-xl transition-shadow duration-300'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="flex items-center justify-between">
                  <div className={`inline-flex rounded-lg bg-gradient-to-r ${plan.color} p-3 text-white shadow-lg`}>
                    <plan.icon className="h-6 w-6" />
                  </div>
                  {plan.popular && (
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                  )}
                </div>

                <h3 className="mt-6 text-2xl font-bold text-gray-900 dark:text-white">
                  {plan.name}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  {plan.description}
                </p>

                <div className="mt-6">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-gray-900 dark:text-white">
                      ${isYearly ? plan.price.yearly : plan.price.monthly}
                    </span>
                    <span className="ml-2 text-gray-600 dark:text-gray-400">
                      {isYearly ? '/year' : '/month'}
                    </span>
                  </div>
                  {isYearly && (
                    <p className="mt-1 text-sm text-green-600">
                      Save ${(plan.price.monthly * 12) - plan.price.yearly} per year
                    </p>
                  )}
                </div>

                <ul className="mt-8 space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                  {plan.notIncluded.map((feature, idx) => (
                    <li key={idx} className="flex items-center opacity-50">
                      <X className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-400 line-through">{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  className={`mt-8 w-full rounded-md px-6 py-3 text-center font-semibold transition-colors ${
                    plan.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get Started
                </motion.button>

                <div className="mt-4 text-center">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Total: ${calculateTotal(isYearly ? plan.price.yearly : plan.price.monthly)}
                    {selectedAddOns.length > 0 && (
                      <span className="text-blue-600"> (with add-ons)</span>
                    )}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="bg-gray-50 dark:bg-gray-800 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Enhance Your Plan
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Add extra features and services to customize your package
            </p>
          </motion.div>

          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {addOns.map((addOn, index) => (
              <motion.div
                key={addOn.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative rounded-2xl bg-white dark:bg-gray-900 p-6 shadow-lg cursor-pointer transition-all duration-300 ${
                  selectedAddOns.includes(addOn.name)
                    ? 'ring-2 ring-blue-600 bg-blue-50 dark:bg-blue-900/20'
                    : 'hover:shadow-xl'
                }`}
                onClick={() => toggleAddOn(addOn.name)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <addOn.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {addOn.name}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {addOn.description}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                      ${addOn.price}
                    </p>
                    <div className={`mt-2 w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      selectedAddOns.includes(addOn.name)
                        ? 'bg-blue-600 border-blue-600'
                        : 'border-gray-300 dark:border-gray-600'
                    }`}>
                      {selectedAddOns.includes(addOn.name) && (
                        <Check className="h-4 w-4 text-white" />
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="mx-auto mt-16 max-w-3xl">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="border-b border-gray-200 dark:border-gray-700"
              >
                <button
                  className="flex w-full items-center justify-between py-6 text-left"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="text-lg font-semibold text-gray-900 dark:text-white">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openFaq === index ? 45 : 0 }}
                    className="ml-6 flex-shrink-0"
                  >
                    <div className="h-6 w-6 text-gray-400">+</div>
                  </motion.div>
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: openFaq === index ? 'auto' : 0 }}
                  className="overflow-hidden"
                >
                  <div className="pb-6 text-gray-600 dark:text-gray-300">
                    {faq.answer}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 dark:bg-blue-700 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Get Started?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
              Have questions about our pricing? Need a custom solution? 
              Let's discuss your specific requirements.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <motion.a
                href="/contact"
                className="rounded-md bg-white px-6 py-3 text-lg font-semibold text-blue-600 shadow-sm hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Custom Quote
              </motion.a>
              <a
                href="/services"
                className="text-lg font-semibold leading-6 text-white hover:text-blue-100 transition-colors"
              >
                View Services <span aria-hidden="true">→</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}