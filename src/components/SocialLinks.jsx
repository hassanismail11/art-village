import { FaFacebook, FaInstagram } from "react-icons/fa";
import { socialMediaLinks } from "../constants/social-media";

const iconMap = {
  facebook: FaFacebook,
  instagram: FaInstagram,
};

function SocialLinks({ className = "", iconClassName = "h-4 w-4" }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {socialMediaLinks.map((item) => {
        const Icon = iconMap[item.icon];
        if (!Icon) return null;

        return (
          <a
            key={item.name}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.name}
            className="text-white transition-colors hover:text-ava-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-ava-primary focus-visible:ring-offset-2 focus-visible:ring-offset-ava-bg"
          >
            <Icon className={iconClassName} aria-hidden />
          </a>
        );
      })}
    </div>
  );
}

export default SocialLinks;
