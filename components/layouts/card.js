import { motion } from "framer-motion";

const variantsLeft = {
  hidden: { opacity: 0, x: 20, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 20, y: 0 },
};

const variantsRight = {
  hidden: { opacity: 0, x: -20, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -20, y: 0 },
};

export const CardAnimationLeft = ({ children }) => (
  <motion.div
    initial="hidden"
    animate="enter"
    exit="exit"
    variants={variantsLeft}
    transition={{ duration: 1, type: "easeInOut" }}
    style={{ position: "relative" }}
  >
    <>
      {children}
    </>
  </motion.div>
);

export const CardAnimationRight = ({ children }) => (
  <motion.div
    initial="hidden"
    animate="enter"
    exit="exit"
    variants={variantsRight}
    transition={{ duration: 1, type: "easeInOut" }}
    style={{ position: "relative" }}
  >
    <>
      {children}
    </>
  </motion.div>
);
