import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const stats = [
  { label: "Projects", value: 7 },
  { label: "Experience", value: 1 },
  { label: "AI Tools", value: 3 },
  { label: "Technologies", value: 8 },
];

const StatsAnimated = () => {
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const intervals = stats.map((stat, i) => {
      return setInterval(() => {
        setCounts((prev) => {
          const newCounts = [...prev];
          if (newCounts[i] < stat.value) newCounts[i] += 1;
          return newCounts;
        });
      }, 50);
    });

    return () => intervals.forEach((id) => clearInterval(id));
  }, []);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
      {stats.map((stat, i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 1.05 }}
          className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-center hover:bg-white/20 transition"
        >
          <h3 className="text-xl font-bold text-blue-400">
            {counts[i]}{stat.label === "Experience" ? " Year" : "+"}
          </h3>
          <p className="text-gray-300 text-sm">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default StatsAnimated;
