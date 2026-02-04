import React from 'react';
import { Briefcase, Award, Star, Code, Wrench, TrendingUp } from 'lucide-react';

const internships = [
  {
    title: "Microsoft Copilot - Emerging Technologies Intern",
    company: "Microsoft Elevate (AICTE)",
    type: "Remote (AICTE)",
    period: "Dec 2025 - Jan 2026",
    icon: Code,
    color: "cyan",
    achievements: [
      "Completed a 4-week internship focused on Microsoft Copilot under Emerging Technologies",
      "Gained hands-on experience with AI-powered productivity tools and generative AI applications",
      "Explored practical implementations of Microsoft Copilot across different workflows"
    ]
  },
  {
    title: "Machine Learning Intern",
    company: "CodSoft",
    type: "Remote",
    period: "Dec 2025 - Jan 2026",
    icon: TrendingUp,
    color: "violet",
    achievements: [
      "Applied machine learning fundamentals including data preprocessing and model building",
      "Worked with datasets to train, test, and evaluate basic machine learning models",
      "Performed exploratory data analysis to identify patterns and insights"
    ]
  },
  {
    title: "Python Programming Intern",
    company: "EISystems Technologies",
    type: "Remote (AICTE)",
    period: "Dec 2025 - Jan 2026",
    icon: Code,
    color: "purple",
    achievements: [
      "Completed an AICTE-aligned internship focused on Python programming and problem-solving",
      "Developed Python programs to implement logical solutions for real-world tasks",
      "Strengthened debugging skills, algorithmic thinking, and code optimization practices"
    ]
  },
  {
    title: "Web Development & Design Intern",
    company: "Oasis Infobyte",
    type: "Remote (AICTE)",
    period: "Dec 2025 - Jan 2026",
    icon: Wrench,
    color: "pink",
    badge: "Star Performer",
    achievements: [
      "Designed and developed responsive web pages using HTML, CSS, and JavaScript",
      "Implemented user interface improvements and optimized layouts for better usability",
      "Recognized as Star Performer for consistent performance and quality output"
    ]
  }
];

const simulations = [
  {
    title: "Data Science Job Simulation",
    company: "British Airways",
    period: "Jan 2026",
    skills: ["Assumption Development", "Communication", "Data Modeling", "Data Science", "Data Visualization", "Infrastructure Planning", "Machine Learning", "PowerPoint"]
  },
  {
    title: "Data Analytics Job Simulation",
    company: "Deloitte Australia",
    period: "Jan 2026",
    skills: ["Data Analysis", "Data Modeling", "Data Visualization Tools", "Spreadsheet Skills"]
  },
  {
    title: "Software Engineering Job Simulation",
    company: "JPMorgan Chase & Co.",
    period: "Nov 2025",
    skills: ["Spring", "Build Tools", "Java Programming", "Message Queuing", "REST API", "Spring Framework", "SQL Database"]
  },
  {
    title: "GenAI Powered Data Analytics Job Simulation",
    company: "Tata Group",
    period: "Nov 2025",
    skills: ["AI Analytics", "AI Strategy", "Analytical Reporting", "Business Communication", "Data Interpretation", "Data Quality Management", "Decision Making", "Ethical Reasoning", "Exploratory Data Analysis", "Model Selection", "Model Validation", "Predictive Analytics", "Process Automation", "Regulatory Compliance", "Strategic Thinking"]
  },
  {
    title: "Technology Job Simulation",
    company: "Deloitte Australia",
    period: "Jan 2026",
    skills: ["Data Structures", "Formal Communication", "Planning", "Programming", "Python Programming", "Software Development"]
  }
];

const colorMap = {
  violet: { bg: "bg-violet-500/10", border: "border-violet-500/20", text: "text-violet-400" },
  purple: { bg: "bg-purple-500/10", border: "border-purple-500/20", text: "text-purple-400" },
  pink: { bg: "bg-pink-500/10", border: "border-pink-500/20", text: "text-pink-400" },
  cyan: { bg: "bg-cyan-500/10", border: "border-cyan-500/20", text: "text-cyan-400" }
};

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 md:py-32 bg-slate-950 relative">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-violet-600/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-purple-600/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm font-medium mb-4">
            Professional Experience
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Internships & Experience
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Hands-on experience through virtual internships and industry job simulations
          </p>
        </div>

        {/* Internships */}
        <div className="mb-12">
          <h3 className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-6">Virtual Internships</h3>
          <div className="space-y-6">
            {internships.map((internship, index) => {
              const colors = colorMap[internship.color];
              return (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-slate-900 to-slate-900/50 rounded-3xl p-8 border border-slate-800/50 hover:border-slate-700/50 transition-all group"
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    {/* Icon */}
                    <div className={`w-14 h-14 rounded-2xl ${colors.bg} border ${colors.border} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                      <internship.icon className={`w-7 h-7 ${colors.text}`} />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="text-xl font-semibold text-white">{internship.title}</h4>
                            {internship.badge && (
                              <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20">
                                <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                                <span className="text-amber-400 text-xs font-medium">{internship.badge}</span>
                              </div>
                            )}
                          </div>
                          <p className={`${colors.text} font-medium mb-1`}>{internship.company}</p>
                          <p className="text-slate-500 text-sm">{internship.type} • {internship.period}</p>
                        </div>
                      </div>

                      {/* Achievements */}
                      <ul className="space-y-2">
                        {internship.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-slate-400 text-sm">
                            <span className={`${colors.text} mt-1.5`}>•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Job Simulations */}
        <div>
          <h3 className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-6">Industry Job Simulations (Forage)</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {simulations.map((sim, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-slate-900 to-slate-900/50 rounded-2xl p-6 border border-slate-800/50 hover:border-violet-500/30 transition-all group cursor-pointer"
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center flex-shrink-0">
                    <Briefcase className="w-5 h-5 text-violet-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1 text-sm leading-tight">{sim.title}</h4>
                    <p className="text-violet-400 text-xs font-medium">{sim.company}</p>
                    <p className="text-slate-500 text-xs mt-1">{sim.period}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {sim.skills.map((skill, idx) => (
                    <span 
                      key={idx}
                      className="px-2 py-1 rounded-lg bg-slate-800/50 border border-slate-700/50 text-slate-400 text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}