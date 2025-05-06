import React, { useEffect } from "react";
// import { motion } from "motion/react";
import { Link } from "react-router-dom";

import { motion, useMotionValue, useSpring } from "framer-motion";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return <div>{currentYear}</div>;
};

const LandingPage: React.FC = () => {
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const springX = useSpring(cursorX, { stiffness: 300, damping: 20 });
  const springY = useSpring(cursorY, { stiffness: 300, damping: 20 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 50); // Offset to center the ball
      cursorY.set(e.clientY - 50);
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [cursorX, cursorY]);
  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col">
      {/* <motion.button initial={{ scale: 0 }} animate={{ scale: 1 }} /> */}
      <motion.div
        className="fixed top-0 left-0 z-50"
        style={{
          x: springX,
          y: springY,
          width: 50,
          height: 50,
          backgroundColor: "#dd00ee",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />

      {/* Hero Section */}
      <header className="text-center py-20 px-4">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          GitSim — Learn Git Like a Pro ⚙️
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Simulate real Git commands. Understand branching, commits, merges, and
          remotes in a fully interactive coding environment — no terminal
          required.
        </p>
        <Link
          to="/auth/login"
          className="mt-8 inline-block bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-md font-semibold text-white"
        >
          Get Started
        </Link>
      </header>

      {/* Features Section */}
      <section className="bg-gray-900 py-16 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-blue-500/30 transition">
            <h3 className="text-xl font-semibold mb-2">Real Git Commands</h3>
            <p className="text-gray-400">
              Practice using <code className="bg-gray-700 px-1">git init</code>,{" "}
              <code className="bg-gray-700 px-1">git commit</code>,{" "}
              <code className="bg-gray-700 px-1">git push</code>, and more.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-blue-500/30 transition">
            <h3 className="text-xl font-semibold mb-2">Visual Feedback</h3>
            <p className="text-gray-400">
              Get instant output logs for every command you type — just like a
              real terminal.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-blue-500/30 transition">
            <h3 className="text-xl font-semibold mb-2">Branch Management</h3>
            <p className="text-gray-400">
              Create, switch, and merge branches to understand workflows like
              Git Flow.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto py-6 text-center text-gray-500 bg-gray-950 border-t border-gray-800 flex justify-end items-center">
        <p className="mr-4 text-[10px] font-semibold flex gap-1">
          <p> Built by OS</p>
          <Footer /> <p>© GitSim Platform</p>
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;
