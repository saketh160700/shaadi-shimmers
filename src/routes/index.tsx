import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import hero from "@/assets/hero-mandala.jpg";
import ganesha from "@/assets/ganesha.png";
import saveTheDate from "@/assets/save-the-date.png";
import coupleIllustration from "@/assets/couple-illustration.png";
import coupleBW from "@/assets/couple-bw.jpeg";
import coupleStage from "@/assets/couple-stage1.jpeg";
import coupleSofa from "@/assets/couple-sofa.jpeg";
import couplePortrait from "@/assets/couple-portrait.jpeg";
import coupleGarland from "@/assets/couple-garland.jpeg";
import bride from "@/assets/bride.jpeg";
import groom from "@/assets/groom.jpeg";
import { Petals } from "@/components/Petals";
import { Countdown } from "@/components/Countdown";
import { InvitationLetter } from "@/components/InvitationLetter";
import { VideoPlayer } from "@/components/VideoPlayer";
import { Blessings } from "@/components/Blessings";
import { MapPin, Calendar, Music, Utensils, Flower2 } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vani Priyadarshini weds Sai Kumar — Wedding Invitation" },
      { name: "description", content: "Join us in celebrating the traditional Indian wedding of Vani Priyadarshini & Sai Kumar — 09 May 2026, Hyderabad. Send your blessings." },
      { property: "og:title", content: "Vani Priyadarshini weds Sai Kumar — Wedding Invitation" },
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

      {/* HERO - Save the Date illustration */}
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
            className="mx-auto h-20 md:h-28 animate-diya"
            style={{ width: "auto" }}
          />
          <p className="mt-3 text-accent tracking-[0.5em] text-xs md:text-sm uppercase">
            Shubh Vivah · శుభ వివాహం
          </p>
          <h1 className="mt-4 font-script text-5xl md:text-8xl text-gold-shimmer leading-none">
            Vani Priyadarshini
          </h1>
          <p className="my-2 font-display text-2xl md:text-4xl text-accent">&amp;</p>
          <h1 className="font-script text-5xl md:text-8xl text-gold-shimmer leading-none">
            Sai Kumar
          </h1>
          <p className="mt-6 max-w-xl mx-auto text-base md:text-lg text-secondary italic font-body">
            Two souls, one sacred journey — bound by love, blessed by tradition.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-secondary">
            <span className="flex items-center gap-2"><Calendar className="h-4 w-4 text-accent" /> 09 May 2026 · 08:15 AM</span>
            <span className="flex items-center gap-2"><MapPin className="h-4 w-4 text-accent" /> Hyderabad</span>
          </div>
          <a
            href="#invitation"
            className="mt-8 inline-block rounded-full bg-gold px-8 py-3 font-display text-primary uppercase tracking-widest text-sm shadow-gold hover:scale-105 transition-transform"
          >
            View Invitation
          </a>
        </div>
      </header>

      {/* SAVE THE DATE banner illustration */}
      <Section className="bg-gradient-to-b from-background via-secondary/20 to-background">
        <div className="mx-auto max-w-5xl ornate-border overflow-hidden shadow-royal animate-fade-up">
          <img
            src={saveTheDate}
            alt="Save the Date — Wedding Invitation of Vani Priyadarshini & Sai Kumar"
            className="w-full h-auto block"
            loading="lazy"
          />
        </div>
      </Section>

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
            <img src={coupleIllustration} alt="The couple illustration" className="w-full h-[500px] object-contain bg-gradient-to-br from-secondary/40 to-accent/20" loading="lazy" />
          </div>
          <div className="space-y-6 animate-fade-up">
            <p className="text-lg italic text-foreground/80 leading-relaxed">
              From cherished moments shared with family to vows beneath a marigold mandap —
              our story is one written in the stars, woven with the threads of family, faith, and forever.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 rounded-lg bg-card border border-accent/30">
                <h4 className="font-script text-3xl text-primary">Vani Priyadarshini</h4>
                <p className="text-sm text-muted-foreground mt-2">D/o<br />Smt. Dontha Varalakshmi<br />Sri Dontha Satyanarayana</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-card border border-accent/30">
                <h4 className="font-script text-3xl text-primary">Sai Kumar</h4>
                <p className="text-sm text-muted-foreground mt-2">Only S/o<br />Smt. Jella Jayalakshmi<br />Sri Jitesh</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* B&W parallax background section - "Forever begins" */}
      <section
        className="relative min-h-[70vh] flex items-center justify-center text-center px-4"
        style={{
          backgroundImage: `linear-gradient(rgba(40,10,10,0.55), rgba(40,10,10,0.75)), url(${coupleBW})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="relative z-10 max-w-3xl animate-fade-up">
          <p className="uppercase tracking-[0.4em] text-accent text-xs md:text-sm">Together, Forever</p>
          <h2 className="mt-4 font-script text-5xl md:text-7xl text-gold-shimmer leading-tight">
            Where Two Souls Meet
          </h2>
          <div className="divider-ornate mt-4 max-w-xs mx-auto text-accent">❀</div>
          <p className="mt-6 text-lg md:text-xl italic text-secondary">
            "Love is not just a feeling — it is a sacred bond, blessed by the divine,
            celebrated by family, and cherished for a lifetime."
          </p>
        </div>
      </section>

      {/* BRIDE & GROOM portraits */}
      <Section>
        <SectionTitle kicker="The Bride & The Groom" title="Meet the Couple" />
        <div className="grid md:grid-cols-2 gap-10">
          <div className="text-center">
            <div className="ornate-border overflow-hidden shadow-royal hover:scale-[1.02] transition-transform">
              <img src={bride} alt="The Bride - Vani Priyadarshini" className="w-full h-[520px] object-cover" loading="lazy" />
            </div>
            <h3 className="mt-6 font-script text-4xl text-primary">Vani Priyadarshini</h3>
            <p className="text-accent uppercase tracking-[0.3em] text-xs mt-2">The Bride</p>
          </div>
          <div className="text-center">
            <div className="ornate-border overflow-hidden shadow-royal hover:scale-[1.02] transition-transform">
              <img src={groom} alt="The Groom - Sai Kumar" className="w-full h-[520px] object-cover object-top" loading="lazy" />
            </div>
            <h3 className="mt-6 font-script text-4xl text-primary">Sai Kumar</h3>
            <p className="text-accent uppercase tracking-[0.3em] text-xs mt-2">The Groom</p>
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

      {/* GALLERY */}
      <Section className="bg-gradient-to-b from-background to-secondary/30">
        <SectionTitle kicker="Cherished Moments" title="Our Gallery" />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[coupleStage, coupleGarland, couplePortrait, coupleSofa, coupleBW, coupleIllustration].map((src, i) => (
            <div key={i} className="ornate-border overflow-hidden shadow-gold hover:scale-[1.03] transition-transform">
              <img src={src} alt={`Wedding moment ${i + 1}`} className="w-full h-64 object-cover" loading="lazy" />
            </div>
          ))}
        </div>
      </Section>

      {/* EVENTS */}
      <Section className="bg-gradient-to-b from-secondary/30 to-background">
        <SectionTitle kicker="The Celebrations" title="Wedding Festivities" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Flower2, name: "Haldi", date: "07 May · 10 AM", desc: "A golden ceremony of love" },
            { icon: Music, name: "Sangeet", date: "07 May · 7 PM", desc: "An evening of music & dance" },
            { icon: Utensils, name: "Mehendi", date: "08 May · 11 AM", desc: "Henna, laughter & sisterhood" },
            { icon: Calendar, name: "Vivah", date: "09 May · 8:15 AM", desc: "The sacred wedding vows" },
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
        <SectionTitle kicker="Aashirwad · ఆశీర్వాదం" title="Bless the Couple" />
        <Blessings />
      </Section>

      {/* FOOTER with B&W background */}
      <footer
        className="relative px-4 py-20 text-center text-secondary"
        style={{
          backgroundImage: `linear-gradient(rgba(20,5,5,0.85), rgba(20,5,5,0.95)), url(${coupleBW})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <img src={ganesha} alt="" className="mx-auto h-16 animate-diya" style={{ width: "auto" }} />
        <p className="mt-4 font-script text-4xl text-gold-shimmer">Vani &amp; Sai</p>
        <p className="mt-2 italic text-accent/90">"Together, forever, by the grace of the Divine"</p>
        <p className="mt-6 text-xs uppercase tracking-[0.4em] text-secondary/60">
          With love · 09.05.2026 · Hyderabad
        </p>
      </footer>
    </div>
  );
}
