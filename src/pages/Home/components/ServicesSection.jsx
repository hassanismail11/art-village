import { useTranslation } from "react-i18next";
import SectionHeader from "../../../components/SectionHeader";
import ServiceCard from "./ServiceCard";
import { services } from "../../../constants/services";

function ServicesSection() {
  const { t, i18n } = useTranslation();
  const bodyFont = i18n.language === "ar" ? "font-arabic" : "font-body";

  return (
    <section id="services" className={`px-4 py-16  ${bodyFont}`}>
      <div className="container mx-auto max-w-7xl flex flex-col items-center gap-8">
        <SectionHeader
          label={t("home.services.label")}
          subtitle={t("home.services.subtitle")}
        />

        <div
          className="rounded-2xl bg-ava-card/80 p-4 ring-1 ring-white/5 backdrop-blur-sm md:p-6"
          data-aos="fade-up"
        >
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <div
                key={service.key}
                className={`${
                  index < services.length - 1
                    ? "lg:border-e lg:border-white/10"
                    : ""
                } flex flex-col items-center justify-center`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <ServiceCard
                  number={service.number}
                  color={service.color}
                  title={t(`services.${service.key}.title`)}
                  items={t(`services.${service.key}.items`, {
                    returnObjects: true,
                  })}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
