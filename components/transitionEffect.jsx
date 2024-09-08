"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Transition from "./transition";

const TransitionEffect = () => {
  const pathName = usePathname();
  return (
    <AnimatePresence mode="wait">
      <div key={pathName}>
        <div className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40">
          <Transition />
        </div>
      </div>
    </AnimatePresence>
  );
};

export default TransitionEffect;
