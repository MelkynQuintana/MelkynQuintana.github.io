// Add near bottom of resizable-navbar.jsx
import { cn } from "../../lib/utils";
import { useTranslation } from "../../i18n"; // adjust path if needed

export const LanguageToggleButton = ({ className }) => {
  const { lang, setLang, t } = useTranslation();
  return (
    <button
      onClick={() => setLang(lang === "en" ? "es" : "en")}
      className={cn(
        "h-6 w-8 rounded overflow-hidden hover:scale-110 transition-transform",
        className
      )}
      aria-label={lang === "en" ? t("switch_to_spanish") : t("switch_to_english")}
      title={lang === "en" ? t("switch_to_spanish") : t("switch_to_english")}
    >
      {lang === "en" ? (
        // Show 🇨🇴 when in English (click to switch Spanish)
        <>
          <img src="../../public/images/colombia_flag.webp" 
          alt="Colombian Flag" 
          className="h-full w-full object-cover" />
        </>
      ) : (
        // Show 🇺🇸/🇬🇧 when in Spanish (click to switch English)
        <>
          <img src="../../public/images/usauk.png" 
          alt="US/UK Flag" 
          className="h-full w-full object-cover" />
        </>
      )}
    </button>
  );
};
