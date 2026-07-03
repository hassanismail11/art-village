import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import { getLocalizedPath, getPathWithoutLang } from "../utils/paths";

/**
 * Custom hook for localized navigation
 * Provides utilities to navigate with language prefix
 */
export function useLocalizedNavigation() {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  // Get current path without language prefix
  const currentPath = getPathWithoutLang(location.pathname);

  // Navigate to a path in the current language
  const navigateTo = (path) => {
    const localizedPath = getLocalizedPath(path, i18n.language);
    navigate(localizedPath);
  };

  // Navigate to a path in a specific language
  const navigateToLang = (path, lang) => {
    const localizedPath = getLocalizedPath(path, lang);
    navigate(localizedPath);
  };

  // Get localized path for a given route
  const getPath = (path) => {
    return getLocalizedPath(path, i18n.language);
  };

  // Switch language while staying on the same page
  const switchLanguage = (newLang) => {
    const localizedPath = getLocalizedPath(currentPath, newLang);
    navigate(localizedPath);
  };

  return {
    navigateTo,
    navigateToLang,
    getPath,
    switchLanguage,
    currentPath,
    currentLang: i18n.language,
  };
}

