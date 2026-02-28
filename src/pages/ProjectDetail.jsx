import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";

// Example images for demonstration. Replace with your own project images.
const projectImages = {
  1: ["/public/django.svg", "/public/python.svg"],
  2: ["/public/react.svg", "/public/django.svg"],
  3: ["/public/robot-transparent.png"],
  // Add more as needed
};

const projectLinks = {
  1: {
    github: "https://github.com/yourusername/plant-disease-detection",
    website: "https://plant-disease-detection.example.com"
  },
  2: {
    github: "https://github.com/yourusername/e-commerce-platform",
    website: "https://ecommerce.example.com"
  },
  3: {
    github: "https://github.com/yourusername/portfolio-website",
    website: "https://portfolio.example.com"
  },
  // Add more as needed
};

const projects = [
  {
    id: 1,
    title: "Plant Disease Detection",
    description:
      "A deep learning based system to detect plant diseases from images using Flask API and React.",
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description:
      "A scalable online store with secure payments, user authentication, and admin dashboard.",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "A modern developer portfolio showcasing AI tools, projects, and skills with sleek animations.",
  },
  // Add more as needed
];

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === Number(id));
  const images = projectImages[id] || [];
  const links = projectLinks[id] || {};

  if (!project) {
    return <div className="text-center text-white py-20">Project not found.</div>;
  }

  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-gradient-to-b from-[#0a0f25] via-[#0d1b3b] to-[#132c5d] text-white px-8 py-24 flex flex-col items-center"
    >
      <Link to="/projects" className="mb-8 text-blue-400 hover:underline">&larr; Back to Projects</Link>
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-white/10 border border-white/10 backdrop-blur-xl rounded-2xl p-8 shadow-lg max-w-2xl w-full"
      >
        <h1 className="text-4xl font-bold text-blue-300 mb-4 text-center">{project.title}</h1>
        <p className="text-gray-300 mb-6 text-center">{project.description}</p>
        <div className="flex justify-center gap-4 mb-6 flex-wrap">
          {images.map((img, idx) => (
            <img key={idx} src={img} alt="Project" className="w-32 h-32 object-contain rounded-lg border border-blue-400/30" />
          ))}
        </div>
        <div className="flex justify-center gap-6">
          {links.github && (
            <a href={links.github} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">GitHub Repo</a>
          )}
          {links.website && (
            <a href={links.website} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Live Website</a>
          )}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default ProjectDetail;
