import { useTranslation } from "react-i18next";
import SectionHeader from "../../../components/SectionHeader";

function AboutSection() {
  const { t, i18n } = useTranslation();
  const bodyFont = i18n.language === "ar" ? "font-arabic" : "font-body";

  return (
    <section
      id="about"
      className={`scroll-mt-24 px-4 py-16 md:py-24 ${bodyFont}`}
    >
      <div className="container mx-auto max-w-4xl">
        <SectionHeader
          label={t("home.about.label")}
          subtitle={t("home.about.subtitle")}
        />

        <div
          className="rounded-2xl bg-blur/80 p-6 ring-1 ring-white/30 backdrop-blur-sm md:p-10"
          data-aos="fade-up"
        >
          <p className="text-base leading-relaxed text-ava-muted md:text-lg">
            {t("home.about.p1")}
          </p>
          {/* <p className="mt-6 text-base leading-relaxed text-ava-muted md:text-lg">
            {t("home.about.p2")}
          </p> */}
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
