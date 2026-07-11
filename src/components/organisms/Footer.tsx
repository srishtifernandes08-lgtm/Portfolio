import { Container } from "../atoms/Container";
import { Small } from "../atoms/Typography";

export function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="py-12 border-t border-[var(--neutral-light)] mt-auto">
      <Container className="flex flex-col md:flex-row justify-between items-center gap-4">
        <Small>© {year} — Product Designer Portfolio</Small>
        <div className="flex gap-4">
          <a href="#about" className="text-sm font-medium text-gray-500 hover:text-[var(--foreground)] transition-colors">About</a>
          <a href="#timeline" className="text-sm font-medium text-gray-500 hover:text-[var(--foreground)] transition-colors">Timeline</a>
          <a href="#docs" className="text-sm font-medium text-gray-500 hover:text-[var(--foreground)] transition-colors">Docs</a>
        </div>
      </Container>
    </footer>
  );
}
