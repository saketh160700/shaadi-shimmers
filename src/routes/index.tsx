import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import coupleBw from "@/assets/couple-bw.jpeg";
import ganesha from "@/assets/ganesha.png";
import bride from "@/assets/bride.jpeg";
import groom from "@/assets/groom.jpeg";
import couplePortrait from "@/assets/couple-portrait.jpeg";
import coupleSofa from "@/assets/couple-sofa.jpeg";
import coupleStage from "@/assets/couple-stage1.jpeg";
import coupleGarland from "@/assets/couple-garland.jpeg";
import bridesFamily from "@/assets/brides-family.jpeg";
import bridesParents from "@/assets/brides-parents.jpeg";
import { Petals } from "@/components/Petals";
import { Countdown } from "@/components/Countdown";
import { InvitationLetter } from "@/components/InvitationLetter";
import { InvitationSoundtrack } from "@/components/InvitationSoundtrack";
import { SiteLinksNav } from "@/components/SiteLinksNav";
import { TraditionalWeddingHeader } from "@/components/TraditionalWeddingHeader";
import { VideoPlayer } from "@/components/VideoPlayer";
import { Blessings } from "@/components/Blessings";
import { MapPin, Calendar, Music, Utensils, Flower2, Navigation, ExternalLink, Heart } from "lucide-react";
import { VENUE_NAME, VENUE_LINES, MAPS_PLACE_URL } from "@/components/InvitationLetter";

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
    <div className="relative min-h-screen overflow-x-hidden">
      <Toaster richColors position="top-center" />
      <Petals />
      <SiteLinksNav />
      <InvitationSoundtrack />

      {/* HERO — traditional ornamental header + couple names (links only in SiteLinksNav) */}
      <header
        className="relative flex min-h-[100dvh] min-h-screen flex-col px-4 pb-28 pt-[max(0.75rem,env(safe-area-inset-top))] sm:px-6 sm:pb-24 md:pb-20"
        style={{
          backgroundImage: `linear-gradient(rgba(40,10,10,0.58), rgba(40,10,10,0.72)), url(${coupleBw})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "scroll",
        }}
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_28%,rgba(0,0,0,0.55))]" />
        <div className="relative z-20 mx-auto flex w-full max-w-4xl flex-1 flex-col animate-fade-up px-1 sm:px-3">
          <div className="shrink-0 pt-2 sm:pt-3">
            <TraditionalWeddingHeader />
          </div>
          <div className="flex flex-1 flex-col items-center justify-center py-6 text-center text-white sm:py-8">
            <img
              src={ganesha}
              alt="Lord Ganesha"
              className="mx-auto h-14 w-auto max-h-[16vh] animate-diya sm:h-20 md:h-24"
            />
            <div className="mt-5 flex max-w-lg flex-col items-center gap-3 px-2 sm:mt-6 sm:gap-4">
              <p className="text-[11px] font-display uppercase tracking-[0.42em] text-secondary/90 sm:text-xs sm:tracking-[0.48em]">
                Shubh Vivah
              </p>
              <h1
                className="hero-script-name max-w-[20ch] text-[clamp(2rem,7vw,3.5rem)] leading-tight text-white sm:max-w-none sm:text-[clamp(2.25rem,5.5vw,4rem)] md:text-5xl lg:text-6xl"
              >
                Vani Priyadarshini
              </h1>
              <p className="font-display text-xl font-light text-secondary/90 sm:text-2xl md:text-3xl">
                {"&"}
              </p>
              <h2
                className="hero-script-name max-w-[16ch] text-[clamp(2rem,7vw,3.5rem)] leading-tight text-balance text-white drop-shadow-[0_2px_14px_rgba(0,0,0,0.65)] sm:max-w-none sm:text-[clamp(2.25rem,5.5vw,4rem)] md:text-5xl lg:text-6xl"
                style={{ textShadow: "0 2px 20px rgba(0,0,0,0.45)" }}
              >
                Sai Kumar
              </h2>
              <p className="max-w-md pt-1 text-sm italic leading-relaxed text-white/88 drop-shadow-md font-body sm:text-base md:text-lg">
                Two souls, one sacred journey — bound by love, blessed by tradition.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 pt-1 text-sm text-secondary/90 sm:text-base">
                <span className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 shrink-0 text-secondary/75" aria-hidden />
                  09 May 2026 · 08:15 AM
                </span>
                <span className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 shrink-0 text-secondary/75" aria-hidden />
                  Hyderabad
                </span>
              </div>
            </div>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3 sm:mt-8 sm:gap-4">
              <a
                href="#film"
                className="inline-block rounded-full bg-gold px-7 py-3 font-display text-primary uppercase tracking-widest text-sm shadow-gold transition-transform hover:scale-105"
              >
                Watch invitation film
              </a>
              <a
                href="#invitation"
                className="inline-block rounded-full border border-accent/50 bg-primary/20 px-7 py-3 font-display text-secondary uppercase tracking-widest text-sm backdrop-blur-sm transition-transform hover:scale-105 hover:border-accent"
              >
                Read the card
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* VIDEO INVITATION — primary film asset */}
      <Section id="film" className="bg-gradient-to-b from-background via-secondary/10 to-background">
        <SectionTitle kicker="Our invitation to you" title="Wedding invitation video" />
        <VideoPlayer />
      </Section>

      {/* FORMAL INVITATION — letter card on scroll art */}
      <Section id="invitation" className="scroll-mt-20 bg-gradient-to-b from-secondary/30 to-background">
        <SectionTitle kicker="The Royal Decree" title="DONTHA'S WEDDING INVITATION" />
        <InvitationLetter />
      </Section>

      {/* BRIDE'S PARENTS — hosts inviting you */}
      <Section id="parents" className="scroll-mt-20 bg-gradient-to-b from-background to-secondary/25">
        <SectionTitle kicker="With love & blessings" title="The bride's parents invite you" />
        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2 md:items-stretch md:gap-12">
          <div className="relative order-2 flex flex-col md:order-1">
            <div className="ornate-border overflow-hidden min-h-[min(50vh,400px)] sm:min-h-[min(56vh,480px)] md:min-h-[520px]">
              <img
                src={bridesParents}
                alt="Smt. Dontha Varalakshmi and Sri Dontha Satyanarayana"
                className="h-full w-full object-cover object-center"
                loading="lazy"
              />
            </div>
            <p className="mt-3 text-center font-display text-[10px] uppercase tracking-[0.35em] text-muted-foreground md:text-left">
              Parents of the bride
            </p>
          </div>
          <div className="order-1 flex flex-col justify-center space-y-5 text-center md:order-2 md:text-left">
            <div className="rounded-md border border-primary/15 bg-card/90 p-6 shadow-sm md:p-8">
              <p
                className="text-lg font-medium leading-relaxed text-foreground md:text-xl"
                style={{ fontFamily: "var(--font-devanagari), var(--font-body), serif" }}
              >
                ॥ श्री गणेशाय नमः ॥
              </p>
              <p className="mt-4 font-body text-base italic leading-relaxed text-foreground/90 md:text-lg">
                With hearts full of joy, we solicit your gracious presence with family and friends on the auspicious
                occasion of the wedding of our beloved daughter.
              </p>
              <div className="mt-6 space-y-1 border-t border-accent/20 pt-6 font-script text-2xl text-primary md:text-3xl">
                <p>Smt. Dontha Varalakshmi</p>
                <p>Sri Dontha Satyanarayana</p>
              </div>
              <p className="mt-3 font-display text-xs uppercase tracking-[0.25em] text-muted-foreground">
                Request the pleasure of your company
              </p>
            </div>
          </div>
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
            <div className="relative ornate-border overflow-hidden transition-transform hover:scale-[1.02]">
            <div className="absolute inset-0 bg-gradient-to-tr from-rose-950/20 via-transparent to-amber-900/15 pointer-events-none z-10" />
            <img
              src={couplePortrait}
              alt="Vani and Sai — a cherished moment"
              className="w-full h-[420px] md:h-[500px] object-cover object-center"
              loading="lazy"
            />
            <p className="absolute bottom-3 left-0 right-0 z-20 text-center font-display text-xs uppercase tracking-[0.35em] text-secondary drop-shadow-md">
              Our journey
            </p>
          </div>
          <div className="space-y-6 animate-fade-up">
            <p className="text-lg italic text-foreground/80 leading-relaxed">
              From cherished moments shared with family to vows beneath a marigold mandap —
              our story is one written in the stars, woven with the threads of family, faith, and forever.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="rounded-md border border-primary/12 bg-card/90 p-4 text-center shadow-sm">
                <h4 className="font-script text-3xl text-primary">Vani Priyadarshini</h4>
                <p className="text-sm text-muted-foreground mt-2">D/o<br />Smt. Dontha Varalakshmi<br />Sri Dontha Satyanarayana</p>
              </div>
              <div className="rounded-md border border-primary/12 bg-card/90 p-4 text-center shadow-sm">
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
          backgroundImage: `linear-gradient(rgba(40,10,10,0.55), rgba(40,10,10,0.75)), url(${coupleBw})`,
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

      {/* BRIDE & GROOM */}
      <Section id="couple" className="scroll-mt-20">
        <SectionTitle kicker="The Bride & The Groom" title="Meet the Couple" />
        <div className="grid md:grid-cols-2 gap-10">
          <div className="text-center">
            <div className="ornate-border overflow-hidden transition-transform hover:scale-[1.02]">
              <img
                src={bride}
                alt="The Bride — Vani Priyadarshini"
                className="w-full h-[480px] md:h-[520px] object-cover object-[center_20%]"
                loading="lazy"
              />
            </div>
            <h3 className="mt-6 font-script text-4xl text-primary">Vani Priyadarshini</h3>
            <p className="text-accent uppercase tracking-[0.3em] text-xs mt-2">The Bride</p>
          </div>
          <div className="text-center">
            <div className="ornate-border overflow-hidden transition-transform hover:scale-[1.02]">
              <img
                src={groom}
                alt="The Groom — Sai Kumar"
                className="w-full h-[480px] md:h-[520px] object-cover object-top"
                loading="lazy"
              />
            </div>
            <h3 className="mt-6 font-script text-4xl text-primary">Sai Kumar</h3>
            <p className="text-accent uppercase tracking-[0.3em] text-xs mt-2">The Groom</p>
          </div>
        </div>
      </Section>

      {/* BRIDE'S FAMILY */}
      <Section id="family" className="scroll-mt-20 bg-gradient-to-b from-secondary/20 to-background">
        <SectionTitle kicker="The bride's side" title="Bride's family" />
        <p className="mx-auto mb-10 max-w-2xl text-center text-sm text-muted-foreground">
          Our families — celebrating together with love, laughter, and blessings.
        </p>
        <div className="photo-frame-fit mx-auto flex max-w-4xl min-h-[min(48vh,380px)] items-center justify-center overflow-hidden p-2 sm:min-h-[min(52vh,440px)] sm:p-3 md:min-h-[500px]">
          <img
            src={bridesFamily}
            alt="Bride's family"
            className="h-full w-full max-h-[min(80vh,760px)] object-contain object-center"
            loading="lazy"
          />
        </div>
      </Section>

      {/* GALLERY — celebration moments & invitation art */}
      <Section id="gallery" className="scroll-mt-20 bg-gradient-to-b from-background to-secondary/30">
        <SectionTitle kicker="Cherished moments" title="Gallery" />
        <p className="mx-auto mb-10 max-w-2xl text-center text-sm italic text-muted-foreground">
          Moments from our journey together.
        </p>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          <div className="col-span-2 row-span-2 ornate-border overflow-hidden">
            <img
              src={coupleStage}
              alt="On stage together"
              className="h-full min-h-[280px] w-full object-cover object-center md:min-h-[340px]"
              loading="lazy"
            />
          </div>
          <div className="ornate-border overflow-hidden">
            <img
              src={couplePortrait}
              alt="Portrait"
              className="h-48 w-full object-cover object-[center_30%] md:h-56"
              loading="lazy"
            />
          </div>
          <div className="ornate-border overflow-hidden">
            <img
              src={coupleSofa}
              alt="Together"
              className="h-48 w-full object-cover object-center md:h-56"
              loading="lazy"
            />
          </div>
          <div className="ornate-border overflow-hidden">
            <img
              src={coupleGarland}
              alt="Garlands and blessings"
              className="h-48 w-full object-cover object-[center_40%] md:h-56"
              loading="lazy"
            />
          </div>
          <div className="ornate-border overflow-hidden">
            <img
              src={coupleBw}
              alt="Together in timeless black and white"
              className="h-48 w-full object-cover object-center md:h-56 grayscale"
              loading="lazy"
            />
          </div>
          <div className="photo-frame-fit col-span-2 overflow-hidden shadow-gold md:col-span-2 flex items-center justify-center">
            <img
              src={bride}
              alt="The bride"
              className="w-full h-auto max-h-[70vh] object-contain"
              loading="lazy"
            />
          </div>
          <div className="photo-frame-fit col-span-2 overflow-hidden shadow-gold md:col-span-2 flex items-center justify-center">
            <img
              src={groom}
              alt="The groom"
              className="w-full h-auto max-h-[70vh] object-contain"
              loading="lazy"
            />
          </div>
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
              className="ornate-border bg-card/95 p-6 text-center transition-all hover:-translate-y-1 hover:shadow-md"
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
      <Section id="blessings" className="scroll-mt-20">
        <SectionTitle kicker="Aashirwad · ఆశీర్వాదం" title="Bless the Couple" />
        <Blessings />
      </Section>

      {/* FOOTER — couple portrait + venue & directions */}
      <footer
        id="maps"
        className="relative scroll-mt-20 overflow-hidden px-4 pb-16 pt-24 md:pb-20 md:pt-28"
        style={{
          backgroundImage: `linear-gradient(165deg, rgba(25,8,8,0.92) 0%, rgba(45,12,12,0.88) 45%, rgba(18,6,6,0.94) 100%), url(${coupleBw})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "scroll",
        }}
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(212,175,55,0.12),transparent)]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

        <div className="relative z-10 mx-auto max-w-5xl">
          <div className="mb-12 flex flex-col items-center text-center">
            <img src={ganesha} alt="" className="h-14 w-auto opacity-90 md:h-16 animate-diya" />
            <p className="mt-5 font-script text-4xl text-gold-shimmer md:text-5xl">Vani &amp; Sai</p>
            <p className="mt-2 flex items-center justify-center gap-2 text-sm italic text-secondary/95 md:text-base">
              <Heart className="h-4 w-4 shrink-0 text-accent" aria-hidden />
              Together, forever, by the grace of the Divine
            </p>
            <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-accent/25 bg-black/20 px-4 py-1.5 text-xs uppercase tracking-[0.35em] text-secondary/85 backdrop-blur-sm">
              <Calendar className="h-3.5 w-3.5 text-accent" aria-hidden />
              09 May 2026 · 08:15 AM
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 md:gap-10 md:items-stretch">
            <div className="rounded-2xl border border-white/10 bg-black/25 p-6 text-center shadow-[0_20px_50px_rgba(0,0,0,0.35)] backdrop-blur-md md:p-8 md:text-left">
              <p className="font-display text-xs uppercase tracking-[0.4em] text-accent">Celebration venue</p>
              <h3 className="mt-3 font-script text-2xl text-gold-shimmer md:text-3xl">{VENUE_NAME}</h3>
              <div className="mx-auto mt-4 max-w-sm space-y-1 text-sm leading-relaxed text-secondary/90 md:mx-0">
                <p className="flex items-start justify-center gap-2 md:justify-start">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
                  <span>
                    {VENUE_LINES[0]}
                    <br />
                    {VENUE_LINES[1]}
                  </span>
                </p>
              </div>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center md:justify-start">
                <a
                  href={MAPS_PLACE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-5 py-3 font-display text-sm font-medium uppercase tracking-widest text-primary shadow-gold transition hover:brightness-110 hover:scale-[1.02]"
                >
                  <Navigation className="h-4 w-4" aria-hidden />
                  Open in Maps
                </a>
                <a
                  href={MAPS_PLACE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-accent/40 bg-white/5 px-5 py-3 font-display text-sm uppercase tracking-widest text-secondary backdrop-blur-sm transition hover:border-accent hover:bg-white/10"
                >
                  <ExternalLink className="h-4 w-4 text-accent" aria-hidden />
                  Google Maps
                </a>
              </div>
            </div>

            <div className="flex flex-col justify-between rounded-2xl border border-accent/20 bg-gradient-to-br from-card/30 via-black/20 to-black/30 p-6 text-secondary/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-md md:p-8">
              <div>
                <p className="text-center font-display text-xs uppercase tracking-[0.35em] text-accent md:text-left">
                  For your guests
                </p>
                <ul className="mt-4 space-y-3 text-sm leading-relaxed md:text-base">
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                    <span>
                      <strong className="text-secondary">Parking &amp; entry:</strong> Please arrive a little early; follow venue signage and staff for seating.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                    <span>
                      <strong className="text-secondary">Lunch</strong> follows the ceremony as mentioned on the invitation card.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                    <span>
                      Save this page — use <strong className="text-gold-shimmer">Open in Maps</strong> on the day for live directions.
                    </span>
                  </li>
                </ul>
              </div>
              <p className="mt-8 text-center font-script text-lg text-gold-shimmer/90 md:text-left md:text-xl">
                With love · Hyderabad
              </p>
            </div>
          </div>

          <div className="mt-14 flex flex-col items-center gap-2 border-t border-white/10 pt-8 text-center">
            <p className="text-xs uppercase tracking-[0.45em] text-secondary/50">Vani Priyadarshini &amp; Sai Kumar</p>
            <p className="text-[11px] text-secondary/40">Thank you for being part of our story.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
