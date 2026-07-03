import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";
import { useLocalizedNavigation } from "../../hooks/useLocalizedNavigation";

function NotFound() {
  const { t, i18n } = useTranslation();
  const { getPath } = useLocalizedNavigation();
  const params = useParams();
  const splat = params["*"];
  const body = i18n.language === "ar" ? "font-arabic" : "font-body";
  const titleFont = i18n.language === "ar" ? "font-arabic" : "font-heading";

  useEffect(() => {
    const previousTitle = document.title;
    document.title = t("notFound.seoTitle");
    return () => {
      document.title = previousTitle;
    };
  }, [t, i18n.language]);

  return (
    <div
      className={`flex min-h-[60vh] flex-col items-center justify-center px-4 py-24 text-center ${body}`}
    >
      <p
        className={`font-heading text-7xl font-bold text-ava-primary md:text-9xl ${titleFont}`}
        aria-hidden
      >
        404
      </p>
      <h1
        className={`mt-4 max-w-xl text-2xl font-semibold text-white md:text-3xl ${titleFont}`}
      >
        {t("notFound.title")}
      </h1>
      <p className="mt-3 max-w-md text-ava-muted">{t("notFound.message")}</p>
      {splat ? (
        <p
          className="mt-2 max-w-lg break-all font-mono text-sm text-ava-muted"
          dir="ltr"
        >
          /{splat}
        </p>
      ) : null}
      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <Link
          to={getPath("/")}
          className="rounded-lg bg-ava-primary px-6 py-3 font-semibold text-white transition-colors hover:bg-ava-primary-light focus:outline-none focus-visible:ring-2 focus-visible:ring-ava-primary"
        >
          {t("notFound.backHome")}
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
