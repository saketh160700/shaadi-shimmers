import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import hero from "@/assets/hero-mandala.jpg";
import couple from "@/assets/couple.jpg";
import ganesha from "@/assets/ganesha.png";
import { Petals } from "@/components/Petals";
import { Countdown } from "@/components/Countdown";
import { InvitationLetter } from "@/components/InvitationLetter";
import { VideoPlayer } from "@/components/VideoPlayer";
import { Blessings } from "@/components/Blessings";
import { MapPin, Calendar, Music, Utensils, Flower2 } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aarav weds Priya — A Royal Indian Wedding Invitation" },
      { name: "description", content: "Join us in celebrating the traditional Indian wedding of Aarav & Priya — 15 December 2026, Udaipur. RSVP, watch our story, send your blessings." },
      { property: "og:title", content: "Aarav weds Priya — Wedding Invitation" },
      { property: "og:description", content: "A traditional Indian wedding celebration. Your blessings mean the world to us." },
    ],
  }),
  component: Index,
});

function Section({ id, children, className = "" }: { id?: string; children: React.ReactNode; className?: string }) {
  return (
    <section id={id} className={`relative px-4 py-20 md:py-28 ${className}`}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

function SectionTitle({ kicker, title }: { kicker?: string; title: string }) {
  return (
    <div className="text-center mb-12 md:mb-16 animate-fade-up">
      {kicker && <p className="uppercase tracking-[0.4em] text-accent text-xs md:text-sm">{kicker}</p>}
      <h2 className="mt-3 text-4xl md:text-6xl text-primary font-display">{title}</h2>
      <div className="divider-ornate mt-4 max-w-xs mx-auto">❀</div>
    </div>
  );
}

function Index() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Toaster richColors position="top-center" />
      <Petals />

      {/* HERO */}
      <header
        className="relative min-h-screen flex flex-col items-center justify-center text-center px-4"
        style={{
          backgroundImage: `linear-gradient(rgba(40,10,10,0.55), rgba(40,10,10,0.7)), url(${hero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.6))] pointer-events-none" />
        <div className="relative z-20 animate-fade-up">
          <img
            src={ganesha}
            alt="Lord Ganesha"
            className="mx-auto h-24 md:h-32 animate-diya"
            width={768}
            height={768}
            style={{ width: "auto" }}
          />
          <p className="mt-4 text-accent tracking-[0.5em] text-xs md:text-sm uppercase">
            Shubh Vivah · शुभ विवाह
          </p>
          <h1 className="mt-6 font-script text-6xl md:text-9xl text-gold-shimmer leading-none">
            Aarav <span className="font-display text-3xl md:text-5xl text-accent">&</span> Priya
          </h1>
          <p className="mt-6 max-w-xl mx-auto text-lg md:text-xl text-secondary italic font-body">
            Two souls, one sacred journey — bound by love, blessed by tradition.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-secondary">
            <span className="flex items-center gap-2"><Calendar className="h-4 w-4 text-accent" /> 15 Dec 2026</span>
            <span className="flex items-center gap-2"><MapPin className="h-4 w-4 text-accent" /> Udaipur, India</span>
          </div>
          <a
            href="#invitation"
            className="mt-10 inline-block rounded-full bg-gold px-8 py-3 font-display text-primary uppercase tracking-widest text-sm shadow-gold hover:scale-105 transition-transform"
          >
            View Invitation
          </a>
        </div>

        {/* corner mandalas */}
        <div className="absolute top-4 left-4 h-20 w-20 md:h-32 md:w-32 opacity-60 animate-spin-slow">
          <img src={ganesha} alt="" className="h-full w-full" />
        </div>
        <div className="absolute bottom-4 right-4 h-20 w-20 md:h-32 md:w-32 opacity-60 animate-spin-slow">
          <img src={ganesha} alt="" className="h-full w-full" />
        </div>
      </header>

      {/* COUNTDOWN */}
      <Section className="bg-gradient-to-b from-background to-secondary/30">
        <SectionTitle kicker="Counting Every Moment" title="The Big Day Awaits" />
        <Countdown />
      </Section>

      {/* COUPLE STORY */}
      <Section>
        <SectionTitle kicker="Our Story" title="Two Hearts, One Soul" />
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="ornate-border overflow-hidden shadow-royal hover:scale-[1.02] transition-transform">
            <img src={couple} alt="The couple" className="w-full h-[500px] object-cover" loading="lazy" width={1280} height={1600} />
          </div>
          <div className="space-y-6 animate-fade-up">
            <p className="text-lg italic text-foreground/80 leading-relaxed">
              From a chance meeting in the bustling streets of Jaipur to vows beneath a marigold mandap —
              our story is one written in the stars, woven with the threads of family, faith, and forever.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 rounded-lg bg-card border border-accent/30">
                <h4 className="font-script text-3xl text-primary">Aarav</h4>
                <p className="text-sm text-muted-foreground mt-1">Son of<br />Mr. & Mrs. Sharma</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-card border border-accent/30">
                <h4 className="font-script text-3xl text-primary">Priya</h4>
                <p className="text-sm text-muted-foreground mt-1">Daughter of<br />Mr. & Mrs. Verma</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* INVITATION LETTER */}
      <Section id="invitation" className="bg-gradient-to-b from-secondary/30 to-background">
        <SectionTitle kicker="The Royal Decree" title="An Ancient Invitation" />
        <InvitationLetter />
      </Section>

      {/* VIDEO */}
      <Section>
        <SectionTitle kicker="Watch Our Story" title="Wedding Invitation Film" />
        <VideoPlayer />
      </Section>

      {/* EVENTS */}
      <Section className="bg-gradient-to-b from-background to-secondary/30">
        <SectionTitle kicker="The Celebrations" title="Wedding Festivities" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Flower2, name: "Haldi", date: "13 Dec · 10 AM", desc: "A golden ceremony of love" },
            { icon: Music, name: "Sangeet", date: "13 Dec · 7 PM", desc: "An evening of music & dance" },
            { icon: Utensils, name: "Mehendi", date: "14 Dec · 11 AM", desc: "Henna, laughter & sisterhood" },
            { icon: Calendar, name: "Vivah", date: "15 Dec · 7 PM", desc: "The sacred wedding vows" },
          ].map((e) => (
            <div
              key={e.name}
              className="ornate-border bg-card/80 backdrop-blur p-6 text-center hover:shadow-gold transition-all hover:-translate-y-1"
            >
              <e.icon className="mx-auto h-10 w-10 text-accent" />
              <h4 className="mt-3 text-2xl font-display text-primary">{e.name}</h4>
              <p className="text-sm text-muted-foreground mt-1">{e.date}</p>
              <p className="text-sm italic mt-2">{e.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* BLESSINGS */}
      <Section id="blessings">
        <SectionTitle kicker="Aashirwad · आशीर्वाद" title="Bless the Couple" />
        <Blessings />
      </Section>

      {/* FOOTER */}
      <footer
        className="relative px-4 py-16 text-center text-secondary"
        style={{
          backgroundImage: `linear-gradient(rgba(40,10,10,0.85), rgba(40,10,10,0.95)), url(${hero})`,
          backgroundSize: "cover",
        }}
      >
        <img src={ganesha} alt="" className="mx-auto h-16 animate-diya" style={{ width: "auto" }} />
        <p className="mt-4 font-script text-4xl text-gold-shimmer">Aarav & Priya</p>
        <p className="mt-2 italic text-accent/90">"Together, forever, by the grace of the Divine"</p>
        <p className="mt-6 text-xs uppercase tracking-[0.4em] text-secondary/60">
          With love · 15.12.2026 · Udaipur
        </p>
      </footer>
    </div>
  );
}
