import { H1, H2, H3, H4, P } from "./atoms/Typography";
import { Figure } from "./molecules/Figure";

export const mdxComponents = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  p: P,
  Figure: Figure,
  a: (props: any) => (
    <a className="text-[var(--accent)] hover:opacity-80 transition-opacity" {...props} />
  ),
  ul: (props: any) => (
    <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2 marker:text-gray-400" {...props} />
  ),
  ol: (props: any) => (
    <ol className="list-decimal pl-6 mb-6 text-gray-700 space-y-2 marker:text-gray-400" {...props} />
  ),
  li: (props: any) => (
    <li className="text-lg md:text-xl leading-relaxed max-w-[65ch]" {...props} />
  ),
  strong: (props: any) => (
    <strong className="font-semibold text-gray-900" {...props} />
  ),
  hr: (props: any) => (
    <hr className="my-8 border-t border-[var(--neutral-light)]" {...props} />
  ),
  blockquote: (props: any) => (
    <blockquote className="border-l-4 border-[var(--accent)] pl-6 italic text-gray-600 my-6" {...props} />
  ),
};
