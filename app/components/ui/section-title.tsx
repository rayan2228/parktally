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
        <p className="mt-4 text-sm leading-7 text-primary-black  max-w-196.5 mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}