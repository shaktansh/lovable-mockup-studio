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

function WorkshopMarquee() {
  const items = [...workshops, ...workshops];
  return (
    <div className="marquee-pause relative w-full overflow-hidden">
      <div className="marquee-track marquee flex w-max gap-3">
        {items.map((w, i) => (
          <Link
            key={`${w.title}-${i}`}
            to={w.to}
            className="group flex shrink-0 items-center gap-3 rounded-xl border border-gold/40 bg-navy-foreground/5 px-4 py-3 backdrop-blur transition-colors hover:border-gold hover:bg-navy-foreground/10"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gold text-gold-foreground">
              <CalendarClock className="h-4 w-4" />
            </span>
            <span className="flex flex-col">
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
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-navy to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-navy to-transparent" />
    </div>
  );
}

function Index() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy text-navy-foreground">
        <img src={hero} alt="Professional overlooking a city skyline at sunset" width={1600} height={912} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-36">
          <p className="eyebrow mb-5">Building People. Revenue. Opportunities.</p>
          <h1 className="max-w-3xl text-5xl font-extrabold leading-[1.05] md:text-7xl">
            Tech Sales Skills <span className="text-gold">for Real-World Growth</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-navy-foreground/85">Training. Career Support. Consulting. AI for Revenue.</p>

          {/* Prominent glowing primary CTA + secondary */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:flex-wrap">
            <Link
              to="/revenue-lab"
              className="glow-gold inline-flex items-center justify-center gap-2 rounded-xl bg-gold px-7 py-4 text-base font-extrabold text-gold-foreground transition-transform hover:scale-[1.03]"
            >
              <Rocket className="h-5 w-5" />
              Join Today's Free GHL Workshop
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              to="/placement"
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-navy-foreground/30 px-7 py-4 text-base font-bold text-navy-foreground transition-colors hover:border-gold hover:text-gold"
            >
              IT Sales Placement Workshop
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>

          {/* Urgency strip */}
          <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-gold">
            <Flame className="h-3.5 w-3.5" />
            Limited offer period — seats close tonight
          </div>

          {/* Moving workshop slideshow */}
          <div className="mt-12">
            <div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-navy-foreground/70">
              <Sparkles className="h-4 w-4 text-gold" />
              Live &amp; upcoming workshops
            </div>
            <WorkshopMarquee />
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
