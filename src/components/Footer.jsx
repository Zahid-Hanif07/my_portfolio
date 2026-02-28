import React from "react";
import { Link } from "react-router-dom";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-white/5 bg-[#050816] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Zahid<span className="text-blue-500">.dev</span></h2>
            <p className="text-gray-400 leading-relaxed">
              Building intelligent digital experiences with modern web technologies and AI integration.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <div className="flex flex-col gap-3 text-gray-400">
              <Link to="/" className="hover:text-blue-400 transition-colors">Home</Link>
              <Link to="/projects" className="hover:text-blue-400 transition-colors">Projects</Link>

            </div>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Connect</h3>
            <div className="flex gap-4">
              <a href="https://github.com/Zahid-Hanif07" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-lg hover:bg-blue-600 hover:text-white transition-all">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/zahid-hanif-3141853a3/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-lg hover:bg-blue-600 hover:text-white transition-all">
                <Linkedin size={20} />
              </a>
              <a href="#" className="p-3 bg-white/5 rounded-lg hover:bg-blue-600 hover:text-white transition-all">
                <Twitter size={20} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-lg hover:bg-blue-600 hover:text-white transition-all">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Zahid Hanif. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
