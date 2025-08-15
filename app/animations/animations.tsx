export const riseWithFade = {
  initial: {
    y: 100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      ease: [0.65, 0, 0.35, 1],
      duration: 0.7,
    },
  },
};

export const imageAnimation = {
  initial: {
    y: 50,
    opacity: 0,
    scale: 0.8,
  },
  animate: {
    opacity: 1,
    scale: 1,
    y: `0em`,
    transition: {
      delay: 6.5,
      duration: 1,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  },
};

export const staggerChildren = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

export const wordAnimation = {
  initial: {
    opacity: 0,
    y: 150,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1,
      ease: [0.2, 0.65, 0.3, 0.9],
      duration: 1,
    },
  },
};

export const wordAnimation2 = {
  initial: {
    opacity: 0,
    y: 150,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      // delay: 1,
      ease: [0.2, 0.65, 0.3, 0.9],
      duration: 1,
    },
  },
};

export const bodyAnimation = {
  initial: {
    opacity: 0,
    y: `1em`,
  },
  animate: {
    opacity: 1,
    y: `0em`,
    transition: {
      delay: 5.5,
      duration: 1,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  },
};

// New animations for enhanced project section
export const projectCardAnimation = {
  initial: {
    opacity: 0,
    y: 100,
    scale: 0.9,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
  exit: {
    opacity: 0,
    y: -50,
    scale: 0.9,
    transition: {
      duration: 0.5,
    },
  },
};

export const filterButtonAnimation = {
  initial: {
    opacity: 0,
    y: -20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
    },
  },
  tap: {
    scale: 0.95,
    transition: {
      duration: 0.1,
    },
  },
};

export const floatingAnimation = {
  animate: {
    y: [0, -20, 0],
    rotate: [0, 5, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export const gradientAnimation = {
  animate: {
    background: [
      "linear-gradient(45deg, #667eea 0%, #764ba2 100%)",
      "linear-gradient(45deg, #f093fb 0%, #f5576c 100%)",
      "linear-gradient(45deg, #4facfe 0%, #00f2fe 100%)",
      "linear-gradient(45deg, #667eea 0%, #764ba2 100%)",
    ],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

export const techTagAnimation = {
  initial: {
    opacity: 0,
    scale: 0.8,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
    },
  },
  hover: {
    y: -2,
    scale: 1.05,
    transition: {
      duration: 0.2,
    },
  },
};

export const parallaxAnimation = {
  initial: {
    y: 0,
  },
  animate: {
    y: [-20, 20],
    transition: {
      duration: 10,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    },
  },
};
