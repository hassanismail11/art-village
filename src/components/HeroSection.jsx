import { useTranslation } from "react-i18next";
import SocialLinks from "./SocialLinks";
import { getAssetPath } from "../utils/paths";

function HeroSection() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";
  const headingFont = isRTL ? "font-arabic" : "font-heading";

  return (
    <section
      id="home"
      className="scroll-mt-24 px-4 pb-16 pt-8"
      aria-label={t("hero.tagline")}
    >
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div data-aos="fade-up">
            <h1
              className={`${headingFont} mb-12 text-3xl font-extrabold uppercase leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[3rem] lg:leading-[1.15]`}
            >
              {t("hero.line1.part1")}{" "}
              <span className="accent-text">{t("hero.line1.accent1")}</span>{" "}
              {t("hero.line1.part2")} {t("hero.line1.accent2")}.
            </h1>

            <h1
              className={`${headingFont} text-3xl font-extrabold uppercase leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[3rem] lg:leading-[1.15]`}
            >
              <span className="accent-text">{t("hero.line2.accent")}</span>
              {t("hero.line2.rest")}

              <SocialLinks className="mt-8" iconClassName="h-5 w-5" />
            </h1>
          </div>

          <div className="relative flex justify-center" data-aos="fade-left">
            <div className="relative aspect-square w-full max-w-2xl overflow-hidden rounded-2xl">
              <img
                src={getAssetPath("img/hero-orb.png")}
                alt=""
                className="h-full w-full object-contain"
                // eslint-disable-next-line react/no-unknown-property
                fetchpriority="high"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ava-bg/60 to-transparent"
                aria-hidden
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
