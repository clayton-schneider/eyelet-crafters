import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  to?: string;
  type?: "submit" | "reset" | "button";
  className?: string;
}
const PrimaryBtn = ({ children, to, className, type = "button" }: Props) => (
  <a
    type={type}
    href={to}
    className={
      className +
      " bg-cta inline-block px-7 py-3 font-bold"
    }
  >
    {children}
  </a>
);

export default PrimaryBtn;
