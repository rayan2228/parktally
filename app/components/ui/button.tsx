import { ReactNode } from "react";

interface Props {
    children: ReactNode;
    full?: boolean;
}

export default function Button({
    children,
    full,
}: Props) {
    return (
        <button
            className={`
        rounded-xl
        bg-primary
        px-8
        py-3.5
        text-sm
        font-medium
        text-white
        transition
        hover:opacity-90
        hover:-translate-y-0.5
        ${full ? "w-full" : ""}
      `}
        >
            {children}
        </button>
    );
}