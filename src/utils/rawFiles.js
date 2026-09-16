// Load ALL component source files as raw strings via Vite's import.meta.glob.
// This is resolved at build time — zero extra HTTP requests at runtime.
// The files object keys are relative to the project root (from /).

const rawModules = import.meta.glob(
  [
    "/src/components/**/*.jsx",
    "/src/components/**/*.js",
    "/src/components/**/*.css",
    "/src/components/**/*.json",
  ],
  { query: "?raw", import: "default", eager: true },
);

/**
 * Given a path like "src/components/1st-Problem/HelloWorld.jsx"
 * returns the raw source string, or null if not found.
 */
export function getRawFile(filePath) {
  // Normalise: ensure leading slash and forward slashes
  const key = filePath.startsWith("/") ? filePath : `/${filePath}`;
  return rawModules[key] ?? null;
}

export default rawModules;
