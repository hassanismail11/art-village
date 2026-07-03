function ServiceCard({ number, color, title, items }) {
  return (
    <div className="flex flex-col items-center justify-center p-4 md:p-6">
      <div
        className={`mb-4 flex h-16 w-10 items-center justify-center rounded-full text-sm font-bold md:h-18 md:w-12 md:text-base ${color}`}
      >
        {number}
      </div>
      <h3 className="mb-3 font-heading text-lg font-bold text-white md:text-xl">
        {title}
      </h3>
      <ul className="space-y-2 flex flex-col items-center justify-center text-center text-sm text-ava-muted md:text-base">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-2 text-center">
            <span
              className="h-1.5 w-1.5 shrink-0 rounded-full bg-ava-primary"
              aria-hidden
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ServiceCard;
