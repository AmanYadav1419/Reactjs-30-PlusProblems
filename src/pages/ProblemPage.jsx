import React, { Suspense, lazy, useMemo, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, CaretLeft, CaretRight, Code, Eye, FileCode, FolderOpen } from "@phosphor-icons/react";
import problems from "../data/problems";
import { difficultyColors } from "../data/problems";
import CodeViewer from "../components/shared/CodeViewer";

// Lazy load all components for code-splitting
const componentMap = {
    1: lazy(() => import("../components/1st-Problem/HelloWorld")),
    2: lazy(() => import("../components/2nd-problem/CounterApp")),
    3: lazy(() => import("../components/3rd-Problem/FormInput")),
    4: lazy(() => import("../components/4th-Problem/ListComponent")),
    5: lazy(() => import("../components/5th-Problem/ToggleSwitch")),
    6: lazy(() => import("../components/6th-Problem/FetchDataFromAPI")),
    7: lazy(() => import("../components/7th-Problem/TimerCountDown")),
    8: lazy(() => import("../components/8th-Problem/ToDoListApp")),
    9: lazy(() => import("../components/9th-Problem/BackgroundChange")),
    10: lazy(() => import("../components/10th-Problem/BasicRoute")),
    11: lazy(() => import("../components/11th-Problem/RandomQuote")),
    12: lazy(() => import("../components/12th-Problem/FileUploader")),
    13: lazy(() => import("../components/13th-Problem/BasicLoginAndRegistrationForm")),
    14: lazy(() => import("../components/14th-Problem/WeatherApp")),
    15: lazy(() => import("../components/15th-Problem/SearchBarFilter")),
    16: lazy(() => import("../components/16th-Problem/PaginationComponent")),
    17: lazy(() => import("../components/17th-Problem/ColorPicker")),
    18: lazy(() => import("../components/18th-Problem/NavigationMenu")),
    19: lazy(() => import("../components/19th-Problem/DarkandLightTheme")),
    20: lazy(() => import("../components/20th-Problem/ShoppingCart")),
    21: lazy(() => import("../components/21th-Problem/CounterWithReducer")),
    22: lazy(() => import("../components/22th-Problem/ToDowithReducer")),
    23: lazy(() => import("../components/23th-Problem/PaginationWithReducer")),
    24: lazy(() => import("../components/24th-Problem/UserAuthenticationSystem")),
    25: lazy(() => import("../components/25th-Problem/DragableComponentWithReducer")),
    26: lazy(() => import("../components/26th-Problem/LocalizationSystem")),
    27: lazy(() => import("../components/27th-Problem/MultipleAPIdataFetch")),
    28: lazy(() => import("../components/28th-Problem/MultipleStateInSingleState")),
    29: lazy(() => import("../components/29th-Problem/ImageGallery")),
    30: lazy(() => import("../components/30th-Problem/DifferentRoutePages")),
    31: lazy(() => import("../components/31th-Probem/FAQ")),
    32: lazy(() =>
        import("../components/32th-Problem/OTPcreation").then((module) => ({
            default: module.OTP,
        }))
    ),
    33: lazy(() => import("../components/33th-Problem/Stepper")),
    34: lazy(() => import("../components/34th-Problem/Tabs")),
    35: lazy(() => import("../components/35th-Problem/GridLight")),
    36: lazy(() => import("../components/36th-Problem/MemoryGame")),
};

// Lazy load wrappers/providers
const ThemeProvider = lazy(() =>
    import("../components/19th-Problem/ThemeContext").then((m) => ({
        default: m.ThemeProvider,
    }))
);
const NineteenComp = lazy(() =>
    import("../components/19th-Problem/NineteenComp")
);
const CartProvider = lazy(() =>
    import("../components/20th-Problem/CartContext").then((m) => ({
        default: m.CartProvider,
    }))
);
const AuthProvider = lazy(() =>
    import("../components/24th-Problem/UserAuthContext").then((m) => ({
        default: m.AuthProvider,
    }))
);
const LocalizationProvider = lazy(() =>
    import("../components/26th-Problem/LocalizationContext").then((m) => ({
        default: m.LocalizationProvider,
    }))
);

// Sample data for problems 15 and 16
const listofNames = [
    "prince", "ash", "poppy", "neion", "nana", "bob",
    "ronny", "trion", "nexus", "divine", "swagster", "strek",
];

const LoadingSpinner = () => (
    <div className="problem-loading">
        <div className="problem-loading-spinner"></div>
        <p>Loading component...</p>
    </div>
);

const ProblemPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const problemId = /^\d+$/.test(id) ? parseInt(id, 10) : NaN;
    // Reset to preview whenever the user navigates to a different problem
    const [activeTab, setActiveTab] = useState("preview");

    const problem = useMemo(
        () => problems.find((p) => p.id === problemId),
        [problemId]
    );

    if (!problem) {
        return (
            <div className="min-h-screen bg-[#09090b] flex flex-col items-center justify-center text-white">
                <div className="glass-panel p-12 rounded-3xl flex flex-col items-center text-center max-w-md">
                    <h2 className="text-3xl font-bold mb-2">Problem Not Found</h2>
                    <p className="text-zinc-400 mb-8">The problem #{id} does not exist in our registry.</p>
                    <Link to="/" className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-xl font-medium hover:bg-zinc-200 transition-colors">
                        <ArrowLeft weight="bold" />
                        Back to Library
                    </Link>
                </div>
            </div>
        );
    }

    const Component = componentMap[problemId];
    const prevProblem = problems.find((p) => p.id === problemId - 1);
    const nextProblem = problems.find((p) => p.id === problemId + 1);
    const colors = difficultyColors[problem.difficulty];

    // Render the component with its appropriate wrapper
    const renderComponent = () => {
        if (!Component) return <p>Component not available.</p>;

        let rendered;

        // Handle props-based components
        if (problemId === 15) {
            rendered = <Component listofNames={listofNames} />;
        } else if (problemId === 16) {
            rendered = <Component listofNames={listofNames} itemsPerPage={2} />;
        } else {
            rendered = <Component />;
        }

        // Handle provider-wrapped components
        if (problemId === 19) {
            return (
                <ThemeProvider>
                    <div className="App">
                        {rendered}
                        <NineteenComp />
                    </div>
                </ThemeProvider>
            );
        }

        if (problemId === 20) {
            return <CartProvider>{rendered}</CartProvider>;
        }

        if (problemId === 24) {
            return <AuthProvider>{rendered}</AuthProvider>;
        }

        if (problemId === 26) {
            return <LocalizationProvider>{rendered}</LocalizationProvider>;
        }

        return rendered;
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="min-h-[100dvh] bg-[#09090b] text-[#fafafa] font-sans pb-12"
        >
            {/* Minimal Header */}
            <header className="sticky top-0 z-50 bg-[#09090b]/80 backdrop-blur-xl border-b border-white/5 py-4 px-6 mb-10">
                <div className="max-w-[1400px] mx-auto flex items-center justify-between">
                    <Link to="/" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm font-medium">
                        <ArrowLeft size={16} />
                        Library
                    </Link>

                    <div className="flex items-center gap-4 bg-white/[0.02] border border-white/5 rounded-full p-1">
                        <button
                            onClick={() => prevProblem && navigate(`/problem/${prevProblem.id}`)}
                            disabled={!prevProblem}
                            className={`p-2 rounded-full transition-colors ${prevProblem ? 'hover:bg-white/10 text-white' : 'text-zinc-600 cursor-not-allowed'}`}
                        >
                            <CaretLeft size={16} />
                        </button>
                        <span className="font-mono text-xs text-zinc-500 font-medium px-2">
                            {problemId.toString().padStart(2, '0')} <span className="text-zinc-700">/</span> {problems.length.toString().padStart(2, '0')}
                        </span>
                        <button
                            onClick={() => nextProblem && navigate(`/problem/${nextProblem.id}`)}
                            disabled={!nextProblem}
                            className={`p-2 rounded-full transition-colors ${nextProblem ? 'hover:bg-white/10 text-white' : 'text-zinc-600 cursor-not-allowed'}`}
                        >
                            <CaretRight size={16} />
                        </button>
                    </div>
                </div>
            </header>

            <main className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                {/* Left Column: Metadata */}
                <div className="lg:col-span-4 flex flex-col space-y-8 lg:sticky lg:top-28">
                    <section className="flex flex-col gap-4">
                        <div className="flex items-center gap-3">
                            <span className="font-mono text-xl font-bold text-zinc-500">#{problem.id.toString().padStart(2, '0')}</span>
                            <span
                                className="text-[11px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-md"
                                style={{ background: colors.bg, color: colors.text }}
                            >
                                {problem.difficulty}
                            </span>
                        </div>
                        <h1 className="text-4xl font-extrabold tracking-tight">{problem.title}</h1>
                        <p className="text-zinc-400 leading-relaxed text-sm">{problem.description}</p>
                        <div className="flex flex-wrap gap-2 mt-2">
                            {problem.concepts.map((concept, i) => (
                                <span key={i} className="text-xs font-medium text-zinc-300 bg-[#18181c] px-2.5 py-1.5 rounded-lg border border-white/5">
                                    {concept}
                                </span>
                            ))}
                        </div>
                    </section>

                    <section className="glass-panel rounded-2xl p-6">
                        <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-4 flex items-center gap-2">
                            <FileCode size={16} /> Source Files
                        </h3>
                        <div className="flex flex-col gap-2 mb-4">
                            {problem.files.map((file, i) => (
                                <div key={i} className="flex items-start gap-2 bg-black/20 p-2.5 rounded-xl border border-white/5">
                                    <FileCode size={16} className="text-blue-500 mt-0.5 shrink-0" />
                                    <code className="text-xs font-mono text-zinc-300 break-all">{file}</code>
                                </div>
                            ))}
                        </div>
                        <p className="flex items-start gap-2 pt-4 border-t border-white/5 text-xs text-zinc-500">
                            <FolderOpen size={16} className="mt-0.5 shrink-0" />
                            <span>
                                Folder: <code className="font-mono text-zinc-300">src/components/{problem.folder}/</code>
                            </span>
                        </p>
                    </section>
                </div>

                {/* Right Column: Interaction Arena */}
                <div className="lg:col-span-8 flex flex-col">
                    <section className="glass-panel rounded-[2rem] overflow-hidden flex flex-col border-white/5 shadow-2xl">

                        {/* Traffic + Toggle Header */}
                        <div className="flex items-center justify-between px-6 py-4 bg-[#111116] border-b border-white/5">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                            </div>

                            <div className="flex items-center gap-1 bg-black/40 p-1 rounded-xl border border-white/5">
                                <button
                                    onClick={() => setActiveTab("preview")}
                                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium transition-all ${activeTab === "preview" ? "bg-[#1f1f26] text-white shadow-sm" : "text-zinc-500 hover:text-zinc-300"
                                        }`}
                                >
                                    <Eye size={16} /> Preview
                                </button>
                                <button
                                    onClick={() => setActiveTab("code")}
                                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium transition-all ${activeTab === "code" ? "bg-[#1f1f26] text-white shadow-sm" : "text-zinc-500 hover:text-zinc-300"
                                        }`}
                                >
                                    <Code size={16} /> Code
                                </button>
                            </div>
                        </div>

                        {/* Render Area */}
                        <div className="min-h-[500px] flex flex-col bg-[#0d0d12]">
                            {activeTab === "preview" ? (
                                <div className="flex-1 p-8 overflow-auto flex flex-col items-center justify-center">
                                    <Suspense fallback={<LoadingSpinner />}>
                                        <div className="w-full max-w-full">
                                            {renderComponent()}
                                        </div>
                                    </Suspense>
                                </div>
                            ) : (
                                <CodeViewer files={problem.files ?? []} />
                            )}
                        </div>
                    </section>

                    {/* Bottom Inline Footer (Desktop only) */}
                    <div className="hidden lg:flex items-center justify-between mt-8">
                        {prevProblem ? (
                            <Link to={`/problem/${prevProblem.id}`} className="group flex flex-col items-start px-6 py-4 rounded-2xl glass-panel hover:bg-white/[0.05] transition-all">
                                <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold mb-1 flex items-center gap-1">
                                    <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform" /> Previous
                                </span>
                                <span className="text-sm font-medium text-zinc-300">{prevProblem.title}</span>
                            </Link>
                        ) : <div />}

                        {nextProblem ? (
                            <Link to={`/problem/${nextProblem.id}`} className="group flex flex-col items-end px-6 py-4 rounded-2xl glass-panel hover:bg-white/[0.05] transition-all">
                                <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold mb-1 flex items-center gap-1">
                                    Next <CaretRight size={12} weight="bold" className="group-hover:translate-x-1 transition-transform" />
                                </span>
                                <span className="text-sm font-medium text-zinc-300">{nextProblem.title}</span>
                            </Link>
                        ) : <div />}
                    </div>
                </div>
            </main>
        </motion.div>
    );
};

export default ProblemPage;
