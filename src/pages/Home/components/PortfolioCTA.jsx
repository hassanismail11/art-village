import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useLocalizedNavigation } from "../../../hooks/useLocalizedNavigation";

function PortfolioCTA() {
  const { t, i18n } = useTranslation();
  const { getPath } = useLocalizedNavigation();
  const bodyFont = i18n.language === "ar" ? "font-arabic" : "font-body";

  return (
    <section className={`max-w-5xl mx-auto px-4 pb-16 md:pb-24 ${bodyFont}`}>
      <div className="container mx-auto max-w-7xl">
        <div
          className="flex flex-col items-center justify-between gap-6 rounded-2xl bg-blur/80 p-6 ring-1 ring-white/30 backdrop-blur-sm md:flex-row md:p-8"
          data-aos="fade-up"
        >
          <p className="max-w-xl text-center text-base text-ava-muted md:text-start md:text-lg">
            {t("home.cta.text")}
          </p>
          <Link
            to={`${getPath("/")}#contact`}
            className="shrink-0 rounded-lg bg-ava-primary px-8 py-3 font-heading text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-ava-primary-light focus:outline-none focus-visible:ring-2 focus-visible:ring-ava-primary focus-visible:ring-offset-2 focus-visible:ring-offset-ava-bg"
          >
            {t("home.cta.button")}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default PortfolioCTA;
