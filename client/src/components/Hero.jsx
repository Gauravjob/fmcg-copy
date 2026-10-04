import React, { useEffect, useRef, useState } from 'react';
import {
  motion,
  useMotionValue,
  useSpring,
  useScroll,
  useTransform,
} from 'framer-motion';
import {
  Shield,
  Users,
  Truck,
  Award,
  TrendingUp,
  Factory,
  ArrowRight,
  Store,
  Boxes,
  Sparkles,
} from 'lucide-react';

import Section3DBackground from './Section3DBackground';

import fmcgImage1 from '../assets/image1.png';
import fmcgImage2 from '../assets/image2.png';
import fmcgImage3 from '../assets/image3.png';
import fmcgImage4 from '../assets/image4.png';
import fmcgImage5 from '../assets/image5.png';

const Hero = () => {
  const sectionRef = useRef(null);
  const visualRef = useRef(null);

  const [isHovered, setIsHovered] = useState(false);

  /* =========================================================
     FMCG IMAGES
     ========================================================= */

  const fmcgImages = [
    fmcgImage1,
    fmcgImage2,
    fmcgImage3,
    fmcgImage4,
    fmcgImage5,
  ];

  const [currentImage, setCurrentImage] = useState(0);

  /* =========================================================
     AUTO IMAGE SLIDER
     ========================================================= */

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % fmcgImages.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [fmcgImages.length]);

  /* =========================================================
     MOUSE 3D MOVEMENT
     ========================================================= */

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [7, -7]),
    {
      stiffness: 120,
      damping: 18,
    }
  );

  const rotateY = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [-8, 8]),
    {
      stiffness: 120,
      damping: 18,
    }
  );

  const handleMouseMove = (event) => {
    if (!visualRef.current) return;

    const rect = visualRef.current.getBoundingClientRect();

    const x =
      (event.clientX - rect.left) / rect.width - 0.5;

    const y =
      (event.clientY - rect.top) / rect.height - 0.5;

    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  /* =========================================================
     SCROLL PARALLAX
     ========================================================= */

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const contentY = useTransform(
    scrollYProgress,
    [0, 1],
    [20, -35]
  );

  const visualY = useTransform(
    scrollYProgress,
    [0, 1],
    [80, -80]
  );

  const visualScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.92, 1, 0.95]
  );

  /* =========================================================
     FMCG FLOW
     ========================================================= */

  const flowSteps = [
    {
      icon: Factory,
      title: 'Brands make it',
      sub: 'Top FMCG companies',
      tone:
        'bg-amber-50 text-amber-600 border-amber-100',
    },
    {
      icon: Truck,
      title: 'We deliver it',
      sub: 'Vardha, door to door',
      tone:
        'bg-[#E6F3EF] text-[#007A4D] border-[#c9e6da]',
    },
    {
      icon: Store,
      title: 'You sell it',
      sub: 'In your own area',
      tone:
        'bg-red-50 text-[#E33E2B] border-red-100',
    },
  ];

  /* =========================================================
     FLOATING STATS
     ========================================================= */

  const floatingStats = [
    {
      id: 1,
      icon: Users,
      label: '67,500+ Retailers',
      sub: 'Served',
      pos: 'top-[8%] left-[-3%] xl:left-[-12%]',
      delay: 0,
      color: 'green',
    },
    {
      id: 2,
      icon: Truck,
      label: '24/7 Delivery',
      sub: 'Express Supply Chain',
      pos: 'bottom-[10%] left-[0%] xl:left-[-8%]',
      delay: 0.5,
      color: 'blue',
    },
    {
      id: 3,
      icon: Award,
      label: '30+ Years',
      sub: 'Unmatched Trust',
      pos: 'top-[17%] right-[-3%] xl:right-[-12%]',
      delay: 1,
      color: 'red',
    },
    {
      id: 4,
      icon: TrendingUp,
      label: '5+ States',
      sub: 'Growing Network',
      pos: 'bottom-[13%] right-[0%] xl:right-[-9%]',
      delay: 1.5,
      color: 'orange',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="
        relative
        pt-20
        md:pt-28
        pb-12
        md:pb-24
        overflow-hidden
        bg-white
      "
    >
      <Section3DBackground />

      {/* =====================================================
          BACKGROUND DOTS
      ====================================================== */}

      <div
        className="
          absolute
          top-24
          right-12
          opacity-[0.05]
          z-0
          pointer-events-none
        "
      >
        <div className="grid grid-cols-12 gap-6">
          {[...Array(144)].map((_, i) => (
            <div
              key={i}
              className="
                w-1
                h-1
                bg-gray-400
                rounded-full
              "
            />
          ))}
        </div>
      </div>

      {/* =====================================================
          BACKGROUND GLOWS
      ====================================================== */}

      <div
        className="
          absolute
          -top-40
          -left-40
          w-[560px]
          h-[560px]
          rounded-full
          bg-green-100/50
          blur-[120px]
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          top-[35%]
          -right-64
          w-[600px]
          h-[600px]
          rounded-full
          bg-green-50/70
          blur-[140px]
          pointer-events-none
        "
      />

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div
        className="
          max-w-[1440px]
          mx-auto
          px-6
          sm:px-10
          lg:px-16
          relative
          z-10
        "
      >
        <div
          className="
            flex
            flex-col
            lg:flex-row
            items-center
            justify-between
            gap-10
            lg:gap-4
          "
        >
          {/* =================================================
              LEFT CONTENT
          ================================================== */}

          <motion.div
            style={{ y: contentY }}
            className="
              lg:w-[51%]
              mt-6
              lg:mt-10
              relative
              z-20
            "
          >
            {/* EYEBROW */}

            <motion.div
              initial={{
                opacity: 0,
                x: -25,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.7,
              }}
              className="
                flex
                items-center
                gap-3
                mb-6
              "
            >
              <div className="relative">
                <div
                  className="
                    absolute
                    inset-0
                    rounded-full
                    bg-green-500/10
                    animate-ping
                  "
                />

                <Shield
                  size={18}
                  className="
                    relative
                    text-green-600
                    fill-green-600/10
                  "
                />
              </div>

              <span
                className="
                  text-[11px]
                  font-black
                  text-green-700
                  tracking-[0.2em]
                  uppercase
                "
              >
                30+ Years of Trust & Excellence
              </span>
            </motion.div>

            {/* =================================================
                HEADING
            ================================================== */}

            <motion.h1
              initial={{
                opacity: 0,
                x: -40,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: 0.2,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                text-5xl
                sm:text-6xl
                md:text-7xl
                lg:text-[76px]
                font-[1000]
                text-gray-900
                leading-[1.04]
                mb-6
                tracking-tighter
              "
            >
              We Bring Top Brands
              <br className="hidden md:block" />

              to{' '}

              <span className="relative text-green-600">
                Your Shop

                <motion.span
                  initial={{
                    scaleX: 0,
                  }}
                  animate={{
                    scaleX: 1,
                  }}
                  transition={{
                    delay: 1,
                    duration: 0.7,
                  }}
                  className="
                    absolute
                    left-0
                    right-0
                    -bottom-2
                    h-2
                    bg-green-100
                    rounded-full
                    origin-left
                    -z-10
                  "
                />
              </span>
            </motion.h1>

            {/* =================================================
                DESCRIPTION
            ================================================== */}

            <motion.p
              initial={{
                opacity: 0,
                x: -40,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: 0.4,
                duration: 0.7,
              }}
              className="
                text-lg
                text-gray-600
                mb-8
                max-w-xl
                leading-relaxed
                font-bold
              "
            >
              Big brands make the products. We deliver them to shops across
              India. You sell them in your area and earn.
            </motion.p>

            {/* =================================================
                FLOW STEPS
            ================================================== */}

            <motion.div
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: {
                  transition: {
                    staggerChildren: 0.12,
                    delayChildren: 0.5,
                  },
                },
              }}
              className="
                flex
                flex-wrap
                items-center
                gap-2
                sm:gap-3
                mb-8
              "
            >
              {flowSteps.map((step, i) => (
                <React.Fragment key={step.title}>
                  <motion.div
                    variants={{
                      hidden: {
                        opacity: 0,
                        x: -28,
                        scale: 0.9,
                      },
                      show: {
                        opacity: 1,
                        x: 0,
                        scale: 1,
                        transition: {
                          type: 'spring',
                          stiffness: 220,
                          damping: 18,
                        },
                      },
                    }}
                    whileHover={{
                      y: -5,
                      scale: 1.04,
                    }}
                    whileTap={{
                      scale: 0.96,
                    }}
                    className={`
                      flex
                      items-center
                      gap-2.5
                      px-3.5
                      py-2.5
                      rounded-2xl
                      border
                      cursor-pointer
                      bg-white/80
                      backdrop-blur-sm
                      shadow-sm
                      hover:shadow-lg
                      transition-shadow
                      ${step.tone}
                    `}
                  >
                    <step.icon
                      size={18}
                      strokeWidth={2.5}
                      className="flex-shrink-0"
                    />

                    <div className="leading-none">
                      <div
                        className="
                          text-[13px]
                          font-black
                          text-gray-900
                        "
                      >
                        {step.title}
                      </div>

                      <div
                        className="
                          text-[10px]
                          font-bold
                          text-gray-500
                          mt-1
                        "
                      >
                        {step.sub}
                      </div>
                    </div>
                  </motion.div>

                  {i < flowSteps.length - 1 && (
                    <ArrowRight
                      size={18}
                      className="
                        text-gray-300
                        hidden
                        sm:block
                        flex-shrink-0
                      "
                    />
                  )}
                </React.Fragment>
              ))}
            </motion.div>

            {/* =================================================
                CTA
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.7,
              }}
              className="
                flex
                flex-wrap
                gap-4
                mb-10
                md:mb-20
              "
            >
              <motion.a
                whileHover={{
                  scale: 1.05,
                  y: -3,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                href="#apply"
                className="
                  relative
                  overflow-hidden
                  bg-[#0f7643]
                  text-white
                  px-8
                  py-4
                  rounded-xl
                  font-extrabold
                  flex
                  items-center
                  gap-3
                  shadow-xl
                  shadow-green-900/20
                  transition-all
                  text-base
                  animate-sheen
                "
              >
                <span className="relative z-10">
                  Become a Distributor
                </span>

                <span className="relative z-10">
                  &rarr;
                </span>

                <span
                  className="
                    absolute
                    inset-y-0
                    -left-[100%]
                    w-20
                    bg-white/20
                    blur-xl
                    skew-x-[-20deg]
                    animate-[shine_3s_ease-in-out_infinite]
                  "
                />
              </motion.a>

              <motion.a
                whileHover={{
                  scale: 1.05,
                  y: -3,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                href="#contact"
                className="
                  border-[3px]
                  border-gray-100
                  text-gray-700
                  px-8
                  py-4
                  rounded-xl
                  font-extrabold
                  hover:border-green-600
                  hover:text-green-700
                  hover:bg-green-50
                  transition-all
                  text-base
                  bg-white/70
                  backdrop-blur-sm
                "
              >
                Talk to Us
              </motion.a>
            </motion.div>
          </motion.div>

          {/* =================================================
              RIGHT FMCG 3D VISUAL
          ================================================== */}

          <div
            ref={visualRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            className="
              lg:w-[49%]
              relative
              w-full
              min-h-[560px]
              md:min-h-[680px]
              flex
              items-center
              justify-center
              [perspective:1600px]
            "
          >
            {/* =================================================
                AMBIENT GLOW
            ================================================== */}

            <motion.div
              animate={{
                scale: isHovered
                  ? [1, 1.08, 1]
                  : [1, 1.04, 1],

                opacity: isHovered
                  ? [0.45, 0.65, 0.45]
                  : [0.3, 0.45, 0.3],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="
                absolute
                w-[520px]
                h-[520px]
                md:w-[650px]
                md:h-[650px]
                rounded-full
                bg-green-400/10
                blur-[100px]
              "
            />

            {/* =================================================
                OUTER ORBIT
            ================================================== */}

            <motion.div
              animate={{
                rotateZ: 360,
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="
                absolute
                w-[470px]
                h-[470px]
                md:w-[620px]
                md:h-[620px]
                rounded-full
                border
                border-green-600/[0.09]
              "
            >
              <div
                className="
                  absolute
                  top-1/2
                  -left-2
                  w-4
                  h-4
                  rounded-full
                  bg-green-500
                  shadow-[0_0_30px_rgba(34,197,94,0.9)]
                "
              />

              <div
                className="
                  absolute
                  bottom-[10%]
                  right-[12%]
                  w-2
                  h-2
                  rounded-full
                  bg-green-400
                  shadow-[0_0_20px_rgba(34,197,94,0.8)]
                "
              />
            </motion.div>

            {/* =================================================
                SECOND ORBIT
            ================================================== */}

            <motion.div
              animate={{
                rotateZ: -360,
              }}
              transition={{
                duration: 42,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="
                absolute
                w-[390px]
                h-[390px]
                md:w-[520px]
                md:h-[520px]
                rounded-full
                border
                border-dashed
                border-green-500/[0.08]
              "
            />

            {/* =================================================
                MAIN 3D IMAGE STAGE
            ================================================== */}

            <motion.div
              style={{
                y: visualY,
                scale: visualScale,
                rotateX,
                rotateY,
              }}
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 1.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                relative
                w-[350px]
                h-[470px]
                md:w-[480px]
                md:h-[600px]
                [transform-style:preserve-3d]
              "
            >
              {/* =================================================
                  DEPTH SHADOW
              ================================================== */}

              <div
                className="
                  absolute
                  inset-[5%]
                  rounded-[55px]
                  bg-green-900/20
                  blur-[35px]
                  translate-y-12
                "
              />

              {/* =================================================
                  FMCG IMAGE CARD
              ================================================== */}

              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotateZ: [0, 0.5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="
                  absolute
                  inset-0
                  rounded-[52px]
                  overflow-hidden
                  bg-white
                  border
                  border-white
                  shadow-[0_50px_120px_-35px_rgba(15,118,67,0.28)]
                  [transform-style:preserve-3d]
                "
              >
                {/* =================================================
                    MULTIPLE FMCG IMAGES
                    ONE IMAGE AT A TIME
                ================================================== */}

                <div className="absolute inset-0">
                  {fmcgImages.map((image, index) => (
                    <motion.img
                      key={image}
                      src={image}
                      alt={`FMCG products and distribution ${index + 1}`}
                      initial={false}
                      animate={{
                        opacity:
                          currentImage === index ? 1 : 0,
                        scale:
                          currentImage === index
                            ? isHovered
                              ? 1.08
                              : 1.03
                            : 1.12,
                      }}
                      transition={{
                        opacity: {
                          duration: 0.9,
                          ease: 'easeInOut',
                        },
                        scale: {
                          duration: 1.4,
                          ease: 'easeOut',
                        },
                      }}
                      className="
                        absolute
                        inset-0
                        w-full
                        h-full
                        object-cover
                      "
                    />
                  ))}
                </div>

                {/* =================================================
                    IMAGE OVERLAY
                ================================================== */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/60
                    via-black/10
                    to-transparent
                    z-10
                  "
                />

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-br
                    from-green-900/10
                    via-transparent
                    to-white/10
                    z-10
                  "
                />

                {/* =================================================
                    LIGHT REFLECTION
                ================================================== */}

                <motion.div
                  animate={{
                    x: ['-120%', '150%'],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    repeatDelay: 2,
                    ease: 'easeInOut',
                  }}
                  className="
                    absolute
                    top-0
                    bottom-0
                    w-28
                    bg-white/25
                    blur-2xl
                    skew-x-[-20deg]
                    z-20
                  "
                />

                {/* =================================================
                    IMAGE COUNTER
                ================================================== */}

                <div
                  className="
                    absolute
                    top-7
                    left-7
                    z-30
                    px-3
                    py-1.5
                    rounded-full
                    bg-black/30
                    backdrop-blur-md
                    border
                    border-white/20
                  "
                >
                  <span
                    className="
                      text-[9px]
                      font-black
                      text-white
                      tracking-[0.15em]
                    "
                  >
                    {String(currentImage + 1).padStart(2, '0')}
                    {' / '}
                    {String(fmcgImages.length).padStart(2, '0')}
                  </span>
                </div>

                {/* =================================================
                    TOP BADGE
                ================================================== */}

              

          

                {/* =================================================
                    FLOATING FMCG TAG 2
                ================================================== */}

            

                {/* =================================================
                    SLIDER DOTS
                ================================================== */}

                <div
                  className="
                    absolute
                    bottom-[26%]
                    left-1/2
                    -translate-x-1/2
                    z-40
                    flex
                    items-center
                    gap-1.5
                    px-3
                    py-2
                    rounded-full
                    bg-black/25
                    backdrop-blur-md
                    border
                    border-white/20
                  "
                >
                  {fmcgImages.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() =>
                        setCurrentImage(index)
                      }
                      aria-label={`Show FMCG image ${index + 1}`}
                      className={`
                        rounded-full
                        transition-all
                        duration-300
                        ${
                          currentImage === index
                            ? 'w-6 h-1.5 bg-white'
                            : 'w-1.5 h-1.5 bg-white/50 hover:bg-white/80'
                        }
                      `}
                    />
                  ))}
                </div>

                {/* =================================================
                    IMAGE BOTTOM CONTENT
                ================================================== */}

                <div
                  className="
                    absolute
                    bottom-7
                    left-7
                    right-7
                    z-30
                  "
                >
                  <div
                    className="
                      text-[9px]
                      font-black
                      uppercase
                      tracking-[0.2em]
                      text-white/70
                      mb-2
                    "
                  >
                    FMCG Supply Chain
                  </div>

                  <div
                    className="
                      text-2xl
                      md:text-3xl
                      font-black
                      text-white
                      tracking-tight
                    "
                  >
                    Brands → Vardha → Shops
                  </div>

                  <div
                    className="
                      mt-3
                      flex
                      items-center
                      gap-2
                      text-white/80
                      text-xs
                      font-bold
                    "
                  >
                    <span
                      className="
                        w-2
                        h-2
                        rounded-full
                        bg-green-400
                        animate-pulse
                      "
                    />

                    Reliable FMCG Distribution Network
                  </div>
                </div>
              </motion.div>

              {/* =================================================
                  FLOATING SPARK
              ================================================== */}

              <motion.div
                animate={{
                  rotate: 360,
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  rotate: {
                    duration: 10,
                    repeat: Infinity,
                    ease: 'linear',
                  },
                  scale: {
                    duration: 3,
                    repeat: Infinity,
                  },
                }}
                className="
                  absolute
                  top-[8%]
                  right-[12%]
                  text-green-500
                  z-40
                "
              >
                <Sparkles
                  size={24}
                  strokeWidth={1.5}
                />
              </motion.div>

              {/* =================================================
                  FLOOR SHADOW
              ================================================== */}

              <motion.div
                animate={{
                  scaleX: [1, 0.9, 1],
                  opacity: [0.18, 0.08, 0.18],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="
                  absolute
                  bottom-[-20px]
                  left-[12%]
                  right-[12%]
                  h-12
                  rounded-[50%]
                  bg-green-900/20
                  blur-2xl
                "
              />
            </motion.div>

            {/* =================================================
                FLOATING STAT CARDS
            ================================================== */}

            {floatingStats.map((stat) => (
              <motion.div
                key={stat.id}
                initial={{
                  opacity: 0,
                  y: 20,
                  scale: 0.9,
                }}
                animate={{
                  opacity: 1,
                  y: [0, -12, 0],
                  scale: 1,
                }}
                transition={{
                  opacity: {
                    duration: 0.8,
                    delay: stat.delay + 0.7,
                  },
                  scale: {
                    duration: 0.8,
                    delay: stat.delay + 0.7,
                  },
                  y: {
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: stat.delay,
                  },
                }}
                className={`
                  absolute
                  ${stat.pos}
                  z-40
                  hidden
                  xl:flex
                  items-center
                  gap-3
                  bg-white/90
                  backdrop-blur-xl
                  p-2
                  pr-5
                  rounded-2xl
                  shadow-[0_18px_50px_-18px_rgba(0,0,0,0.22)]
                  border
                  border-white
                  group
                  hover:scale-105
                  transition-transform
                  duration-300
                `}
              >
                <div
                  className={`
                    w-12
                    h-12
                    rounded-xl
                    flex
                    items-center
                    justify-center
                    transition-all
                    duration-300
                    ${
                      stat.color === 'green'
                        ? 'bg-green-50 text-green-600 group-hover:bg-green-600 group-hover:text-white'
                        : stat.color === 'blue'
                        ? 'bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white'
                        : stat.color === 'red'
                        ? 'bg-red-50 text-red-600 group-hover:bg-red-600 group-hover:text-white'
                        : 'bg-orange-50 text-orange-600 group-hover:bg-orange-600 group-hover:text-white'
                    }
                  `}
                >
                  <stat.icon
                    size={21}
                    strokeWidth={2.5}
                  />
                </div>

                <div>
                  <div
                    className="
                      text-sm
                      font-black
                      text-gray-900
                      tracking-tight
                      leading-none
                      mb-1
                    "
                  >
                    {stat.label}
                  </div>

                  <div
                    className="
                      text-[9px]
                      font-black
                      text-gray-500
                      uppercase
                      tracking-widest
                      leading-none
                    "
                  >
                    {stat.sub}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* =================================================
                MOBILE STAT
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 1.1,
              }}
              className="
                absolute
                bottom-0
                left-1/2
                -translate-x-1/2
                lg:hidden
                flex
                items-center
                gap-3
                bg-white/90
                backdrop-blur-xl
                px-4
                py-3
                rounded-2xl
                shadow-xl
                border
                border-gray-100
                z-50
              "
            >
              <div
                className="
                  w-9
                  h-9
                  rounded-xl
                  bg-green-50
                  flex
                  items-center
                  justify-center
                "
              >
                <Users
                  size={17}
                  className="text-green-600"
                />
              </div>

              <div>
                <div
                  className="
                    text-xs
                    font-black
                    text-gray-900
                  "
                >
                  67,500+ Retailers
                </div>

                <div
                  className="
                    text-[9px]
                    font-bold
                    text-gray-500
                    uppercase
                    tracking-widest
                  "
                >
                  Served
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* =====================================================
          BOTTOM FADE
      ====================================================== */}

      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          h-24
          bg-gradient-to-t
          from-white
          to-transparent
          pointer-events-none
        "
      />
    </section>
  );
};

export default Hero;
