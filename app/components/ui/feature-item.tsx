import { ReactNode } from "react";

interface Props {
  icon: ReactNode;
  title: string;
}

export default function FeatureItem({
  icon,
  title,
}: Props) {
  return (
    <div
      className="
        flex
        items-center
        gap-4
        rounded-2xl
        bg-white
        p-4
        shadow-sm
      "
    >
      <div
        className="
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-lg
          bg-primary/10
          text-primary
        "
      >
        {icon}
      </div>

      <span
        className="
          text-sm
          font-medium
        "
      >
        {title}
      </span>
    </div>
  );
}