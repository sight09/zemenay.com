import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, 
  Smartphone, 
  Palette, 
  TrendingUp, 
  Shield, 
  Zap,
  Code,
  Database,
  Cloud,
  Search,
  ShoppingCart,
  Users,
  CheckCircle,
  ArrowRight,
  Star
} from 'lucide-react';

const services = [
  {
    id: 'web-development',
    name: 'Web Development',
    description: 'Custom web applications built with cutting-edge technologies for optimal performance and user experience.',
    icon: Globe,
    color: 'from-blue-400 to-blue-600',
    features: [
      'Responsive Design',
      'Modern Frameworks (React, Vue, Angular)',
      'Progressive Web Apps (PWA)',
      'API Integration',
      'Performance Optimization',
      'SEO-Friendly Architecture'
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'Tailwind CSS'],
    startingPrice: '$2,500',
    timeline: '4-12 weeks'
  },
  {
    id: 'mobile-development',
    name: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.',
    icon: Smartphone,
    color: 'from-purple-400 to-purple-600',
    features: [
      'iOS & Android Development',
      'Cross-Platform Solutions',
      'Native Performance',
      'App Store Optimization',
      'Push Notifications',
      'Offline Functionality'
    ],
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'],
    startingPrice: '$5,000',
    timeline: '8-16 weeks'
  },
  {
    id: 'ui-ux-design',
    name: 'UI/UX Design',
    description: 'Beautiful and intuitive user interfaces that enhance user engagement and drive conversions.',
    icon: Palette,
    color: 'from-pink-400 to-pink-600',
    features: [
      'User Research & Analysis',
      'Wireframing & Prototyping',
      'Visual Design',
      'Usability Testing',
      'Design Systems',
      'Accessibility Compliance'
    ],
    technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Principle'],
    startingPrice: '$1,500',
    timeline: '2-8 weeks'
  },
  {
    id: 'digital-marketing',
    name: 'Digital Marketing',
    description: 'Strategic digital marketing solutions to boost your online presence and drive business growth.',
    icon: TrendingUp,
    color: 'from-green-400 to-green-600',
    features: [
      'SEO Optimization',
      'Social Media Marketing',
      'Content Strategy',
      'PPC Advertising',
      'Email Marketing',
      'Analytics & Reporting'
    ],
    technologies: ['Google Analytics', 'SEMrush', 'Mailchimp', 'Hootsuite', 'Facebook Ads'],
    startingPrice: '$800/month',
    timeline: 'Ongoing'
  },
  {
    id: 'consulting',
    name: 'Technology Consulting',
    description: 'Expert technology consulting and strategic planning to guide your digital transformation journey.',
    icon: Shield,
    color: 'from-yellow-400 to-yellow-600',
    features: [
      'Technology Assessment',
      'Digital Strategy Planning',
      'Architecture Design',
      'Team Training',
      'Process Optimization',
      'Risk Assessment'
    ],
    technologies: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'Terraform'],
    startingPrice: '$150/hour',
    timeline: '1-4 weeks'
  },
  {
    id: 'ecommerce',
    name: 'E-commerce Solutions',
    description: 'Complete e-commerce platforms that drive sales and provide seamless shopping experiences.',
    icon: ShoppingCart,
    color: 'from-red-400 to-red-600',
    features: [
      'Custom E-commerce Development',
      'Payment Gateway Integration',
      'Inventory Management',
      'Order Processing',
      'Multi-vendor Support',
      'Mobile Commerce'
    ],
    technologies: ['Shopify', 'WooCommerce', 'Magento', 'Stripe', 'PayPal'],
    startingPrice: '$3,500',
    timeline: '6-14 weeks'
  }
];

const processSteps = [
  {
    step: '01',
    title: 'Discovery & Planning',
    description: 'We analyze your requirements and create a detailed project roadmap.',
    icon: Search
  },
  {
    step: '02',
    title: 'Design & Prototyping',
    description: 'Our designers create intuitive interfaces and interactive prototypes.',
    icon: Palette
  },
  {
    step: '03',
    title: 'Development',
    description: 'Our developers build your solution using cutting-edge technologies.',
    icon: Code
  },
  {
    step: '04',
    title: 'Testing & Launch',
    description: 'Rigorous testing ensures quality before we launch your project.',
    icon: Zap
  }
];

export default function Services() {
  const [selectedService, setSelectedService] = useState<string | null>(null);

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
              Our{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Comprehensive digital solutions to transform your business and drive growth. 
              From web development to digital marketing, we've got you covered.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 p-8 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-200 dark:border-gray-700"
                onClick={() => setSelectedService(selectedService === service.id ? null : service.id)}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                <div className="relative">
                  <div className={`inline-flex rounded-lg bg-gradient-to-r ${service.color} p-3 text-white shadow-lg`}>
                    <service.icon className="h-6 w-6" />
                  </div>
                  
                  <h3 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">
                    {service.name}
                  </h3>
                  
                  <p className="mt-4 text-gray-600 dark:text-gray-300">
                    {service.description}
                  </p>

                  <div className="mt-6 flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Starting from</p>
                      <p className="text-lg font-semibold text-gray-900 dark:text-white">{service.startingPrice}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500 dark:text-gray-400">Timeline</p>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">{service.timeline}</p>
                    </div>
                  </div>

                  <motion.div
                    initial={false}
                    animate={{ height: selectedService === service.id ? 'auto' : 0 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      
                      <div className="mt-4">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.technologies.map((tech, idx) => (
                            <span key={idx} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs rounded-full text-gray-600 dark:text-gray-300">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  <div className="mt-6 flex items-center text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
                    <span className="text-sm font-medium">
                      {selectedService === service.id ? 'Show less' : 'Learn more'}
                    </span>
                    <ArrowRight className={`ml-2 h-4 w-4 transform transition-transform ${selectedService === service.id ? 'rotate-90' : 'group-hover:translate-x-1'}`} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
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
              Our Process
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              We follow a proven methodology to ensure successful project delivery
            </p>
          </motion.div>

          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-lg font-bold text-lg mb-4">
                  {step.step}
                </div>
                <step.icon className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {step.description}
                </p>
                
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gray-300 dark:bg-gray-600"></div>
                )}
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
              Let's discuss your project and create a custom solution that meets your specific needs.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <motion.a
                href="/contact"
                className="rounded-md bg-white px-6 py-3 text-lg font-semibold text-blue-600 shadow-sm hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Free Consultation
              </motion.a>
              <a
                href="/pricing"
                className="text-lg font-semibold leading-6 text-white hover:text-blue-100 transition-colors"
              >
                View Pricing <span aria-hidden="true">→</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}