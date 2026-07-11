import { StickyNav } from "@/components/organisms/StickyNav";
import { Footer } from "@/components/organisms/Footer";
import { Container } from "@/components/atoms/Container";
import { FadeIn } from "@/components/atoms/FadeIn";
import { BentoGrid } from "@/components/organisms/BentoGrid";
import { BentoCard } from "@/components/organisms/BentoCard";
import { Badge } from "@/components/atoms/Badge";
import { ProjectPreview } from "@/components/molecules/ProjectPreview";
import { getMdxContent } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxComponents } from "@/components/mdx-components";

export default function Home() {
  const rootContent = getMdxContent("");
  
  // Helper to find specific section
  const getSection = (id: string) => rootContent.find(c => c.slug === id);
  
  const intro = getSection("introduction");
  // Some contents might be small snippets we can extract or just display raw
  
  return (
    <>
      <StickyNav />
      <main className="flex-1 mt-24 mb-32">
        <Container>
          <FadeIn>
            <BentoGrid>
              {/* 1. PROFILE / INTRODUCTION CARD (8 cols desktop) */}
              <BentoCard className="md:col-span-4 lg:col-span-8 bg-[#F4F0EC] border-none">
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <h1 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4">
                      Srishti Fernandes
                    </h1>
                    <h2 className="text-xl md:text-2xl text-[var(--accent)] font-medium mb-8">
                      Product Designer / UI-UX Designer
                    </h2>
                    {intro ? (
                      <div className="prose prose-lg prose-gray max-w-2xl">
                        <MDXRemote source={intro.content} components={mdxComponents} />
                      </div>
                    ) : (
                      <p className="text-lg text-gray-600 max-w-2xl">
                        I build expressive, accessible, and highly polished digital experiences. 
                        Based in location. Welcome to my portfolio index.
                      </p>
                    )}
                  </div>
                  <div className="mt-8 flex gap-3 flex-wrap">
                    <Badge variant="outline">Currently at IDfy</Badge>
                    <Badge variant="outline">Available for opportunities</Badge>
                  </div>
                </div>
              </BentoCard>

              {/* 2. CAREER JOURNEY CARD (4 cols desktop) */}
              <BentoCard className="md:col-span-2 lg:col-span-4 bg-white" href="/#">
                <div className="flex flex-col h-full">
                  <Badge variant="accent" className="self-start mb-6">Career Timeline</Badge>
                  <div className="relative pl-6 space-y-6 before:absolute before:inset-y-0 before:left-[11px] before:w-[2px] before:bg-gray-100">
                    <div className="relative">
                      <div className="absolute -left-[30px] top-1.5 h-3 w-3 rounded-full bg-[var(--accent)] ring-4 ring-white" />
                      <h3 className="font-bold text-gray-900">IDfy</h3>
                      <p className="text-sm text-gray-500">Leadership & Scale</p>
                    </div>
                    <div className="relative">
                      <div className="absolute -left-[30px] top-1.5 h-3 w-3 rounded-full bg-gray-300 ring-4 ring-white" />
                      <h3 className="font-bold text-gray-900">Oye! Rickshaw</h3>
                      <p className="text-sm text-gray-500">Ownership</p>
                    </div>
                    <div className="relative">
                      <div className="absolute -left-[30px] top-1.5 h-3 w-3 rounded-full bg-gray-300 ring-4 ring-white" />
                      <h3 className="font-bold text-gray-900">MyScoot</h3>
                      <p className="text-sm text-gray-500">Foundation</p>
                    </div>
                    <div className="relative">
                      <div className="absolute -left-[30px] top-1.5 h-3 w-3 rounded-full bg-gray-300 ring-4 ring-white" />
                      <h3 className="font-bold text-gray-900">STCH</h3>
                      <p className="text-sm text-gray-500">Internship</p>
                    </div>
                  </div>
                </div>
              </BentoCard>

              {/* 5. IDFY CARD (8 cols desktop) */}
              <BentoCard className="md:col-span-6 lg:col-span-8 bg-white" href="/work/idfy">
                <div className="flex flex-col h-full">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <Badge variant="accent" className="mb-3">Leadership & Scale</Badge>
                      <h3 className="text-2xl font-serif text-gray-900">IDfy</h3>
                      <p className="text-gray-500 mt-1">Enterprise product design for regulated industries</p>
                    </div>
                    <span className="text-gray-400 group-hover:text-[var(--accent)] transition-colors">&rarr;</span>
                  </div>
                  
                  <div className="mt-auto grid grid-cols-2 md:grid-cols-4 gap-4">
                    <ProjectPreview alt="Video KYC Placeholder" />
                    <ProjectPreview alt="RM App Placeholder" />
                    <ProjectPreview alt="CKYC Placeholder" />
                    <ProjectPreview alt="Assessment Flow" />
                  </div>
                </div>
              </BentoCard>

              {/* 4. OYE! RICKSHAW CARD (4 cols desktop) */}
              <BentoCard className="md:col-span-3 lg:col-span-4 bg-white" href="/work/oye-rickshaw">
                <div className="flex flex-col h-full">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <Badge variant="accent" className="mb-3">Ownership</Badge>
                      <h3 className="text-2xl font-serif text-gray-900">Oye! Rickshaw</h3>
                    </div>
                    <span className="text-gray-400 group-hover:text-[var(--accent)] transition-colors">&rarr;</span>
                  </div>
                  <p className="text-gray-500 mb-6 flex-1">
                    Designing end-to-end mobility journeys and balancing business and user needs.
                  </p>
                  <ProjectPreview alt="Oye Rickshaw Placeholder" className="h-32" />
                </div>
              </BentoCard>

              {/* 3. MYSCOOT CARD (4 cols desktop) */}
              <BentoCard className="md:col-span-3 lg:col-span-4 bg-white" href="/work/myscoot">
                <div className="flex flex-col h-full">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <Badge variant="accent" className="mb-3">Foundation</Badge>
                      <h3 className="text-2xl font-serif text-gray-900">MyScoot</h3>
                    </div>
                    <span className="text-gray-400 group-hover:text-[var(--accent)] transition-colors">&rarr;</span>
                  </div>
                  <p className="text-gray-500 mb-6 flex-1">
                    Building UX foundations and developing strong product thinking.
                  </p>
                  <ProjectPreview alt="MyScoot Placeholder" className="h-32" />
                </div>
              </BentoCard>

              {/* 6. UI & MOTION EXPERIMENTS CARD (8 cols desktop) */}
              <BentoCard className="md:col-span-6 lg:col-span-8 bg-[#f8f9fa]" href="/experiments">
                <div className="flex flex-col h-full">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <Badge variant="default" className="bg-[var(--accent-warm)]/10 text-[var(--accent-warm)] mb-3">Selected Experiments</Badge>
                      <h3 className="text-2xl font-serif text-gray-900">UI & Motion</h3>
                      <p className="text-gray-500 mt-1">Visual UI studies, interaction concepts, and micro-interactions.</p>
                    </div>
                    <span className="text-gray-400 group-hover:text-[var(--accent-warm)] transition-colors">&rarr;</span>
                  </div>
                  <div className="mt-auto grid grid-cols-2 gap-4">
                     <ProjectPreview alt="Video placeholder 1" className="aspect-video" />
                     <ProjectPreview alt="Video placeholder 2" className="aspect-video hidden md:block" />
                  </div>
                </div>
              </BentoCard>

              {/* 7. SKILLS & TOOLS CARD (12 cols desktop, split layout) */}
              <BentoCard className="md:col-span-6 lg:col-span-12 bg-white">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3">
                    <Badge variant="accent" className="mb-3">Expertise</Badge>
                    <h3 className="text-2xl font-serif text-gray-900">Skills & Tools</h3>
                  </div>
                  <div className="md:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Design</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>Product Thinking</li>
                        <li>Interaction Design</li>
                        <li>Visual Design</li>
                        <li>Design Systems</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Strategy</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>User Research</li>
                        <li>Prototyping</li>
                        <li>Motion Design</li>
                        <li>Leadership</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Tools</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>Figma</li>
                        <li>Protopie / After Effects</li>
                        <li>AI-assisted workflows</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </BentoCard>

              {/* 8. SUPPORTING DOCUMENTS CARD (6 cols desktop) */}
              <BentoCard className="md:col-span-3 lg:col-span-6 bg-white" href="/#">
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <Badge variant="accent" className="mb-3">Documentation</Badge>
                    <h3 className="text-2xl font-serif text-gray-900">Supporting Evidence</h3>
                    <p className="text-gray-500 mt-2">Resume, Portfolio PDF, and assessment materials.</p>
                  </div>
                  <div className="mt-8 flex gap-4">
                    <div className="flex-1 bg-gray-50 rounded-xl p-4 border border-gray-100 flex items-center gap-3">
                      <div className="w-8 h-10 bg-[var(--accent)]/10 rounded flex items-center justify-center">
                        <span className="text-[var(--accent)] text-xs font-bold">PDF</span>
                      </div>
                      <span className="text-sm font-medium">Resume</span>
                    </div>
                    <div className="flex-1 bg-gray-50 rounded-xl p-4 border border-gray-100 flex items-center gap-3">
                      <div className="w-8 h-10 bg-[var(--accent)]/10 rounded flex items-center justify-center">
                        <span className="text-[var(--accent)] text-xs font-bold">PDF</span>
                      </div>
                      <span className="text-sm font-medium">Portfolio</span>
                    </div>
                  </div>
                </div>
              </BentoCard>

              {/* 9. CONTACT CARD (6 cols desktop) */}
              <BentoCard className="md:col-span-3 lg:col-span-6 bg-[var(--accent)] text-white" href="mailto:hello@example.com">
                <div className="flex flex-col h-full justify-center items-center text-center">
                  <h3 className="text-3xl font-serif mb-4">Let's talk</h3>
                  <p className="text-white/80 mb-6 max-w-sm">
                    I am currently open to new opportunities. Feel free to reach out via email or LinkedIn.
                  </p>
                  <div className="flex gap-4">
                    <span className="bg-white/20 hover:bg-white/30 transition-colors px-4 py-2 rounded-full text-sm font-medium">
                      Email Me
                    </span>
                    <span className="bg-white/20 hover:bg-white/30 transition-colors px-4 py-2 rounded-full text-sm font-medium">
                      LinkedIn
                    </span>
                  </div>
                </div>
              </BentoCard>
            </BentoGrid>
          </FadeIn>
        </Container>
      </main>
      <Footer />
    </>
  );
}
