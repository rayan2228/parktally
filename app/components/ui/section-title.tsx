interface Props {
  title: string;
  description?: string;
}

export default function SectionTitle({
  title,
  description,
}: Props) {
  return (
    <div className="mx-auto mb-16 max-w-3xl text-center">
      <h2 className="font-[var(--font-geist)] text-4xl font-semibold md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-sm leading-7 text-gray-500">
          {description}
        </p>
      )}
    </div>
  );
}