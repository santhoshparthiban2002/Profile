"use client";
import { motion } from "framer-motion";

const Snowflake = ({ left, size, duration, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: "100vh" }}
    transition={{ duration, delay, repeat: Infinity, repeatType: "loop" }}
    style={{
      position: "absolute",
      top: "0%",
      left: `${left}%`,
      fontSize: `${size}px`,
    }}
  >
    ❄️
  </motion.div>
);

const Home = () => {
  const snowflakes = Array.from({ length: 50 }).map((_, i) => {
    const left = Math.random() * 100;
    const size = Math.random() * 20 + 10; // Size between 10px and 30px
    const duration = Math.random() * 3 + 2; // Duration between 2s and 5s
    const delay = Math.random() * 5; // Random delay up to 5 seconds

    return (
      <Snowflake
        key={i}
        left={left}
        size={size}
        duration={duration}
        delay={delay}
      />
    );
  });

  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      {snowflakes}
    </div>
  );
};

export default Home;
