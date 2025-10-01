"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Item = {
  id: number;
  name: string;
  designation: string;
  image: string;
};

type AnimatedTooltipProps = {
  items: Item[];
};

export const AnimatedTooltip = ({ items }: AnimatedTooltipProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleMouseMove = (event: React.MouseEvent<HTMLImageElement>) => {
    const target = event.currentTarget;
    const rect = target.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div className="flex items-center justify-center gap-6">
      {items.map((item, idx) => (
        <div
          key={item.id}
          className="relative group"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <Image
            onMouseMove={handleMouseMove}
            height={100}
            width={100}
            src={item.image}
            alt={item.name}
            className="relative !m-0 h-14 w-14 rounded-full border-2 border-white object-cover"
          />

          {hoveredIndex === idx && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute left-1/2 -translate-x-1/2 mt-2 w-max px-3 py-1 bg-gray-800 text-white text-sm rounded-lg shadow-lg"
            >
              <p className="font-semibold">{item.name}</p>
              <p className="text-xs text-gray-300">{item.designation}</p>
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
};
