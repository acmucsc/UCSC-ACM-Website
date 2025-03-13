import { motion } from 'framer-motion';
import { useRef } from 'react';

const images = [
  'https://picsum.photos/300/200?random=1',
  'https://picsum.photos/300/200?random=2',
  'https://picsum.photos/300/200?random=3',
  'https://picsum.photos/300/200?random=4',
  'https://picsum.photos/300/200?random=5',
];

export default function ScrollingCarousel() {
  const carouselRef = useRef(null);

  return (
    <div className="overflow-hidden relative w-full h-64 bg-gray-100 flex items-center">
      <motion.div
        ref={carouselRef}
        className="flex"
        animate={{ x: ['0%', '-100%'] }}
        transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
      >
        {[...images, ...images].map((src, index) => (
          <img key={index} src={src} alt="carousel" className="w-auto h-full object-cover mx-2" />
        ))}
      </motion.div>
    </div>
  );
}