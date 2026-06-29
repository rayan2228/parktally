interface Props {
  step: string;
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
}

export default function StepRow({
  step,
  title,
  description,
  image,
  reverse,
}: Props) {
  return (
    <div
      className={`
        mb-12
        flex
        flex-col
        gap-8
        lg:items-center
        ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"}
      `}
    >
      <div
        className="
          flex-1
          rounded-2xl
          border
          border-zinc-200
          bg-white
          p-8
        "
      >
        <span
          className="
            text-xs
            font-semibold
            uppercase
            tracking-wider
          "
        >
          {step}
        </span>

        <h3
          className="
            mt-4
            text-2xl
            font-semibold
          "
        >
          {title}
        </h3>

        <p
          className="
            mt-4
            text-zinc-500
            leading-7
          "
        >
          {description}
        </p>
      </div>

      <div
        className="
          w-full
          lg:w-[420px]
        "
      >
        <img
          src={image}
          alt={title}
          className="
            h-[260px]
            w-full
            rounded-2xl
            object-cover
            shadow-xl
          "
        />
      </div>
    </div>
  );
}