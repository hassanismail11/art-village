import { useTranslation } from "react-i18next";
import SectionHeader from "../../../components/SectionHeader";
import { getAssetPath } from "../../../utils/paths";
import { CLIENT_LOGO_COUNT } from "../../../constants/services";

function ClientsSection() {
  const { t, i18n } = useTranslation();
  const bodyFont = i18n.language === "ar" ? "font-arabic" : "font-body";

  const clientLogos = Array.from({ length: CLIENT_LOGO_COUNT }, (_, i) =>
    getAssetPath(`img/clients/c-${String(i + 1).padStart(2, "0")}.svg`)
  );

  return (
    <section
      id="clients"
      className={`scroll-mt-24 px-4 py-16 md:py-24 ${bodyFont}`}
    >
      <div className="container mx-auto max-w-7xl">
        <SectionHeader label={t("home.clients.label")} />

        <div
          className="flex flex-wrap items-center justify-center gap-4"
          dir="ltr"
        >
          {clientLogos.map((src, index) => (
            <div
              key={src}
              className="flex aspect-[3/2] items-center justify-center rounded-lg  p-4  transition-opacity hover:opacity-100 opacity-80"
              data-aos="fade-up"
              data-aos-delay={(index % 6) * 50}
            >
              <img
                src={src}
                alt={t("home.clients.logoAlt", { number: index + 1 })}
                className="max-h-32 w-full object-contain"
                loading="lazy"
                width={160}
                height={80}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ClientsSection;
