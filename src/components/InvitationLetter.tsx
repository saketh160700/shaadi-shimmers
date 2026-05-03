import scroll from "@/assets/scroll-letter.jpg";

export function InvitationLetter() {
  return (
    <div className="relative mx-auto max-w-4xl">
      <div
        className="relative aspect-[4/5] md:aspect-[5/6] w-full rounded-lg shadow-royal overflow-hidden"
        style={{
          backgroundImage: `url(${scroll})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center p-8 md:p-20">
          <div className="text-center text-[#3a1a0a] max-w-md md:max-w-lg space-y-3 md:space-y-5">
            <div className="text-2xl md:text-3xl">॥ श्री गणेशाय नमः ॥</div>
            <div className="divider-ornate text-[#8b6f1a]">✦</div>
            <p className="font-display text-base md:text-lg italic">
              With the blessings of our families,<br />we joyfully invite you to celebrate
            </p>
            <h3 className="font-script text-4xl md:text-6xl text-[#7a1a1a] leading-none">
              Aarav <span className="text-2xl md:text-3xl">weds</span> Priya
            </h3>
            <div className="divider-ornate text-[#8b6f1a]">❀</div>
            <div className="space-y-1 font-display">
              <p className="text-lg md:text-xl tracking-wider">Tuesday, 15<sup>th</sup> December 2026</p>
              <p className="text-base md:text-lg">Muhurat — 7:00 PM onwards</p>
              <p className="text-sm md:text-base mt-3 italic">
                The Royal Heritage Palace<br />
                Udaipur, Rajasthan
              </p>
            </div>
            <div className="divider-ornate text-[#8b6f1a]">✦</div>
            <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-[#7a1a1a]">
              Your presence is our blessing
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
