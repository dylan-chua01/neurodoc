module.exports = {

"[externals]/node:fs/promises [external] (node:fs/promises, cjs, async loader)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "server/chunks/ssr/[externals]_node:fs_promises_d067aafe._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[externals]/node:fs/promises [external] (node:fs/promises, cjs)");
    });
});
}}),
"[project]/node_modules/pdf-parse/lib/pdf.js/v1.10.100/build/pdf.js [app-rsc] (ecmascript, async loader)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "server/chunks/ssr/node_modules_pdf-parse_lib_pdf_js_v1_10_100_build_pdf_worker_1fe8c05c.js",
  "server/chunks/ssr/node_modules_pdf-parse_lib_pdf_js_v1_10_100_build_pdf_8d1c83f8.js",
  "server/chunks/ssr/node_modules_node-ensure_index_4dfda820.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/node_modules/pdf-parse/lib/pdf.js/v1.10.100/build/pdf.js [app-rsc] (ecmascript)");
    });
});
}}),

};