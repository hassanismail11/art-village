import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import SocialLinks from "../SocialLinks";
import { useLocalizedNavigation } from "../../hooks/useLocalizedNavigation";
import {
  CONTACT_ADDRESS,
  CONTACT_MAILTO,
  CONTACT_PHONE_TEL,
  CONTACT_PHONE_DISPLAY,
  CONTACT_EMAIL_ADDRESS,
} from "../../constants/contact";

const footerLinks = [
  { key: "home", hash: "" },
  { key: "about", hash: "about" },
  { key: "portfolio", hash: "portfolio" },
  { key: "clients", hash: "clients" },
];

function Footer() {
  const { t, i18n } = useTranslation();
  const { getPath } = useLocalizedNavigation();
  const bodyFont = i18n.language === "ar" ? "font-arabic" : "font-body";

  const getNavHref = (hash) => {
    if (!hash) return getPath("/");
    return `${getPath("/")}#${hash}`;
  };

  return (
    <footer id="contact" className={`mt-24  pt-12 pb-8 ${bodyFont}`}>
      <div className="container mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          <div className="flex flex-col items-center md:items-start">
            <Logo />
            <p className="mt-4 text-sm text-ava-muted">
              {t("footer.copyright")}
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h3 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider text-white">
              {t("footer.links")}
            </h3>
            <nav className="flex flex-col gap-2" aria-label="Footer navigation">
              {footerLinks.map((item) => (
                <Link
                  key={item.key}
                  to={getNavHref(item.hash)}
                  className="text-sm text-ava-muted transition-colors hover:text-ava-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-ava-primary"
                >
                  {t(`nav.${item.key}`)}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h3 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider text-white">
              {t("footer.contact-us")}
            </h3>
            <a
              href={CONTACT_PHONE_TEL}
              className="text-sm text-ava-muted transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-ava-primary"
              dir="ltr"
            >
              {CONTACT_PHONE_DISPLAY}
            </a>
            <a
              href={CONTACT_MAILTO}
              className="mt-2 text-sm text-ava-muted transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-ava-primary"
            >
              {CONTACT_EMAIL_ADDRESS}
            </a>
            <p className="mt-2 text-sm text-ava-muted">{CONTACT_ADDRESS}</p>
            <SocialLinks className="mt-4" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
