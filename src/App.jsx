import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import AOS from "aos";
import { getBaseUrlWithoutSlash, getLangFromPath } from "./utils/paths";

import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import SEO from "./components/SEO/SEO";

import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";

function LanguageRoute({ children }) {
  const location = useLocation();
  const { i18n } = useTranslation();
  const pathLang = getLangFromPath(location.pathname);

  useEffect(() => {
    if (pathLang && pathLang !== i18n.language) {
      i18n.changeLanguage(pathLang);
    }
  }, [pathLang, i18n]);

  return children;
}

function AppContent() {
  const { i18n } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace(/^#/, "");
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    } else {
      window.scrollTo(0, 0);
    }
    AOS.refresh();
  }, [location.pathname, location.hash]);

  return (
    <LanguageRoute>
      <SEO />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-ava-primary focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to main content
      </a>
      <div className="flex min-h-screen flex-col overflow-hidden bg-ava-bg text-white">
        <Navbar />
        <main id="main-content" className="relative flex-1">
          <Routes>
            <Route path="/" element={<Navigate to="/en" replace />} />
            <Route path="/:lang" element={<Home />} />
            <Route path="/:lang/*" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/en" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </LanguageRoute>
  );
}

function App() {
  const basename = getBaseUrlWithoutSlash();

  return (
    <BrowserRouter basename={basename}>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
