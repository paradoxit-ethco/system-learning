import { ArrowRight, Menu, Play, Sparkle, X } from "lucide-react";
import { useState } from "react";

/**
 * Quiet Precision: luxury editorial data-platform landing page.
 * Use bone-white whitespace, graphite anchors, Ledger Jade #20B49C, and an asymmetric hero.
 */
const navItems = ["Product", "Solutions", "Pricing", "Story", "Notes"];

function Mark() {
  return (
    <span className="grid h-9 w-9 place-items-center overflow-hidden rounded-[11px] bg-[#17202B] shadow-[0_5px_12px_rgba(23,32,43,0.14)]" aria-hidden="true">
      <img src="/assets/luxury-dataflow-logo.png" alt="" className="h-full w-full object-cover" />
    </span>
  );
}

function Metric({ label, value, note, className }: { label: string; value: string; note: string; className: string }) {
  return (
    <aside className={`metric-card absolute z-20 rounded-xl px-4 py-3 ${className}`}>
      <p className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#7E857E]">{label}</p>
      <p className="display-font mt-0.5 text-xl font-bold leading-none text-[#20B49C]">{value}</p>
      <p className="mt-1 text-[8px] font-medium text-[#66706B]">{note}</p>
    </aside>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-hidden bg-[#FBFAF6] text-[#17202B]">
      <div className="pointer-events-none fixed inset-0 z-0 opacity-[0.035] grain" />
      <header className="relative z-30 mx-auto flex max-w-[1420px] items-center justify-between px-5 py-5 md:px-10 lg:px-14 lg:py-7">
        <a href="#top" className="flex items-center gap-2.5" aria-label="Nexora home">
          <Mark />
          <span className="display-font text-[19px] font-bold tracking-[-0.07em]">nexora</span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
          {navItems.map((item) => <a key={item} href={`#${item.toLowerCase()}`} className="nav-link text-[11px] font-bold tracking-[-0.015em] text-[#606862]">{item}</a>)}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a href="#signin" className="text-[11px] font-bold text-[#454D48]">Sign in</a>
          <a href="#contact" className="button-graphite rounded-lg px-4 py-2.5 text-[10px] font-bold tracking-[0.01em]">Get started</a>
        </div>

        <button type="button" className="grid h-10 w-10 place-items-center rounded-lg bg-[#17202B] text-white lg:hidden" onClick={() => setMenuOpen((value) => !value)} aria-label="Toggle menu" aria-expanded={menuOpen}>
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
        {menuOpen && <nav className="absolute right-5 top-[70px] flex w-48 flex-col rounded-xl border border-[#E7E5DD] bg-[#FBFAF6] p-3 shadow-xl lg:hidden" aria-label="Mobile navigation">
          {navItems.map((item) => <a onClick={() => setMenuOpen(false)} key={item} href={`#${item.toLowerCase()}`} className="rounded-lg px-3 py-2.5 text-sm font-bold hover:bg-[#EEF5F2]">{item}</a>)}
        </nav>}
      </header>

      <main id="top" className="relative z-10">
        <section id="product" className="mx-auto grid min-h-[calc(100vh-88px)] max-w-[1420px] grid-cols-1 items-center px-5 pb-16 pt-6 md:px-10 lg:grid-cols-[0.87fr_1.13fr] lg:px-14 lg:pb-20 lg:pt-8">
          <div className="relative z-20 max-w-[520px] lg:pb-12">
            <div className="reveal-one inline-flex items-center gap-2 rounded-full border border-[#D7EAE5] bg-[#F0F8F5] px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.14em] text-[#278A7A]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#20B49C]" /> Infrastructure, in balance
            </div>
            <h1 className="display-font reveal-two mt-6 text-[clamp(3.15rem,6vw,6.25rem)] font-bold leading-[0.88] tracking-[-0.075em] text-[#17202B]">
              Build your data <span className="relative inline-block text-[#20B49C]"><span className="relative z-10">architecture</span><span className="absolute inset-x-0 bottom-[6%] z-0 h-[10%] bg-[#D9F0E9]" /></span> with intent.
            </h1>
            <p className="reveal-three mt-7 max-w-[380px] text-[14px] font-medium leading-[1.75] tracking-[-0.02em] text-[#6A716C]">
              One calm place to model, govern, and move the systems that keep your business in motion.
            </p>
            <div className="reveal-three mt-8 flex flex-wrap items-center gap-5">
              <a href="#contact" className="button-graphite inline-flex items-center gap-2 rounded-lg px-5 py-3.5 text-[11px] font-bold">Start building <ArrowRight size={14} strokeWidth={2.5} /></a>
              <a href="#story" className="button-plain inline-flex items-center gap-2 text-[11px] font-bold text-[#525A55]"><span className="grid h-7 w-7 place-items-center rounded-full border border-[#DADCD5]"><Play size={10} fill="currentColor" /></span> Watch the film</a>
            </div>
            <div className="mt-12 flex items-center gap-4 border-t border-[#E5E3DC] pt-5">
              <div className="flex -space-x-2">
                <span className="h-7 w-7 rounded-full border-2 border-[#FBFAF6] bg-[#20B49C]" /><span className="h-7 w-7 rounded-full border-2 border-[#FBFAF6] bg-[#E97D76]" /><span className="h-7 w-7 rounded-full border-2 border-[#FBFAF6] bg-[#17202B]" />
              </div>
              <p className="text-[10px] font-semibold leading-4 text-[#737A75]">Designed for operators who expect<br />clarity at every scale.</p>
            </div>
          </div>

          <div className="relative mt-12 min-h-[420px] lg:mt-0 lg:min-h-[610px]">
            <div className="absolute right-[4%] top-[4%] h-[86%] w-[86%] rounded-full bg-[#F1F4EC]" />
            <div className="hero-rule absolute left-[12%] right-[4%] top-1/2 h-px" />
            <Metric className="left-[1%] top-[20%]" label="Flow health" value="99.98%" note="all systems nominal" />
            <Metric className="bottom-[15%] right-[3%]" label="Response" value="48 ms" note="across every region" />
            <Metric className="right-[22%] top-[7%]" label="Signal volume" value="2.4M" note="events received today" />
            <div className="hero-float absolute inset-x-[3%] bottom-[4%] top-[10%] z-10 flex items-center justify-center">
              <img src="/assets/luxury-dataflow-hero.png" alt="A sculptural arrangement of modular data objects" className="h-full w-full object-contain mix-blend-multiply" />
            </div>
            <div className="absolute bottom-[6%] left-[15%] flex items-center gap-2 rounded-full border border-[#E2E3DC] bg-[#FBFAF6]/80 px-3 py-2 text-[9px] font-bold text-[#4F5853] shadow-sm backdrop-blur"><Sparkle size={12} className="text-[#20B49C]" /> One view, every layer</div>
          </div>
        </section>

        <section id="solutions" className="mx-auto max-w-[1420px] px-5 pb-20 md:px-10 lg:px-14">
          <div className="luxury-panel grid overflow-hidden rounded-[28px] bg-[#17202B] md:grid-cols-[1.1fr_.9fr]">
            <div className="relative p-8 md:p-12 lg:p-16">
              <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#76CABA]">A different kind of control room</p>
              <h2 className="display-font mt-5 max-w-[530px] text-4xl font-bold leading-[0.95] tracking-[-0.06em] text-[#F9FAF6] md:text-5xl">The details are complex. Your point of view shouldn’t be.</h2>
              <a href="#story" className="mt-9 inline-flex items-center gap-2 text-[11px] font-bold text-[#CDEBE4]">Explore the system <ArrowRight size={14} /></a>
              <div className="absolute bottom-0 left-0 h-1 w-36 bg-[#20B49C]" />
            </div>
            <div className="relative min-h-[310px] overflow-hidden bg-[#E6E3D9]">
              <img src="/assets/luxury-dataflow-editorial.png" alt="Luxury abstract data core sculpture" className="absolute inset-0 h-full w-full object-cover" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
