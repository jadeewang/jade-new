import { ArrowLeft, Sparkles } from "lucide-react";
import Link from "next/link";

export default function LoraProjectPage() {
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
            <Sparkles className="size-4" /> NU Medill · 2024
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight !whitespace-pre-line">AI-Image Generation for Newsrooms</h1>
          <p className="mt-3 max-w-2xl text-muted-foreground !whitespace-pre-line">Trained a targeted LoRA and created a structured prompting method to provide underresourced newsrooms with less biased, accurate generated images.

          </p>
          <div className="mt-6 flex flex-wrap gap-2 text-xs">
            <span className="rounded-full border border-border px-3 py-1">AI Tooling</span>
            <span className="rounded-full border border-border px-3 py-1 !whitespace-pre-line">Prompt Engineering</span>
            <span className="rounded-full border border-border px-3 py-1 !whitespace-pre-line">Model Design</span>
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
              <p className="mt-1 text-foreground md:line-clamp-2 !whitespace-pre-line">Sourced 500+ images for model training; created structured training prompt; achieved baseline goals for 3 professions</p>
            </div>
            <div className="min-w-0">
              <span className="block text-xs uppercase tracking-wide text-muted-foreground">Team</span>
              <p className="mt-1 text-foreground md:line-clamp-2 !whitespace-pre-line !whitespace-pre-line">6 lab students (Journalism, Computer Science)</p>
            </div>
            <div className="col-span-2 md:col-span-1 min-w-0">
              <span className="block text-xs uppercase tracking-wide text-muted-foreground">Skills / Tools</span>
              <p className="mt-1 text-foreground md:line-clamp-2 !whitespace-pre-line">Data collection, prompt design/engineering, LoRA tuning, bias analysis; SDXL/Flux, DALLE, Python, Jupyter, Git.</p>
            </div>
          </div>

          <article className="lg:col-span-3 space-y-7 md:space-y-10">
            {/* Hero media (below meta row) */}
            <div className="relative w-full mx-auto overflow-hidden rounded-2xl border border-border shadow-sm md:shadow" style={{ maxHeight: "60vh" }}>
              <div className="aspect-[16/9] flex items-center justify-center text-sm text-muted-foreground !w-[99.9%] !h-[544px] !bg-[url(https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/2751f244-f34d-4be9-8032-7aab6d8b7a56/visual-edit-uploads/1758509056175-p0246gh9qj.png)] !bg-cover !bg-center">
              </div>
            </div>

            <div className="prose prose-sm dark:prose-invert max-w-none space-y-2">
              <h2 className="!font-semibold !whitespace-pre-line !text-2xl !whitespace-pre-line !whitespace-pre-line">Why image generation for newsrooms?</h2>
              <p className="!whitespace-pre-line !font-normal !whitespace-pre-line !whitespace-pre-line !whitespace-pre-line">One of the most common issues local outlets and smaller publications face is a lack of funding to support a formal graphics/illustrations department. At Northwestern's Knight Lab, we set out to reduce bias in AI-generated imagery so under-resourced newsrooms can source and use accurate, inclusive visuals for real stories. We focused on improving portrayals of common professions and making results more consistent and realistic.</p>
              <p className="!whitespace-pre-line !font-normal !whitespace-pre-line !whitespace-pre-line !whitespace-pre-line">We built on prior Knight Lab cohorts' findings about baseline biases in Stable Diffusion XL (SDXL). After desk research on training methods and fine-tuning, we selected professions (e.g., CEO, teacher, nurse) and ran baseline tests to document how the model depicted each role to set up our training. We also built an image parser to help use standardize the visual format and captioning syntax of the training images that we were feeding into our LoRA. </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
              <div className="rounded-xl border border-border flex items-center justify-center text-xs text-muted-foreground h-[220px] sm:h-[280px] lg:h-[360px] !whitespace-pre-line !bg-cover !bg-center !bg-cover !bg-center !bg-[url(https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/2751f244-f34d-4be9-8032-7aab6d8b7a56/visual-edit-uploads/1758506749662-8pq6dtrus1w.png)] !bg-cover !bg-center"></div>
              <div className="rounded-xl border border-border flex items-center justify-center text-xs text-muted-foreground h-[220px] sm:h-[280px] lg:h-[360px] !whitespace-pre-line !bg-cover !bg-center !bg-cover !bg-center !bg-[url(https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/2751f244-f34d-4be9-8032-7aab6d8b7a56/visual-edit-uploads/1758507090743-0iicz0yoac6e.png)] !bg-cover !bg-center"></div>
            </div>

            <div className="prose prose-sm dark:prose-invert max-w-none space-y-2">
              <h2 className="!whitespace-pre-line !font-semibold !text-2xl !whitespace-pre-line">How we approached model training</h2>
              <p className="!whitespace-pre-line !whitespace-pre-line">We ran weekly loops: curate images and label with observational, objective captions (profession, gender, race) → train the LoRA → compare baseline vs. trained outputs → adjust the dataset to correct over/under-representation. We ran into issues with this approach early on: rounds with open-ended prompts reproduced the very biases we were trying to fix (e.g., defaulting to male CEOs) and gave inconsistent results run-to-run.</p>

              <p className="!whitespace-pre-line">Our pivot: a structured prompt scaffold. Mid-way, we switched to a simple schema that declares the target attributes first, then fills in scene details. <em>Example: {"{profession: CEO | nurse | teacher}; {subject: gender/age/skin tone}; {setting: workplace}; {shot: medium portrait}; {style: natural light, editorial}"}.</em></p>
              <p className="!whitespace-pre-line">This shift kept attributes front-and-center so the model didn't drift into defaults, enabled balanced side-by-side sets for each profession (one prompt per attribute combo, same seed/size for fair comparisons), and made iterative testing more efficient; we could immediately scan an output grid and identify where representation slipped. We also added negative cues (e.g., avoid stereotypical props and clothing) and tightened the dataset to mirror the same attribute balance we asked for in prompts, which improved consistency and reduced stereotype over representation.</p>
            </div>

            {/* Image placeholder below training section */}
            <div className="rounded-xl border border-border flex items-center justify-center text-xs text-muted-foreground h-[220px] sm:h-[280px] lg:h-[360px] !bg-[url(https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/2751f244-f34d-4be9-8032-7aab6d8b7a56/visual-edit-uploads/1758507704216-08q8s3cwon2s.png)] !bg-cover !bg-center !whitespace-pre-line"></div>

            {/* Final hero image */}
            

            <div className="mt-6 border-t border-border" />
            <div className="prose prose-sm dark:prose-invert max-w-none">
              <h2 className="!whitespace-pre-line !font-semibold !text-2xl !mt-3">What changed & what's next</h2>
              <ul>
                <li className="!font-normal !whitespace-pre-line">1. More balanced depictions across target professions (less male over-representation for "CEO," more diverse portrayals of "nurse").</li>
                <li className="!font-normal !whitespace-pre-line !whitespace-pre-line">2. A reusable prompt template and <a href="https://nuknightlab.notion.site/2024F-Diffusion-Model-Training-and-Correcting-Mitigating-Biases-7da6031b295e4f05ba76b74f4a12f22d" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">manual-style report</a> that non-technical and technical editors can utilize to guide future generation scenarios.</li>
                <li className="!font-normal !whitespace-pre-line">3. Constraints remain (limited testing capabilities with available hardware, minimal training scenarios, etc.) The next cohort will focus on investigating ways to scale the dataset, formalize evaluation methods, and pilot a version of the trained LoRA with a partner newsroom.</li>
              </ul>
              <h2 className="!whitespace-pre-line !font-semibold !text-2xl mt-4">Takeaways</h2>
              <ul>
                <li className="!font-normal !whitespace-pre-line">1. Structure matters→ attribute-first prompts mitigate output  and make bias easier to see and measure.</li>
                <li className="!font-normal !whitespace-pre-line">2. Data quality and prompt design both need to be prioritized; fixing one without the other won't produce good results.</li>
                <li className="!font-normal !whitespace-pre-line">3. Small, frequent training/eval loops surface stereotype "leaks" faster than big, infrequent runs.</li>
              </ul>
            </div>

            {/* What shipped & takeaways */}
          </article>
        </div>
      </section>
    </div>
  );
}