import { ArrowLeft, Sparkles } from "lucide-react";
import Link from "next/link";

export default function AtlassianProjectPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top bar */}
      <header className="sticky top-0 z-40 border-b border-border backdrop-blur supports-[backdrop-filter]:bg-background/70">
        <div className="max-w-[1100px] mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
          <Link href="/#projects" className="group relative inline-flex items-center gap-2 text-sm px-2 py-1 rounded-md transition-all">
            <span className="absolute inset-0 rounded-md bg-[#F2FCE2] opacity-0 scale-x-0 origin-left transition-all duration-300 group-hover:opacity-100 group-hover:scale-x-100" />
            <ArrowLeft className="size-4 relative z-10 transition-transform duration-300 group-hover:-translate-x-0.5" />
            <span className="relative z-10">Back to projects</span>
          </Link>
          <span className="text-xs text-muted-foreground">Case study</span>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-24 -left-24 size-[480px] rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 size-[520px] rounded-full bg-accent/20 blur-3xl" />
        </div>
        <div className="max-w-[1100px] mx-auto px-4 md:px-6 pt-12 pb-6 md:pt-16 md:pb-8">
          <div className="inline-flex items-center gap-2 text-xs md:text-sm text-muted-foreground mb-3 !whitespace-pre-line">
            <Sparkles className="size-4" /> Atlassian · 2025
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight !whitespace-pre-line">Atlassian Admin Analytics</h1>
          <p className="mt-3 max-w-2xl text-muted-foreground !whitespace-pre-line">Elevated Analytics chart copy and support documentation by auditing and updating obsolete content and building an AI-powered pattern checker to ensure consistency.

          </p>
          <div className="mt-6 flex flex-wrap gap-2 !text-sm">
            <span className="rounded-full border border-border px-3 py-1">Content Design</span>
            <span className="rounded-full border border-border px-3 py-1 !whitespace-pre-line">Agentic test AI</span>
            <span className="rounded-full border border-border px-3 py-1 !whitespace-pre-line">Design System Management</span>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section>
        <div className="max-w-[1100px] mx-auto px-4 md:px-6 pt-3 md:pt-4 pb-8 md:pb-10 !font-normal">
          {/* Meta row (under widgets) */}
          <div className="my-3 grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6 text-sm">
            <div className="min-w-0">
              <span className="block text-xs uppercase tracking-wide text-muted-foreground !font-medium">Impact / Results</span>
              <p className="mt-1 text-foreground md:line-clamp-2 !w-[100.1%] !h-[72px] !whitespace-pre-line !whitespace-pre-line !whitespace-pre-line !whitespace-pre-line">Refreshed 5 Analytics charts; updated support documentation; created pattern checker AI agent</p>
            </div>
            <div className="min-w-0">
              <span className="block text-xs uppercase tracking-wide text-muted-foreground !font-medium">Team</span>
              <p className="mt-1 text-foreground md:line-clamp-2 !whitespace-pre-line !w-full !h-[69px] !whitespace-pre-line">Product Designer, Engineer, Product Manager, + me (Content Designer)</p>
            </div>
            <div className="col-span-2 md:col-span-1 min-w-0">
              <span className="block text-xs uppercase tracking-wide text-muted-foreground !font-medium">Skills / Tools</span>
              <p className="mt-1 text-foreground md:line-clamp-2 !whitespace-pre-line !whitespace-pre-line !whitespace-pre-line !whitespace-pre-line !whitespace-pre-line !whitespace-pre-line !w-[330px] !h-[68px]">UX writing, content auditing, topic-based authoring, wireframing, Figma, Contentful</p>
            </div>
          </div>

          <article className="lg:col-span-3 space-y-7 md:space-y-10">
            {/* Hero media (below meta row) */}
            <div className="relative w-full mx-auto overflow-hidden rounded-2xl border border-border shadow-sm md:shadow" style={{ maxHeight: "60vh" }}>
              <div className="aspect-[16/9] flex items-center justify-center text-xs text-muted-foreground !bg-[url(https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/2751f244-f34d-4be9-8032-7aab6d8b7a56/visual-edit-uploads/1758222099515-0w7qsngjgjk.png)] !bg-contain bg-no-repeat !bg-center !whitespace-pre-line !border-transparent !w-[99.7%] !h-[544px]"></div>
            </div>

            <div className="prose prose-sm dark:prose-invert max-w-none">
              <h2 className="!font-semibold !whitespace-pre-line !text-[24px]">A fragmented experience</h2>
              <p className="!whitespace-pre-line !whitespace-pre-line !font-normal">When I joined Atlassian's Admin Experience team, the 20+ Admin Analytics charts dispalying org-level data on apps, users, and security had diverged from the company's new visualization pattern (VP) design system. Titles, labels, and date-range content patterns varied widely, making it harder for admins to scan and act. These inconsistencies led me to my main objective: how might we bring Analytics chart into VP alignment while documenting the standards so future updates stay consistent?


              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
              <div className="rounded-xl border border-border flex items-center justify-center text-xs text-muted-foreground h-[220px] sm:h-[280px] lg:h-[360px] !whitespace-pre-line !bg-cover !bg-center !bg-[url(https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/2751f244-f34d-4be9-8032-7aab6d8b7a56/visual-edit-uploads/1758224847576-3r58zbv5ojv.png)] !bg-cover !bg-center"></div>
              <div className="rounded-xl border border-border flex items-center justify-center text-xs text-muted-foreground h-[220px] sm:h-[280px] lg:h-[360px] !whitespace-pre-line !bg-cover !bg-center !bg-[url(https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/2751f244-f34d-4be9-8032-7aab6d8b7a56/visual-edit-uploads/1758224864110-6wwvugqe66t.png)] !bg-cover !bg-center"></div>
            </div>

            <div className="prose prose-sm dark:prose-invert max-w-none">
              <h2 className="!whitespace-pre-line !whitespace-pre-line !whitespace-pre-line !font-semibold !text-[24px]">Scoping the problem → writing and validating content solutions</h2>
              <p className="!whitespace-pre-line !whitespace-pre-line !whitespace-pre-line !whitespace-pre-line">I audited all 20+ charts and narrowed the work to five high-impact areas tied to core admin JTBDs (e.g., external user monitoring, security policy validation). Focusing on the highest-value charts kept the scope achievable and impact measurable. I drafted new titles, axis labels, and empty states, then ran critique reviews with design, PM, and content partners to maximize VP alignment and content clarity. In parallel, I refreshed Analytics support documentation so product UI and help content represented a unified Analytics experience for admins.


              </p>
              <ul>
                <li className="!whitespace-pre-line !whitespace-pre-line !whitespace-pre-line !whitespace-pre-line !w-full !h-6"></li>
                <li className="!whitespace-pre-line !whitespace-pre-line"></li>
                <li className="!whitespace-pre-line"></li>
              </ul>
            </div>

            {/* Final hero image */}
            <div className="w-full rounded-2xl border border-border bg-secondary/40 overflow-hidden aspect-[16/9] shadow-sm md:shadow" style={{ maxHeight: "48vh" }}>
              <video
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/MPEG-4%20movie-1758224618216.mp4"
                className="h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline />

            </div>

            <div className="prose prose-sm dark:prose-invert max-w-none">
              <h2 className="!whitespace-pre-line !font-semibold !whitespace-pre-line !whitespace-pre-line !text-[24px]">Scaling content consistency with AI</h2>
              <ul>
                <li className="!font-normal !whitespace-pre-line !whitespace-pre-line !whitespace-pre-line">To make design critiques more efficient and productive, I built an Admin content pattern checker agent: a lightweight Rovo (Atlassian AI) agent that scanned UI copy for Admin-specific content patterns (e.g., date-range phrasing, sentence casing, terminology). The agent flagged discrepancies in seconds, helping me catch issues early and giving reviewers a shared reference during copy critiques.</li>
                <li className="!whitespace-pre-line"></li>
                <li className="!whitespace-pre-line"></li>
              </ul>
            </div>

          {/* What shipped & takeaways */}
          <div className="mt-8 border-t border-border" />
          <div className="prose prose-sm dark:prose-invert max-w-none -mt-4 md:-mt-6">
            <h2 className="!mt-0 !font-semibold !text-[24px]">What shipped?</h2>
            <ol className="list-decimal pl-5 space-y-2">
              <li className="!font-normal !whitespace-pre-line !whitespace-pre-line">Clear, VP-aligned copy across priority charts, improving scanability and comprehension.</li>
              <li className="!font-normal !whitespace-pre-line">AI Content-Pattern Checker integrated into the team's workflow, accelerating reviews and serving as a living style-guide reference.</li>
              <li className="!font-normal !whitespace-pre-line">First-ever official docs for Jira analytics charts and standardized "Date range" x-axis language.</li>
              <li className="!font-normal !whitespace-pre-line">Reduced duplication by merging overlapping external-user security charts.</li>
            </ol>
          </div>
          </article>
        </div>
      </section>
    </div>);

}