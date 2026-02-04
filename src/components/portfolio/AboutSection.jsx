import React from 'react';
import { GraduationCap, Calendar, Target, Heart, Trophy } from 'lucide-react';

const education = [
  {
    institution: "Malla Reddy Institute of Technology and Science",
    degree: "B.Tech in Computer Science and Engineering (AI & ML)",
    period: "2022 - Present",
    grade: "CGPA: 7.5",
    current: true
  },
  {
    institution: "Sreenivasa Padmavathi Junior College",
    degree: "Board of Intermediate Education, Telangana",
    period: "2020 - 2022",
    grade: "73.50%",
    current: false
  },
  {
    institution: "Vishwa Bharathi School",
    degree: "Board of Secondary Education, Telangana",
    period: "2019 - 2020",
    grade: "98.6%",
    current: false
  }
];

const interests = [
  { icon: Target, label: "Data Analysis & EDA" },
  { icon: Heart, label: "Coding & Backend Dev" },
  { icon: Trophy, label: "Online Learning" }
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 bg-slate-950 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm font-medium mb-4">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get to know me
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A passionate technologist with a drive for innovation and continuous growth
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio Card */}
          <div className="space-y-6">
            {/* Profile Photo Card */}
            <div className="flex flex-col items-center lg:items-start">
              <div className="bg-gradient-to-br from-slate-900 to-slate-900/50 rounded-3xl p-8 border border-slate-800/50 text-center">
                {/* Circular Photo */}
                <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-slate-700/50 shadow-2xl mb-6">
                  <img 
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6929aede7b86b5f0a0f2dac5/728350a93_WhatsAppImage2025-12-27at64525PM.jpg" 
                    alt="Shashivardan Jarpati"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                
                {/* Name */}
                <h3 className="text-2xl font-bold text-white mb-3">
                  Shashivardan Jarpati
                </h3>
                
                {/* Badge */}
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20">
                  <span className="text-violet-400 text-sm font-medium">
                    Final Year AI & ML Student
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-900 to-slate-900/50 rounded-3xl p-8 border border-slate-800/50">
              <h3 className="text-2xl font-semibold text-white mb-4">My Story</h3>
              <div className="space-y-4 text-slate-400 leading-relaxed">
                <p>
                  I'm <span className="text-white font-medium">Shashivardan Jarpati</span>, a final-year B.Tech student 
                  specializing in Artificial Intelligence and Machine Learning with hands-on experience in developing, 
                  training, evaluating, and deploying machine learning models.
                </p>
                <p>
                  Strong proficiency in <span className="text-violet-400 font-medium">Python, data analysis, statistical modeling</span>, 
                  and ML frameworks such as <span className="text-violet-400 font-medium">scikit-learn, TensorFlow, and PyTorch</span>. 
                  Experienced in data preprocessing, exploratory data analysis (EDA), feature engineering, and model optimization, 
                  along with practical exposure to Generative AI and NLP applications.
                </p>
                <p>
                  Actively seeking entry-level roles in <span className="text-white font-medium">AI/ML Engineering, Python Development, 
                  or Data Analytics</span> to build scalable, data-driven solutions and support business decision-making.
                </p>
              </div>
            </div>

            {/* Interests */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-900/50 rounded-3xl p-8 border border-slate-800/50">
              <h3 className="text-xl font-semibold text-white mb-4">Beyond Code</h3>
              <div className="space-y-3 text-slate-400 text-sm leading-relaxed mb-6">
                <p>
                  • Actively practiced data analysis techniques including data cleaning and exploratory data analysis on sample datasets
                </p>
                <p>
                  • Participated in online learning programs focused on data analytics, statistics, and business insights
                </p>
                <p>
                  • Participated in coding and backend development activities
                </p>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {interests.map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="w-10 h-10 mx-auto rounded-2xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mb-2">
                      <item.icon className="w-4 h-4 text-violet-400" />
                    </div>
                    <span className="text-xs text-slate-400">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Education Timeline */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-900/50 rounded-3xl p-8 border border-slate-800/50">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-violet-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white">Education</h3>
            </div>

            <div className="relative space-y-6">
              {/* Timeline Line */}
              <div className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-violet-500 via-purple-500 to-slate-700" />

              {education.map((edu, index) => (
                <div key={index} className="relative pl-8">
                  {/* Timeline Dot */}
                  <div className={`absolute left-0 top-2 w-4 h-4 rounded-full border-2 ${
                    edu.current 
                      ? 'bg-violet-500 border-violet-400 shadow-lg shadow-violet-500/50' 
                      : 'bg-slate-800 border-slate-600'
                  }`} />

                  <div className={`p-5 rounded-2xl transition-all ${
                    edu.current 
                      ? 'bg-violet-500/10 border border-violet-500/20' 
                      : 'bg-slate-800/30 border border-slate-700/30 hover:bg-slate-800/50'
                  }`}>
                    <div className="flex items-center gap-2 text-sm text-slate-500 mb-2">
                      <Calendar className="w-4 h-4" />
                      {edu.period}
                      {edu.current && (
                        <span className="px-2 py-0.5 rounded-full bg-green-500/20 text-green-400 text-xs font-medium">
                          Current
                        </span>
                      )}
                    </div>
                    <h4 className="font-semibold text-white mb-1">{edu.institution}</h4>
                    <p className="text-slate-400 text-sm mb-2">{edu.degree}</p>
                    <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-slate-800 text-violet-400 text-sm font-medium">
                      {edu.grade}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}