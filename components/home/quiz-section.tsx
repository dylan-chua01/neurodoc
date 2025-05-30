import React from 'react';
import { Brain, Zap, Award, TrendingUp, ArrowRight, CheckCircle, Star, Target } from 'lucide-react';

const QuizPromoSection = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-orange-50/50 via-rose-50/30 to-pink-50/30">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-rose-400/5 via-rose-300/5 to-orange-200/5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-rose-400/10 to-orange-300/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-orange-400/10 to-rose-300/10 rounded-full blur-3xl"></div>
      
      <div className="relative container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-100 to-orange-100 rounded-full px-6 py-2 mb-6">
            <Zap className="h-5 w-5 text-rose-600" />
            <span className="text-rose-700 font-semibold text-sm">NEW FEATURE</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-rose-800 to-orange-800 bg-clip-text text-transparent mb-6 leading-tight">
            Test Your Knowledge
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Transform your learning with AI-powered quizzes. Turn any document into an interactive knowledge test and track your understanding in real-time.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Column - Features */}
          <div className="space-y-8">
            <div className="space-y-6">
              {[
                {
                  icon: Brain,
                  title: "AI-Generated Questions",
                  description: "Smart algorithms analyze your documents to create relevant, challenging questions that test key concepts and details.",
                  gradient: "from-rose-500 to-pink-500"
                },
                {
                  icon: Target,
                  title: "Various Types",
                  description: "Various types of questions to test your understanding, and knowledge.",
                  gradient: "from-orange-500 to-rose-400"
                },
                {
                  icon: TrendingUp,
                  title: "Improved Retention",
                  description: "Improve your knowledge retention by testing yourself with new questions over time.",
                  gradient: "from-rose-400 via-rose-300 to-orange-200"
                }
              ].map((feature, index) => (
                <div key={index} className="group flex gap-4 p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className={`p-3 bg-gradient-to-br ${feature.gradient} rounded-xl text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Interactive Demo Card */}
          <div className="relative">
            {/* Glowing border effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-rose-400/20 via-rose-300/20 to-orange-200/20 rounded-3xl blur-lg"></div>
            
            <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 overflow-hidden">
              {/* Demo Header */}
              <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-rose-400 via-rose-300 to-orange-200 opacity-90"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                
                <div className="relative p-8 text-white">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-white/20 rounded-xl backdrop-blur-sm">
                      <Brain className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Quiz Preview</h3>
                      <p className="text-white/80">See how it works</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Demo Content */}
              <div className="p-8 space-y-6">
                {/* Sample Question */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="bg-rose-100 text-rose-700 px-3 py-1 rounded-full font-medium">Question 1/5</span>
                    <span>•</span>
                    <span>Multiple Choice</span>
                  </div>
                  
                  <h4 className="text-lg font-semibold text-gray-800 leading-relaxed">
                    What is the primary benefit of AI-powered document analysis?
                  </h4>
                  
                  <div className="space-y-3">
                    {[
                      { text: "Faster processing speeds", correct: false },
                      { text: "Intelligent content understanding", correct: true },
                      { text: "Reduced file sizes", correct: false },
                      { text: "Better graphics quality", correct: false }
                    ].map((option, i) => (
                      <div 
                        key={i} 
                        className={`flex items-center gap-3 p-4 rounded-xl border transition-all duration-200 cursor-pointer ${
                          option.correct 
                            ? 'bg-green-50 border-green-200 text-green-800' 
                            : 'bg-gray-50 border-gray-200 hover:border-rose-300 hover:bg-rose-50/50'
                        }`}
                      >
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                          option.correct ? 'border-green-500 bg-green-500' : 'border-gray-300'
                        }`}>
                          {option.correct && <CheckCircle className="h-3 w-3 text-white fill-current" />}
                        </div>
                        <span className="font-medium">{option.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center">
          <div className="relative inline-block">
            {/* Glowing effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-rose-400 via-rose-300 to-orange-200 rounded-2xl blur-lg opacity-30"></div>
            
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuizPromoSection;