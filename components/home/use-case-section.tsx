import { BookText, GraduationCap, Briefcase, FileSearch } from "lucide-react";
import { MotionDiv, MotionH3, MotionP } from "../common/motion-wrapper";

export function UseCasesSection() {
  const useCases = [
    {
      icon: <GraduationCap className="w-8 h-8 text-rose-500" />,
      title: "Academic Research",
      description: "Quickly digest research papers and extract key findings without reading hundreds of pages.",
      benefits: [
        "Summarsze long pdf's for literature reviews",
        "Highlight methodologies and results",
        "Shows strengths and weaknesses of the paper"
      ]
    },
    {
      icon: <Briefcase className="w-8 h-8 text-blue-500" />,
      title: "Business Intelligence",
      description: "Transform lengthy reports into executive summaries for faster decision making.",
      benefits: [
        "Analyze contracts and reports in minutes",
        "Extract key metrics from financial documents",
        "Identify suitable candidates for your next hire"
      ]
    },
    {
      icon: <BookText className="w-8 h-8 text-emerald-500" />,
      title: "Legal Document Review",
      description: "Navigate complex contracts and legal documents with AI-powered insights.",
      benefits: [
        "Identify critical clauses and obligations",
        "Simplifies relavant cases for your perusal",
        "Highlight potential risk areas"
      ]
    },
    {
      icon: <FileSearch className="w-8 h-8 text-purple-500" />,
      title: "Content Curation",
      description: "Process large volumes of content to find relevant information quickly.",
      benefits: [
        "Summarize news articles and industry reports",
        "Extract key points from long-form content",
        "Create digestible content briefs"
      ]
    }
  ];

  return (
    <section className="relative py-16 sm:py-24 bg-gradient-to-b from-white to-gray-50">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 w-[300px] -translate-x-1/2 blur-3xl">
          <div 
            className="aspect-[1155/678] w-[36.125rem] bg-gradient-to-br from-rose-500/30 via-purple-500/30 to-blue-500/30 opacity-30"
            style={{
              clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
            }}
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <MotionH3
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Transform How You Work With Documents
          </MotionH3>
          <MotionP
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Neurodoc adapts to your specific needs across industries and use cases.
          </MotionP>
        </div>

        {/* Use case cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <MotionDiv
              key={index}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all"
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-lg bg-gradient-to-br from-white to-gray-50 border border-gray-200">
                  {useCase.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{useCase.title}</h4>
                  <p className="text-gray-600 mb-4">{useCase.description}</p>
                  <ul className="space-y-2">
                    {useCase.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="h-5 w-5 text-rose-500 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </MotionDiv>
          ))}
        </div>

        {/* CTA */}
        <MotionDiv
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-16"
        >
          
        </MotionDiv>
      </div>
    </section>
  );
}