import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

const groupIndian = (str) => {
  const [int, dec] = str.split('.');
  const grouped = int.replace(/\B(?=(\d{2})+(?!\d))/g, ',');
  return dec ? `${grouped}.${dec}` : grouped;
};

const parseValue = (value) => {
  const raw = String(value);
  const firstDigit = raw.search(/\d/);
  if (firstDigit === -1) return null;

  const prefix = raw.slice(0, firstDigit);
  const numberMatch = raw.slice(firstDigit).match(/[\d.]+/);
  const numberText = numberMatch ? numberMatch[0] : '0';
  const suffix = raw.slice(firstDigit + numberText.length);

  return {
    prefix,
    suffix,
    target: parseFloat(numberText) || 0,
    decimals: numberText.includes('.') ? numberText.split('.')[1].length : 0,
    useGrouping: numberText.includes(','),
  };
};

const CountUp = ({ value, duration = 1800, className = '' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const parsed = useMemo(() => parseValue(value), [value]);
  const [display, setDisplay] = useState(() => (parsed ? parsed.prefix + '0'.repeat(parsed.decimals) + parsed.suffix : value));

  useEffect(() => {
    if (!isInView || !parsed) return;

    let frame;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = parsed.target * eased;
      const text = current.toFixed(parsed.decimals);
      const formatted = parsed.useGrouping ? groupIndian(text) : text;
      setDisplay(`${parsed.prefix}${formatted}${parsed.suffix}`);

      if (progress < 1) frame = requestAnimationFrame(tick);
      else setDisplay(String(value));
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [isInView, parsed, duration, value]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
};

export default CountUp;
