import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Code2, Rocket, Cpu, BarChart2, Gamepad2, FileText, Activity } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Plant Disease Detection",
    description:
      "A deep learning based system to detect plant diseases from images using Flask API and React.",
    tech: ["Flask", "React", "TensorFlow", "Python"],
    icon: <Cpu className="w-10 h-10 text-blue-400" />,
    category: "AI/ML"
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description:
      "A scalable online store with secure payments, user authentication, and admin dashboard.",
    tech: ["Django", "React", "PostgreSQL", "Stripe"],
    icon: <Rocket className="w-10 h-10 text-cyan-400" />,
    category: "React"
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "A modern developer portfolio showcasing AI tools, projects, and skills with sleek animations.",
    tech: ["React", "Framer Motion", "TailwindCSS"],
    icon: <Code2 className="w-10 h-10 text-purple-400" />,
    category: "React"
  },
  {
    id: 4,
    title: "Crypto Analyzer",
    description: "A financial analysis tool featuring live crypto prices, TradingView charts, and market blogs.",
    tech: ["Django REST", "React", "TradingView API"],
    icon: <BarChart2 className="w-10 h-10 text-green-400" />,
    category: "React"
  },
  {
    id: 5,
    title: "CarRaceGame",
    description: "A fun 2D car racing game where players avoid enemies and collect coins to beat high scores.",
    tech: ["Python", "Pygame"],
    icon: <Gamepad2 className="w-10 h-10 text-red-400" />,
    category: "Other"
  },
  {
    id: 6,
    title: "BlogSpace",
    description: "A clean full-stack blogging platform allowing users to register, login, and manage posts.",
    tech: ["React", "Django REST", "PostgreSQL"],
    icon: <FileText className="w-10 h-10 text-yellow-400" />,
    category: "React"
  },
  {
    id: 7,
    title: "Prescription Extraction",
    description: "AI-powered parser extracting medication info from prescriptions with drug interaction checks.",
    tech: ["AI", "Django", "DDInter DB"],
    icon: <Activity className="w-10 h-10 text-pink-400" />,
    category: "AI/ML"
  }
];

const Projects = () => {
  const navigate = useNavigate();
  const handleProjectClick = (id) => {
    // Optionally, you can add more advanced animation here before navigating
    navigate(`/projects/${id}`);
  };
  return (
    <section className="min-h-screen text-white px-8 py-24 relative overflow-hidden" style={{background: 'linear-gradient(135deg, #0a0f25 0%, #1a1440 100%)'}}>
      {/* Futuristic AI Background */}
      <svg className="absolute inset-0 w-full h-full -z-10" viewBox="0 0 1920 1080" fill="none" xmlns="http://www.w3.org/2000/svg" style={{pointerEvents: 'none'}}>
        {/* Digital grid */}
        <g opacity="0.08">
          {[...Array(40)].map((_,i) => (
            <line key={i} x1={i*48} y1="0" x2={i*48} y2="1080" stroke="#6ee7ff" strokeWidth="1" />
          ))}
          {[...Array(23)].map((_,i) => (
            <line key={i+100} x1="0" y1={i*48} x2="1920" y2={i*48} stroke="#a78bfa" strokeWidth="1" />
          ))}
        </g>
        {/* Glowing neural network connections */}
        <g opacity="0.18">
          <polyline points="200,900 600,400 1000,700 1400,300 1700,800" fill="none" stroke="#38bdf8" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" filter="url(#glow)" />
          <polyline points="300,200 900,500 1300,200 1600,600" fill="none" stroke="#818cf8" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" filter="url(#glow)" />
        </g>
        {/* Abstract AI brain made of light particles */}
        <g opacity="0.22">
          {[...Array(40)].map((_,i) => (
            <circle key={i} cx={960+Math.sin(i/6)*180} cy={540+Math.cos(i/6)*120} r={Math.random()*8+4} fill="#38bdf8" filter="url(#glow)" />
          ))}
        </g>
        {/* Floating data particles */}
        <g opacity="0.13">
          {[...Array(30)].map((_,i) => (
            <circle key={i} cx={Math.random()*1920} cy={Math.random()*1080} r={Math.random()*3+1} fill="#a5f3fc" />
          ))}
        </g>
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
      </svg>

      {/* Title Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text mb-3">
          My Projects
        </h1>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          A showcase of my latest development work — from AI innovations to
          full-stack web applications.
        </p>
      </motion.div>

      {/* Project Cards Grouped by Category */}
      {['React', 'AI/ML', 'Flutter', 'Other'].map((cat) => {
        const catProjects = projects.filter(p => p.category === cat);
        if (catProjects.length === 0) return null;
        return (
          <div key={cat} className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-blue-200 border-b border-blue-500/30 pb-2">{cat} Projects</h2>
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {catProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  whileHover={{ scale: 1.05, rotate: -1 }}
                  className="relative bg-white/10 border border-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-lg hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] transition-all cursor-pointer"
                  onClick={() => handleProjectClick(project.id)}
                  whileTap={{ scale: 0.97, opacity: 0.7 }}
                >
                  {/* Icon */}
                  <div className="flex justify-center mb-4">
                    {project.icon}
                  </div>

                  <h2 className="text-2xl font-bold text-blue-300 mb-3 text-center">
                    {project.title}
                  </h2>
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
        );
      })}
    </section>
  );
};

export default Projects;
