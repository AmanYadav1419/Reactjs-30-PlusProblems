import React, { useState, useMemo, useCallback } from "react";
import { getRawFile } from "../../utils/rawFiles";

/* ─────────────────────────────────────────────────────────
   Lightweight JSX / JS / CSS / JSON syntax highlighter.
   Tokenises the raw string and wraps tokens in <span>
   elements with semantic class names — no external dep.
───────────────────────────────────────────────────────── */

const KEYWORDS = new Set([
    "import", "export", "default", "from", "const", "let", "var", "function",
    "return", "if", "else", "for", "while", "do", "switch", "case", "break",
    "continue", "class", "extends", "new", "this", "typeof", "instanceof",
    "null", "undefined", "true", "false", "async", "await", "try", "catch",
    "finally", "throw", "of", "in", "static", "super", "yield", "delete",
    "void", "with", "debugger",
]);

function tokeniseJSX(code) {
    const tokens = [];
    let i = 0;

    while (i < code.length) {
        // Line comment
        if (code.startsWith("//", i)) {
            const end = code.indexOf("\n", i);
            const str = end === -1 ? code.slice(i) : code.slice(i, end);
            tokens.push({ type: "comment", value: str });
            i += str.length;
            continue;
        }
        // Block comment
        if (code.startsWith("/*", i)) {
            const end = code.indexOf("*/", i + 2);
            const str = end === -1 ? code.slice(i) : code.slice(i, end + 2);
            tokens.push({ type: "comment", value: str });
            i += str.length;
            continue;
        }
        // Template literal
        if (code[i] === "`") {
            let j = i + 1;
            while (j < code.length && code[j] !== "`") {
                if (code[j] === "\\") j++;
                j++;
            }
            tokens.push({ type: "string", value: code.slice(i, j + 1) });
            i = j + 1;
            continue;
        }
        // String literals
        if (code[i] === '"' || code[i] === "'") {
            const q = code[i];
            let j = i + 1;
            while (j < code.length && code[j] !== q) {
                if (code[j] === "\\") j++;
                j++;
            }
            tokens.push({ type: "string", value: code.slice(i, j + 1) });
            i = j + 1;
            continue;
        }
        // JSX tag name / attribute bracket
        if (code[i] === "<") {
            tokens.push({ type: "jsx-bracket", value: "<" });
            i++;
            continue;
        }
        if (code[i] === ">") {
            tokens.push({ type: "jsx-bracket", value: ">" });
            i++;
            continue;
        }
        // Numbers
        if (/\d/.test(code[i]) && (i === 0 || /\W/.test(code[i - 1]))) {
            let j = i;
            while (j < code.length && /[\d.eExX_a-fA-F]/.test(code[j])) j++;
            tokens.push({ type: "number", value: code.slice(i, j) });
            i = j;
            continue;
        }
        // Identifiers / keywords
        if (/[a-zA-Z_$]/.test(code[i])) {
            let j = i;
            while (j < code.length && /[\w$]/.test(code[j])) j++;
            const word = code.slice(i, j);
            tokens.push({
                type: KEYWORDS.has(word) ? "keyword" : "identifier",
                value: word,
            });
            i = j;
            continue;
        }
        // Punctuation / operators
        if (/[{}()[\];,.]/.test(code[i])) {
            tokens.push({ type: "punctuation", value: code[i] });
            i++;
            continue;
        }
        // Whitespace (preserve)
        tokens.push({ type: "plain", value: code[i] });
        i++;
    }
    return tokens;
}

function tokeniseCSS(code) {
    // Simple CSS tokeniser: selectors, properties, values, comments
    const tokens = [];
    let i = 0;
    while (i < code.length) {
        if (code.startsWith("/*", i)) {
            const end = code.indexOf("*/", i + 2);
            const str = end === -1 ? code.slice(i) : code.slice(i, end + 2);
            tokens.push({ type: "comment", value: str });
            i += str.length;
            continue;
        }
        tokens.push({ type: "plain", value: code[i] });
        i++;
    }
    return tokens;
}

function HighlightedCode({ code, language }) {
    const tokens = useMemo(() => {
        const lang = language?.toLowerCase() ?? "jsx";
        if (lang === "css") return tokeniseCSS(code);
        try {
            return tokeniseJSX(code);
        } catch {
            return [{ type: "plain", value: code }];
        }
    }, [code, language]);

    return (
        <code className="cv-code">
            {tokens.map((tok, idx) => (
                <span key={idx} className={`cv-tok-${tok.type}`}>
                    {tok.value}
                </span>
            ))}
        </code>
    );
}

/* ─────────────────────────────────────────────────────────
   Main CodeViewer Component
───────────────────────────────────────────────────────── */

function getLanguage(filePath) {
    if (filePath.endsWith(".css")) return "css";
    if (filePath.endsWith(".json")) return "json";
    return "jsx";
}

function CopyButton({ code }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = useCallback(async () => {
        try {
            await navigator.clipboard.writeText(code);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            /* clipboard not available */
        }
    }, [code]);

    return (
        <button
            className={`cv-copy-btn ${copied ? "cv-copy-btn--copied" : ""}`}
            onClick={handleCopy}
            title="Copy code"
            aria-label="Copy code"
        >
            {copied ? (
                <>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M20 6L9 17L4 12"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    Copied!
                </>
            ) : (
                <>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                        <rect
                            x="9"
                            y="9"
                            width="13"
                            height="13"
                            rx="2"
                            ry="2"
                            stroke="currentColor"
                            strokeWidth="2"
                        />
                        <path
                            d="M5 15H4C2.89543 15 2 14.1046 2 13V4C2 2.89543 2.89543 2 4 2H13C14.1046 2 15 2.89543 15 4V5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                        />
                    </svg>
                    Copy
                </>
            )}
        </button>
    );
}

export default function CodeViewer({ files }) {
    const [activeFile, setActiveFile] = useState(files[0] ?? "");

    const rawCode = useMemo(() => {
        const content = getRawFile(activeFile);
        return content ?? `// Could not load: ${activeFile}`;
    }, [activeFile]);

    const language = useMemo(() => getLanguage(activeFile), [activeFile]);

    const lines = useMemo(() => rawCode.split("\n"), [rawCode]);

    return (
        <div className="cv-container">
            {/* Tab bar — one tab per file */}
            {files.length > 1 && (
                <div className="cv-tabs" role="tablist" aria-label="Source files">
                    {files.map((file) => {
                        const filename = file.split("/").pop();
                        const isActive = file === activeFile;
                        return (
                            <button
                                key={file}
                                role="tab"
                                aria-selected={isActive}
                                className={`cv-tab ${isActive ? "cv-tab--active" : ""}`}
                                onClick={() => setActiveFile(file)}
                                title={file}
                            >
                                <FileIcon filename={filename} />
                                <span className="cv-tab-name">{filename}</span>
                            </button>
                        );
                    })}
                </div>
            )}

            {/* Code area */}
            <div className="cv-body">
                {/* Toolbar */}
                <div className="cv-toolbar">
                    <span className="cv-file-path">{activeFile}</span>
                    <div className="cv-toolbar-right">
                        <span className="cv-line-count">{lines.length} lines</span>
                        <CopyButton code={rawCode} />
                    </div>
                </div>

                {/* Scrollable pre block */}
                <div className="cv-scroll-wrap">
                    <pre className="cv-pre">
                        {/* Line numbers */}
                        <div className="cv-gutter" aria-hidden="true">
                            {lines.map((_, i) => (
                                <span key={i} className="cv-line-num">
                                    {i + 1}
                                </span>
                            ))}
                        </div>

                        {/* Highlighted code */}
                        <div className="cv-content">
                            <HighlightedCode code={rawCode} language={language} />
                        </div>
                    </pre>
                </div>
            </div>
        </div>
    );
}

/* Tiny icon by extension */
function FileIcon({ filename }) {
    const ext = filename.split(".").pop();
    const color =
        ext === "css"
            ? "#38bdf8"
            : ext === "json"
                ? "#fbbf24"
                : "#a78bfa";
    return (
        <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            style={{ flexShrink: 0 }}
        >
            <path
                d="M14.5 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V7.5L14.5 2Z"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <polyline
                points="14 2 14 8 20 8"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
