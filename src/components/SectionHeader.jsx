function SectionHeader({ label, subtitle, className = "" }) {
  return (
    <div
      className={`mb-8 text-center md:mb-12 ${className}`}
      data-aos="fade-up"
    >
      <p className="font-heading text-2xl font-semibold uppercase tracking-[0.2em] text-white">
        {label}
      </p>
      <div className="section-underline" aria-hidden />
      {subtitle && (
        <h2 className="mx-auto mt-4 font-heading text-2xl font-bold text-white md:text-3xl lg:text-4xl">
          {subtitle}
        </h2>
      )}
    </div>
  );
}

export default SectionHeader;
