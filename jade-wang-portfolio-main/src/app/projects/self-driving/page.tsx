import { ArrowLeft, Sparkles } from "lucide-react";

export default function AtlassianProjectPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top bar */}
      <header className="sticky top-0 z-40 border-b border-border backdrop-blur supports-[backdrop-filter]:bg-background/70">
        <div className="max-w-[1100px] mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
          <a href="/#projects" className="group relative inline-flex items-center gap-2 text-sm px-2 py-1 rounded-md transition-all">
            <span className="absolute inset-0 rounded-md bg-[#F2FCE2] opacity-0 scale-x-0 origin-left transition-all duration-300 group-hover:opacity-100 group-hover:scale-x-100" />
            <ArrowLeft className="size-4 relative z-10 transition-transform duration-300 group-hover:-translate-x-0.5" />
            <span className="relative z-10">Back to projects</span>
          </a>
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
          <div className="inline-flex items-center gap-2 text-xs md:text-sm text-muted-foreground mb-3 !whitespace-pre-line !whitespace-pre-line">
            <Sparkles className="size-4" /> NU Medill · 2024
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight !whitespace-pre-line">Self-Driving in San Francisco</h1>
          <p className="mt-3 max-w-2xl text-muted-foreground !whitespace-pre-line !whitespace-pre-line">Built an interactive digital piece about the increase of autonomous vehicles in San Francisco to bring the self-driving experience from the streets to the screen.</p>
          <div className="mt-6 flex flex-wrap gap-2 text-xs">
            <span className="rounded-full border border-border px-3 py-1 !whitespace-pre-line !whitespace-pre-line">Interviewing</span>
            <span className="rounded-full border border-border px-3 py-1 !whitespace-pre-line !whitespace-pre-line">Digital Journalism</span>
            <span className="rounded-full border border-border px-3 py-1 !whitespace-pre-line !whitespace-pre-line">Prototyping</span>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section>
        <div className="max-w-[1100px] mx-auto px-4 md:px-6 pt-3 md:pt-4 pb-8 md:pb-10 !font-normal">
          {/* Meta row (under widgets) */}
          <div className="my-3 grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6 text-sm">
            <div className="min-w-0">
              <span className="block text-xs uppercase tracking-wide text-muted-foreground">Impact / Results</span>
              <p className="mt-1 text-foreground md:line-clamp-2 !w-[100.1%] !h-[72px] !whitespace-pre-line !whitespace-pre-line !whitespace-pre-line !whitespace-pre-line">Interviewed 12 riders and SMEs, built a web interactive with a 3-part AR "ride", published and presented story</p>
            </div>
            <div className="min-w-0">
              <span className="block text-xs uppercase tracking-wide text-muted-foreground">Team</span>
              <p className="mt-1 text-foreground md:line-clamp-2 !whitespace-pre-line !w-full !h-[69px] !whitespace-pre-line">4 students (Journalism, Computer Science, Industrial Engineering)</p>
            </div>
            <div className="col-span-2 md:col-span-1 min-w-0">
              <span className="block text-xs uppercase tracking-wide text-muted-foreground">Skills / Tools</span>
              <p className="mt-1 text-foreground md:line-clamp-2 !whitespace-pre-line !whitespace-pre-line !whitespace-pre-line !whitespace-pre-line !whitespace-pre-line !whitespace-pre-line !w-[330px] !h-[68px]">Interviewing, feature writing, web design, usability testing, HTML/CSS, JavaScript, Figma, Photoshop, Adobe Premiere</p>
            </div>
          </div>

          <article className="lg:col-span-3 space-y-7 md:space-y-10">
            {/* Hero media (below meta row) */}
            <div className="relative w-full mx-auto overflow-hidden rounded-2xl border border-border shadow-sm md:shadow" style={{ maxHeight: "60vh" }}>
              <div className="aspect-[16/9] !w-[99.9%] !h-[544px]">
                <iframe
                  className="h-full w-full"
                  src="https://www.youtube.com/embed/XJjH7HRuMNg?autoplay=1&mute=1&playsinline=1&rel=0&modestbranding=1&loop=1&playlist=XJjH7HRuMNg"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen />

              </div>
            </div>

            <div className="prose prose-sm dark:prose-invert max-w-none">
              <h2 className="!font-semibold !whitespace-pre-line !whitespace-pre-line !text-lg">Understanding the rise of robotaxis</h2>
              <p className="!whitespace-pre-line !whitespace-pre-line !font-normal !whitespace-pre-line !whitespace-pre-line !whitespace-pre-line">For three months of 2024, we investigated the rise of autonomous vehicles (robotaxis) in San Francisco and what a robotaxi actually feels like. The goal: translate that first-person ride into an interactive piece that explains the emerging technology behind self-driving cars, surfaces trust and confusion surrounding the commercial robotaxi landscape, and captures what autonomous transportation could mean for the future of mobility in cities.


              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
              <div className="rounded-xl border border-border flex items-center justify-center text-xs text-muted-foreground h-[220px] sm:h-[280px] lg:h-[360px] !whitespace-pre-line !bg-cover !bg-center !bg-cover !bg-center !bg-[url(https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/2751f244-f34d-4be9-8032-7aab6d8b7a56/visual-edit-uploads/1758491326736-ub038naqo4.png)] !bg-cover !bg-center"></div>
              <div className="rounded-xl border border-border flex items-center justify-center text-xs text-muted-foreground h-[220px] sm:h-[280px] lg:h-[360px] !whitespace-pre-line !bg-cover !bg-center !bg-cover !bg-center !bg-[url(https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/2751f244-f34d-4be9-8032-7aab6d8b7a56/visual-edit-uploads/1758490565276-7bc8mujo3bx.png)] !bg-cover !bg-center"></div>
            </div>

            <div className="prose prose-sm dark:prose-invert max-w-none">
              <h2 className="!whitespace-pre-line !whitespace-pre-line !whitespace-pre-line !font-semibold !text-lg">From rides to reporting</h2>
              <p className="!whitespace-pre-line !whitespace-pre-line !whitespace-pre-line !whitespace-pre-line !whitespace-pre-line !whitespace-pre-line !whitespace-pre-line">After background research and taking multiple rides in Waymos ourselves, I ran 12 interviews across perspectives: a local writer and frequent Waymo/Cruise rider, a Zoox software engineer building the "toaster" taxi, and a Teamsters union representative focused on regulation and worker impact. These conversations mapped both excitement and risk, and shaped the narrative arcs of public safety, transportation policy, and human-technology interaction.</p>
              <h2 className="!mt-4 !whitespace-pre-line !whitespace-pre-line !whitespace-pre-line !font-semibold !text-lg">Bringing the ride to the screen</h2>
              <p className="!whitespace-pre-line !whitespace-pre-line !whitespace-pre-line !whitespace-pre-line !whitespace-pre-line !whitespace-pre-line">To translate our reporting into a cohesive story, we sketched visual flows in Notability, then wireframed our designs in Figma and built the story from scratch using HTML, CSS, and JavaScript. The piece sequences readers through an immersive introduction to self-driving cars, covers development/controversies, and ends with a forward looking section contemplating the future of autonomous transportation. </p>
            </div>

            {/* Final hero image */}
            <div className="w-full rounded-2xl border border-border bg-secondary/40 overflow-hidden aspect-[16/9] shadow-sm md:shadow" style={{ maxHeight: "48vh" }}>
              <img
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Screen%20Shot%202024-10-21%20at%204.21.52%20AM-1758491001022.png"
                alt="Presentation at Northwestern University"
                className="h-full w-full object-cover" />


            </div>

            <div className="prose prose-sm dark:prose-invert max-w-none">
              <h2 className="!whitespace-pre-line !font-semibold !text-lg">Publishing the experience</h2>
              <p className="!font-normal !whitespace-pre-line !whitespace-pre-line">The result is an interactive feature that makes a robotaxi ride legible on the web and packages multiple viewpoints without losing nuance. On the way, we solved practical hurdles—securing on-record sources, fixing video render issues, and tuning CTAs through peer tests. Though we were not permitted to publish our story to external media outlets (agreements made between Northwestern and our sources), we presented the published piece to our design cohort and Northwestern faculty in March 2024.</p>
            </div>

            {/* What shipped & takeaways */}
          <div className="mt-8 border-t border-border" />
          <div className="prose prose-sm dark:prose-invert max-w-none -mt-4 md:-mt-6">
            <h2 className="!mt-0 !font-semibold !text-lg !whitespace-pre-line">What did I learn?</h2>
            <ol className="list-decimal pl-5 space-y-2">
              <li className="!font-normal !whitespace-pre-line !whitespace-pre-line">Report first, then think about the technology/experience.</li>
              <li className="!font-normal !whitespace-pre-line !whitespace-pre-line !whitespace-pre-line">If possible, experience the story yourself. It informs perspectives more than any kind of desk research.</li>
              <li className="!font-normal !whitespace-pre-line !whitespace-pre-line">Trust is earned, not guaranteed. Sources don't owe you anything.</li>
              <li className="!font-normal !whitespace-pre-line !whitespace-pre-line">Seek diverse input along the way to drive reporting and editing, not just at the end of the process.</li>
            </ol>
          </div>
          </article>
        </div>
      </section>
    </div>);

}