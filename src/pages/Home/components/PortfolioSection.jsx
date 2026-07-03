import { useTranslation } from "react-i18next";
import { getAssetPath } from "../../../utils/paths";
import ValueFeature from "./ValueFeature";
import { portfolioValues } from "../../../constants/services";

function PortfolioSection() {
  const { t, i18n } = useTranslation();
  const bodyFont = i18n.language === "ar" ? "font-arabic" : "font-body";

  return (
    <section
      id="portfolio"
      className={`scroll-mt-24 max-w-6xl mx-auto px-4 py-16 md:py-24 ${bodyFont}`}
    >
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-center gap-12 lg:flex-row lg:gap-16">
          <div
            data-aos="fade-up"
            className="flex flex-col items-start justify-center"
          >
            <h2 className="font-heading text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              {t("home.portfolio.title")}
            </h2>
            <p className="mt-4 font-heading text-xl text-white md:text-2xl">
              {t("home.portfolio.subtitle")}
            </p>
            <p className="mt-6 text-base text-ava-muted md:text-lg">
              {t("home.portfolio.description")}
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {portfolioValues.map((key) => (
                <ValueFeature
                  key={key}
                  label={t(`home.portfolio.values.${key}`)}
                />
              ))}
            </div>
          </div>

          <div
            className="flex items-center justify-center rounded-2xl overflow-hidden"
            dir="ltr"
            data-aos="fade-left"
          >
            <img
              src={getAssetPath("img/portfolio.png")}
              alt=""
              className="h-full w-full object-cover"
              // eslint-disable-next-line react/no-unknown-property
              fetchpriority="high"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default PortfolioSection;
