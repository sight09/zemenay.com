import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ChevronRight, 
  Play, 
  Users, 
  Award, 
  CheckCircle,
  ArrowRight,
  Star,
  Globe,
  Smartphone,
  Palette,
  TrendingUp,
  Shield,
  Zap
} from 'lucide-react';
import AnimatedCounter from '../components/ui/AnimatedCounter';

const stats = [
  { id: 1, name: 'Projects Delivered', value: 150, suffix: '+' },
  { id: 2, name: 'Client Satisfaction', value: 98, suffix: '%' },
  { id: 3, name: 'Years Experience', value: 8, suffix: '+' },
  { id: 4, name: 'Team Members', value: 25, suffix: '+' },
];

const services = [
  {
    name: 'Web Development',
    description: 'Custom web applications built with cutting-edge technologies',
    icon: Globe,
    color: 'from-blue-400 to-blue-600',
  },
  {
    name: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications',
    icon: Smartphone,
    color: 'from-purple-400 to-purple-600',
  },
  {
    name: 'UI/UX Design',
    description: 'Beautiful and intuitive user experiences',
    icon: Palette,
    color: 'from-pink-400 to-pink-600',
  },
  {
    name: 'Digital Marketing',
    description: 'Strategic digital marketing and SEO solutions',
    icon: TrendingUp,
    color: 'from-green-400 to-green-600',
  },
  {
    name: 'Consulting',
    description: 'Technology consulting and strategic planning',
    icon: Shield,
    color: 'from-yellow-400 to-yellow-600',
  },
  {
    name: 'Performance',
    description: 'Optimization and performance enhancement',
    icon: Zap,
    color: 'from-red-400 to-red-600',
  },
];

const testimonials = [
  {
    body: 'Zemenay Tech transformed our digital presence completely. Their attention to detail and technical expertise is unmatched.',
    author: {
      name: 'Sarah Johnson',
      handle: 'sarahj',
      role: 'CEO at TechStart',
      imageUrl: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    },
  },
  {
    body: 'The mobile app they developed exceeded our expectations. User engagement increased by 300% after launch.',
    author: {
      name: 'Michael Chen',
      handle: 'mchen',
      role: 'Product Manager at InnovateCorp',
      imageUrl: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    },
  },
  {
    body: 'Working with Zemenay Tech was a game-changer. They delivered on time and within budget while maintaining exceptional quality.',
    author: {
      name: 'Emily Rodriguez',
      handle: 'erodriguez',
      role: 'Founder at StartupXYZ',
      imageUrl: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    },
  },
];

const clients = [
  'Google', 'Microsoft', 'Apple', 'Amazon', 'Meta', 'Netflix'
];

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 pt-20">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <span className="inline-flex items-center rounded-full bg-blue-100 dark:bg-blue-900/30 px-3 py-1 text-sm font-medium text-blue-700 dark:text-blue-300">
                <span className="mr-2 h-2 w-2 rounded-full bg-blue-600"></span>
                Revolutionizing Digital Experiences
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl lg:text-7xl"
            >
              Revolutionize Your{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Digital Experience
              </span>{' '}
              with Scalable Solutions
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-300"
            >
              We transform innovative ideas into powerful digital realities. Our expert team delivers 
              cutting-edge web applications, mobile solutions, and digital experiences that drive growth and success.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-10 flex items-center justify-center gap-x-6"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact"
                  className="rounded-md bg-blue-600 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 flex items-center"
                >
                  Let's Build Together
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </motion.div>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center text-lg font-semibold leading-6 text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Play className="mr-2 h-6 w-6 fill-current" />
                Watch Our Story
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Floating Animation */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-10 opacity-20"
        >
          <div className="h-20 w-20 rounded-full bg-gradient-to-r from-blue-400 to-purple-600"></div>
        </motion.div>
        
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 right-10 opacity-20"
        >
          <div className="h-16 w-16 rounded-full bg-gradient-to-r from-pink-400 to-red-600"></div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="bg-white dark:bg-gray-900 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl lg:max-w-none"
          >
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                Trusted by Industry Leaders
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
                Our track record speaks for itself
              </p>
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col bg-gray-50 dark:bg-gray-800 p-8"
                >
                  <dt className="text-sm font-semibold leading-6 text-gray-600 dark:text-gray-400">
                    {stat.name}
                  </dt>
                  <dd className="order-first text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </dd>
                </motion.div>
              ))}
            </dl>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
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
              Our Services
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Comprehensive digital solutions to transform your business
            </p>
          </motion.div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-900 p-8 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
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
                  <div className="mt-6 flex items-center text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
                    <span className="text-sm font-medium">Learn more</span>
                    <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="bg-white dark:bg-gray-900 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-lg font-semibold text-gray-600 dark:text-gray-400">
              Trusted by leading companies worldwide
            </h2>
            <div className="mx-auto mt-10 grid max-w-lg grid-cols-3 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none">
              {clients.map((client, index) => (
                <motion.div
                  key={client.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="col-span-1 flex flex-col items-center justify-center group cursor-pointer"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    {client.logo}
                  </div>
                  <span className="mt-2 text-sm font-medium text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {client.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
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
              What Our Clients Say
            </h2>
          </motion.div>
          <div className="mx-auto mt-16 max-w-3xl">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-xl font-medium leading-8 text-gray-900 dark:text-white sm:text-2xl">
                "{testimonials[currentTestimonial].body}"
              </blockquote>
              <div className="mt-8 flex items-center justify-center space-x-4">
                <img
                  className="h-12 w-12 rounded-full"
                  src={testimonials[currentTestimonial].author.imageUrl}
                  alt=""
                />
                <div className="text-left">
                  <div className="font-semibold text-gray-900 dark:text-white">
                    {testimonials[currentTestimonial].author.name}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">
                    {testimonials[currentTestimonial].author.role}
                  </div>
                </div>
              </div>
            </motion.div>
            
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`h-2 w-2 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>
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
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
              Let's discuss your project and create something extraordinary together. 
              Our team is ready to bring your vision to life.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact"
                  className="rounded-md bg-white px-6 py-3 text-lg font-semibold text-blue-600 shadow-sm hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Start Your Project
                </Link>
              </motion.div>
              <Link
                to="/portfolio"
                className="text-lg font-semibold leading-6 text-white hover:text-blue-100 transition-colors"
              >
                View Our Work <span aria-hidden="true">→</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}