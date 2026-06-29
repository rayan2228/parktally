import { ReactNode } from "react";

interface Props {
  reverse?: boolean;
  sidebar: ReactNode;
  children: ReactNode;
}

export default function InfoBlock({
  reverse,
  sidebar,
  children,
}: Props) {
  return (
    <div
      className={`
        flex
        flex-col
        gap-6
        lg:flex-row
        ${reverse ? "lg:flex-row-reverse" : ""}
      `}
    >
      <div
        className="
          w-full
          rounded-3xl
          bg-white
          p-8
          shadow-sm
          lg:w-[340px]
        "
      >
        {sidebar}
      </div>

      <div
        className="
          flex-1
          rounded-3xl
          bg-[#fbfbfb]
          p-8
        "
      >
        {children}
      </div>
    </div>
  );
}