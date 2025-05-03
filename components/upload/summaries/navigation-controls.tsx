// navigation-controls.tsx
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function NavigationControls({
  currentSection,
  totalSections,
  onPrevious,
  onNext,
  onSectionSelect,
}: {
  currentSection: number;
  totalSections: number;
  onPrevious: () => void;
  onNext: () => void;
  onSectionSelect: (index: number) => void;
}) {
  return (
    <div className="absolute bottom-0 left-0 right-0 p-4 bg-background/90 backdrop-blur-sm border-t border-gray-200">
      <div className="flex items-center justify-between gap-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={onPrevious}
          disabled={currentSection === 0}
          className={cn(
            "rounded-full w-10 h-10 transition-all",
            currentSection === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-rose-100"
          )}
        >
          <ChevronLeft className="h-5 w-5 text-rose-600" />
        </Button>

        <div className="flex-1 flex items-center justify-center gap-1">
          {Array.from({ length: totalSections }).map((_, index) => (
            <button
              key={index}
              onClick={() => onSectionSelect(index)}
              className={cn(
                "w-2.5 h-2.5 rounded-full transition-all",
                index === currentSection 
                  ? "bg-rose-600 w-3 h-3" 
                  : "bg-gray-300 hover:bg-gray-400"
              )}
            />
          ))}
        </div>

        <Button
          variant="ghost"
          size="icon"
          onClick={onNext}
          disabled={currentSection === totalSections - 1}
          className={cn(
            "rounded-full w-10 h-10 transition-all",
            currentSection === totalSections - 1 
              ? "opacity-50 cursor-not-allowed" 
              : "hover:bg-rose-100"
          )}
        >
          <ChevronRight className="h-5 w-5 text-rose-600" />
        </Button>
      </div>
    </div>
  );
}