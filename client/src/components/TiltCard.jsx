import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from 'framer-motion';

const TiltCard = ({
  children,
  className = '',
  maxTilt = 9,
  lift = 1.015,
  glare = true,
  whileHover,
  ...rest
}) => {
  const pointX = useMotionValue(0.5);
  const pointY = useMotionValue(0.5);
  const pressed = useMotionValue(0);
  const hovering = useMotionValue(0);
  const areaRef = useRef(null);

  const spring = { stiffness: 220, damping: 18, mass: 0.35 };

  const rotateX = useSpring(useTransform(pointY, [0, 1], [maxTilt, -maxTilt]), spring);
  const rotateY = useSpring(useTransform(pointX, [0, 1], [-maxTilt, maxTilt]), spring);
  const pressScale = useSpring(pressed, { stiffness: 320, damping: 22 });
  const hoverScale = useSpring(hovering, { stiffness: 260, damping: 20 });
  const scale = useTransform(
    [pressScale, hoverScale],
    (p, h) => 1 - p * 0.035 + h * (lift - 1),
  );
  const glowX = useTransform(pointX, [0, 1], ['0%', '100%']);
  const glowY = useTransform(pointY, [0, 1], ['0%', '100%']);
  const glow = useMotionTemplate`radial-gradient(320px circle at ${glowX} ${glowY}, rgba(255,255,255,0.55), transparent 70%)`;
  const glowOpacity = useTransform(hovering, [0, 1], [0, 1]);

  const trackPointer = (event) => {
    const node = areaRef.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    pointX.set(Math.min(1, Math.max(0, (event.clientX - rect.left) / rect.width)));
    pointY.set(Math.min(1, Math.max(0, (event.clientY - rect.top) / rect.height)));
  };

  const handlePointerMove = (event) => {
    if (event.pointerType === 'touch') return;
    hovering.set(1);
    trackPointer(event);
  };

  const handlePointerDown = (event) => {
    pressed.set(1);
    hovering.set(1);
    trackPointer(event);
  };

  const handlePointerUp = () => {
    pressed.set(0);
    hovering.set(0);
    pointX.set(0.5);
    pointY.set(0.5);
  };

  return (
    <div className="h-full" style={{ perspective: 1200 }}>
      <motion.div
        ref={areaRef}
        className={`group ${className}`}
        style={{ rotateX, rotateY, scale, transformStyle: 'preserve-3d', willChange: 'transform' }}
        whileHover={whileHover}
        onPointerMove={handlePointerMove}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onPointerLeave={handlePointerUp}
        {...rest}
      >
        {children}
        {glare && (
          <motion.span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-[inherit] z-20 mix-blend-overlay"
            style={{ background: glow, opacity: glowOpacity }}
          />
        )}
      </motion.div>
    </div>
  );
};

export default TiltCard;
