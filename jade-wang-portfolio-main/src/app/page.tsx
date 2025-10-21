"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Briefcase, Code2, Mail, MapPin, Rocket, Sparkles, ExternalLink, Linkedin, ChevronDown } from "lucide-react";
import { projects } from "@/data/projects";

export default function Home() {
  // Track header background on scroll (no dark mode)
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* Navigation */}
      <header className={`sticky top-0 z-50 border-b border-border transition-colors ${scrolled ? 'bg-[#F2FCE2] shadow-sm' : 'backdrop-blur bg-[#F2FCE2]/70 supports-[backdrop-filter]:bg-[#F2FCE2]/70'}`}>
        <div className="mx-auto flex items-center justify-between px-6 py-3 !w-full !h-[55px] !max-w-full relative">
          <a href="#home" className="flex items-center gap-2">
            {/* replace text logo with signature image */}
            <img src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/2751f244-f34d-4be9-8032-7aab6d8b7a56/visual-edit-uploads/1758069738327-8j7advj7nk2.png" alt="Jade Wang signature" className="h-7 md:h-8 w-auto object-contain" />
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm absolute left-1/2 -translate-x-1/2">
            <div className="relative group">
              <a href="#projects" className="inline-flex items-center gap-1 transition-colors rounded px-2 py-1 hover:bg-[#F2FCE2]">
                Projects <ChevronDown className="size-3" />
              </a>
              <div className="absolute left-0 top-full w-64 rounded-md border border-border bg-background shadow-md opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto focus-within:opacity-100 focus-within:pointer-events-auto transition z-50 p-2">
                <a href="/projects/atlassian" className="block px-3 py-2 text-sm rounded hover:bg-[#F2FCE2]">Atlassian Admin Analytics</a>
                <a href="/projects/self-driving" className="block px-3 py-2 text-sm rounded hover:bg-[#F2FCE2]">Self-Driving in San Francisco</a>
                <a href="/projects/spotify" className="block px-3 py-2 text-sm rounded hover:bg-[#F2FCE2]">Spotify Premium 2.0</a>
                <a href="/projects/lora" className="block px-3 py-2 text-sm rounded hover:bg-[#F2FCE2]">AI-Image Generation for Media</a>
              </div>
            </div>
            <a href="#experience" className="transition-colors rounded px-2 py-1 hover:bg-[#F2FCE2]">Experience</a>
            <a href="#education" className="transition-colors rounded px-2 py-1 hover:bg-[#F2FCE2]">Education</a>
            <a href="#skills" className="transition-colors rounded px-2 py-1 hover:bg-[#F2FCE2]">Skills</a>
            <a href="#contact" className="transition-colors rounded px-2 py-1 hover:bg-[#F2FCE2]">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            
            <a
              href="mailto:jadewang2026@u.northwestern.edu"
              aria-label="Email Jade"
              className="inline-flex items-center justify-center rounded-full border border-border size-8 transition-all duration-200 hover:scale-110 hover:bg-black hover:border-[#F2FCE2] text-foreground hover:text-white"
              title="Email">

              <Mail className="size-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/jade-wang26/"
              target="_blank"
              rel="noreferrer"
              aria-label="Jade on LinkedIn"
              className="inline-flex items-center justify-center rounded-full border border-border size-8 transition-all duration-200 hover:scale-110 hover:bg-black hover:border-[#F2FCE2] text-foreground hover:text-white"
              title="LinkedIn">

              <Linkedin className="size-4" />
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2200&auto=format&fit=crop"
            alt="Abstract tech background"
            className="h-full w-full object-cover opacity-20" />

        </div>
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 !text-zinc-800 !w-full !h-full">
          <p className="inline-flex items-center gap-2 text-xs md:text-sm text-muted-foreground mb-3 !whitespace-pre-line !whitespace-pre-line !whitespace-pre-line !whitespace-pre-line">
            <Sparkles className="size-4" /> Designer • Storyteller
          </p>
          <h1 className="text-4xl/tight tracking-tight !font-bold md:!text-[64px] !opacity-95 md:!text-zinc-800">
            Jade Wang
          </h1>
          <p className="mt-3 max-w-2xl text-base md:text-lg text-muted-foreground !whitespace-pre-line !whitespace-pre-line !whitespace-pre-line">Hi, I'm Jade. I craft thoughtful product experiences with a focus on design, content, and AI. I've done work for Atlassian, ServiceNow, and Spotify.

          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              onClick={(e) => {e.preventDefault();document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' });}}
              className="inline-flex items-center gap-2 rounded-full text-background px-5 py-2 text-sm font-medium hover:opacity-90 transition !bg-zinc-800 transition-transform duration-200 hover:scale-[1.02]">

              View projects <ChevronDown className="size-4" />
            </a>
            <a href="#experience" className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2 text-sm font-medium transition hover:bg-[#F2FCE2] transition-transform duration-200 hover:scale-[1.02]">
              Experience
            </a>
            <a href="#education" className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2 text-sm font-medium transition hover:bg-[#F2FCE2] transition-transform duration-200 hover:scale-[1.02]">
              Education
            </a>
            <span className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2 text-sm text-muted-foreground">
              <MapPin className="size-4" /> SF Bay Area / Chicago
            </span>
          </div>
        </div>
      </section>

      {/* Cursive divider below hero widgets to push Selected Projects below the fold */}
      <div className="max-w-6xl mx-auto px-6 select-none" aria-hidden>
        <div className="py-10 md:py-16">
          <svg viewBox="0 0 1200 120" className="w-full h-24 md:h-28" fill="none">
            <path d="M0 60 C 150 20, 300 100, 450 60 S 750 20, 900 60 S 1050 100, 1200 60" stroke="currentColor" strokeOpacity="0.25" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
      </div>

      {/* Projects */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-14 md:py-20">
        <div className="flex items-end justify-between mb-5">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Selected Projects</h2>
          <a href="#contact" className="text-sm text-muted-foreground inline-flex items-center gap-1 rounded px-2 py-1 transition hover:bg-[#F2FCE2]">
            Full case studies on request <ExternalLink className="size-3.5" />
          </a>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.slug}
              aria-label={`Open case study: ${p.title}`}
              className="group relative block overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:bg-[#F2FCE2] focus-visible:bg-[#F2FCE2] focus-visible:shadow-lg hover:shadow-lg hover:-translate-y-0.5 focus-visible:-translate-y-0.5">

                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-medium leading-tight line-clamp-2 pr-6 transition-colors group-hover:text-foreground !text-lg">{p.title}</h3>
                    <ArrowRight aria-hidden className="shrink-0 size-5 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                  <p className="mt-1 text-muted-foreground line-clamp-2 !text-[15px]">{p.subtitle}</p>

                  {/* Thumbnail image or placeholder */}
                  <div className="mt-4 mx-auto w-[92%] overflow-hidden rounded-xl border border-border aspect-[4/3] transition-all">
                    {/* Use local thumbnail if present; otherwise render placeholder */}
                    {p.thumbnailUrl ? (

                      <img src={p.thumbnailUrl} alt={p.thumbnailAlt} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center text-muted-foreground !bg-[url(https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/2751f244-f34d-4be9-8032-7aab6d8b7a56/visual-edit-uploads/1758510042696-csskx8olhng.png)] !bg-cover !bg-center">
                        <span className="text-xl font-semibold tracking-wide">
                          {p.title.split(" ").map((w: string) => w[0]).filter(Boolean).slice(0, 2).join("").toUpperCase()}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </a>
          ))}
        </div>
      </section>

      {/* Straight divider between sections */}
      <div className="max-w-6xl mx-auto px-6"><div className="border-t border-border" /></div>

      {/* Experience */}
      <section id="experience" className="max-w-6xl mx-auto px-6 py-14 !grid md:!py-11">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Experience</h2>
          <span className="text-sm text-muted-foreground">Atlassian • ServiceNow • Spotify</span>
        </div>
        <div className="grid gap-5">
          {/* Atlassian */}
          <article className="rounded-2xl border border-border p-6 md:p-7 transition-transform duration-200 will-change-transform hover:scale-[1.01]">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-4">
                <img src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/PNG image 4-1758067562859.png" alt="Atlassian logo" className="size-10 rounded-full object-cover border border-border" />
                <div>
                  <h3 className="font-medium">Atlassian</h3>
                  <p className="text-sm text-muted-foreground">Content Design Intern • San Francisco, CA</p>
                </div>
              </div>
              <span className="text-xs text-muted-foreground">Jun 2025 — Sept 2025</span>
            </div>
            <ul className="mt-4 text-sm text-muted-foreground list-disc pl-5 space-y-2">
              <li>Updated UI copy and support docs for 8 Analytics charts to streamline admin tasks and align with new design guidance.</li>
              <li>Identified inconsistencies in 20 Admin spotlight messages, creating reusable patterns adopted in a cross-product refresh.</li>
              <li>Built an AI content-pattern checker agent tested on 23+ prompts and 8 users; scored 4.1/5 on average for accurate copy.</li>
            </ul>
          </article>

          {/* ServiceNow */}
          <article className="rounded-2xl border border-border p-6 md:p-7 transition-transform duration-200 will-change-transform hover:scale-[1.01]">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-4">
                <img src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/PNG image 5-1758067567935.png" alt="ServiceNow logo" className="size-10 rounded-full object-cover border border-border" />
                <div>
                  <h3 className="font-medium">ServiceNow</h3>
                  <p className="text-sm text-muted-foreground">Technical Writer Intern • Santa Clara, CA</p>
                </div>
              </div>
              <span className="text-xs text-muted-foreground">Jun 2024 — Sept 2024</span>
            </div>
            <ul className="mt-4 text-sm text-muted-foreground list-disc pl-5 space-y-2">
              <li>Reviewed and refined SAP S/4HANA framework to develop a master template standardizing 100+ integration docs.</li>
              <li>Resolved doc debt across 12+ GitHub import doc records to address customer feedback and improve content quality.</li>
              <li>Partnered with designers and PMs to write 2 UI tooltips, increasing clarity for customers navigating data import tasks.</li>
            </ul>
          </article>

          {/* Spotify Design Consultant */}
          <article className="rounded-2xl border border-border p-6 md:p-7 transition-transform duration-200 will-change-transform hover:scale-[1.01]">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-4">
                <img src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/PNG image 6-1758067564149.png" alt="Spotify logo" className="size-10 rounded-full object-cover border border-border" />
                <div>
                  <h3 className="font-medium">Spotify</h3>
                  <p className="text-sm text-muted-foreground">Design Consultant • Evanston, IL</p>
                </div>
              </div>
              <span className="text-xs text-muted-foreground">Mar 2025 — Jun 2025</span>
            </div>
            <ul className="mt-4 text-sm text-muted-foreground list-disc pl-5 space-y-2">
              <li>Led surveys, interviews, concept tests, capturing 80+ insights on student listening needs to inform conversion strategy.</li>
              <li>Prototyped and tested 3 feature updates to Student Plan discovery/upgrade flows with 18 users, driving 85% trial intent.</li>
              <li>Synthesized results into 15-page whitepaper for Spotify Sr. Product Manager and engineering, supporting new roadmap.</li>
            </ul>
          </article>
        </div>
      </section>

      {/* Straight divider between sections */}
      <div className="max-w-6xl mx-auto px-6"><div className="border-t border-border" /></div>

      {/* Education */}
      <section id="education" className="max-w-6xl mx-auto px-6 py-14 md:py-16">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-5">Education</h2>
        <div className="rounded-2xl border border-border p-6 md:p-7 !bg-white transition-transform duration-200 will-change-transform hover:scale-[1.01]">
          <div className="flex items-center gap-4">
            <img
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/2751f244-f34d-4be9-8032-7aab6d8b7a56/visual-edit-uploads/1758069395973-xla6bw8de3.png"
              alt="Northwestern University logo"
              className="size-10 rounded-full border border-border bg-white object-contain p-1" />

            <p className="text-sm md:text-base !opacity-[0.89] !whitespace-pre-line">Northwestern University, Medill School. B.S. in Journalism + Human-Computer Interaction & Design.</p>
          </div>
        </div>
      </section>

      {/* Straight divider between sections */}
      <div className="max-w-6xl mx-auto px-6"><div className="border-t border-border" /></div>

      {/* Skills */}
      <section id="skills" className="max-w-6xl mx-auto px-6 py-14 md:py-20">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-5 !whitespace-pre-line">Skills and tools</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
          "Content design",
          "Product strategy",
          "Information architecture",
          "Design system thinking",
          "User research",
          "AI-powered prototyping",
          "Figma, Framer",
          "Contentful/Oxygen, DITA/XML",
          "Python, R, HTML/CSS",
          "Adobe, Canva",
          "Jira, Confluence, Rovo",
          "Datawrapper, Flourish"].
          map((skill) =>
          <div key={skill} className="rounded-xl border border-border px-4 py-3 text-sm flex items-center justify-between transition-transform duration-200 will-change-transform hover:scale-[1.02]">
              <span className="!whitespace-pre-line !whitespace-pre-line !whitespace-pre-line !whitespace-pre-line !whitespace-pre-line !whitespace-pre-line !whitespace-pre-line">{skill}</span>
              <Sparkles className="size-4 text-muted-foreground" />
            </div>
          )}
        </div>
      </section>

      {/* Cursive divider before contact */}
      <div className="max-w-6xl mx-auto px-6 select-none" aria-hidden>
        <div className="py-8 md:py-12">
          <svg viewBox="0 0 1200 120" className="w-full h-20 md:h-24" fill="none">
            <path d="M0 60 C 150 20, 300 100, 450 60 S 750 20, 900 60 S 1050 100, 1200 60" stroke="currentColor" strokeOpacity="0.25" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
      </div>

      {/* Contact */}
      <section id="contact" className="max-w-6xl mx-auto px-6 py-14 md:py-20">
        <div className="rounded-2xl border border-border p-6 md:p-9 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 !w-full !h-full transition-transform duration-200 will-change-transform hover:scale-[1.01]">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight !whitespace-pre-line">Let's connect</h2>
            <p className="text-sm md:text-base text-muted-foreground mt-2 !whitespace-pre-line !whitespace-pre-line !whitespace-pre-line !w-full !h-[33px] !max-w-full">I'm exploring design roles at the intersection of content, product, and AI. I'd love to get in touch.

            </p>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <a href="mailto:jadewang2026@u.northwestern.edu" className="inline-flex items-center gap-2 rounded-full text-background px-5 py-2 text-sm font-medium !bg-zinc-800 !border-zinc-800 transition-transform duration-200 hover:scale-[1.02] hover:opacity-90">
                <Mail className="size-4" /> Email
              </a>
              <a href="https://www.linkedin.com/in/jade-wang26/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2 text-sm font-medium transition-all duration-200 hover:scale-[1.02] hover:bg-[#F2FCE2]">
                <Linkedin className="size-4" /> LinkedIn
              </a>
              <a href="#" className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2 text-sm font-medium transition-all duration-200 hover:scale-[1.02] hover:bg-[#F2FCE2]">
                <ExternalLink className="size-4" /> Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="max-w-6xl mx-auto px-6 py-8 text-sm text-muted-foreground flex items-center justify-between">
          <span>© {new Date().getFullYear()} Jade Wang</span>
          <a href="#home" className="inline-flex items-center gap-1 rounded px-2 py-1 transition hover:bg-[#F2FCE2]">Back to top <ArrowRight className="size-3 rotate-180" /></a>
        </div>
      </footer>
    </div>);

}