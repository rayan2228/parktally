interface Props {
  title: string;
  description?: string;
}

export default function SectionTitle({
  title,
  description,
}: Props) {
  return (
    <div className="mx-auto mb-16  text-center">
      <h2 className="font-geist text-4xl font-semibold ">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-sm leading-7 text-gray-500 font-light max-w-159 mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}