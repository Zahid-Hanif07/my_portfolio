import { motion } from "framer-motion";
import { Download, Rocket, ArrowRight, Code, Cpu, BarChart2, Gamepad2, FileText, Activity } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";
import StatsAnimated from "../components/StatsAnimated";
import ThreeDRobot from "../components/ThreeDRobot";

const Home = () => {
  const skills = [
    "Python", "Machine Learning", "Flutter","Dart", 
    "REST API","Firebase", "State Management", "Git & CI/CD",
  ];

  const projects = [
    {
      id: 1,
      title: "Plant Disease Detection",
      description: "A deep learning based system to detect plant diseases from images using Flask API and React.",
      tech: ["Flask", "React", "TensorFlow", "Python"],
      icon: <Cpu className="w-10 h-10 text-blue-400" />
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      description: "A scalable online store with secure payments, user authentication, and admin dashboard.",
      tech: ["Django", "React", "PostgreSQL", "Stripe"],
      icon: <Rocket className="w-10 h-10 text-cyan-400" />
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "A modern developer portfolio showcasing AI tools, projects, and skills with sleek animations.",
      tech: ["React", "Framer Motion", "TailwindCSS"],
      icon: <Code className="w-10 h-10 text-purple-400" />
    },
    {
      id: 4,
      title: "Crypto Analyzer",
      description: "A financial analysis tool featuring live crypto prices, TradingView charts, and market blogs.",
      tech: ["Django REST", "React", "TradingView API"],
      icon: <BarChart2 className="w-10 h-10 text-green-400" />
    },
    {
      id: 5,
      title: "CarRaceGame",
      description: "A fun 2D car racing game where players avoid enemies and collect coins to beat high scores.",
      tech: ["Python", "Pygame"],
      icon: <Gamepad2 className="w-10 h-10 text-red-400" />
    },
    {
      id: 6,
      title: "BlogSpace",
      description: "A clean full-stack blogging platform allowing users to register, login, and manage posts.",
      tech: ["React", "Django REST", "PostgreSQL"],
      icon: <FileText className="w-10 h-10 text-yellow-400" />
    },
    {
      id: 7,
      title: "Prescription Extraction",
      description: "AI-powered parser extracting medication info from prescriptions with drug interaction checks.",
      tech: ["AI", "Django", "DDInter DB"],
      icon: <Activity className="w-10 h-10 text-pink-400" />
    }
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[128px] animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[128px] animate-pulse delay-1000"></div>
      </div>

      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center justify-center px-6 pt-20">
        <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1"
          >
            <div className="inline-block px-4 py-2 rounded-full glass mb-6">
              <span className="text-blue-400 font-medium">Available for hire</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Hi, I’m <br />
              <span className="text-gradient">Zahid Hanif</span>
            </h1>

            <h2 className="text-xl md:text-2xl text-gray-400 mb-8 h-8">
              <Typewriter
                words={["Mobile App Developer","Flutter Developer","AI Engineer", "Full Stack Developer", "Tech Innovator", "Automation Expert"]}
                loop
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </h2>

            <p className="text-gray-400 text-lg mb-10 max-w-lg leading-relaxed">
              I build intelligent digital experiences — blending cutting-edge AI models with robust full-stack architectures.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/projects"
                className="group flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all shadow-lg shadow-blue-600/25"
              >
                View Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="/resume.pdf"
                download
                className="flex items-center gap-2 glass hover:bg-white/10 text-white px-8 py-4 rounded-full font-semibold transition-all"
              >
                <Download className="w-4 h-4" />
                Resume
              </a>
            </div>

            <div className="mt-12">
              <StatsAnimated />
            </div>
          </motion.div>

          {/* Robot Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="order-1 md:order-2 flex justify-center"
          >
            <ThreeDRobot />
          </motion.div>
        </div>
      </section>

      {/* About Me Section - Modern Design */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-8" />
          </motion.div>

          {/* Content Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-12 rounded-3xl border border-white/10"
          >
            <div className="space-y-6 text-center">

              <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
                I'm a developer who loves blending Artificial Intelligence with modern web technologies.
                Skilled in Python, React, and automation tools like n8n — I create systems that not only
                work efficiently but also think intelligently.
              </p>

              <p className="text-gray-400 leading-relaxed max-w-3xl mx-auto">
                With a strong background in AI and web development, I specialize in combining logic,
                design, and innovation to build efficient, scalable, and smart systems. My goal is to
                bridge the gap between technology and creativity — crafting experiences that not only
                function well but look exceptional.
              </p>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-3 justify-center pt-6">
                {skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-blue-300 hover:bg-blue-500/20 hover:border-blue-500/50 transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills Cards Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-3 gap-6"
        >
          {[
            { icon: <Code className="text-blue-400 w-8 h-8" />, title: "AI & ML", desc: "Model building, NLP, and intelligent automation using Python & Django." },
            { icon: <Code className="text-cyan-400 w-8 h-8" />, title: "Flutter Developer ", desc: "Frontend with React, backend APIs with Django and Node.js." },
            { icon: <Rocket className="text-indigo-400 w-8 h-8" />, title: "Innovation", desc: "Building creative and scalable AI-based tools and platforms." },
          ].map((skill, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-lg shadow-md hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] hover:scale-[1.03] transition-transform"
            >
              <div className="flex items-start gap-4">
                {skill.icon}
                <div>
                  <h3 className="text-xl font-semibold text-blue-300 mb-2">{skill.title}</h3>
                  <p className="text-gray-300 text-sm">{skill.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Projects Section */}
      <section className="py-24 px-6 bg-black/20">
        <div className="max-w-6xl mx-auto">
          {/* Title Section */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              A showcase of my latest development work — from AI innovations to full-stack web applications.
            </p>
          </motion.div>

          {/* Project Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="relative p-6 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-lg shadow-md hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] hover:scale-[1.03] transition-transform"
              >
                {/* Icon */}
                <div className="flex justify-center mb-4">
                  {project.icon}
                </div>

                <h3 className="text-2xl font-bold text-blue-300 mb-3 text-center">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 text-center leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap justify-center gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-sm bg-gradient-to-r from-blue-500/30 to-cyan-500/30 text-blue-100 px-3 py-1 rounded-full border border-blue-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Subtle Glow Border */}
                <div className="absolute inset-0 rounded-2xl border border-transparent hover:border-blue-500/40 transition-all"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="py-24 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to start your next project?</h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Let's collaborate to turn your innovative ideas into reality.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-gray-200 transition-all transform hover:scale-105"
          >
            <Rocket className="w-5 h-5" />
            Let's Talk
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
