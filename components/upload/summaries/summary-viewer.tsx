// summary-viewer.tsx
'use client';

import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { NavigationControls } from "./navigation-controls";
import ProgressBar from "./progress-bar";
import { parseSection } from "@/utils/summary-helpers";
import { motion } from "framer-motion";
import ContentSection from "./content-section";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SectionHeader = ({ 
  title,
  currentSection,
  totalSections 
}: { 
  title: string;
  currentSection: number;
  totalSections: number;
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className="sticky top-0 z-10 pt-6 pb-4 bg-background/90 backdrop-blur-lg border-b border-[#006747]/20"
    >
      <div className="flex flex-col gap-1 px-6">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-[#006747]">
            Section {currentSection + 1}/{totalSections}
          </span>
          <div className="flex gap-1">
            {Array.from({ length: totalSections }).map((_, i) => (
              <div 
                key={i}
                className={`w-1.5 h-1.5 rounded-full ${i === currentSection ? 'bg-[#006747]' : 'bg-gray-200'}`}
              />
            ))}
          </div>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#006747] to-[#008D5E] bg-clip-text text-transparent">
          {title}
        </h2>
      </div>
    </motion.div>
  );
}

export function SummaryViewer({ summary }: { summary: string }) {
  const [currentSection, setCurrentSection] = useState(0);
  
  const sections = summary.split(/\n#+/)
    .map(section => section.trim())
    .filter(Boolean)
    .map(parseSection);

  const handleNext = () => setCurrentSection(prev => Math.min(prev + 1, sections.length - 1));
  const handlePrevious = () => setCurrentSection(prev => Math.max(prev - 1, 0));

  if (sections.length === 0) {
    return (
      <Card className="min-h-[300px] flex items-center justify-center rounded-xl border border-[#006747]/20">
        <CardContent className="text-center text-gray-500">
          No content available
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="relative h-[500px] sm:h-[600px] lg:h-[700px] w-full max-w-4xl mx-auto">
      <Card className="h-full w-full overflow-hidden bg-gradient-to-br from-white via-white/95 to-[#006747]/5 backdrop-blur-sm shadow-lg rounded-xl border border-[#006747]/20">
        <ProgressBar sections={sections} currentSection={currentSection}/>
        
        <SectionHeader 
          title={sections[currentSection].title} 
          currentSection={currentSection}
          totalSections={sections.length}
        />
        
        <CardContent className="px-6 pb-16 overflow-y-auto h-[calc(100%-120px)]">
          <ContentSection 
            title={sections[currentSection]?.title || ''}
            points={sections[currentSection]?.points || []}
          />
        </CardContent>

        <div className="absolute bottom-4 left-0 right-0 flex justify-center">
          <div className="flex gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-[#006747]/20 shadow-sm">
            <button 
              onClick={handlePrevious}
              disabled={currentSection === 0}
              className="p-2 rounded-full disabled:opacity-50 hover:bg-[#006747]/10 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-[#006747]" />
            </button>
            <button 
              onClick={handleNext}
              disabled={currentSection === sections.length - 1}
              className="p-2 rounded-full disabled:opacity-50 hover:bg-[#006747]/10 transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-[#006747]" />
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
}