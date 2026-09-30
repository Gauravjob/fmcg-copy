import React from 'react';
import { motion } from 'framer-motion';

const offsets = {
  up: { x: 0, y: 36 },
  down: { x: 0, y: -36 },
  left: { x: 64, y: 0 },
  right: { x: -64, y: 0 },
  scale: { x: 0, y: 24 },
  none: { x: 0, y: 0 },
};

const Reveal = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.65,
  className = '',
  once = true,
  amount = 0.2,
  style,
}) => {
  const offset = offsets[direction] || offsets.up;

  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, x: offset.x, y: offset.y, scale: direction === 'scale' ? 0.94 : 1 }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
