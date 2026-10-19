import { createFileRoute, Link } from "@tanstack/react-router";
import {
  GraduationCap,
  Briefcase,
  BarChart3,
  Users,
  ArrowRight,
  Flame,
  Sparkles,
  CalendarClock,
  Rocket,
} from "lucide-react";
import hero from "@/assets/hero.jpg";
import companies from "@/assets/companies.jpg";
import { Btn, Section, seo } from "@/components/site";

export const Route = createFileRoute("/")({
  head: () => seo("Hunt n Farm — Tech Sales Skills for Real-World Growth", "Live tech-sales training, career support, consulting for companies and AI for revenue."),
  component: Index,
});

const pillars = [
  { icon: GraduationCap, title: "Programs", text: "Live tech-sales training with real enterprise scenarios.", cta: "View Programs", to: "/programs" },
  { icon: Briefcase, title: "Placement & Careers", text: "Career preparation and hiring-partner interviews.", cta: "Learn More", to: "/placement" },
  { icon: BarChart3, title: "For Companies", text: "GTM strategy, pipeline development and sales training.", cta: "Explore Services", to: "/companies" },
  { icon: Users, title: "Revenue Lab", text: "Free workshops and practical sales insights.", cta: "Join a Workshop", to: "/revenue-lab" },
] as const;

const workshops = [
  { tag: "TODAY", time: "5:00 PM IST", title: "GHL IT Sales Workshop", to: "/revenue-lab" },
  { tag: "THIS WEEK", time: "Thu 7:00 PM IST", title: "IT Sales Placement Bootcamp", to: "/placement" },
  { tag: "THIS WEEK", time: "Sat 11:00 AM IST", title: "Enterprise Discovery Masterclass", to: "/revenue-lab" },
  { tag: "LIVE NOW", time: "Replay until 11 PM", title: "Pipeline Generation Sprint", to: "/revenue-lab" },
] as const;

function Index() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy text-navy-foreground">
        <img src={hero} alt="Professional overlooking a city skyline at sunset" width={1600} height={912} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="relative mx-auto flex min-h-[80vh] max-w-7xl flex-col px-6 py-24 md:py-36">
          <div className="flex-1">
            <p className="eyebrow mb-5">Building People. Revenue. Opportunities.</p>
            <h1 className="max-w-3xl text-5xl font-extrabold leading-[1.05] md:text-7xl">
              Tech Sales Skills <span className="text-gold">for Real-World Growth</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-navy-foreground/85">Training. Career Support. Consulting. AI for Revenue.</p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:flex-wrap">
              <Link to="/programs" className="inline-flex items-center justify-center gap-2 rounded-xl bg-gold px-7 py-4 text-base font-extrabold text-gold-foreground transition-transform hover:scale-[1.03]">
                Explore Programs <ArrowRight className="h-5 w-5" />
              </Link>
              <Link to="/companies" className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-navy-foreground/30 px-7 py-4 text-base font-bold text-navy-foreground transition-colors hover:border-gold hover:text-gold">
                For Companies <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Big poster-style workshop banner flowing at the bottom of the hero */}
          <div className="mt-12 overflow-hidden rounded-3xl border border-gold/40 bg-gradient-to-br from-gold/95 via-gold to-gold/90 shadow-[0_30px_80px_-20px_oklch(0.84_0.15_85/0.5)] md:mt-16">
            <div className="grid gap-0 md:grid-cols-[1.4fr_1fr]">
              {/* Left: headline + CTA */}
              <div className="flex flex-col justify-center gap-5 p-7 md:p-10">
                <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.2em] text-gold-foreground/80">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-foreground/70" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-gold-foreground" />
                  </span>
                  Live today · Limited offer period
                </div>
                <h2 className="font-display text-3xl font-extrabold leading-tight text-gold-foreground md:text-4xl">
                  Join Today's Free GHL IT Sales Workshop
                </h2>
                <p className="max-w-md text-sm font-semibold text-gold-foreground/80 md:text-base">
                  Live at 5:00 PM IST. Real enterprise scenarios, placement-ready tactics, and a replay until 11 PM. Seats close tonight.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Link
                    to="/revenue-lab"
                    className="glow-gold inline-flex items-center justify-center gap-2 rounded-xl bg-navy px-6 py-3.5 text-sm font-extrabold text-navy-foreground transition-transform hover:scale-[1.03]"
                  >
                    <Rocket className="h-5 w-5 text-gold" />
                    Reserve Your Free Seat
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                  <Link
                    to="/placement"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-navy bg-navy/5 px-6 py-3.5 text-sm font-bold text-navy transition-colors hover:bg-navy hover:text-navy-foreground"
                  >
                    IT Sales Placement Workshop
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* Right: flowing workshop marquee */}
              <div className="border-t border-gold-foreground/15 bg-navy p-7 md:border-l md:border-t-0 md:p-8">
                <div className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-navy-foreground/70">
                  <Sparkles className="h-4 w-4 text-gold" />
                  Live &amp; upcoming workshops
                </div>
                <div className="space-y-3">
                  {workshops.map((w) => (
                    <Link
                      key={w.title}
                      to={w.to}
                      className="group flex items-center gap-3 rounded-xl border border-navy-foreground/10 bg-navy-foreground/5 px-4 py-3 transition-colors hover:border-gold hover:bg-navy-foreground/10"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gold text-gold-foreground">
                        <CalendarClock className="h-4 w-4" />
                      </span>
                      <span className="flex flex-1 flex-col">
                        <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gold">
                          <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-gold" />
                          {w.tag} · {w.time}
                        </span>
                        <span className="text-sm font-bold text-navy-foreground">{w.title}</span>
                      </span>
                      <ArrowRight className="h-4 w-4 text-gold transition-transform group-hover:translate-x-1" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Flowing marquee strip across the bottom of the poster */}
            <div className="border-t border-gold-foreground/15 bg-navy py-3">
              <div className="marquee-pause relative w-full overflow-hidden">
                <div className="marquee-track marquee flex w-max items-center gap-8 px-4 text-sm font-bold uppercase tracking-wider text-gold-foreground/90">
                  {[...Array(2)].map((_, dup) =>
                    [
                      "Today's GHL IT Sales Workshop",
                      "IT Sales Placement Bootcamp",
                      "Enterprise Discovery Masterclass",
                      "Pipeline Generation Sprint",
                      "Free for a limited period",
                      "Seats close tonight",
                    ].map((t, i) => (
                      <span key={`${dup}-${i}`} className="flex items-center gap-3 whitespace-nowrap">
                        <Flame className="h-4 w-4 text-navy" />
                        {t}
                      </span>
                    )),
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b bg-card">
        <div className="mx-auto grid max-w-7xl gap-px md:grid-cols-4">
          {pillars.map((p) => (
            <div key={p.title} className="p-8">
              <p.icon className="h-8 w-8 text-navy" />
              <h3 className="mt-5 text-lg font-bold text-navy">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.text}</p>
              <Link to={p.to} className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-navy hover:text-gold">{p.cta} <ArrowRight className="h-4 w-4" /></Link>
            </div>
          ))}
        </div>
      </section>

      <Section title="Featured Program">
        <div className="grid overflow-hidden rounded-2xl bg-navy text-navy-foreground shadow-soft md:grid-cols-2">
          <div className="p-10 md:p-14">
            <p className="eyebrow">First Quota</p>
            <h3 className="mt-3 text-3xl font-bold">Tech Sales Upskilling Cohort</h3>
            <p className="mt-4 text-navy-foreground/80">6 weeks · Live online · For working professionals</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Btn to="/apply">Apply Now</Btn>
              <Btn to="/programs/first-quota" variant="outline">View Details</Btn>
            </div>
          </div>
          <img src={companies} alt="Sales training session" loading="lazy" width={1200} height={912} className="h-full min-h-64 w-full object-cover" />
        </div>
      </Section>
    </>
  );
}
