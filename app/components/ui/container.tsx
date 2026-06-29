import { ReactNode } from "react";

interface Props {
    children: ReactNode;
    className?: string;
}

export default function Container({
    children,
    className,
}: Props) {
    return (
        <div
            className={`
        mx-auto
        max-w-7xl
        px-5
        md:px-8
        lg:px-12
        ${className || ""}
      `}
        >
            {children}
        </div>
    );
}