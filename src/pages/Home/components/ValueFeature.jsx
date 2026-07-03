import { getAssetPath } from "../../../utils/paths";

function ValueFeature({ label }) {
  return (
    <div className="flex items-center gap-3">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ava-primary/20 text-ava-primary">
        {/* <FaCheck className="h-4 w-4" aria-hidden /> */}
        <img
          src={getAssetPath("icons/check.svg")}
          alt=""
          className="h-8 w-8 object-contain"
          // eslint-disable-next-line react/no-unknown-property
          fetchpriority="high"
        />
      </span>
      <span className="font-heading text-sm font-semibold text-white md:text-base">
        {label}
      </span>
    </div>
  );
}

export default ValueFeature;
