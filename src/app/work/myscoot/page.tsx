import { Container } from "@/components/atoms/Container";
import { StickyNav } from "@/components/organisms/StickyNav";
import { Footer } from "@/components/organisms/Footer";
import { getMdxBySlug } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxComponents } from "@/components/mdx-components";
import Link from "next/link";

export default function MyScootPage() {
  const content = getMdxBySlug("design-journey", "foundation");

  return (
    <>
      <StickyNav />
      <main className="flex-1 mt-24 mb-32">
        <Container>
          <Link href="/" className="inline-flex items-center text-sm font-semibold tracking-wider uppercase text-[var(--accent)] hover:underline mb-12">
            &larr; Back to visual index
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Sticky Sidebar */}
            <div className="lg:col-span-3 hidden lg:block">
              <div className="sticky top-32 space-y-4 text-sm font-medium text-gray-500">
                <p className="text-gray-900 font-bold uppercase tracking-wider text-xs mb-6">On this page</p>
                <ul className="space-y-3">
                  <li><a href="#overview" className="hover:text-[var(--accent)] transition-colors">Overview</a></li>
                </ul>
              </div>
            </div>

            {/* Content Area */}
            <div className="lg:col-span-9 max-w-3xl">
              <div id="overview" className="scroll-mt-32">
                <h1 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4">
                  {content?.frontmatter.company || "MyScoot"}
                </h1>
                <p className="text-lg text-gray-500 mb-12">
                  Foundation &bull; Product Designer
                </p>
                
                <div className="prose prose-lg prose-gray max-w-none">
                  {content && (
                    <MDXRemote source={content.content} components={mdxComponents} />
                  )}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
