import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { getLocalizedPath, getBaseUrl } from "../../utils/paths";

const SITE_URL = "https://artvillage.agency";

function SEO({ title, description, keywords, image, type = "website" }) {
  const { i18n, t } = useTranslation();
  const location = useLocation();
  const baseUrl = getBaseUrl();
  const currentLang = i18n.language;
  const currentPath = location.pathname;

  const pathWithoutLang = currentPath.replace(/^\/(en|ar)/, "") || "/";

  const enPath = getLocalizedPath(pathWithoutLang, "en");
  const arPath = getLocalizedPath(pathWithoutLang, "ar");
  const siteUrl =
    typeof window !== "undefined" ? window.location.origin : SITE_URL;
  const baseUrlWithoutSlash = baseUrl.replace(/\/$/, "");
  const fullUrl = `${siteUrl}${baseUrlWithoutSlash}${currentPath}`;
  const enUrl = `${siteUrl}${baseUrlWithoutSlash}${enPath}`;
  const arUrl = `${siteUrl}${baseUrlWithoutSlash}${arPath}`;

  const defaultTitle = t("seo.title");
  const defaultDescription = t("seo.description");
  const defaultKeywords = t("seo.keywords");

  const defaultImage = image
    ? image.startsWith("http")
      ? image
      : `${siteUrl}${baseUrl}${image.replace(/^\//, "")}`
    : `${siteUrl}${baseUrl}img/card.png`;

  const pageTitle = title || defaultTitle;
  const pageDescription = description || defaultDescription;
  const pageKeywords = keywords || defaultKeywords;
  const pageImage =
    image && image.startsWith("http")
      ? image
      : image
      ? `${siteUrl}${baseUrl}${image.replace(/^\//, "")}`
      : defaultImage;

  useEffect(() => {
    document.title = pageTitle;

    const updateMetaTag = (name, content, attribute = "name") => {
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    updateMetaTag("description", pageDescription);
    updateMetaTag("keywords", pageKeywords);
    updateMetaTag("author", "Art Village Agency");
    updateMetaTag("language", currentLang);
    updateMetaTag("robots", "index, follow");

    updateMetaTag("og:title", pageTitle, "property");
    updateMetaTag("og:description", pageDescription, "property");
    updateMetaTag("og:image", pageImage, "property");
    updateMetaTag("og:url", fullUrl, "property");
    updateMetaTag("og:type", type, "property");
    updateMetaTag(
      "og:locale",
      currentLang === "ar" ? "ar_SA" : "en_US",
      "property"
    );
    updateMetaTag("og:site_name", "Art Village Agency", "property");

    updateMetaTag("twitter:card", "summary_large_image");
    updateMetaTag("twitter:title", pageTitle);
    updateMetaTag("twitter:description", pageDescription);
    updateMetaTag("twitter:image", pageImage);

    let hreflangEn = document.querySelector(
      'link[rel="alternate"][hreflang="en"]'
    );
    if (!hreflangEn) {
      hreflangEn = document.createElement("link");
      hreflangEn.setAttribute("rel", "alternate");
      hreflangEn.setAttribute("hreflang", "en");
      document.head.appendChild(hreflangEn);
    }
    hreflangEn.setAttribute("href", enUrl);

    let hreflangAr = document.querySelector(
      'link[rel="alternate"][hreflang="ar"]'
    );
    if (!hreflangAr) {
      hreflangAr = document.createElement("link");
      hreflangAr.setAttribute("rel", "alternate");
      hreflangAr.setAttribute("hreflang", "ar");
      document.head.appendChild(hreflangAr);
    }
    hreflangAr.setAttribute("href", arUrl);

    let hreflangDefault = document.querySelector(
      'link[rel="alternate"][hreflang="x-default"]'
    );
    if (!hreflangDefault) {
      hreflangDefault = document.createElement("link");
      hreflangDefault.setAttribute("rel", "alternate");
      hreflangDefault.setAttribute("hreflang", "x-default");
      document.head.appendChild(hreflangDefault);
    }
    hreflangDefault.setAttribute("href", enUrl);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", fullUrl);

    document.documentElement.lang = currentLang;
  }, [
    pageTitle,
    pageDescription,
    pageKeywords,
    pageImage,
    fullUrl,
    enUrl,
    arUrl,
    currentLang,
    type,
  ]);

  return null;
}

export default SEO;
