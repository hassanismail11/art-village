/**
 * Utility functions for path and URL management
 */

// Get base URL - ensures it ends with a slash
export const getBaseUrl = () => {
  const base = import.meta.env.BASE_URL || "/";
  return base.endsWith("/") ? base : `${base}/`;
};

// Get base URL without trailing slash (for React Router basename)
export const getBaseUrlWithoutSlash = () => {
  const base = getBaseUrl();
  return base.replace(/\/$/, "");
};

// Get asset path (images, etc.)
export const getAssetPath = (path) => {
  const base = getBaseUrl();
  // Remove leading slash from path if present to avoid double slashes
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  return `${base}${cleanPath}`;
};

// Get localized route path (relative to basename, for use with React Router Link)
export const getLocalizedPath = (path, lang) => {
  // Ensure path starts with /
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  // Return path relative to basename (React Router handles basename automatically)
  return `/${lang}${cleanPath}`;
};

// Get current language from pathname
// Handles both full pathname (from window.location) and relative pathname (from React Router)
export const getLangFromPath = (pathname) => {
  // Remove basename if present (for window.location.pathname)
  const base = getBaseUrlWithoutSlash();
  let pathToCheck = pathname;

  // If pathname includes the basename, remove it
  if (base && pathname.startsWith(base)) {
    pathToCheck = pathname.replace(base, "") || "/";
  }

  // Now check for language prefix
  const langMatch = pathToCheck.match(/^\/(en|ar)(\/|$)/);
  return langMatch ? langMatch[1] : "en"; // Default to 'en'
};

// Get path without language prefix
// Handles both full pathname (from window.location) and relative pathname (from React Router)
export const getPathWithoutLang = (pathname) => {
  // Remove basename if present (for window.location.pathname)
  const base = getBaseUrlWithoutSlash();
  let pathToCheck = pathname;

  // If pathname includes the basename, remove it
  if (base && pathname.startsWith(base)) {
    pathToCheck = pathname.replace(base, "") || "/";
  }

  // Remove language prefix
  const pathWithoutLang = pathToCheck.replace(/^\/(en|ar)/, "") || "/";
  return pathWithoutLang;
};
