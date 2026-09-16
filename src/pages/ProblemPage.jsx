import React, { Suspense, lazy, useMemo, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
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
            <div className="problem-page">
                <div className="problem-not-found">
                    <h2>Problem Not Found</h2>
                    <p>The problem #{id} does not exist.</p>
                    <Link to="/" className="back-home-btn">
                        ← Back to Problems
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
        <div className="problem-page">
            {/* Header */}
            <header className="problem-header">
                <Link to="/" className="back-home-link">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path
                            d="M12.5 15L7.5 10L12.5 5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    All Problems
                </Link>

                <div className="problem-nav-controls">
                    <button
                        className="nav-btn"
                        onClick={() => prevProblem && navigate(`/problem/${prevProblem.id}`)}
                        disabled={!prevProblem}
                        title={prevProblem ? `Previous: ${prevProblem.title}` : ""}
                    >
                        <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                            <path
                                d="M12.5 15L7.5 10L12.5 5"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        Prev
                    </button>
                    <span className="nav-indicator">
                        {problemId} / {problems.length}
                    </span>
                    <button
                        className="nav-btn"
                        onClick={() => nextProblem && navigate(`/problem/${nextProblem.id}`)}
                        disabled={!nextProblem}
                        title={nextProblem ? `Next: ${nextProblem.title}` : ""}
                    >
                        Next
                        <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                            <path
                                d="M7.5 15L12.5 10L7.5 5"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                </div>
            </header>

            {/* Problem Info */}
            <section className="problem-info">
                <div className="problem-info-top">
                    <span className="problem-number">#{problem.id}</span>
                    <span
                        className="problem-difficulty-badge"
                        style={{
                            background: colors.bg,
                            color: colors.text,
                            borderColor: colors.border,
                        }}
                    >
                        {problem.difficulty}
                    </span>
                </div>
                <h1 className="problem-title">{problem.title}</h1>
                <p className="problem-description">{problem.description}</p>
                <div className="problem-concepts">
                    {problem.concepts.map((concept, i) => (
                        <span key={i} className="concept-tag">
                            {concept}
                        </span>
                    ))}
                </div>
            </section>

            {/* File References */}
            <section className="file-references">
                <h3 className="file-references-title">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M13 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V9L13 2Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <polyline
                            points="13 2 13 9 20 9"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    Source Files
                </h3>
                <div className="file-list">
                    {problem.files.map((file, i) => (
                        <div key={i} className="file-item">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M14.5 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V7.5L14.5 2Z"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            <code>{file}</code>
                        </div>
                    ))}
                </div>
                <p className="folder-reference">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M22 19C22 19.5304 21.7893 20.0391 21.4142 20.4142C21.0391 20.7893 20.5304 21 20 21H4C3.46957 21 2.96086 20.7893 2.58579 20.4142C2.21071 20.0391 2 19.5304 2 19V5C2 4.46957 2.21071 3.96086 2.58579 3.58579C2.96086 3.21071 3.46957 3 4 3H9L11 6H20C20.5304 6 21.0391 6.21071 21.4142 6.58579C21.7893 6.96086 22 7.46957 22 8V19Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    <span>
                        Folder: <code>src/components/{problem.folder}/</code>
                    </span>
                </p>
            </section>

            {/* Component Render Area with Preview / Code toggle */}
            <section className="component-render-area">
                <div className="render-area-header">
                    {/* macOS-style traffic lights */}
                    <span className="render-area-dot red"></span>
                    <span className="render-area-dot yellow"></span>
                    <span className="render-area-dot green"></span>

                    {/* Toggle */}
                    <div className="render-tab-toggle" role="tablist" aria-label="View mode">
                        <button
                            id="tab-preview"
                            role="tab"
                            aria-selected={activeTab === "preview"}
                            className={`render-tab-btn ${activeTab === "preview" ? "render-tab-btn--active" : ""}`}
                            onClick={() => setActiveTab("preview")}
                        >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
                            </svg>
                            Preview
                        </button>
                        <button
                            id="tab-code"
                            role="tab"
                            aria-selected={activeTab === "code"}
                            className={`render-tab-btn ${activeTab === "code" ? "render-tab-btn--active" : ""}`}
                            onClick={() => setActiveTab("code")}
                        >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                                <polyline points="16 18 22 12 16 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <polyline points="8 6 2 12 8 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            Code
                        </button>
                    </div>
                </div>

                {activeTab === "preview" ? (
                    <div className="render-area-content">
                        <Suspense fallback={<LoadingSpinner />}>
                            {renderComponent()}
                        </Suspense>
                    </div>
                ) : (
                    <CodeViewer files={problem.files ?? []} />
                )}
            </section>

            {/* Bottom Navigation */}
            <footer className="problem-footer-nav">
                {prevProblem ? (
                    <Link to={`/problem/${prevProblem.id}`} className="footer-nav-btn prev">
                        <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                            <path
                                d="M12.5 15L7.5 10L12.5 5"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        <div>
                            <span className="footer-nav-label">Previous</span>
                            <span className="footer-nav-title">{prevProblem.title}</span>
                        </div>
                    </Link>
                ) : (
                    <div />
                )}
                {nextProblem ? (
                    <Link to={`/problem/${nextProblem.id}`} className="footer-nav-btn next">
                        <div>
                            <span className="footer-nav-label">Next</span>
                            <span className="footer-nav-title">{nextProblem.title}</span>
                        </div>
                        <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                            <path
                                d="M7.5 15L12.5 10L7.5 5"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </Link>
                ) : (
                    <div />
                )}
            </footer>
        </div>
    );
};

export default ProblemPage;
