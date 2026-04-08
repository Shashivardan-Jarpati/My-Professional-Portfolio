import React, { useState } from 'react';
import { ExternalLink, Github, ChevronRight, Brain, Shield, Ambulance, Eye } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const projects = [
  {
    id: 1,
    title: "Banking Fraud Detection System",
    shortTitle: "ML-Based Fraud Detection",
    tagline: "End-to-end fraud detection with Flask deployment",
    description: "Developed an end-to-end banking fraud detection system using Python and Flask, covering data ingestion, model training, and deployment.",
    fullDescription: `Developed an end-to-end banking fraud detection system using Python and Flask, covering data ingestion, model training, and deployment.

Key Achievements:
• Conducted data preprocessing, exploratory data analysis (EDA), and feature engineering on large transactional datasets to improve data quality and model performance
• Trained, evaluated, and optimized CatBoost, XGBoost, and LightGBM models to deliver reliable and scalable fraud prediction
• Deployed the trained model through RESTful APIs to enable real-time fraud detection in a production-like environment

Technologies: Python, Flask, CatBoost, XGBoost, LightGBM, RESTful APIs`,
    technologies: ["Python", "Flask", "CatBoost", "XGBoost", "LightGBM", "RESTful API"],
    icon: Brain,
    color: "green",
    impact: "Real-time fraud detection in production"
  },
  {
    id: 2,
    title: "Privacy-Preserving Machine Learning",
    shortTitle: "Secure AI Systems",
    tagline: "Safeguarding sensitive data in AI",
    description: "Designed and implemented a privacy-preserving machine learning pipeline to safeguard sensitive user data across model training and evaluation.",
    fullDescription: `Designed and implemented a privacy-preserving machine learning pipeline to safeguard sensitive user data across model training and evaluation.

Technical Implementation:
• Applied Differential Privacy and Federated Learning techniques to enable secure, decentralized learning in privacy-critical environments
• Analyzed privacy–utility (accuracy) trade-offs to build compliance-ready AI systems aligned with data protection standards

Impact:
• Successfully protected sensitive data throughout the entire machine learning pipeline
• Built compliance-ready AI systems suitable for privacy-critical applications`,
    technologies: ["Python", "Differential Privacy", "Federated Learning", "Privacy Engineering"],
    icon: Shield,
    color: "red",
    impact: "Compliance-ready AI systems"
  },
  {
    id: 3,
    title: "GradGenie AI - Academic Assistant for Engineering Students",
    shortTitle: "AI-Powered Study Assistant",
    tagline: "Branch-aware AI assistant delivering exam-focused answers and smart study strategies",
    description: "Developed a domain-specific AI academic assistant using LLM APIs and Streamlit to provide branch-aware, exam-oriented responses for engineering students with multiple intelligent learning modes.",
    fullDescription: `Developed GradGenie AI, a domain-focused academic assistant designed specifically for engineering students to enhance exam preparation, concept clarity, and last-minute study efficiency.

Key Achievements:
• Designed a branch-aware AI system supporting CSE, ECE, EEE, Mechanical, and Civil engineering with contextual response generation
• Implemented multi-mode intelligence including AI Tutor, Backlog Rescue, Doubt Solver, and Smart Exam Mode for different academic needs
• Built an exam-focused output system generating structured 5-mark and 10-mark answers, revision notes, and important topic predictions
• Developed a prompt engineering framework to ensure concise, structured, and scoring-oriented responses instead of generic AI outputs
• Deployed a fully functional web application using Streamlit with real-time AI response generation via LLM APIs
• Focused on solving real student challenges such as backlogs, exam pressure, and time-constrained preparation

Technologies: Python, Streamlit, LLM APIs, Prompt Engineering, GitHub`,
    technologies: ["Python", "Streamlit", "LLM APIs", "Prompt Engineering", "GitHub"],
    icon: Brain,
    color: "purple",
    impact: "Helps engineering students prepare efficiently by delivering structured, exam-ready answers and reducing study time"
  },
  {
    id: 4,
    title: "AI Traffic Detection & Speed Analysis System",
    shortTitle: "Computer Vision Traffic Analytics",
    tagline: "Real-time traffic monitoring with speed estimation and dashboard analytics",
    description: "Developed an end-to-end AI-based traffic analysis system using YOLOv8 and OpenCV to detect, classify, and analyze vehicles from video data with interactive dashboard visualization.",
    fullDescription: `Developed an end-to-end AI-based traffic detection and speed analysis system using computer vision techniques to process real-world traffic video data and generate actionable insights.

Key Achievements:
• Implemented real-time vehicle detection and classification (cars, bikes, trucks) using YOLOv8 for efficient object detection
• Designed a frame-based traffic analysis pipeline to compute vehicle density, flow patterns, and congestion trends
• Developed an approximate vehicle speed estimation mechanism using motion tracking across frames
• Built an interactive Streamlit dashboard to visualize traffic trends, vehicle distribution, and speed analytics
• Ensured optimized performance through frame skipping, resolution tuning, and lightweight model selection for smooth execution

Technologies: Python, OpenCV, YOLOv8, Streamlit, Pandas`,
    technologies: ["Python", "OpenCV", "YOLOv8", "Streamlit", "Pandas"],
    icon: Eye,
    color: "blue",
    impact: "Provides real-time traffic insights and speed analysis for smart monitoring systems"
  },
  {
    id: 5,
    title: "Ambulance Service Platform",
    shortTitle: "Emergency Response System",
    tagline: "Revolutionizing emergency medical services",
    description: "Comprehensive research and system design for modernizing ambulance service provision through technology.",
    fullDescription: `Conducted extensive research on ambulance service provision, analyzing the complex landscape of emergency medical services and proposing technological innovations.

Research Areas:
• Technological Innovation: GPS tracking, real-time dispatch optimization
• Workforce Management: Efficient resource allocation and scheduling
• Regulatory Frameworks: Compliance with healthcare regulations
• Patient-Centered Care: Improving response times and service quality

The project emphasizes the importance of integrating modern technology with healthcare services to save more lives.`,
    technologies: ["System Design", "Research", "Healthcare Tech", "Data Analysis", "Documentation"],
    icon: Ambulance,
    color: "pink",
    impact: "Improved emergency response efficiency"
  }
];

const colorMap = {
  violet: {
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
    text: "text-violet-400",
    hover: "hover:border-violet-500/40",
    gradient: "from-violet-600/20 to-violet-600/5"
  },
  purple: {
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
    text: "text-purple-400",
    hover: "hover:border-purple-500/40",
    gradient: "from-purple-600/20 to-purple-600/5"
  },
  pink: {
    bg: "bg-pink-500/10",
    border: "border-pink-500/20",
    text: "text-pink-400",
    hover: "hover:border-pink-500/40",
    gradient: "from-pink-600/20 to-pink-600/5"
  },
  blue: {
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    text: "text-blue-400",
    hover: "hover:border-blue-500/40",
    gradient: "from-blue-600/20 to-blue-600/5"
  },
  green: {
    bg: "bg-green-500/10",
    border: "border-green-500/20",
    text: "text-green-400",
    hover: "hover:border-green-500/40",
    gradient: "from-green-600/20 to-green-600/5"
  },
  red: {
    bg: "bg-red-500/10",
    border: "border-red-500/20",
    text: "text-red-400",
    hover: "hover:border-red-500/40",
    gradient: "from-red-600/20 to-red-600/5"
  }
};

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24 md:py-32 bg-slate-950 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm font-medium mb-4">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Projects & Research
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Exploring the frontiers of AI, security, and healthcare technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => {
            const colors = colorMap[project.color];
            return (
              <div
                key={project.id}
                className={`group bg-gradient-to-br ${colors.gradient} rounded-3xl p-6 border ${colors.border} ${colors.hover} transition-all duration-300 cursor-pointer hover:scale-[1.02] hover:shadow-2xl`}
                onClick={() => setSelectedProject(project)}
              >
                <div className={`w-14 h-14 rounded-2xl ${colors.bg} border ${colors.border} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                  <project.icon className={`w-7 h-7 ${colors.text}`} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-violet-300 transition-colors">
                  {project.title}
                </h3>
                <p className={`text-sm ${colors.text} mb-3`}>{project.tagline}</p>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span key={tech} className="px-2.5 py-1 rounded-lg bg-slate-800/50 text-slate-400 text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2.5 py-1 rounded-lg bg-slate-800/50 text-slate-500 text-xs">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
                <div className="flex items-center text-sm text-slate-400 group-hover:text-violet-400 transition-colors">
                  <span>View Details</span>
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="bg-slate-900 border-slate-800 max-w-2xl max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <div className={`w-14 h-14 rounded-2xl ${colorMap[selectedProject.color].bg} border ${colorMap[selectedProject.color].border} flex items-center justify-center mb-4`}>
                  <selectedProject.icon className={`w-7 h-7 ${colorMap[selectedProject.color].text}`} />
                </div>
                <DialogTitle className="text-2xl text-white">{selectedProject.title}</DialogTitle>
                <p className={`${colorMap[selectedProject.color].text}`}>{selectedProject.tagline}</p>
              </DialogHeader>
              <div className="space-y-6">
                <div className="prose prose-invert prose-sm max-w-none">
                  {selectedProject.fullDescription.split('\n\n').map((para, i) => (
                    <p key={i} className="text-slate-400 whitespace-pre-line">{para}</p>
                  ))}
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span key={tech} className={`px-3 py-1.5 rounded-lg ${colorMap[selectedProject.color].bg} ${colorMap[selectedProject.color].text} text-sm font-medium`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className={`p-4 rounded-xl ${colorMap[selectedProject.color].bg} border ${colorMap[selectedProject.color].border}`}>
                  <p className="text-sm text-slate-400">
                    <span className="font-medium text-white">Impact:</span> {selectedProject.impact}
                  </p>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}