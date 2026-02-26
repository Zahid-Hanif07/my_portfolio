import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import robotImg from "../assets/robot-transparent.png";

const ThreeDRobot = () => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
    const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["25deg", "-25deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-25deg", "25deg"]);
    const translateX = useTransform(mouseX, [-0.5, 0.5], ["-20px", "20px"]);
    const translateY = useTransform(mouseY, [-0.5, 0.5], ["-20px", "20px"]);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseXFromCenter = e.clientX - rect.left - width / 2;
        const mouseYFromCenter = e.clientY - rect.top - height / 2;
        x.set(mouseXFromCenter / width);
        y.set(mouseYFromCenter / height);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            style={{
                perspective: 1000,
            }}
            className="relative w-full max-w-lg cursor-pointer"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <motion.div
                style={{
                    rotateX,
                    rotateY,
                    x: translateX,
                    y: translateY,
                    transformStyle: "preserve-3d",
                }}
                className="relative w-full h-auto"
            >


                {/* Reverse Rotating Ring */}
                <motion.div
                    className="absolute top-1/2 left-1/2 w-[100%] h-[100%] border-[1px] border-cyan-400/20 rounded-full -z-20"
                    style={{
                        translateX: "-50%",
                        translateY: "-50%",
                    }}
                    animate={{ rotate: -360 }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />

                <motion.div
                    animate={{
                        y: [0, -15, 0],
                        scale: [1, 1.02, 1],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="w-full h-auto relative"
                >
                    <img
                        src={robotImg}
                        alt="AI Robot"
                        className="w-full h-auto object-contain"
                        style={{
                            filter: 'drop-shadow(0 0 40px rgba(59, 130, 246, 0.6)) drop-shadow(0 0 60px rgba(139, 92, 246, 0.4)) drop-shadow(0 0 80px rgba(236, 72, 153, 0.3))'
                        }}
                    />

                    {/* Floating Tech Particles */}
                    {[...Array(5)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute bg-blue-400 rounded-full opacity-60"
                            style={{
                                width: Math.random() * 8 + 4,
                                height: Math.random() * 8 + 4,
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                                zIndex: -1,
                            }}
                            animate={{
                                y: [0, -20, 0],
                                opacity: [0.4, 0.8, 0.4],
                            }}
                            transition={{
                                duration: Math.random() * 2 + 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: Math.random() * 2,
                            }}
                        />
                    ))}

                    {/* Holographic Scan Line Removed */}

                    {/* HUD Elements Removed */}

                    {/* Corner Brackets Removed */}
                </motion.div>

                {/* Dynamic Shadow */}
                <motion.div
                    className="absolute -bottom-10 left-1/2 w-2/3 h-4 bg-black/40 blur-xl rounded-[100%]"
                    style={{
                        x: useTransform(mouseX, [-0.5, 0.5], ["20px", "-20px"]), // Moves opposite to robot
                        translateX: "-50%",
                    }}
                />
            </motion.div>
        </motion.div>
    );
};

export default ThreeDRobot;
