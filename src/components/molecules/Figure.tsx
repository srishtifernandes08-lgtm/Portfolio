import Image from "next/image";
import { cn } from "@/lib/utils";

interface FigureProps {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  priority?: boolean;
}

export function Figure({ src, alt, caption, className, priority = false }: FigureProps) {
  return (
    <figure className={cn("my-10 flex flex-col items-center", className)}>
      <div className="relative w-full overflow-hidden rounded-lg border border-[var(--neutral-light)] bg-gray-50/50 shadow-sm">
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={800}
          className="w-full h-auto object-cover"
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
        />
      </div>
      {caption && (
        <figcaption className="mt-4 text-sm text-gray-500 text-center max-w-[80%] leading-relaxed">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
