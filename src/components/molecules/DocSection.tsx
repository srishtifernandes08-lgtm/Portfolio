import { cn } from "@/lib/utils";
import { Container } from "../atoms/Container";
import { H2 } from "../atoms/Typography";
import { FadeIn } from "../atoms/FadeIn";

interface DocSectionProps extends React.HTMLAttributes<HTMLElement> {
  id: string;
  title?: string;
  children: React.ReactNode;
}

export function DocSection({ id, title, children, className, ...props }: DocSectionProps) {
  return (
    <section
      id={id}
      className={cn("py-16 md:py-24 border-b border-[var(--neutral-light)] last:border-0", className)}
      {...props}
    >
      <Container>
        <FadeIn>
          {title && <H2 className="mb-12">{title}</H2>}
          <div className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:font-medium prose-p:text-gray-700 prose-a:text-[var(--accent)] hover:prose-a:opacity-80 prose-a:transition-opacity">
            {children}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
