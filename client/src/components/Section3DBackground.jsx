import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const COLORS = [
  { base: '#F97316', light: '#FDBA74' },
  { base: '#EF4444', light: '#FCA5A5' },
  { base: '#3B82F6', light: '#93C5FD' },
  { base: '#EAB308', light: '#FDE047' },
  { base: '#22C55E', light: '#86EFAC' },
  { base: '#6366F1', light: '#A5B4FC' },
];

const buildItems = () =>
  Array.from({ length: 14 }, (_, i) => ({
    id: i,
    x: 5 + Math.random() * 88,
    y: 5 + Math.random() * 88,
    width: 28 + Math.random() * 54,
    height: 22 + Math.random() * 44,
    rotateX: Math.random() * 360,
    rotateY: Math.random() * 360,
    duration: 10 + Math.random() * 14,
    delay: Math.random() * 5,
    colorSet: COLORS[i % COLORS.length],
  }));

const Section3DBackground = () => {
  const items = useMemo(() => buildItems(), []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0" style={{ perspective: 1200 }}>
      {items.map((item) => (
        <motion.div
          key={item.id}
          className="absolute rounded-xl"   
          style={{
            left: `${item.x}%`,
            top: `${item.y}%`,
            width: item.width,
            height: item.height,
            background: `linear-gradient(135deg, ${item.colorSet.light}, ${item.colorSet.base})`,
            boxShadow: '0 10px 40px rgba(0,0,0,0.18), inset 0 2px 0 rgba(255,255,255,0.35)',
            opacity: 0.13,
            transformStyle: 'preserve-3d',
            rotateX: item.rotateX,
            rotateY: item.rotateY,
          }}
          animate={{
            y: [0, -22, 0],
            rotateX: [item.rotateX, item.rotateX + 360],
            rotateY: [item.rotateY, item.rotateY + 180],
          }}
          transition={{
            duration: item.duration,
            repeat: Infinity,
            ease: 'linear',
            delay: item.delay,
          }}
        />
      ))}
    </div>
  );
};

export default Section3DBackground;
