import React, { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  className?: string;
}

export default function AnimatedCounter({ end, duration = 2, suffix = '', className = '' }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = React.useRef(null);
  const inView = useInView(ref);

  useEffect(() => {
    if (inView && !isVisible) {
      setIsVisible(true);
      let startTime: number;
      let animationId: number;

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);

        setCount(Math.floor(progress * end));

        if (progress < 1) {
          animationId = requestAnimationFrame(animate);
        }
      };

      animationId = requestAnimationFrame(animate);

      return () => {
        if (animationId) {
          cancelAnimationFrame(animationId);
        }
      };
    }
  }, [inView, end, duration, isVisible]);

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.5 }}
    >
      {count}{suffix}
    </motion.span>
  );
}