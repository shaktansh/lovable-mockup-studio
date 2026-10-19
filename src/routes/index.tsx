import { createFileRoute, Link } from "@tanstack/react-router";
import { GraduationCap, Briefcase, BarChart3, Users, ArrowRight, Flame, CalendarClock } from "lucide-react";
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

function Index() {
  return (
    <>
      {/* Limited-time offer banner for today's GHL workshop */}
      <div className="bg-gold text-gold-foreground">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-2 px-6 py-2.5 text-center text-sm font-semibold">
          <Flame className="h-4 w-4" />
          <span>Today only: Free GHL IT Sales Workshop — Limited offer period, closes tonight!</span>
          <Link to="/revenue-lab" className="inline-flex items-center gap-1 rounded-md bg-navy px-3 py-1 text-xs font-bold text-navy-foreground hover:brightness-110">
            Reserve your seat <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
      </div>

      <section className="relative overflow-hidden bg-navy text-navy-foreground">
        <img src={hero} alt="Professional overlooking a city skyline at sunset" width={1600} height={912} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="relative mx-auto max-w-7xl px-6 py-28 md:py-36">
          <p className="eyebrow mb-5">Building People. Revenue. Opportunities.</p>
          <h1 className="max-w-3xl text-5xl font-extrabold leading-[1.05] md:text-7xl">
            Tech Sales Skills <span className="text-gold">for Real-World Growth</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-navy-foreground/85">Training. Career Support. Consulting. AI for Revenue.</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Btn to="/programs">Explore Programs</Btn>
            <Btn to="/companies" variant="outline">For Companies</Btn>
          </div>

          {/* Workshop CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link to="/revenue-lab" className="inline-flex items-center gap-2 rounded-md border border-gold/60 bg-gold/10 px-4 py-2.5 text-sm font-bold text-gold backdrop-blur hover:bg-gold/20">
              <CalendarClock className="h-4 w-4" /> Join Today's GHL Workshop
            </Link>
            <Link to="/placement" className="inline-flex items-center gap-2 rounded-md border border-navy-foreground/40 px-4 py-2.5 text-sm font-bold text-navy-foreground/90 hover:bg-navy-foreground/10">
              IT Sales Placement Workshop <ArrowRight className="h-4 w-4" />
            </Link>
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
