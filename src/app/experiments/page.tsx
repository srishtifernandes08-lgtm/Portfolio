import { Container } from "@/components/atoms/Container";
import { StickyNav } from "@/components/organisms/StickyNav";
import { Footer } from "@/components/organisms/Footer";
import Link from "next/link";

export default function ExperimentsPage() {
  return (
    <>
      <StickyNav />
      <main className="flex-1 mt-24">
        <section className="py-20 md:py-32">
          <Container>
            <Link href="/" className="inline-flex items-center text-sm font-semibold tracking-wider uppercase text-[var(--accent)] hover:underline mb-8">
              &larr; Back to visual index
            </Link>
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4">
                Selected UI & Motion Experiments
              </h1>
              <p className="text-lg text-gray-500 mb-12">
                A collection of visual UI studies, interaction explorations, and motion design concepts.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Placeholders for experiments */}
                <div className="aspect-video bg-gray-100 rounded-2xl flex items-center justify-center text-gray-400">
                  Experiment 1
                </div>
                <div className="aspect-video bg-gray-100 rounded-2xl flex items-center justify-center text-gray-400">
                  Experiment 2
                </div>
                <div className="aspect-video bg-gray-100 rounded-2xl flex items-center justify-center text-gray-400">
                  Experiment 3
                </div>
                <div className="aspect-video bg-gray-100 rounded-2xl flex items-center justify-center text-gray-400">
                  Experiment 4
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
