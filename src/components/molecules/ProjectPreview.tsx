import { cn } from "@/lib/utils";
import Image from "next/image";

interface ProjectPreviewProps {
  src?: string;
  alt: string;
  type?: "image" | "video";
  videoSrc?: string;
  poster?: string;
  className?: string;
}

export function ProjectPreview({ src, alt, type = "image", videoSrc, poster, className }: ProjectPreviewProps) {
  return (
    <div className={cn("relative w-full overflow-hidden rounded-2xl bg-gray-100 border border-gray-200/50", className)}>
      {type === "image" && src && (
        <div className="relative w-full h-full min-h-[200px]">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      )}
      
      {type === "video" && videoSrc && (
        <div className="relative w-full h-full min-h-[200px]">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster={poster}
            className="object-cover w-full h-full transition-transform duration-700 ease-in-out group-hover:scale-105"
          >
            <source src={videoSrc} type="video/mp4" />
            {/* Provide alternative format if needed */}
          </video>
        </div>
      )}

      {/* Fallback pattern if no media is provided */}
      {!src && !videoSrc && (
        <div className="w-full h-full min-h-[200px] bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
          <span className="text-gray-400 font-medium text-sm tracking-widest uppercase">{alt}</span>
        </div>
      )}
    </div>
  );
}
