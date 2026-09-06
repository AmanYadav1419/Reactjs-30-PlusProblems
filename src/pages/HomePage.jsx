import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import problems, { difficultyColors } from "../data/problems";

const difficulties = ["All", "Beginner", "Intermediate", "Advanced"];

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
        <div className="home-page">
            {/* Hero Section */}
            <header className="hero">
                <div className="hero-glow"></div>
                <div className="hero-content">
                    <span className="hero-badge">⚛️ React Practice Lab</span>
                    <h1 className="hero-title">
                        Master React with <span className="gradient-text">36+ Problems</span>
                    </h1>
                    <p className="hero-subtitle">
                        A progressive collection of hands-on React challenges — from basic
                        JSX to advanced state management, context API, and beyond.
                    </p>

                    {/* Stats */}
                    <div className="hero-stats">
                        <div className="stat">
                            <span className="stat-number">36</span>
                            <span className="stat-label">Problems</span>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat">
                            <span className="stat-number">10</span>
                            <span className="stat-label">Beginner</span>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat">
                            <span className="stat-number">10</span>
                            <span className="stat-label">Intermediate</span>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat">
                            <span className="stat-number">16</span>
                            <span className="stat-label">Advanced</span>
                        </div>
                    </div>
                </div>
            </header>

            {/* Search & Filter */}
            <section className="controls-section">
                <div className="search-bar">
                    <svg
                        className="search-icon"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                    >
                        <circle
                            cx="11"
                            cy="11"
                            r="8"
                            stroke="currentColor"
                            strokeWidth="2"
                        />
                        <path
                            d="M21 21L16.65 16.65"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                        />
                    </svg>
                    <input
                        type="text"
                        placeholder="Search problems by name, description, or concept..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="search-input"
                        id="search-problems"
                    />
                    {searchQuery && (
                        <button
                            className="search-clear"
                            onClick={() => setSearchQuery("")}
                            aria-label="Clear search"
                        >
                            ✕
                        </button>
                    )}
                </div>

                <div className="filter-tabs">
                    {difficulties.map((d) => (
                        <button
                            key={d}
                            className={`filter-tab ${activeFilter === d ? "active" : ""}`}
                            onClick={() => setActiveFilter(d)}
                            id={`filter-${d.toLowerCase()}`}
                        >
                            {d}
                            {d !== "All" && (
                                <span
                                    className="filter-count"
                                    style={{
                                        background: difficultyColors[d]?.bg,
                                        color: difficultyColors[d]?.text,
                                    }}
                                >
                                    {problems.filter((p) => p.difficulty === d).length}
                                </span>
                            )}
                        </button>
                    ))}
                </div>
            </section>

            {/* Problems Grid */}
            <section className="problems-grid-section">
                {filteredProblems.length === 0 ? (
                    <div className="no-results">
                        <span className="no-results-icon">🔍</span>
                        <h3>No problems found</h3>
                        <p>Try adjusting your search or filter criteria.</p>
                    </div>
                ) : (
                    <div className="problems-grid">
                        {filteredProblems.map((problem, index) => {
                            const colors = difficultyColors[problem.difficulty];
                            return (
                                <Link
                                    to={`/problem/${problem.id}`}
                                    key={problem.id}
                                    className="problem-card"
                                    id={`problem-card-${problem.id}`}
                                    style={{
                                        animationDelay: `${index * 0.03}s`,
                                    }}
                                >
                                    <div className="card-header">
                                        <span className="card-number">#{problem.id}</span>
                                        <span
                                            className="card-difficulty"
                                            style={{
                                                background: colors.bg,
                                                color: colors.text,
                                                borderColor: colors.border,
                                            }}
                                        >
                                            {problem.difficulty}
                                        </span>
                                    </div>
                                    <h3 className="card-title">{problem.title}</h3>
                                    <p className="card-description">{problem.description}</p>
                                    <div className="card-concepts">
                                        {problem.concepts.map((concept, i) => (
                                            <span key={i} className="card-concept-tag">
                                                {concept}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="card-footer">
                                        <span className="card-files-count">
                                            <svg
                                                width="14"
                                                height="14"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                            >
                                                <path
                                                    d="M13 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V9L13 2Z"
                                                    stroke="currentColor"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                            {problem.files.length}{" "}
                                            {problem.files.length === 1 ? "file" : "files"}
                                        </span>
                                        <span className="card-arrow">→</span>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                )}
            </section>

            {/* Footer */}
            <footer className="home-footer">
                <p>
                    Built with ⚛️ React • {problems.length} Practice Problems •{" "}
                    <a
                        href="https://github.com/AmanYadav1419/Reactjs-30-PlusProblems"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub
                    </a>
                </p>
            </footer>
        </div>
    );
};

export default HomePage;
