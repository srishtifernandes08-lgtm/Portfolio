import { ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface BentoCardProps {
  children: ReactNode;
  className?: string;
  href?: string;
  bgColor?: string;
}

export function BentoCard({ children, className, href, bgColor = "bg-white" }: BentoCardProps) {
  const CardContent = (
    <div
      className={cn(
        "relative flex flex-col h-full rounded-3xl border border-[var(--neutral-light)] p-8 overflow-hidden group transition-all duration-300",
        bgColor,
        href && "hover:shadow-lg hover:-translate-y-1 hover:border-gray-300",
        className
      )}
    >
      {children}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block h-full outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-3xl">
        {CardContent}
      </Link>
    );
  }

  return CardContent;
}
