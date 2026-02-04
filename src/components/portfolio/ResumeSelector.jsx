import React, { useState } from 'react';
import useReveal from "@/hooks/useReveal";
import { Download, FileText, Briefcase, BarChart3, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

const resumes = [
  {
    title: "Main Resume",
    description: "Comprehensive resume covering all experience",
    icon: FileText,
    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6929aede7b86b5f0a0f2dac5/9bf83d5ad_MainCV.pdf",
    color: "violet",
    featured: true
  },
  {
    title: "AI/ML Engineer",
    description: "Focused on Machine Learning & AI projects",
    icon: Briefcase,
    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6929aede7b86b5f0a0f2dac5/ec4c54a80_MyAIMLEngineerCV.pdf",
    color: "purple"
  },
  {
    title: "Data Analytics",
    description: "Data analysis, EDA, and business insights",
    icon: BarChart3,
    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6929aede7b86b5f0a0f2dac5/51824df94_MyDataAnalyticsCV.pdf",
    color: "pink"
  },
  {
    title: "Software Engineer",
    description: "Backend development & Python engineering",
    icon: Code,
    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6929aede7b86b5f0a0f2dac5/a44c4927e_MySDEngineerCV.pdf",
    color: "cyan"
  }
];

const colorMap = {
  violet: {
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
    text: "text-violet-400",
    hover: "hover:border-violet-500/40"
  },
  purple: {
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
    text: "text-purple-400",
    hover: "hover:border-purple-500/40"
  },
  pink: {
    bg: "bg-pink-500/10",
    border: "border-pink-500/20",
    text: "text-pink-400",
    hover: "hover:border-pink-500/40"
  },
  cyan: {
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
    text: "text-cyan-400",
    hover: "hover:border-cyan-500/40"
  }
};

export default function ResumeSelector({ variant = "default", size = "default" }) {
  const [open, setOpen] = useState(false);

  const handleDownload = (url, title) => {
    window.open(url, '_blank');
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {variant === "link" ? (
          <button className="flex items-center justify-center gap-3 p-6 rounded-2xl bg-gradient-to-r from-violet-600 to-purple-600 text-white font-medium hover:from-violet-500 hover:to-purple-500 transition-all hover:scale-[1.02] shadow-lg shadow-violet-500/25 w-full">
            <Download className="w-5 h-5" />
            Download My Resume
          </button>
        ) : (
          <Button 
            size={size}
            className="bg-violet-600 hover:bg-violet-500 text-white rounded-full px-5 gap-2"
          >
            <Download className="w-4 h-4" />
            Resume
          </Button>
        )}
      </DialogTrigger>
      
      <DialogContent className="bg-slate-900 border-slate-800 max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl text-white mb-2">Choose Resume</DialogTitle>
          <p className="text-slate-400 text-sm">Select the resume that best matches the role you're interested in</p>
        </DialogHeader>

        <div className="space-y-3 mt-4">
          {resumes.map((resume, index) => {
            const colors = colorMap[resume.color];
            return (
              <button
                key={index}
                onClick={() => handleDownload(resume.url, resume.title)}
                className={`w-full text-left p-5 rounded-2xl border ${colors.border} ${colors.hover} ${
                  resume.featured 
                    ? `${colors.bg} bg-gradient-to-r from-violet-500/10 to-purple-500/10` 
                    : 'bg-slate-800/30'
                } transition-all hover:scale-[1.02] group`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl ${colors.bg} border ${colors.border} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    <resume.icon className={`w-6 h-6 ${colors.text}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-semibold text-white text-lg">{resume.title}</h4>
                      {resume.featured && (
                        <span className="px-2 py-0.5 rounded-full bg-violet-500/20 text-violet-400 text-xs font-medium">
                          Main
                        </span>
                      )}
                    </div>
                    <p className="text-slate-400 text-sm">{resume.description}</p>
                  </div>
                  <Download className="w-5 h-5 text-slate-500 group-hover:text-violet-400 transition-colors" />
                </div>
              </button>
            );
          })}
        </div>

        <div className="mt-4 p-4 rounded-xl bg-slate-800/50 border border-slate-700/50">
          <p className="text-xs text-slate-400 text-center">
            💡 Tip: Choose the resume that aligns with the position you're applying for
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}