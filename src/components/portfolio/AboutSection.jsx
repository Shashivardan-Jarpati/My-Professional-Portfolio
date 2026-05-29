import React from 'react';
import { GraduationCap, Calendar, Target, Heart, Trophy, Map, Gamepad2, Tv } from 'lucide-react';

const education = [
  {
    institution: "Malla Reddy Institute of Technology and Science",
    degree: "B.Tech in Computer Science and Engineering (AI & ML)",
    period: "2022 - 2026",
    grade: "CGPA : 7.72",
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
  { icon: Trophy, label: "Cricket" },
  { icon: Map, label: "Travelling" },
  { icon: Gamepad2, label: "Gaming" },
  { icon: Tv, label: "Movies & Web Series" },
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
          {/* Left Column */}
          <div className="space-y-6">
            {/* Profile Photo Card */}
            <div className="flex flex-col items-center lg:items-start">
              <div className="bg-gradient-to-br from-slate-900 to-slate-900/50 rounded-3xl p-8 border border-slate-800/50 text-center w-full">
                <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-slate-700/50 shadow-2xl mb-6">
                  <img 
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6929aede7b86b5f0a0f2dac5/728350a93_WhatsAppImage2025-12-27at64525PM.jpg" 
                    alt="Shashivardan Jarpati"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Shashivardan Jarpati
                </h3>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20">
                  <span className="text-violet-400 text-sm font-medium">
                    AI & ML Engineer
                  </span>
                </div>
              </div>
            </div>

            {/* My Story */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-900/50 rounded-3xl p-8 border border-slate-800/50">
              <h3 className="text-2xl font-semibold text-white mb-4">My Story</h3>
              <div className="space-y-4 text-slate-400 leading-relaxed">
                <p>
                  I'm <span className="text-white font-medium">Shashivardan Jarpati</span>, a B.Tech graduate in Computer
                  Science and Engineering (AI & ML) from Malla Reddy Institute of Technology and Science, with hands-on experience in
                  machine learning, computer vision, and Generative AI development.
                </p>
                <p>
                  Strong proficiency in <span className="text-violet-400 font-medium">Python, SQL, XGBoost, LightGBM, CatBoost</span>,
                  and ML frameworks such as <span className="text-violet-400 font-medium">Scikit-learn, Flask, Streamlit, Pandas, NumPy, Matplotlib, TensorFlow</span>.
                  Experienced in <span className="text-violet-400 font-medium">Feature Engineering, Hyperparameter Tuning, Anomaly Detection, and SMOTE</span>,
                  along with practical exposure to <span className="text-violet-400 font-medium">LLMs, Prompt Engineering, LangChain, and RAG</span>.
                </p>
                <p>
                  Actively seeking entry-level roles in <span className="text-white font-medium">AI/ML Engineering or Generative AI 
                  </span> to build intelligent and scalable AI solutions at product-based organizations.
                </p>
              </div>
            </div>

            {/* Beyond Code */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-900/50 rounded-3xl p-8 border border-slate-800/50">
              <h3 className="text-xl font-semibold text-white mb-4">Beyond Code</h3>
              <div className="space-y-3 text-slate-400 text-sm leading-relaxed mb-6">
                <p>• Huge <span className="text-violet-400 font-medium">Cricket </span>fan — love both playing and following the game passionately</p>
                <p>• Enjoy <span className="text-violet-400 font-medium">Travelling </span>and exploring new places, cultures and experiences</p>
                <p>• Passionate <span className="text-violet-400 font-medium">Gamer </span>who loves unwinding with strategy and adventure games</p>
                <p>• Love binge-watching <span className="text-violet-400 font-medium">Movies and Web Series </span>across various genres in free time</p>
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

          {/* Right Column */}
          <div className="space-y-6">
            {/* Education Timeline */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-900/50 rounded-3xl p-8 border border-slate-800/50">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-violet-400" />
                </div>
                <h3 className="text-2xl font-semibold text-white">Education</h3>
              </div>

              <div className="relative space-y-6">
                <div className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-violet-500 via-purple-500 to-slate-700" />
                {education.map((edu, index) => (
                  <div key={index} className="relative pl-8">
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

            {/* Languages */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-900/50 rounded-3xl p-8 border border-slate-800/50">
              <h3 className="text-xl font-semibold text-white mb-4">Languages</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-800/30 border border-slate-700/30">
                  <span className="text-slate-400 text-sm">Telugu</span>
                  <span className="text-violet-400 text-sm font-medium">Native</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-800/30 border border-slate-700/30">
                  <span className="text-slate-400 text-sm">Hindi</span>
                  <span className="text-violet-400 text-sm font-medium">Fluent</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-800/30 border border-slate-700/30">
                  <span className="text-slate-400 text-sm">English</span>
                  <span className="text-violet-400 text-sm font-medium">Professional</span>
                </div>
              </div>
            </div>

            {/* Goals */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-900/50 rounded-3xl p-8 border border-slate-800/50">
              <h3 className="text-xl font-semibold text-white mb-4">Goals</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/30 border border-slate-700/30">
                  <span className="text-lg">🎯</span>
                  <span className="text-slate-400 text-sm">Land first full-time AI/ML Engineering or Generative AI role</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/30 border border-slate-700/30">
                  <span className="text-lg">🚀</span>
                  <span className="text-slate-400 text-sm">Build and deploy a production-grade Gen AI application</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/30 border border-slate-700/30">
                  <span className="text-lg">🤝</span>
                  <span className="text-slate-400 text-sm">Contribute to open source AI projects on GitHub</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/30 border border-slate-700/30">
                  <span className="text-lg">📈</span>
                  <span className="text-slate-400 text-sm">Deepen expertise in MLOps and large-scale model deployment</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}