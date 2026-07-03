import { getAssetPath } from "../../utils/paths";

function Logo() {
  return (
    <img
      src={getAssetPath("logo/logo.svg")}
      alt=""
      className="h-24 w-auto object-contain"
      // eslint-disable-next-line react/no-unknown-property
      fetchpriority="high"
    />
  );
}

export default Logo;
