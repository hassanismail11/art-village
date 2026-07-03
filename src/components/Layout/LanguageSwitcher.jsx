import { useTranslation } from "react-i18next";
import { useLocalizedNavigation } from "../../hooks/useLocalizedNavigation";

function LanguageSwitcher() {
  const { i18n, t } = useTranslation();
  const { switchLanguage } = useLocalizedNavigation();

  const btn =
    "font-body text-sm uppercase tracking-wide text-white transition-colors hover:text-ava-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-ava-primary rounded px-2 py-1";

  return (
    <div className="flex gap-1">
      {i18n.language === "ar" && (
        <button type="button" onClick={() => switchLanguage("en")} className={btn}>
          {t("nav.switch-lang")}
        </button>
      )}
      {i18n.language === "en" && (
        <button type="button" onClick={() => switchLanguage("ar")} className={btn}>
          {t("nav.switch-lang")}
        </button>
      )}
    </div>
  );
}

export default LanguageSwitcher;
