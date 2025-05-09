import { FileText, Sparkles, Download, Users } from "lucide-react";
import { MotionDiv, MotionH3 } from "../common/motion-wrapper";

export default function FeatureHighlights() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <MotionH3
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Smarter Document Understanding
          </MotionH3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Let Neurodoc’s AI do the reading—get focused, decision-ready summaries in seconds.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Feature 1 */}
          <MotionDiv
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:border-rose-100 transition-all"
          >
            <div className="text-2xl font-bold text-rose-600 mb-2">1</div>
            <div className="flex items-center mb-4">
              <div className="p-3 rounded-lg bg-rose-100/50 text-rose-600 mr-4">
                <FileText className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-gray-900">Smart PDF Summarization</h4>
            </div>
            <p className="text-gray-600">
              Extract key points from lengthy documents in seconds. Our AI identifies and condenses the most important information.
            </p>
          </MotionDiv>

          {/* Feature 2 */}
          <MotionDiv
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:border-blue-100 transition-all"
          >
            <div className="text-2xl font-bold text-blue-600 mb-2">2</div>
            <div className="flex items-center mb-4">
              <div className="p-3 rounded-lg bg-blue-100/50 text-blue-600 mr-4">
                <Sparkles className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-gray-900">AI-Powered Insights</h4>
            </div>
            <p className="text-gray-600">
              Get more than just summaries - our AI highlights connections and creates structured knowledge graphs.
            </p>
          </MotionDiv>

          {/* Feature 3 */}
          <MotionDiv
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:border-emerald-100 transition-all"
          >
            <div className="text-2xl font-bold text-emerald-600 mb-2">3</div>
            <div className="flex items-center mb-4">
              <div className="p-3 rounded-lg bg-emerald-100/50 text-emerald-600 mr-4">
                <Download className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-gray-900">Flexible Export</h4>
            </div>
            <p className="text-gray-600">
              Export summaries to PDF, Markdown, or Word with perfect formatting. Share insights with colleagues effortlessly.
            </p>
          </MotionDiv>

          {/* Feature 4 */}
          <MotionDiv
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:border-purple-100 transition-all"
          >
            <div className="text-2xl font-bold text-purple-600 mb-2">4</div>
            <div className="flex items-center mb-4">
              <div className="p-3 rounded-lg bg-purple-100/50 text-purple-600 mr-4">
                <Users className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-gray-900">Team Collaboration</h4>
            </div>
            <p className="text-gray-600">
              Share summaries with your team, add comments, and collaborate on document analysis in real-time.
            </p>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
}