module.exports = {

"[project]/utils/prompts.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "SUMMARY_SYSTEM_PROMPT": (()=>SUMMARY_SYSTEM_PROMPT)
});
const SUMMARY_SYSTEM_PROMPT = `You are an expert document analyst who creates precision summaries that transform complex documents into actionable intelligence. Adapt your output based on document type and audience needs while maintaining professional depth and engagement.

# [Document Title: Specific and Descriptive]
• 🎯 Core Thesis: One compelling sentence capturing the document's essence
• 📌 Context: Optional secondary framing point if needed

## Document Profile
• 📄 Type: [Academic/Legal/Business/Technical] 
• 👥 Primary Audience: [Students/Lawyers/Executives/Technicians]
• ⏳ Time Relevance: [Key dates/periods/deadlines]
• 🏛️ Jurisdiction/Scope: [For legal/business docs]

## Decision-Making Essentials
• 🔑 [First evidence-based insight requiring action]
• 💡 [Second significant finding with implications]
• 📊 [Third data-driven conclusion with impact]
• 🔄 Time-sensitive elements: [🟢 Low/🟡 Medium/🔴 High urgency]

## "If You Only Remember 3 Things"
• ⭐ [Most critical takeaway with specific details]
• ⭐ [Second must-know point with practical relevance]
• ⭐ [Third essential insight with distinctive value]

## Actionable Intelligence
• ✅ [First practical application or recommendation]
• 🛠️ [Second implementation strategy]
• 📈 [Third strategic consideration]
• ⏱️ [Time-sensitive actions with deadlines]

## Key Metrics & Data Points
• 📈 [Primary Metric]: [Value] | [Context/Comparison] | [Significance]
• 💰 [Financial Figure]: [Value] | [% change] | [Impact assessment]
• 📊 [Statistical Finding]: [Value] | [Confidence level] | [Implications]
• ⏱️ [Time-based Data]: [Value] | [Trend direction] | [Forecast]
• 🔢 [Other Critical Number]: [Value] | [Benchmark comparison] | [Actionability]

## Stakeholder Impact Matrix
• 👥 [Group 1]: [Benefit level] | [Risk exposure] | [Required action]
• 👥 [Group 2]: [Benefit level] | [Risk exposure] | [Required action]
• 👥 [Group 3]: [Benefit level] | [Risk exposure] | [Required action]

## Terminology Decoder
• 📚 [Key Term 1]: [Audience-appropriate definition]
• 🔍 [Key Term 2]: [Simplified explanation]
• ⚙️ [Technical term]: [Field-specific clarification]

## Professional Evaluation
• 💪 Document Strength: [Methodology/evidence/innovation]
• ⚠️ Caveat: [Limitation/bias/competitor concern] 
• 🚨 Red Flags: [Unsubstantiated claims/contradictions/omissions]

## Professional Lens Filters
• 🎓 **Academic Perspective**
  - Theoretical Framework: [Key academic foundations]
  - Research Methodology: [Validity assessment ⭐⭐⭐⭐☆]
  - Citation Highlights: [Most reference-worthy content]

• ⚖️ **Legal Perspective**
  - Precedent Value: [Case law/regulatory impact]
  - Frequently Contested Clauses: [Key legal pressure points]
  - Critical Deadlines: [Filing/compliance dates]

• 💰 **Business Perspective**
  - Financial Impact: [Revenue/cost implications]
  - Market Intelligence: [Competitive positioning]
  - Implementation Complexity: [Resources/timeline/dependencies]

• ⚙️ **Technical Perspective**
  - Specifications: [Key technical requirements]
  - Integration Requirements: [System/compatibility notes]
  - Implementation Roadmap: [Step-by-step guidance]

## Action Pack
• 📧 Communication Template: [Key points for stakeholder briefing]
• 📊 Visualization-Ready Data: [Key metrics/comparisons]
• 🗣️ Talking Points: [For meetings/presentations/discussions]

## Final Synthesis
• 📌 Ultimate Takeaway: [Single most important point]
• 🔮 Future Implications: [Emerging trends/long-term impact]

---

**Formatting Rules:**
1. Emoji Usage:
   - Choose emojis appropriate to subject matter
   - Use consistently for section headers
   - Keep professional (fewer emojis for formal documents)
   - Ensure emojis add meaning rather than decoration

2. Always:
   - Begin main points with "• [emoji]"
   - Maintain parallel structure throughout
   - Use Markdown headers (##, ###) for clear hierarchy
   - Keep explanations audience-appropriate
   - Color-code urgency where applicable (🟢/🟡/🔴)

3. Section Selection:
   - Include core sections for all documents
   - Adapt Professional Lens section based on document type
   - Emphasize sections most relevant to primary audience
   - Omit sections that don't apply to the document

4. Never:
   - Use numbered lists
   - Exceed 5 bullet points per section
   - Include inappropriate perspective for document type

**Quality Checks:**
✓ Decision-critical information prioritized
✓ Technical accuracy preserved
✓ Jargon explained for non-specialists
✓ Actionable insights highlighted
✓ Key numerical data clearly presented
✓ Source limitations acknowledged
✓ Visual elements (tables, color-coding) used purposefully
✓ Important metrics contextualized with benchmarks
`;
}}),
"[externals]/child_process [external] (child_process, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("child_process", () => require("child_process"));

module.exports = mod;
}}),
"[externals]/fs [external] (fs, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}}),
"[externals]/os [external] (os, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}}),
"[externals]/net [external] (net, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("net", () => require("net"));

module.exports = mod;
}}),
"[externals]/tls [external] (tls, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("tls", () => require("tls"));

module.exports = mod;
}}),
"[externals]/assert [external] (assert, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}}),
"[externals]/tty [external] (tty, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}}),
"[externals]/util [external] (util, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}}),
"[externals]/http [external] (http, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}}),
"[externals]/https [external] (https, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}}),
"[externals]/stream [external] (stream, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}}),
"[externals]/punycode [external] (punycode, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("punycode", () => require("punycode"));

module.exports = mod;
}}),
"[externals]/zlib [external] (zlib, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}}),
"[externals]/querystring [external] (querystring, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("querystring", () => require("querystring"));

module.exports = mod;
}}),
"[externals]/node:events [external] (node:events, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:events", () => require("node:events"));

module.exports = mod;
}}),
"[externals]/node:process [external] (node:process, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:process", () => require("node:process"));

module.exports = mod;
}}),
"[externals]/node:util [external] (node:util, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:util", () => require("node:util"));

module.exports = mod;
}}),
"[externals]/buffer [external] (buffer, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}}),
"[externals]/events [external] (events, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}}),
"[externals]/fs/promises [external] (fs/promises, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("fs/promises", () => require("fs/promises"));

module.exports = mod;
}}),
"[project]/lib/geminiai.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "generateQuestions": (()=>generateQuestions),
    "generateSummaryFromGemini": (()=>generateSummaryFromGemini)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$prompts$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/prompts.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$genai$2f$dist$2f$node$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@google/genai/dist/node/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$generative$2d$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@google/generative-ai/dist/index.mjs [app-rsc] (ecmascript)");
;
;
;
// Check for API key
if (!process.env.GEMINI_API_KEY) {
    throw new Error("❌ Missing GEMINI_API_KEY. Please define it in .env.local");
}
// Initialize Gemini
const ai = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$genai$2f$dist$2f$node$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["GoogleGenAI"]({
    apiKey: process.env.GEMINI_API_KEY
});
const genAI = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$generative$2d$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["GoogleGenerativeAI"](process.env.GEMINI_API_KEY || "");
const generateSummaryFromGemini = async (pdfText)=>{
    try {
        const prompt = `${__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$prompts$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SUMMARY_SYSTEM_PROMPT"]}

Transform this document into an engaging, easy-to-read summary with contextually relevant emojis and proper markdown formatting:

${pdfText}`;
        const response = await ai.models.generateContent({
            model: "gemini-1.5-flash",
            contents: [
                {
                    role: "user",
                    parts: [
                        {
                            text: prompt
                        }
                    ]
                }
            ]
        });
        // Some SDKs may return .candidates[0].content.parts[0].text instead of .text
        const summary = response?.text || response?.candidates?.[0]?.content?.parts?.[0]?.text;
        if (!summary) {
            throw new Error("❌ Empty response from Gemini API");
        }
        return summary;
    } catch (error) {
        // Handle Gemini rate limit
        if (error?.status === 429) {
            throw new Error("❌ RATE_LIMIT_EXCEEDED");
        }
        // Full error trace
        console.error("🚨 Gemini API Error:", {
            message: error.message,
            stack: error.stack,
            cause: error.cause,
            error
        });
        throw error;
    }
};
async function generateQuestions(summaryText) {
    const model = genAI.getGenerativeModel({
        model: "gemini-2.0-flash"
    });
    const prompt = `
You are a quiz generator. Based on the following summary, create exactly 8 high-quality quiz questions.
Mix multiple-choice questions (4 options each) with short-answer questions.

IMPORTANT FORMATTING RULES:
- Start each question with "QUESTION:" followed by the question text
- For multiple-choice, list options as "OPTION A:", "OPTION B:", etc.
- End each question with "ANSWER:" followed by the correct answer
- For MCQ answers, use just the letter (A, B, C, or D)
- For short answers, provide a concise but complete answer
- Separate each question with "---"

Example format:
QUESTION: What is the capital of France?
OPTION A: Berlin
OPTION B: Madrid  
OPTION C: Paris
OPTION D: Rome
ANSWER: C

---

QUESTION: Explain the main benefit of renewable energy.
ANSWER: Renewable energy sources like solar and wind are sustainable and don't deplete natural resources, making them environmentally friendly alternatives to fossil fuels.

---

Summary to create questions from:
${summaryText}

Generate the questions now:`;
    try {
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        // Parse the structured response
        const questionBlocks = text.split('---').filter((block)=>block.trim());
        const parsed = questionBlocks.map((block)=>{
            const lines = block.trim().split('\n').filter((line)=>line.trim());
            let question = '';
            let options = [];
            let answer = '';
            for (const line of lines){
                const trimmedLine = line.trim();
                if (trimmedLine.startsWith('QUESTION:')) {
                    question = trimmedLine.replace('QUESTION:', '').trim();
                } else if (trimmedLine.startsWith('OPTION')) {
                    const optionText = trimmedLine.replace(/OPTION [A-D]:\s*/, '').trim();
                    if (optionText) options.push(optionText);
                } else if (trimmedLine.startsWith('ANSWER:')) {
                    answer = trimmedLine.replace('ANSWER:', '').trim();
                }
            }
            // Validate the parsed question
            if (!question || !answer) {
                return null;
            }
            // For MCQ, ensure we have 4 options and the answer is a letter
            if (options.length === 4 && [
                'A',
                'B',
                'C',
                'D'
            ].includes(answer)) {
                return {
                    question,
                    options,
                    answer,
                    type: 'mcq'
                };
            }
            // For short answer, ensure no options and answer is substantial
            if (options.length === 0 && answer.length > 10) {
                return {
                    question,
                    options: [],
                    answer,
                    type: 'short'
                };
            }
            return null;
        }).filter(Boolean);
        // Ensure we have at least some valid questions
        if (parsed.length === 0) {
            throw new Error("No valid questions could be parsed from the response");
        }
        return parsed;
    } catch (error) {
        console.error("Error generating questions:", error);
        // Fallback: generate simpler questions
        try {
            return await generateFallbackQuestions(summaryText);
        } catch (fallbackError) {
            console.error("Fallback question generation also failed:", fallbackError);
            throw new Error("Failed to generate quiz questions");
        }
    }
}
// Fallback question generator with simpler format
async function generateFallbackQuestions(summaryText) {
    const model = genAI.getGenerativeModel({
        model: "gemini-2.0-flash"
    });
    const prompt = `
Create 5 simple questions about this summary. Make them clear and answerable.

Format each as:
Q1: [question]
A1: [answer]

Q2: [question] 
A2: [answer]

Summary: ${summaryText}`;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    const questions = [];
    const lines = text.split('\n');
    for(let i = 0; i < lines.length; i++){
        const line = lines[i].trim();
        if (line.match(/^Q\d+:/)) {
            const question = line.replace(/^Q\d+:\s*/, '').trim();
            const nextLine = lines[i + 1]?.trim();
            if (nextLine && nextLine.match(/^A\d+:/)) {
                const answer = nextLine.replace(/^A\d+:\s*/, '').trim();
                if (question && answer) {
                    questions.push({
                        question,
                        options: [],
                        answer,
                        type: 'short'
                    });
                }
            }
        }
    }
    return questions;
}
}}),
"[project]/lib/langchain.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({
    "fetchAndExtractPdfText": (()=>fetchAndExtractPdfText),
    "ingestAndEmbedPDF": (()=>ingestAndEmbedPDF)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$community$2f$document_loaders$2f$fs$2f$pdf$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@langchain/community/document_loaders/fs/pdf.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$community$2f$dist$2f$document_loaders$2f$fs$2f$pdf$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@langchain/community/dist/document_loaders/fs/pdf.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$langchain$2f$text_splitter$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/langchain/text_splitter.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$textsplitters$2f$dist$2f$text_splitter$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@langchain/textsplitters/dist/text_splitter.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/db.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
([__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
;
;
;
async function fetchAndExtractPdfText(fileUrl) {
    const response = await fetch(fileUrl);
    const blob = await response.blob();
    const arrayBuffer = await blob.arrayBuffer();
    const loader = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$community$2f$dist$2f$document_loaders$2f$fs$2f$pdf$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PDFLoader"](new Blob([
        arrayBuffer
    ]));
    const docs = await loader.load();
    //combine pages
    return docs.map((doc)=>doc.pageContent).join('\n');
}
async function ingestAndEmbedPDF(fileUrl) {
    const fileRes = await fetch(fileUrl);
    const blob = await fileRes.blob();
    const loader = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$community$2f$dist$2f$document_loaders$2f$fs$2f$pdf$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PDFLoader"](blob, {
        splitPages: true
    });
    const docs = await loader.load();
    const splitter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$textsplitters$2f$dist$2f$text_splitter$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RecursiveCharacterTextSplitter"]({
        chunkSize: 1000,
        chunkOverlap: 200
    });
    const splitDocs = await splitter.splitDocuments(docs);
    const vectorStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getVectorStore"])(fileUrl); // e.g. Chroma/Pinecone
    await vectorStore.addDocuments(splitDocs);
    return vectorStore.asRetriever();
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/utils/format-utils.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "formatFileNameAsTitle": (()=>formatFileNameAsTitle)
});
function formatFileNameAsTitle(fileName) {
    const withoutExtension = fileName.replace(/\.[^/.]+$/, '');
    const withSpaces = withoutExtension.replace(/[-_]+/g, '').replace(/([a-z])([A-Z])/g, '$1 $2');
    return withSpaces.split('').map((word)=>word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join('').trim();
}
}}),
"[project]/actions/upload-actions.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
/* __next_internal_action_entry_do_not_use__ [{"402a84d8633a5ee3cd7021612d6dbfa4441b3c5c54":"storePdfSummaryAction","403983b837ac29b130e4236a0705fcc8c6094c5b3e":"generatePdfSummary"},"",""] */ __turbopack_context__.s({
    "generatePdfSummary": (()=>generatePdfSummary),
    "storePdfSummaryAction": (()=>storePdfSummaryAction)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/app-render/encryption.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/db.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$geminiai$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/geminiai.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$langchain$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/langchain.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$format$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/format-utils.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$auth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@clerk/nextjs/dist/esm/app-router/server/auth.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$langchain$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
([__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$langchain$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
;
;
;
;
;
;
;
;
async function generatePdfSummary(uploadResponse) {
    if (!uploadResponse) {
        return {
            success: false,
            message: 'File upload failed',
            data: null
        };
    }
    const { serverData: { userId, file: { url: pdfUrl, name: fileName } } } = uploadResponse[0];
    if (!pdfUrl) {
        return {
            success: false,
            message: 'File upload failed',
            data: null
        };
    }
    try {
        const pdfText = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$langchain$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fetchAndExtractPdfText"])(pdfUrl);
        console.log({
            pdfText
        });
        let summary;
        try {
            summary = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$geminiai$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateSummaryFromGemini"])(pdfText);
            console.log({
                summary
            });
        } catch (error) {
            console.log(error);
            //call gemini
            if (error instanceof Error && error.message === 'RATE_LIMIT_EXCEEDED') {
                try {
                    summary = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$geminiai$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateSummaryFromGemini"])(pdfText);
                } catch (geminiError) {
                    console.error('Gemini API feailed after OPENAI quota exceeded', geminiError);
                    throw new Error('Failed to generate summary with available AI providers');
                }
            }
        }
        if (!summary) {
            return {
                success: false,
                message: 'File to generate summary',
                data: null
            };
        }
        const formattedFileName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$format$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatFileNameAsTitle"])(fileName);
        return {
            success: true,
            message: 'Summary generated successfully',
            data: {
                title: fileName,
                summary
            }
        };
    } catch (err) {
        return {
            success: false,
            message: 'File upload failed',
            data: null
        };
    }
}
async function savePdfSummary({ userId, fileUrl, summary, title, fileName }) {
    try {
        const sql = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDbConnection"])();
        const [savedSummary] = await sql`
            INSERT INTO pdf_summaries(
                user_id,
                original_file_url,
                summary_text,
                title,
                file_name
            ) VALUES (
                ${userId},
                ${fileUrl},
                ${summary},
                ${title},
                ${fileName}
            ) RETURNING id, summary_text
        `;
        return savedSummary;
    } catch (error) {
        console.error('Error saving PDF summary', error);
        throw error;
    }
}
async function storePdfSummaryAction({ fileUrl, summary, title, fileName }) {
    //user logged in
    //save pdf summary
    //savepdf summary()
    let savedSummary;
    try {
        const { userId } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$auth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
        if (!userId) {
            return {
                success: false,
                message: 'User not found'
            };
        }
        savedSummary = await savePdfSummary({
            userId,
            fileUrl,
            summary,
            title,
            fileName
        });
        if (!savedSummary) {
            return {
                success: false,
                message: 'Failed to save PDF summary, please try again...'
            };
        }
    } catch (error) {
        return {
            success: false,
            message: error instanceof Error ? error.message : 'Error saving PDF summary'
        };
    }
    ;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/summaries/${savedSummary.id}`);
    return {
        success: true,
        message: 'PDF summary saved successfully',
        data: {
            id: savedSummary.id
        }
    };
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    generatePdfSummary,
    storePdfSummaryAction
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(generatePdfSummary, "403983b837ac29b130e4236a0705fcc8c6094c5b3e", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(storePdfSummaryAction, "402a84d8633a5ee3cd7021612d6dbfa4441b3c5c54", null);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.tsx [app-rsc] (ecmascript)"));
}}),
"[project]/app/(logged-in)/layout.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/app/(logged-in)/layout.tsx [app-rsc] (ecmascript)"));
}}),
"[project]/components/upload/upload-form.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/upload/upload-form.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/upload/upload-form.tsx <module evaluation>", "default");
}}),
"[project]/components/upload/upload-form.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/upload/upload-form.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/upload/upload-form.tsx", "default");
}}),
"[project]/components/upload/upload-form.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$upload$2f$upload$2d$form$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/components/upload/upload-form.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$upload$2f$upload$2d$form$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/components/upload/upload-form.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$upload$2f$upload$2d$form$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/components/upload/upload-header.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>UploadHeader)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-rsc] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/badge.tsx [app-rsc] (ecmascript)");
;
;
;
function UploadHeader() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center jusify-center gap-6 text-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative p-[1px] overflow-hidden rounded-full bg-linear-to-r from-rose-200 via-rose-500 to-rose-800 animate-gradient-x group",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Badge"], {
                    variant: 'secondary',
                    className: "relative px-6 py-2 text-base font-medium bg-white rounded-full group-hover:bg-gray-50 transition-colors",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                            className: "h-6 w-6 mr-2 text-rose-600 animate-pulse"
                        }, void 0, false, {
                            fileName: "[project]/components/upload/upload-header.tsx",
                            lineNumber: 11,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "AI-Powered Content Creation"
                        }, void 0, false, {
                            fileName: "[project]/components/upload/upload-header.tsx",
                            lineNumber: 13,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/upload/upload-header.tsx",
                    lineNumber: 8,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/upload/upload-header.tsx",
                lineNumber: 7,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "capitalize text-3xl font-bold tracking-tight text-gray-900sm:text-4xl",
                children: [
                    "Start Uploading",
                    ' ',
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "relative inline-block",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "relative z-10 px-2",
                                children: "Your PDF's"
                            }, void 0, false, {
                                fileName: "[project]/components/upload/upload-header.tsx",
                                lineNumber: 20,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "absolute inset-0 bg-rose-200/50 -rotate-2 rounded-lg transform -skew-y-1",
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/components/upload/upload-header.tsx",
                                lineNumber: 23,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/upload/upload-header.tsx",
                        lineNumber: 18,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/upload/upload-header.tsx",
                lineNumber: 16,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-2 text-lg leading-8 text-gray-600 max-w-2xl text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "Upload your PDF and let our AI do the magic!"
                }, void 0, false, {
                    fileName: "[project]/components/upload/upload-header.tsx",
                    lineNumber: 29,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/upload/upload-header.tsx",
                lineNumber: 28,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/upload/upload-header.tsx",
        lineNumber: 6,
        columnNumber: 9
    }, this);
}
}}),
"[project]/app/(logged-in)/upload/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({
    "default": (()=>Page)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$bg$2d$gradient$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/common/bg-gradient.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$upload$2f$upload$2d$form$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/upload/upload-form.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$upload$2f$upload$2d$header$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/upload/upload-header.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$user$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/user.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$currentUser$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@clerk/nextjs/dist/esm/app-router/server/currentUser.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$user$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
([__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$user$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
;
;
;
;
;
;
;
async function Page() {
    const user = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$currentUser$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["currentUser"])();
    if (!user?.id) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])('/sign-in');
    }
    const userId = user.id;
    const { hasReachedLimit } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$user$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasReachedUploadLimit"])(userId);
    if (hasReachedLimit) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])('/dashboard');
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "min-h-screen",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$bg$2d$gradient$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/(logged-in)/upload/page.tsx",
                lineNumber: 24,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center justify-center gap-6 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$upload$2f$upload$2d$header$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/app/(logged-in)/upload/page.tsx",
                            lineNumber: 27,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$upload$2f$upload$2d$form$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/app/(logged-in)/upload/page.tsx",
                            lineNumber: 28,
                            columnNumber: 17
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(logged-in)/upload/page.tsx",
                    lineNumber: 26,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(logged-in)/upload/page.tsx",
                lineNumber: 25,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(logged-in)/upload/page.tsx",
        lineNumber: 23,
        columnNumber: 9
    }, this);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/app/(logged-in)/upload/page.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/app/(logged-in)/upload/page.tsx [app-rsc] (ecmascript)"));
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__969b4440._.js.map