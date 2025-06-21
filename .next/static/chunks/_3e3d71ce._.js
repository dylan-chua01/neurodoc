(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/utils/uploadthing.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useUploadThing": (()=>useUploadThing)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$uploadthing$2f$react$2f$dist$2f$button$2d$client$2d$BLNyMUF0$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__g__as__generateReactHelpers$3e$__ = __turbopack_context__.i("[project]/node_modules/@uploadthing/react/dist/button-client-BLNyMUF0.js [app-client] (ecmascript) <export g as generateReactHelpers>");
;
const { useUploadThing } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$uploadthing$2f$react$2f$dist$2f$button$2d$client$2d$BLNyMUF0$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__g__as__generateReactHelpers$3e$__["generateReactHelpers"])();
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/ui/button.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Button": (()=>Button),
    "buttonVariants": (()=>buttonVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
            destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
            secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2 has-[>svg]:px-3",
            sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
            lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
            icon: "size-9"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/button.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/ui/input.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Input": (()=>Input)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
function Input({ className, type, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        "data-slot": "input",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/input.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Input;
;
var _c;
__turbopack_context__.k.register(_c, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/upload/upload-form-input.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "UploadFormInput": (()=>UploadFormInput),
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
'use client';
;
;
;
;
;
;
const UploadFormInput = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ onSubmit, isLoading }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        ref: ref,
        className: "flex flex-col gap-6",
        onSubmit: onSubmit,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col sm:flex-row gap-4 w-full",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                    id: "file",
                    type: "file",
                    name: "file",
                    accept: "application/pdf",
                    required: true,
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(isLoading && 'opacity-50 cursor-not-allowed'),
                    disabled: isLoading
                }, void 0, false, {
                    fileName: "[project]/components/upload/upload-form-input.tsx",
                    lineNumber: 18,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    disabled: isLoading,
                    children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                className: "mr-2 h-4 w-4 animate-spin"
                            }, void 0, false, {
                                fileName: "[project]/components/upload/upload-form-input.tsx",
                                lineNumber: 30,
                                columnNumber: 29
                            }, this),
                            "Processing..."
                        ]
                    }, void 0, true) : 'Upload PDF'
                }, void 0, false, {
                    fileName: "[project]/components/upload/upload-form-input.tsx",
                    lineNumber: 27,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/upload/upload-form-input.tsx",
            lineNumber: 17,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/upload/upload-form-input.tsx",
        lineNumber: 16,
        columnNumber: 9
    }, this);
});
_c1 = UploadFormInput;
UploadFormInput.displayName = "UploadFormInput";
const __TURBOPACK__default__export__ = UploadFormInput;
var _c, _c1;
__turbopack_context__.k.register(_c, "UploadFormInput$forwardRef");
__turbopack_context__.k.register(_c1, "UploadFormInput");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/actions/data:fdd997 [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"403983b837ac29b130e4236a0705fcc8c6094c5b3e":"generatePdfSummary"},"actions/upload-actions.ts",""] */ __turbopack_context__.s({
    "generatePdfSummary": (()=>generatePdfSummary)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var generatePdfSummary = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("403983b837ac29b130e4236a0705fcc8c6094c5b3e", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "generatePdfSummary"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vdXBsb2FkLWFjdGlvbnMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzZXJ2ZXInO1xuXG5pbXBvcnQgeyBnZXREYkNvbm5lY3Rpb24gfSBmcm9tIFwiQC9saWIvZGJcIjtcbmltcG9ydCB7IGdlbmVyYXRlU3VtbWFyeUZyb21HZW1pbmkgfSBmcm9tIFwiQC9saWIvZ2VtaW5pYWlcIjtcbmltcG9ydCB7IGZldGNoQW5kRXh0cmFjdFBkZlRleHQgfSBmcm9tIFwiQC9saWIvbGFuZ2NoYWluXCI7XG5pbXBvcnQgeyBnZW5lcmF0ZVN1bW1hcnlGcm9tT3BlbkFJIH0gZnJvbSBcIkAvbGliL29wZW5haVwiO1xuaW1wb3J0IHsgZm9ybWF0RmlsZU5hbWVBc1RpdGxlIH0gZnJvbSBcIkAvdXRpbHMvZm9ybWF0LXV0aWxzXCI7XG5pbXBvcnQgeyBhdXRoIH0gZnJvbSBcIkBjbGVyay9uZXh0anMvc2VydmVyXCI7XG5pbXBvcnQgeyByZXZhbGlkYXRlUGF0aCB9IGZyb20gXCJuZXh0L2NhY2hlXCI7XG5cbmludGVyZmFjZSBQZGZTdW1tYXJ5VHlwZSB7XG4gICAgdXNlcklkPzogc3RyaW5nO1xuICAgIGZpbGVVcmw6IHN0cmluZztcbiAgICBzdW1tYXJ5OiBzdHJpbmc7XG4gICAgdGl0bGU6IHN0cmluZztcbiAgICBmaWxlTmFtZTogc3RyaW5nO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2VuZXJhdGVQZGZTdW1tYXJ5KHVwbG9hZFJlc3BvbnNlOiBbe1xuICAgIHNlcnZlckRhdGE6IHtcbiAgICAgICAgdXNlcklkOiBzdHJpbmc7XG4gICAgICAgIGZpbGU6IHtcbiAgICAgICAgICAgIHVybDogc3RyaW5nO1xuICAgICAgICAgICAgbmFtZTogc3RyaW5nO1xuICAgICAgICB9XG4gICAgfVxufV0pIHtcbiAgICBpZighdXBsb2FkUmVzcG9uc2UpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICAgICAgbWVzc2FnZTogJ0ZpbGUgdXBsb2FkIGZhaWxlZCcsXG4gICAgICAgICAgICBkYXRhOiBudWxsLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNvbnN0IHsgc2VydmVyRGF0YToge1xuICAgICAgICB1c2VySWQsIFxuICAgICAgICBmaWxlOiB7IHVybDogcGRmVXJsLCBuYW1lOiBmaWxlTmFtZSB9LFxuICAgIH0sXG4gICAgfSA9IHVwbG9hZFJlc3BvbnNlWzBdO1xuXG4gICAgaWYoIXBkZlVybCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgICAgICBtZXNzYWdlOiAnRmlsZSB1cGxvYWQgZmFpbGVkJyxcbiAgICAgICAgICAgIGRhdGE6IG51bGwsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgICBjb25zdCBwZGZUZXh0ID0gYXdhaXQgZmV0Y2hBbmRFeHRyYWN0UGRmVGV4dChwZGZVcmwpO1xuICAgICAgICBjb25zb2xlLmxvZyh7IHBkZlRleHQgfSk7XG5cbiAgICAgICAgbGV0IHN1bW1hcnk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBzdW1tYXJ5ID0gYXdhaXQgZ2VuZXJhdGVTdW1tYXJ5RnJvbUdlbWluaShwZGZUZXh0KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHsgc3VtbWFyeSB9KTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgIC8vY2FsbCBnZW1pbmlcbiAgICAgICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yICYmIGVycm9yLm1lc3NhZ2UgPT09ICdSQVRFX0xJTUlUX0VYQ0VFREVEJykge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHN1bW1hcnkgPSBhd2FpdCBnZW5lcmF0ZVN1bW1hcnlGcm9tR2VtaW5pKHBkZlRleHQpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGdlbWluaUVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0dlbWluaSBBUEkgZmVhaWxlZCBhZnRlciBPUEVOQUkgcXVvdGEgZXhjZWVkZWQnLCBnZW1pbmlFcnJvclxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBnZW5lcmF0ZSBzdW1tYXJ5IHdpdGggYXZhaWxhYmxlIEFJIHByb3ZpZGVycydcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG4gICAgICAgIGlmKCFzdW1tYXJ5KSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdGaWxlIHRvIGdlbmVyYXRlIHN1bW1hcnknLFxuICAgICAgICAgICAgICAgIGRhdGE6IG51bGwsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZm9ybWF0dGVkRmlsZU5hbWUgPSBmb3JtYXRGaWxlTmFtZUFzVGl0bGUoZmlsZU5hbWUpO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgICAgICAgbWVzc2FnZTogJ1N1bW1hcnkgZ2VuZXJhdGVkIHN1Y2Nlc3NmdWxseScsXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6IGZpbGVOYW1lLFxuICAgICAgICAgICAgICAgIHN1bW1hcnksXG4gICAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdGaWxlIHVwbG9hZCBmYWlsZWQnLFxuICAgICAgICAgICAgZGF0YTogbnVsbCxcbiAgICAgICAgfVxuICAgIH1cbn1cbmFzeW5jIGZ1bmN0aW9uIHNhdmVQZGZTdW1tYXJ5KHtcbiAgICB1c2VySWQsIFxuICAgIGZpbGVVcmwsIFxuICAgIHN1bW1hcnksIFxuICAgIHRpdGxlLCBcbiAgICBmaWxlTmFtZVxufToge1xuICAgIHVzZXJJZDogc3RyaW5nOyBcbiAgICBmaWxlVXJsOiBzdHJpbmc7IFxuICAgIHN1bW1hcnk6IHN0cmluZzsgXG4gICAgdGl0bGU6IHN0cmluZztcbiAgICBmaWxlTmFtZTogc3RyaW5nO1xufSkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHNxbCA9IGF3YWl0IGdldERiQ29ubmVjdGlvbigpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgW3NhdmVkU3VtbWFyeV0gPSBhd2FpdCBzcWxgXG4gICAgICAgICAgICBJTlNFUlQgSU5UTyBwZGZfc3VtbWFyaWVzKFxuICAgICAgICAgICAgICAgIHVzZXJfaWQsXG4gICAgICAgICAgICAgICAgb3JpZ2luYWxfZmlsZV91cmwsXG4gICAgICAgICAgICAgICAgc3VtbWFyeV90ZXh0LFxuICAgICAgICAgICAgICAgIHRpdGxlLFxuICAgICAgICAgICAgICAgIGZpbGVfbmFtZVxuICAgICAgICAgICAgKSBWQUxVRVMgKFxuICAgICAgICAgICAgICAgICR7dXNlcklkfSxcbiAgICAgICAgICAgICAgICAke2ZpbGVVcmx9LFxuICAgICAgICAgICAgICAgICR7c3VtbWFyeX0sXG4gICAgICAgICAgICAgICAgJHt0aXRsZX0sXG4gICAgICAgICAgICAgICAgJHtmaWxlTmFtZX1cbiAgICAgICAgICAgICkgUkVUVVJOSU5HIGlkLCBzdW1tYXJ5X3RleHRcbiAgICAgICAgYDtcbiAgICAgICAgcmV0dXJuIHNhdmVkU3VtbWFyeTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBzYXZpbmcgUERGIHN1bW1hcnknLCBlcnJvcik7XG4gICAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHN0b3JlUGRmU3VtbWFyeUFjdGlvbih7XG4gICAgZmlsZVVybCxcbiAgICBzdW1tYXJ5LFxuICAgIHRpdGxlLFxuICAgIGZpbGVOYW1lLFxufTogUGRmU3VtbWFyeVR5cGUpIHtcblxuICAgIC8vdXNlciBsb2dnZWQgaW5cbiAgICAvL3NhdmUgcGRmIHN1bW1hcnlcbiAgICAvL3NhdmVwZGYgc3VtbWFyeSgpXG4gICAgbGV0IHNhdmVkU3VtbWFyeTogYW55O1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHsgdXNlcklkIH0gPSBhd2FpdCBhdXRoKCk7XG4gICAgICAgIGlmKCF1c2VySWQpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ1VzZXIgbm90IGZvdW5kJ1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBzYXZlZFN1bW1hcnkgPSBhd2FpdCBzYXZlUGRmU3VtbWFyeSh7XG4gICAgICAgICAgICB1c2VySWQsXG4gICAgICAgICAgICBmaWxlVXJsLFxuICAgICAgICAgICAgc3VtbWFyeSxcbiAgICAgICAgICAgIHRpdGxlLFxuICAgICAgICAgICAgZmlsZU5hbWUsXG4gICAgICAgIH0pO1xuICAgICAgICBpZighc2F2ZWRTdW1tYXJ5KSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdGYWlsZWQgdG8gc2F2ZSBQREYgc3VtbWFyeSwgcGxlYXNlIHRyeSBhZ2Fpbi4uLidcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgICAgICBtZXNzYWdlOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdFcnJvciBzYXZpbmcgUERGIHN1bW1hcnknXG4gICAgICAgIH0gIFxuICAgIH07XG5cbiAgICByZXZhbGlkYXRlUGF0aChgL3N1bW1hcmllcy8ke3NhdmVkU3VtbWFyeS5pZH1gKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICAgIG1lc3NhZ2U6ICdQREYgc3VtbWFyeSBzYXZlZCBzdWNjZXNzZnVsbHknLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBpZDogc2F2ZWRTdW1tYXJ5LmlkLFxuICAgICAgICB9LFxuICAgIH1cbn0iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6InFTQWtCc0IifQ==
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/actions/data:b63c82 [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"402a84d8633a5ee3cd7021612d6dbfa4441b3c5c54":"storePdfSummaryAction"},"actions/upload-actions.ts",""] */ __turbopack_context__.s({
    "storePdfSummaryAction": (()=>storePdfSummaryAction)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var storePdfSummaryAction = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("402a84d8633a5ee3cd7021612d6dbfa4441b3c5c54", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "storePdfSummaryAction"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vdXBsb2FkLWFjdGlvbnMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzZXJ2ZXInO1xuXG5pbXBvcnQgeyBnZXREYkNvbm5lY3Rpb24gfSBmcm9tIFwiQC9saWIvZGJcIjtcbmltcG9ydCB7IGdlbmVyYXRlU3VtbWFyeUZyb21HZW1pbmkgfSBmcm9tIFwiQC9saWIvZ2VtaW5pYWlcIjtcbmltcG9ydCB7IGZldGNoQW5kRXh0cmFjdFBkZlRleHQgfSBmcm9tIFwiQC9saWIvbGFuZ2NoYWluXCI7XG5pbXBvcnQgeyBnZW5lcmF0ZVN1bW1hcnlGcm9tT3BlbkFJIH0gZnJvbSBcIkAvbGliL29wZW5haVwiO1xuaW1wb3J0IHsgZm9ybWF0RmlsZU5hbWVBc1RpdGxlIH0gZnJvbSBcIkAvdXRpbHMvZm9ybWF0LXV0aWxzXCI7XG5pbXBvcnQgeyBhdXRoIH0gZnJvbSBcIkBjbGVyay9uZXh0anMvc2VydmVyXCI7XG5pbXBvcnQgeyByZXZhbGlkYXRlUGF0aCB9IGZyb20gXCJuZXh0L2NhY2hlXCI7XG5cbmludGVyZmFjZSBQZGZTdW1tYXJ5VHlwZSB7XG4gICAgdXNlcklkPzogc3RyaW5nO1xuICAgIGZpbGVVcmw6IHN0cmluZztcbiAgICBzdW1tYXJ5OiBzdHJpbmc7XG4gICAgdGl0bGU6IHN0cmluZztcbiAgICBmaWxlTmFtZTogc3RyaW5nO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2VuZXJhdGVQZGZTdW1tYXJ5KHVwbG9hZFJlc3BvbnNlOiBbe1xuICAgIHNlcnZlckRhdGE6IHtcbiAgICAgICAgdXNlcklkOiBzdHJpbmc7XG4gICAgICAgIGZpbGU6IHtcbiAgICAgICAgICAgIHVybDogc3RyaW5nO1xuICAgICAgICAgICAgbmFtZTogc3RyaW5nO1xuICAgICAgICB9XG4gICAgfVxufV0pIHtcbiAgICBpZighdXBsb2FkUmVzcG9uc2UpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICAgICAgbWVzc2FnZTogJ0ZpbGUgdXBsb2FkIGZhaWxlZCcsXG4gICAgICAgICAgICBkYXRhOiBudWxsLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNvbnN0IHsgc2VydmVyRGF0YToge1xuICAgICAgICB1c2VySWQsIFxuICAgICAgICBmaWxlOiB7IHVybDogcGRmVXJsLCBuYW1lOiBmaWxlTmFtZSB9LFxuICAgIH0sXG4gICAgfSA9IHVwbG9hZFJlc3BvbnNlWzBdO1xuXG4gICAgaWYoIXBkZlVybCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgICAgICBtZXNzYWdlOiAnRmlsZSB1cGxvYWQgZmFpbGVkJyxcbiAgICAgICAgICAgIGRhdGE6IG51bGwsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgICBjb25zdCBwZGZUZXh0ID0gYXdhaXQgZmV0Y2hBbmRFeHRyYWN0UGRmVGV4dChwZGZVcmwpO1xuICAgICAgICBjb25zb2xlLmxvZyh7IHBkZlRleHQgfSk7XG5cbiAgICAgICAgbGV0IHN1bW1hcnk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBzdW1tYXJ5ID0gYXdhaXQgZ2VuZXJhdGVTdW1tYXJ5RnJvbUdlbWluaShwZGZUZXh0KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHsgc3VtbWFyeSB9KTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgIC8vY2FsbCBnZW1pbmlcbiAgICAgICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yICYmIGVycm9yLm1lc3NhZ2UgPT09ICdSQVRFX0xJTUlUX0VYQ0VFREVEJykge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHN1bW1hcnkgPSBhd2FpdCBnZW5lcmF0ZVN1bW1hcnlGcm9tR2VtaW5pKHBkZlRleHQpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGdlbWluaUVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0dlbWluaSBBUEkgZmVhaWxlZCBhZnRlciBPUEVOQUkgcXVvdGEgZXhjZWVkZWQnLCBnZW1pbmlFcnJvclxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBnZW5lcmF0ZSBzdW1tYXJ5IHdpdGggYXZhaWxhYmxlIEFJIHByb3ZpZGVycydcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG4gICAgICAgIGlmKCFzdW1tYXJ5KSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdGaWxlIHRvIGdlbmVyYXRlIHN1bW1hcnknLFxuICAgICAgICAgICAgICAgIGRhdGE6IG51bGwsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZm9ybWF0dGVkRmlsZU5hbWUgPSBmb3JtYXRGaWxlTmFtZUFzVGl0bGUoZmlsZU5hbWUpO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgICAgICAgbWVzc2FnZTogJ1N1bW1hcnkgZ2VuZXJhdGVkIHN1Y2Nlc3NmdWxseScsXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6IGZpbGVOYW1lLFxuICAgICAgICAgICAgICAgIHN1bW1hcnksXG4gICAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdGaWxlIHVwbG9hZCBmYWlsZWQnLFxuICAgICAgICAgICAgZGF0YTogbnVsbCxcbiAgICAgICAgfVxuICAgIH1cbn1cbmFzeW5jIGZ1bmN0aW9uIHNhdmVQZGZTdW1tYXJ5KHtcbiAgICB1c2VySWQsIFxuICAgIGZpbGVVcmwsIFxuICAgIHN1bW1hcnksIFxuICAgIHRpdGxlLCBcbiAgICBmaWxlTmFtZVxufToge1xuICAgIHVzZXJJZDogc3RyaW5nOyBcbiAgICBmaWxlVXJsOiBzdHJpbmc7IFxuICAgIHN1bW1hcnk6IHN0cmluZzsgXG4gICAgdGl0bGU6IHN0cmluZztcbiAgICBmaWxlTmFtZTogc3RyaW5nO1xufSkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHNxbCA9IGF3YWl0IGdldERiQ29ubmVjdGlvbigpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgW3NhdmVkU3VtbWFyeV0gPSBhd2FpdCBzcWxgXG4gICAgICAgICAgICBJTlNFUlQgSU5UTyBwZGZfc3VtbWFyaWVzKFxuICAgICAgICAgICAgICAgIHVzZXJfaWQsXG4gICAgICAgICAgICAgICAgb3JpZ2luYWxfZmlsZV91cmwsXG4gICAgICAgICAgICAgICAgc3VtbWFyeV90ZXh0LFxuICAgICAgICAgICAgICAgIHRpdGxlLFxuICAgICAgICAgICAgICAgIGZpbGVfbmFtZVxuICAgICAgICAgICAgKSBWQUxVRVMgKFxuICAgICAgICAgICAgICAgICR7dXNlcklkfSxcbiAgICAgICAgICAgICAgICAke2ZpbGVVcmx9LFxuICAgICAgICAgICAgICAgICR7c3VtbWFyeX0sXG4gICAgICAgICAgICAgICAgJHt0aXRsZX0sXG4gICAgICAgICAgICAgICAgJHtmaWxlTmFtZX1cbiAgICAgICAgICAgICkgUkVUVVJOSU5HIGlkLCBzdW1tYXJ5X3RleHRcbiAgICAgICAgYDtcbiAgICAgICAgcmV0dXJuIHNhdmVkU3VtbWFyeTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBzYXZpbmcgUERGIHN1bW1hcnknLCBlcnJvcik7XG4gICAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHN0b3JlUGRmU3VtbWFyeUFjdGlvbih7XG4gICAgZmlsZVVybCxcbiAgICBzdW1tYXJ5LFxuICAgIHRpdGxlLFxuICAgIGZpbGVOYW1lLFxufTogUGRmU3VtbWFyeVR5cGUpIHtcblxuICAgIC8vdXNlciBsb2dnZWQgaW5cbiAgICAvL3NhdmUgcGRmIHN1bW1hcnlcbiAgICAvL3NhdmVwZGYgc3VtbWFyeSgpXG4gICAgbGV0IHNhdmVkU3VtbWFyeTogYW55O1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHsgdXNlcklkIH0gPSBhd2FpdCBhdXRoKCk7XG4gICAgICAgIGlmKCF1c2VySWQpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ1VzZXIgbm90IGZvdW5kJ1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBzYXZlZFN1bW1hcnkgPSBhd2FpdCBzYXZlUGRmU3VtbWFyeSh7XG4gICAgICAgICAgICB1c2VySWQsXG4gICAgICAgICAgICBmaWxlVXJsLFxuICAgICAgICAgICAgc3VtbWFyeSxcbiAgICAgICAgICAgIHRpdGxlLFxuICAgICAgICAgICAgZmlsZU5hbWUsXG4gICAgICAgIH0pO1xuICAgICAgICBpZighc2F2ZWRTdW1tYXJ5KSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdGYWlsZWQgdG8gc2F2ZSBQREYgc3VtbWFyeSwgcGxlYXNlIHRyeSBhZ2Fpbi4uLidcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgICAgICBtZXNzYWdlOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdFcnJvciBzYXZpbmcgUERGIHN1bW1hcnknXG4gICAgICAgIH0gIFxuICAgIH07XG5cbiAgICByZXZhbGlkYXRlUGF0aChgL3N1bW1hcmllcy8ke3NhdmVkU3VtbWFyeS5pZH1gKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICAgIG1lc3NhZ2U6ICdQREYgc3VtbWFyeSBzYXZlZCBzdWNjZXNzZnVsbHknLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBpZDogc2F2ZWRTdW1tYXJ5LmlkLFxuICAgICAgICB9LFxuICAgIH1cbn0iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IndTQXlJc0IifQ==
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/ui/card.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Card": (()=>Card),
    "CardAction": (()=>CardAction),
    "CardContent": (()=>CardContent),
    "CardDescription": (()=>CardDescription),
    "CardFooter": (()=>CardFooter),
    "CardHeader": (()=>CardHeader),
    "CardTitle": (()=>CardTitle)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
function Card({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Card;
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c1 = CardHeader;
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("leading-none font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_c2 = CardTitle;
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_c3 = CardDescription;
function CardAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_c4 = CardAction;
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
_c5 = CardContent;
function CardFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center px-6 [.border-t]:pt-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
_c6 = CardFooter;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "Card");
__turbopack_context__.k.register(_c1, "CardHeader");
__turbopack_context__.k.register(_c2, "CardTitle");
__turbopack_context__.k.register(_c3, "CardDescription");
__turbopack_context__.k.register(_c4, "CardAction");
__turbopack_context__.k.register(_c5, "CardContent");
__turbopack_context__.k.register(_c6, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/upload/loading-skeleton.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>LoadingSkeleton)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
;
function LoadingSkeleton() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        className: "relative px-2 h-[700px] w-[600px] max-w-lg mx-auto overflow-hidden bg-linear-to-br from-background via-background/95 to-rose-500/5 backdrop-blur-lg shadow-2xl rounded-3xl border border-rose-500/10",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute top-0 left-0 right-0 z-20 bg-background/80 backdrop-blur-xs pt-4 pb-2 border-b border-rose-500/10",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-4 flex gap-1.5",
                children: [
                    1,
                    2,
                    3
                ].map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-1.5 flex-1 rounded-full bg-rose-500/10 overflow-hidde",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('h-full bg-linear-to-r from-gray-500 to-rose-600 animate-pulse', index === 0 ? 'w-full' : 'w-0')
                        }, void 0, false, {
                            fileName: "[project]/components/upload/loading-skeleton.tsx",
                            lineNumber: 15,
                            columnNumber: 25
                        }, this)
                    }, index, false, {
                        fileName: "[project]/components/upload/loading-skeleton.tsx",
                        lineNumber: 11,
                        columnNumber: 25
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/upload/loading-skeleton.tsx",
                lineNumber: 9,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/upload/loading-skeleton.tsx",
            lineNumber: 8,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/upload/loading-skeleton.tsx",
        lineNumber: 7,
        columnNumber: 9
    }, this);
}
_c = LoadingSkeleton;
var _c;
__turbopack_context__.k.register(_c, "LoadingSkeleton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/upload/upload-form.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>UploadForm)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$uploadthing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/uploadthing.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$upload$2f$upload$2d$form$2d$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/upload/upload-form-input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/dist/esm/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/dist/esm/v3/external.js [app-client] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)"); // correct import
var __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$data$3a$fdd997__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/actions/data:fdd997 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$data$3a$b63c82__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/actions/data:b63c82 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$upload$2f$loading$2d$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/upload/loading-skeleton.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
const schema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    file: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].instanceof(File, {
        message: 'Invalid file'
    }).refine((file)=>file.size <= 20 * 1024 * 1024, 'File size must be less than 20MB').refine((file)=>file.type.startsWith('application/pdf'), 'File must be a PDF')
});
function UploadForm() {
    _s();
    const formRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { startUpload } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$uploadthing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUploadThing"])('pdfUpLoader', {
        onClientUploadComplete: {
            "UploadForm.useUploadThing": ()=>{
                console.log('Uploaded successfully!');
            }
        }["UploadForm.useUploadThing"],
        onUploadError: {
            "UploadForm.useUploadThing": (err)=>{
                console.error('Error occurred while uploading', err);
            }
        }["UploadForm.useUploadThing"],
        onUploadBegin: {
            "UploadForm.useUploadThing": (fileName)=>{
                console.log('Upload has begun for', fileName);
            }
        }["UploadForm.useUploadThing"]
    });
    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            setIsLoading(true);
            const formData = new FormData(e.currentTarget);
            const file = formData.get('file');
            const validatedFields = schema.safeParse({
                file
            });
            console.log('Validation result:', validatedFields);
            if (!validatedFields.success) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('Invalid file', {
                    description: validatedFields.error.flatten().fieldErrors.file?.[0] ?? 'Please upload a valid PDF'
                });
                setIsLoading(false);
                return;
            }
            const uploadToast = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].loading('📄 Uploading PDF...', {
                description: 'Please wait while we process your file...'
            });
            const resp = await startUpload([
                file
            ]);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].dismiss(uploadToast);
            if (!resp) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('❌ Upload failed', {
                    description: 'Please try again with a different file'
                });
                setIsLoading(false);
                return;
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success('📑 File uploaded!', {
                description: 'Now processing your PDF...'
            });
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$data$3a$fdd997__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["generatePdfSummary"])(resp);
            if (result) {
                const { data = null } = result;
                if (data) {
                    let storeResult;
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success('📑 Saving PDF...', {
                        description: 'Hang tight! We are saving your summary!...'
                    });
                    formRef.current?.reset();
                    if (data.summary) {
                        storeResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$data$3a$b63c82__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["storePdfSummaryAction"])({
                            summary: data.summary,
                            fileUrl: resp[0].serverData.file.url,
                            title: data.title,
                            fileName: file.name
                        });
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success('Summary Generated!', {
                            description: 'Your PDF has been successfully summarised and saved!'
                        });
                        formRef.current?.reset();
                        router.push(`/summaries/${storeResult.data.id}`);
                    }
                }
            }
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            console.error('Error occurred', error);
            formRef.current?.reset();
        } finally{
            setIsLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-8 w-full max-w-2xl mx-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$upload$2f$upload$2d$form$2d$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    isLoading: isLoading,
                    ref: formRef,
                    onSubmit: handleSubmit
                }, void 0, false, {
                    fileName: "[project]/components/upload/upload-form.tsx",
                    lineNumber: 118,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/upload/upload-form.tsx",
                lineNumber: 117,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$upload$2f$loading$2d$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/components/upload/upload-form.tsx",
                lineNumber: 120,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true);
}
_s(UploadForm, "81pQvXz6HyyOjfkM9MMSg7uMTm0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$uploadthing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUploadThing"]
    ];
});
_c = UploadForm;
var _c;
__turbopack_context__.k.register(_c, "UploadForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=_3e3d71ce._.js.map