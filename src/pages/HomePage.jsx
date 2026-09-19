import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { MagnifyingGlass, X, Lightning, Star, Code, ArrowRight } from "@phosphor-icons/react";
import problems, { difficultyColors } from "../data/problems";

const difficulties = ["All", "Beginner", "Intermediate", "Advanced"];

// Framer Motion Variants
const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.05, delayChildren: 0.1 },
    },
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: {
        y: 0,
        opacity: 1,
        transition: { type: "spring", stiffness: 120, damping: 20 },
    },
};

const HomePage = () => {
    const [activeFilter, setActiveFilter] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredProblems = useMemo(() => {
        return problems.filter((p) => {
            const matchesDifficulty =
                activeFilter === "All" || p.difficulty === activeFilter;
            const matchesSearch =
                searchQuery === "" ||
                p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                p.concepts.some((c) =>
                    c.toLowerCase().includes(searchQuery.toLowerCase())
                );
            return matchesDifficulty && matchesSearch;
        });
    }, [activeFilter, searchQuery]);

    return (
        <div className="min-h-[100dvh] bg-[#09090b] text-[#fafafa] selection:bg-blue-500/30 font-sans pb-24 overflow-hidden relative">

            {/* Background Ambient Noise / Glow purely visual */}
            <div className="fixed inset-0 z-0 pointer-events-none flex justify-center opacity-30">
                <div className="w-[800px] h-[600px] bg-blue-600/20 blur-[120px] rounded-full absolute -top-48 left-[-100px] mix-blend-screen" />
                <div className="w-[600px] h-[500px] bg-emerald-600/10 blur-[100px] rounded-full absolute top-[20%] right-[-100px] mix-blend-screen" />
            </div>

            <div className="max-w-[1400px] mx-auto px-6 md:px-12 xl:px-24 pt-24 relative z-10">

                {/* Anti-Center Bias Asymmetric Hero */}
                <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-24">
                    <div className="lg:col-span-8 flex flex-col items-start space-y-8">
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ type: "spring", stiffness: 100, damping: 20 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-sm text-zinc-300 font-medium"
                        >
                            <Lightning weight="fill" className="text-blue-500" size={16} />
                            React Engineering Lab
                        </motion.div>

                        <motion.h1
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
                            className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-[1.1] text-white"
                        >
                            Build Better Code. <br className="hidden md:block" />
                            <span className="text-zinc-600">Solve <span className="text-blue-500">36+</span> Patterns.</span>
                        </motion.h1>

                        <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
                            className="text-lg text-zinc-400 max-w-[55ch] leading-relaxed"
                        >
                            A high-density collection of progressive React challenges. From basic state logic to complex Reducer orchestrations and Context-driven architectures.
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="lg:col-span-4 self-center w-full"
                    >
                        <div className="glass-panel rounded-[2rem] p-8 flex flex-col gap-6 relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <h3 className="text-zinc-400 font-medium text-sm tracking-widest uppercase mb-2">System Metrics</h3>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex flex-col gap-1">
                                    <span className="text-4xl font-black font-mono tracking-tighter">36</span>
                                    <span className="text-xs text-zinc-500 font-medium">TOTAL PROBLEMS</span>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span className="text-4xl font-black font-mono text-emerald-500 tracking-tighter">10</span>
                                    <span className="text-xs text-zinc-500 font-medium">BEGINNER</span>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span className="text-4xl font-black font-mono text-amber-500 tracking-tighter">10</span>
                                    <span className="text-xs text-zinc-500 font-medium">INTERMEDIATE</span>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span className="text-4xl font-black font-mono text-rose-500 tracking-tighter">16</span>
                                    <span className="text-xs text-zinc-500 font-medium">ADVANCED</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </section>

                {/* Filters and Search Bar Container */}
                <section className="sticky top-6 z-40 mb-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 glass-panel rounded-2xl p-2 md:p-3 shadow-2xl shadow-black/50">

                    {/* Tabs */}
                    <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto scrollbar-hide py-1 px-1">
                        {difficulties.map((level) => {
                            const isActive = activeFilter === level;
                            return (
                                <button
                                    key={level}
                                    onClick={() => setActiveFilter(level)}
                                    className={`relative px-5 py-2.5 rounded-xl font-medium text-sm transition-colors whitespace-nowrap ${isActive ? "text-white" : "text-zinc-400 hover:text-zinc-200"
                                        }`}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeFilterTab"
                                            className="absolute inset-0 bg-white/10 rounded-xl"
                                            initial={false}
                                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        />
                                    )}
                                    <span className="relative z-10 flex items-center gap-2">
                                        {level}
                                        {level !== "All" && (
                                            <span className="px-1.5 py-0.5 rounded-md text-[10px] font-mono" style={{ background: difficultyColors[level]?.bg, color: difficultyColors[level]?.text }}>
                                                {problems.filter((p) => p.difficulty === level).length}
                                            </span>
                                        )}
                                    </span>
                                </button>
                            )
                        })}
                    </div>

                    {/* Search */}
                    <div className="relative w-full md:max-w-[320px] flex-shrink-0 group">
                        <MagnifyingGlass className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-blue-500 transition-colors" size={18} />
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search by name, logic..."
                            className="w-full bg-[#18181b] border border-white/5 rounded-xl py-3 pl-11 pr-10 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all font-medium"
                        />
                        {searchQuery && (
                            <button
                                onClick={() => setSearchQuery("")}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white"
                            >
                                <X size={16} />
                            </button>
                        )}
                    </div>
                </section>

                {/* Content Grid */}
                <AnimatePresence mode="wait">
                    {filteredProblems.length === 0 ? (
                        <motion.div
                            initial={{ opacity: 0, py: 40 }}
                            animate={{ opacity: 1, py: 0 }}
                            exit={{ opacity: 0 }}
                            className="py-24 text-center flex flex-col items-center justify-center gap-4"
                        >
                            <div className="w-16 h-16 rounded-2xl glass-panel flex items-center justify-center mb-4">
                                <MagnifyingGlass size={32} className="text-zinc-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-white">No architectures found</h3>
                            <p className="text-zinc-500 text-lg">Try adjusting your filters to find what you're looking for.</p>
                        </motion.div>
                    ) : (
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            animate="show"
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                        >
                            {filteredProblems.map((problem) => {
                                const isAdvanced = problem.difficulty === "Advanced";
                                return (
                                    <motion.div variants={itemVariants} key={problem.id} layoutId={`card-${problem.id}`}>
                                        <Link
                                            to={`/problem/${problem.id}`}
                                            className="group block h-full bg-[#0d0d10] border border-white/5 hover:border-white/10 rounded-[1.5rem] p-8 transition-all duration-300 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] relative overflow-hidden"
                                        >
                                            {/* Fluid Background Reveal */}
                                            <div className="absolute inset-0 bg-blue-500/5 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-out" />

                                            <div className="relative z-10 flex flex-col h-full">
                                                <div className="flex items-center justify-between mb-6">
                                                    <span className="font-mono text-sm text-zinc-400 font-medium tracking-tighter">
                                                        {problem.id.toString().padStart(2, '0')}
                                                    </span>
                                                    <span
                                                        className="text-[11px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-md"
                                                        style={{
                                                            color: difficultyColors[problem.difficulty].text,
                                                            backgroundColor: difficultyColors[problem.difficulty].bg
                                                        }}
                                                    >
                                                        {problem.difficulty}
                                                    </span>
                                                </div>

                                                <h3 className="text-2xl font-bold mb-3 text-white tracking-tight group-hover:text-blue-400 transition-colors">
                                                    {problem.title}
                                                </h3>
                                                <p className="text-sm text-zinc-400 mb-8 leading-relaxed flex-grow">
                                                    {problem.description}
                                                </p>

                                                <div className="mt-auto flex flex-col gap-4">
                                                    <div className="flex flex-wrap gap-2">
                                                        {problem.concepts.slice(0, 3).map((concept, idx) => (
                                                            <span key={idx} className="text-[11px] font-medium text-zinc-300 bg-white/[0.03] px-2 py-1 rounded-md border border-white/5">
                                                                {concept}
                                                            </span>
                                                        ))}
                                                    </div>

                                                    <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                                                        <div className="flex items-center gap-2 text-xs text-zinc-500 font-mono">
                                                            <Code size={14} />
                                                            {problem.files.length} {problem.files.length === 1 ? 'file' : 'files'}
                                                        </div>

                                                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 group-hover:bg-blue-500 group-hover:text-white transition-colors group-hover:scale-110 duration-300">
                                                            <ArrowRight size={14} weight="bold" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default HomePage;
