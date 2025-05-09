import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from '../ui/badge';
import Link from "next/link";
import { MotionDiv, MotionH1, MotionH2, MotionSection, MotionSpan, MotionCircle } from "../common/motion-wrapper";
import { containerVariants, itemVariants } from "@/utils/constants";

const buttonVariants = {
  scale: 1.05,
  transition: {
    type: 'spring',
    stiffness: 300,
    damping: 10,
  }
}

const circleDraw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { delay: 0.5, type: "spring", duration: 1.5, bounce: 0 },
      opacity: { delay: 0.5, duration: 0.01 }
    }
  }
}

export default function HeroSection() {
  return (
    <MotionSection 
      variants={containerVariants} 
      initial="hidden" 
      animate="visible" 
      className="relative mx-auto flex flex-col z-0 items-center justify-center py-16 sm:py-24 lg:pb-32 transition-all animate-in px-4 sm:px-6 lg:px-8 max-w-7xl"
    >
      {/* Background gradient element */}
      <div className="absolute inset-0 -z-10 overflow-hidden opacity-15">
        <div className="absolute left-1/2 top-0 w-[300px] -translate-x-1/2 blur-3xl">
          <div 
            className="aspect-[1155/678] w-[36.125rem] bg-gradient-to-br from-[#006747] via-[#007A53] to-[#008D5E]"
            style={{
              clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>

      <div className="flex flex-col items-center text-center w-full">
        {/* Premium Badge */}
        <MotionDiv variants={itemVariants} className="mb-8">
          <Badge 
            variant={'secondary'}
            className="px-6 py-2 text-sm font-medium rounded-full border border-amber-400/30 bg-gradient-to-r from-amber-500/10 to-amber-600/10 hover:from-amber-500/20 hover:to-amber-600/20 transition-all duration-300"
          >
            <Sparkles className="h-5 w-5 mr-2 text-amber-400 animate-pulse"/>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-amber-300">
              Premium AI Technology
            </span>
          </Badge>
        </MotionDiv>

        {/* Headings */}
        <MotionH1 
          variants={itemVariants} 
          className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6"
        >
          Transform Documents Into{' '}
          <MotionSpan 
            whileHover={buttonVariants} 
            className="relative inline-block"
          >
            <span className="relative z-10">
              Actionable
            </span>
            <span className="absolute inset-0 bg-[#007A53]/20 -rotate-1 rounded-lg transform -skew-y-1" aria-hidden="true"></span>
          </MotionSpan>{' '}
          Insights
        </MotionH1>

        <MotionH2 
          variants={itemVariants} 
          className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-3xl leading-relaxed"
        >
          Work smarter, not harder — let AI simplify your notes and readings
        </MotionH2>

        {/* Animated CTA Button with Drawing Circle */}
        <MotionDiv
          variants={itemVariants}
          className="mt-10 relative"
        >
          <div className="relative">
            {/* Drawing circle animation */}
            <MotionDiv 
              className="absolute -inset-2"
              initial="hidden"
              animate="visible"
            >
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <MotionCircle
                  cx="50"
                  cy="50"
                  r="48"
                  stroke="#006747"
                  strokeWidth="1"
                  fill="transparent"
                  strokeDasharray="301.6"
                  strokeDashoffset="0"
                  variants={circleDraw}
                  className="origin-center"
                />
              </svg>
            </MotionDiv>

            <Button 
              size="lg"
              className="relative rounded-full px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-[#006747] to-[#008D5E] hover:from-[#008D5E] hover:to-[#006747]"
            >
              <Link 
                href="/#pricing"
                className="flex gap-2 items-center justify-center w-full text-white"
              >
                <span>Get Started</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </MotionDiv>

        {/* Trust indicator */}
        <MotionDiv 
          variants={itemVariants}
          className="mt-12 text-sm text-gray-500 flex items-center gap-x-2"
        >
          <span>Trusted by professionals worldwide</span>
          <span className="h-4 w-px bg-gray-300"></span>
          <div className="flex -space-x-2">
            {[1, 2, 3].map((item) => (
              <div key={item} className="h-6 w-6 rounded-full bg-gradient-to-br from-[#006747] to-[#008D5E] border-2 border-white"></div>
            ))}
          </div>
        </MotionDiv>
      </div>
    </MotionSection>
  );
}