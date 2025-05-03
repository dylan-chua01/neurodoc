// summary-viewer.tsx
'use client';

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useState } from "react";
import { NavigationControls } from "./navigation-controls";
import ProgressBar from "./progress-bar";
import { parseSection } from "@/utils/summary-helpers";
import { motion } from "framer-motion";
import ContentSection from "./content-section";

const SectionTitle = ({ title, currentSection, totalSections }: { 
  title: string;
  currentSection: number;
  totalSections: number;
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="sticky top-0 z-10 pt-6 pb-4 bg-background/90 backdrop-blur-lg border-b border-rose-500/10"
    >
      <div className="flex flex-col gap-1 px-6">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-rose-600">
            Section {currentSection + 1}/{totalSections}
          </span>
          <div className="flex gap-1">
            {Array.from({ length: totalSections }).map((_, i) => (
              <div 
                key={i}
                className={`w-1.5 h-1.5 rounded-full ${i === currentSection ? 'bg-rose-600' : 'bg-gray-200'}`}
              />
            ))}
          </div>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-rose-600 to-rose-400 bg-clip-text text-transparent">
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
  const handleSectionSelect = (index: number) => setCurrentSection(index);

  if (sections.length === 0) {
    return (
      <Card className="min-h-[300px] flex items-center justify-center">
        <CardContent className="text-center text-gray-500">
          No content available
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="relative h-[500px] sm:h-[600px] lg:h-[700px] w-full xl:w-[600px] overflow-hidden bg-gradient-to-br from-background via-background/95 to-rose-500/5 backdrop-blur-lg shadow-2xl rounded-3xl border border-rose-500/10">
      <ProgressBar sections={sections} currentSection={currentSection}/>
      
      <SectionTitle 
        title={sections[currentSection].title} 
        currentSection={currentSection}
        totalSections={sections.length}
      />
      
      <CardContent className="px-6 pb-20 overflow-y-auto h-[calc(100%-120px)]">
        <ContentSection 
          title={sections[currentSection]?.title || ''}
          points={sections[currentSection]?.points || []}
        />
      </CardContent>

      <NavigationControls 
        currentSection={currentSection}
        totalSections={sections.length}
        onPrevious={handlePrevious}
        onNext={handleNext}
        onSectionSelect={handleSectionSelect}
      />
    </Card>
  );
}