import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Container({ children, className, ...props }: ContainerProps) {
  return (
    <div className={cn("mx-auto max-w-4xl px-6 md:px-8 lg:px-12", className)} {...props}>
      {children}
    </div>
  );
}
