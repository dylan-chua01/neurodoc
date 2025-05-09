import { BrainCircuit, FileOutput, FileText, ChevronRight } from "lucide-react";
import { ReactNode } from "react";
import { MotionDiv, MotionH3 } from "../common/motion-wrapper";

type Step = {
  icon: ReactNode;
  label: string;
  description: string;
}

const steps: Step[] = [
  {
    icon: <FileText size={48} strokeWidth={1.25} />,
    label: 'Upload your PDF',
    description: 'Simply drag and drop your document or click to upload'
  },
  {
    icon: <BrainCircuit size={48} strokeWidth={1.25} />,
    label: 'AI Analysis',
    description: 'Our advanced AI processes and analyzes your content',
  },
  {
    icon: <FileOutput size={48} strokeWidth={1.25} />,
    label: 'Get Summary',
    description: 'Receive a clear, structured summary instantly'
  }
]

export default function HowItWorksSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 py-16 sm:py-24">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden opacity-10">
        <div className="absolute left-1/2 top-0 w-[300px] -translate-x-1/2 blur-3xl">
          <div 
            className="aspect-[1155/678] w-[36.125rem] bg-gradient-to-br from-[#006747] via-[#007A53] to-[#008D5E]"
            style={{
              clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <MotionDiv 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-[#006747]/10 text-[#006747] text-sm font-medium mb-4"
          >
            How It Works
          </MotionDiv>
          <MotionH3
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 max-w-3xl mx-auto"
          >
            Transform documents into insights with our three-step process
          </MotionH3>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto relative">
          {steps.map((step, idx) => (
            <MotionDiv
              key={idx}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative"
            >
              <StepItem {...step} />
              {idx < steps.length - 1 && (
                <div className="hidden md:flex absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2 z-10 items-center justify-center w-10 h-10 rounded-full bg-white border border-[#006747]/20 shadow-sm">
                  <ChevronRight size={20} className="text-[#006747]" />
                </div>
              )}
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
}

function StepItem({ icon, label, description }: Step) {
  return (
    <div className="h-full p-6 rounded-xl bg-white border border-gray-200 hover:border-[#006747]/40 transition-all duration-300 shadow-sm hover:shadow-md group">
      <div className="flex flex-col items-center text-center h-full">
        {/* Icon container */}
        <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-[#006747]/5 group-hover:bg-[#006747]/10 mb-6 transition-colors duration-300">
          <div className="text-[#006747]">{icon}</div>
        </div>
        
        {/* Content */}
        <div className="flex-1">
          <h4 className="text-xl font-semibold text-gray-900 mb-3">{label}</h4>
          <p className="text-gray-600">{description}</p>
        </div>
        
        {/* Step indicator */}
        <div className="mt-6 w-8 h-1.5 rounded-full bg-[#006747]/20 group-hover:bg-[#006747]/40 transition-colors duration-300"></div>
      </div>
    </div>
  );
}