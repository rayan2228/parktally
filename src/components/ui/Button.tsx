import Link from "next/link";
import styles from "./Button.module.css";

type ButtonBaseProps = {
  children: React.ReactNode;
  fullWidth?: boolean;
  className?: string;
};

type ButtonAsLink = ButtonBaseProps & {
  href: string;
  onClick?: never;
  type?: never;
};

type ButtonAsButton = ButtonBaseProps & {
  href?: never;
  onClick?: () => void;
  type?: "button" | "submit";
};

type ButtonProps = ButtonAsLink | ButtonAsButton;

/**
 * Primary CTA button. Renders as a Next.js <Link> when `href` is provided
 * (for navigation/SEO-crawlable links), or a native <button> otherwise.
 */
export default function Button({
  children,
  href,
  onClick,
  type = "button",
  fullWidth,
  className,
}: ButtonProps) {
  const classes = [styles.btn, fullWidth ? styles.fullWidth : "", className]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
