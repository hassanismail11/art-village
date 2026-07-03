import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLocalizedNavigation } from "../../hooks/useLocalizedNavigation";

const navItems = [
  { key: "home", hash: "" },
  { key: "about", hash: "about" },
  { key: "portfolio", hash: "portfolio" },
  { key: "clients", hash: "clients" },
  { key: "contact", hash: "contact" },
];

function Navbar() {
  const { t, i18n } = useTranslation();
  const { getPath } = useLocalizedNavigation();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const isRTL = i18n.language === "ar";
  const bodyFont = isRTL ? "font-arabic" : "font-body";

  const getNavHref = (hash) => {
    if (!hash) return getPath("/");
    return `${getPath("/")}#${hash}`;
  };

  const linkClass =
    "text-sm font-medium text-white transition-colors hover:text-ava-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-ava-primary md:text-base";

  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <header className={`bg-transparent ${bodyFont}`}>
      <div className="container mx-auto max-w-7xl px-4 py-4 md:px-8 md:py-5">
        <div className="flex items-center justify-between gap-4">
          <Link
            to={getPath("/")}
            className="shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-ava-primary"
            onClick={closeDrawer}
          >
            <Logo />
          </Link>

          <nav
            className="hidden items-center gap-6 lg:flex xl:gap-10"
            aria-label="Main navigation"
          >
            {navItems.map((item) => (
              <Link
                key={item.key}
                to={getNavHref(item.hash)}
                className={linkClass}
              >
                {t(`nav.${item.key}`)}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden lg:block">
              <LanguageSwitcher />
            </div>

            <button
              type="button"
              onClick={() => setIsDrawerOpen(!isDrawerOpen)}
              className="rounded-md p-2 text-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-ava-primary lg:hidden"
              aria-label={isDrawerOpen ? "Close menu" : "Open menu"}
              aria-expanded={isDrawerOpen}
            >
              <svg
                className="h-7 w-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden
              >
                {isDrawerOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isDrawerOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 lg:hidden"
          onClick={closeDrawer}
          aria-hidden
        />
      )}

      <div
        className={`fixed top-0 z-50 h-full w-[min(100vw,20rem)] transform border-ava-card bg-ava-black transition-transform duration-300 ease-in-out lg:hidden ${
          isRTL ? "left-0 border-e" : "right-0 border-s"
        } ${
          isDrawerOpen
            ? "translate-x-0"
            : isRTL
            ? "-translate-x-full"
            : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col p-5">
          <div className="mb-8 flex items-center justify-between gap-2">
            <Link to={getPath("/")} onClick={closeDrawer}>
              <Logo compact />
            </Link>
            <button
              type="button"
              onClick={closeDrawer}
              className="rounded-full p-2 text-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-ava-primary"
              aria-label="Close menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <nav
            className="flex flex-1 flex-col gap-1"
            aria-label="Mobile navigation"
          >
            {navItems.map((item) => (
              <Link
                key={item.key}
                to={getNavHref(item.hash)}
                onClick={closeDrawer}
                className={`border-b border-white/10 py-3 text-lg font-medium ${linkClass}`}
              >
                {t(`nav.${item.key}`)}
              </Link>
            ))}
          </nav>

          <div className="mt-auto border-t border-white/15 pt-5">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
