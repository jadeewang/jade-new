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
            <Sparkles className="size-4" /> NU x Spotify · 2025
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight !whitespace-pre-line !whitespace-pre-line">Spotify Premium 2.0</h1>
          <p className="mt-3 max-w-2xl text-muted-foreground !whitespace-pre-line !whitespace-pre-line">Redesigned the Student Plan conversion journey by leveraging what students care about most: social listening experiences.</p>
          <div className="mt-6 flex flex-wrap gap-2 text-xs">
            <span className="rounded-full border border-border px-3 py-1">Product Design & Strategy</span>
            <span className="rounded-full border border-border px-3 py-1 !whitespace-pre-line">UX Research</span>
            <span className="rounded-full border border-border px-3 py-1 !whitespace-pre-line">Documentation</span>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section>
        <div className="max-w-[1100px] mx-auto px-4 md:px-6 pt-3 md:pt-4 pb-8 md:pb-10 !font-normal">
          {/* Meta row (under widgets) */}
          <div className="my-3 grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6 text-sm">
            <div className="min-w-[260px] md:min-w-[320px]">
              <span className="block text-xs uppercase tracking-wide text-muted-foreground">Impact / Results</span>
              <p className="mt-1 text-foreground md:line-clamp-2 !whitespace-pre-line !whitespace-pre-line !whitespace-pre-line !whitespace-pre-line !whitespace-pre-line !w-auto !h-auto">Synthesized 80+ data points; tested prototype with 18 users; delivered 15-page whitepaper synthesis</p>
            </div>
            <div className="min-w-0">
              <span className="block text-xs uppercase tracking-wide text-muted-foreground">Team</span>
              <p className="mt-1 text-foreground md:line-clamp-2 !whitespace-pre-line !w-full !h-[69px] !whitespace-pre-line !whitespace-pre-line">6 design students; Spotify PM + Engineering; Fuzzymath design consultants</p>
            </div>
            <div className="col-span-2 md:col-span-1 min-w-0">
              <span className="block text-xs uppercase tracking-wide text-muted-foreground">Skills / Tools</span>
              <p className="mt-1 text-foreground md:line-clamp-2 !whitespace-pre-line !whitespace-pre-line !whitespace-pre-line !whitespace-pre-line !whitespace-pre-line !whitespace-pre-line !w-[330px] !h-[68px] !whitespace-pre-line">Design research, usability testing, content & product design, Figma, Figjam, UserTesting.com</p>
            </div>
          </div>

          <article className="lg:col-span-3 space-y-7 md:space-y-10 !px-0">
            {/* Hero media (below meta row) */}
            <div className="relative w-full mx-auto overflow-hidden rounded-2xl border border-border shadow-sm md:shadow" style={{ maxHeight: "60vh" }}>
              <div className="aspect-[16/9]">
                <div className="flex flex-col items-center justify-center text-muted-foreground !bg-contain !bg-center !bg-[url(https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/2751f244-f34d-4be9-8032-7aab6d8b7a56/visual-edit-uploads/1758556702464-1s7lv89qe1fh.png)] !w-full !h-[539px]">
                  <p className="text-sm !whitespace-pre-line"></p>
                </div>
              </div>
            </div>

            <div className="prose prose-sm dark:prose-invert max-w-none">
              <h2 className="!font-semibold !whitespace-pre-line !text-2xl !mb-2 md:!mb-3">Why Student Plan, why now</h2>
              <p className="!whitespace-pre-line !whitespace-pre-line !font-normal !whitespace-pre-line !mt-0">We observed measurable friction in the Student Plan conversion journey: unclear entry points, lack of incentives, and verification gaps that slowed decisions. Early research into the pain points students were facing and user comments pointed to one primary, addressable blocker to upgrading: finding enough value in the Student Premium plan to justify committing to an upgrade. Our goal: shorten the path from curiosity to trial by showing students the value in the Premium plan, compelling them to upgrade.</p>
            </div>

            <div className="grid grid-cols-2 gap-4 w-full">
              <div className="rounded-xl border border-border flex items-center justify-center text-xs text-muted-foreground h-[220px] bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url(https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/2751f244-f34d-4be9-8032-7aab6d8b7a56/visual-edit-uploads/1758502323166-iqj8axo9bu.png)'}}></div>
              <div className="rounded-xl border border-border flex items-center justify-center text-xs text-muted-foreground h-[220px] bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url(https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/2751f244-f34d-4be9-8032-7aab6d8b7a56/visual-edit-uploads/1758557059540-2wirkauwqrh.png)'}}></div>
            </div>

            <div className="prose prose-sm dark:prose-invert max-w-none">
              <h2 className="!whitespace-pre-line !whitespace-pre-line !whitespace-pre-line !font-semibold !whitespace-pre-line !text-2xl !mb-2 md:!mb-3">Scoping the work: why aren't students already on Student Premium?</h2>
              <p className="!whitespace-pre-line !font-normal !mt-0">From our survey results, over 46% of students who are on Free stayed on the plan because they felt Premium wasn't worth the cost given the current benefits. We used 80+ data points to segment our target audience into two decision-making personas:</p>
              <ul className="pl-6">
                <li className="!whitespace-pre-line !whitespace-pre-line">-- Unsatisfied satisfied (doesn't see enough incentives to upgrade from Free)</li>
                <li className="!whitespace-pre-line !whitespace-pre-line">-- Unaware (don't know about the Student Plan or extent of benefits)</li>
              </ul>
              <p className="!whitespace-pre-line !font-normal">From here, we explored why students use Spotify:</p>
              <ul className="pl-6">
                <li className="!whitespace-pre-line !whitespace-pre-line">-- 50% cited social reasons (listening with or connecting through friends).</li>
                <li className="!whitespace-pre-line !whitespace-pre-line">-- 24% converted because of a free trial — the single biggest motivator behind ad-free listening.</li>
              </ul>
              <p className="!whitespace-pre-line !font-normal !whitespace-pre-line">This pointed us toward our design hypothesis: If we leverage social listening and plan discovery through free trials, Spotify will become more integral to the student experience, creating stronger justification and willingness to convert.</p>
              <p className="!whitespace-pre-line !font-normal !whitespace-pre-line"></p>
            </div>

            {/* Final hero image */}
            <div className="rounded-2xl border border-border overflow-hidden aspect-[16/9] shadow-sm md:shadow w-full !bg-white">
              <div className="flex items-center justify-center text-muted-foreground !bg-[url(https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/2751f244-f34d-4be9-8032-7aab6d8b7a56/visual-edit-uploads/1758502083394-aol41vefrth.png)] bg-contain bg-no-repeat bg-center !w-[100.1%] !h-[589px]">
                <span className="text-sm !whitespace-pre-line"></span>
              </div>
            </div>

            <div className="prose prose-sm dark:prose-invert max-w-none">
              <h2 className="!whitespace-pre-line !font-semibold !whitespace-pre-line !whitespace-pre-line !text-2xl !mb-2 md:!mb-3">Prototyping & testing</h2>
              <p className="!font-normal !whitespace-pre-line !mt-0">Through concept testing, lofi wireframes, and feature ranking with 18 test users, we narrowed down to three key feature additions:</p>
              <ul className="pl-6">
                <li className="!whitespace-pre-line !whitespace-pre-line">1. Music Match: match with peers based on shared music taste & behavior.</li>
                <li className="!whitespace-pre-line !whitespace-pre-line">2. Upcoming Events: notifications and recommendations for campus and college town-specific concerts and events.</li>
                <li className="!whitespace-pre-line !whitespace-pre-line !whitespace-pre-line">3. Friends Hub: a centralized space for collaborative playlists, jams, etc.</li>
              </ul>
              <p className="!font-normal !whitespace-pre-line">After redesigning the Student Plan flow with these features and testing it out as part of an opt-in, free-trial experience with test users, students were 85% more likely to start a free trial of Student Premium compared with the original plan.</p>
            </div>

            {/* What shipped & takeaways */}
          <div className="mt-8 border-t border-border" />
          <div className="prose prose-sm dark:prose-invert max-w-none -mt-4 md:-mt-6">
            <h2 className="!mt-0 !font-semibold !whitespace-pre-line !text-2xl !mb-2 md:!mb-3">What shipped?</h2>
            <ol className="list-decimal pl-5 space-y-2 !mt-0">
              <li className="!font-normal !whitespace-pre-line !whitespace-pre-line !whitespace-pre-line">Three research-backed feature flows covering discovery, eligibility, and conversion (85%+ likelihood to begin Student trial)</li>
              <li className="!font-normal !whitespace-pre-line !whitespace-pre-line !whitespace-pre-line">15-page <a href="https://drive.google.com/file/d/1bRImHuKDp8mwEgY4J7_v9-mjn0BFWNT8/view" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">whitepaper</a> (research → design testing + analysis → recommendations) shared with PM/Engineering</li>
              <li className="!font-normal !whitespace-pre-line !whitespace-pre-line">Testing playbook to keep validating content and flows with real student users</li>
            </ol>
          </div>
          </article>
        </div>
      </section>
    </div>);

}