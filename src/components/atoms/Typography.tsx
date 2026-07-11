import { cn } from "@/lib/utils";

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export function H1({ children, className, ...props }: TypographyProps) {
  return (
    <h1 className={cn("text-4xl md:text-5xl lg:text-6xl font-serif font-medium tracking-tight text-[var(--foreground)] mb-6", className)} {...props}>
      {children}
    </h1>
  );
}

export function H2({ children, className, ...props }: TypographyProps) {
  return (
    <h2 className={cn("text-3xl md:text-4xl font-serif font-medium tracking-tight text-[var(--foreground)] mb-4", className)} {...props}>
      {children}
    </h2>
  );
}

export function H3({ children, className, ...props }: TypographyProps) {
  return (
    <h3 className={cn("text-2xl md:text-3xl font-sans font-medium tracking-tight text-[var(--foreground)] mb-3", className)} {...props}>
      {children}
    </h3>
  );
}

export function H4({ children, className, ...props }: TypographyProps) {
  return (
    <h4 className={cn("text-xl md:text-2xl font-sans font-medium tracking-tight text-[var(--foreground)] mb-2", className)} {...props}>
      {children}
    </h4>
  );
}

export function P({ children, className, ...props }: TypographyProps) {
  return (
    <p className={cn("text-lg md:text-xl leading-relaxed text-gray-700 max-w-[65ch] mb-6", className)} {...props}>
      {children}
    </p>
  );
}

export function Lead({ children, className, ...props }: TypographyProps) {
  return (
    <p className={cn("text-xl md:text-2xl leading-relaxed text-gray-600 max-w-[65ch] font-light mb-8", className)} {...props}>
      {children}
    </p>
  );
}

export function Small({ children, className, ...props }: TypographyProps) {
  return (
    <small className={cn("text-sm md:text-base font-medium leading-none text-gray-500", className)} {...props}>
      {children}
    </small>
  );
}
