import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  id?: string;
}

export default function Section({
  children,
  className = "",
  id,
}: Props) {
  return (
    <section
      id={id}
      className={`
        py-16
        md:py-24
        ${className}
      `}
    >
      {children}
    </section>
  );
}