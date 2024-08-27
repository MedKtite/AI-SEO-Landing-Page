"use client";

import { DotLottieCommonPlayer, DotLottiePlayer } from "@dotlottie/react-player";
import Image from "next/image";
import productImage from '@/assets/product-image.png';
import { ComponentProps, ComponentPropsWithRef, useEffect, useRef, useState } from "react";
import { animate, motion, useMotionTemplate, useMotionValue, ValueAnimationTransition } from "framer-motion";

const tabs = [
  {
    icon: "/assets/lottie/vroom.lottie",
    title: "User-friendly dashboard",
    isNew: false,
    backgroundPositionX: 0,
    backgroundPositionY: 0,
    backgroundSizeX: 150,
  },
  {
    icon: "/assets/lottie/click.lottie",
    title: "One-click optimization",
    isNew: false,
    backgroundPositionX: 98,
    backgroundPositionY: 100,
    backgroundSizeX: 135,
  },
  {
    icon: "/assets/lottie/stars.lottie",
    title: "Smart keyword generator",
    isNew: true,
    backgroundPositionX: 100,
    backgroundPositionY: 27,
    backgroundSizeX: 177,
  },
];

const FeatureTab = (
  props: typeof tabs[number] & ComponentPropsWithRef<'div'> & { selected: boolean }
) => {
  const tabRef = useRef<HTMLDivElement>(null);
  const dotlottieRef = useRef<DotLottieCommonPlayer>(null);

  const xPrecentage = useMotionValue(0);
  const yPrecenntage = useMotionValue(0);

  const maskImage = useMotionTemplate `radial-gradient(80px 80px at ${xPrecentage}% ${yPrecenntage}%,black,transparent`;
  useEffect( () => {
    if (!tabRef.current) return;
    const {height, width} = tabRef.current?.getBoundingClientRect();
    const circumfrence = height * 2 + width * 2;

    const times = [0, width / circumfrence, (width + height) / circumfrence, (width * 2 + height) / circumfrence, 1]
    const options: ValueAnimationTransition = {
      times,
      duration:4,
      repeat: Infinity,
      ease: 'linear',
      repeatType: 'loop',
    }
    animate(xPrecentage, [0, 100, 100, 0, 0], options);
    animate(yPrecenntage, [0, 0, 100, 100, 0], options);
  }, []);

  const handleTabHover = () => {
    if (dotlottieRef.current === null) return;
    dotlottieRef.current.seek(0);
    dotlottieRef.current.play();
  };
  return (
    <div 
    ref={tabRef}
    onMouseEnter={handleTabHover} 
    className="border border-white/15 flex p-2.5 rounded-xl gap-2.5 items-center lg:flex-1 relative"
    onClick={props.onClick}
    >
      {props.selected && (
              <motion.div
              style={{
                maskImage,
              }}
              className="absolute inset-0 -m-px border border-[#A369FF] rounded-xl"></motion.div>
      )}

      <div className="h-12 w-12 border border-white/15 rounded-lg inline-flex items-center justify-center">
        <DotLottiePlayer ref={dotlottieRef} src={props.icon} className="h-5 w-5" autoplay />
      </div>
      <div className="font-medium"> {props.title} </div>
      {props.isNew && (
        <div className="text-xs rounded-full px-2 py-0.5 bg-[#8c44ff] text-black font-semibold">
          new
        </div>
      )}
    </div>
  );
};

export const Features = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <h2 className="text-5xl md:text-6xl font-medium text-center tracking-tighter">Elevate your SEO efforts.</h2>
        <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto tracking-tighter text-center mt-5">
          From small startups to large enterprises, our AI-driven tool has revolutionized the way businesses approach SEO.
        </p>
        <div className="mt-10 flex flex-col lg:flex-row gap-3">
          {tabs.map((tab, tabIndex) => (
            <FeatureTab 
            {...tab} 
            selected={(selectedTab === tabIndex)}
              onClick={() => setSelectedTab(tabIndex)} 
              key={tab.title} />
          ))}
        </div>
        <div className="border border-white/20 p-2.5 rounded-xl mt-3">
          <div
            className="aspect-video bg-cover border-white/20 rounded-lg"
            style={{
              backgroundImage: `url(${productImage.src})`,
            }}
          ></div>
          {/* <Image src={productImage} alt="product image" /> */}
        </div>
      </div>
    </section>
  );
};
