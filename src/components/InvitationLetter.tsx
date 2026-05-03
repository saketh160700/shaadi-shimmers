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
        <div className="absolute inset-0 flex items-center justify-center p-6 md:p-16 overflow-y-auto">
          <div className="text-center text-[#3a1a0a] max-w-md md:max-w-xl space-y-2 md:space-y-3">
            <div className="flex justify-between text-sm md:text-base font-display text-[#7a1a1a] italic px-2">
              <span>Srirasthu</span>
              <span>Subhamasthu</span>
              <span>Avighnamasthu</span>
            </div>
            <div className="text-xl md:text-2xl">॥ श्री गणेशाय नमः ॥</div>
            <h3 className="font-script text-3xl md:text-5xl text-[#7a1a1a] leading-none">
              Wedding Invitation
            </h3>
            <div className="divider-ornate text-[#8b6f1a]">✦</div>
            <p className="font-display text-sm md:text-base italic">
              We solicit your gracious presence with family &amp; friends<br />
              on the auspicious occasion of the marriage<br />
              of our only daughter
            </p>
            <h4 className="font-script text-3xl md:text-5xl text-[#7a1a1a] leading-tight">
              Chi.La.Sou. Vani Priyadarshini
            </h4>
            <p className="font-display text-base md:text-lg italic">with</p>
            <h4 className="font-script text-3xl md:text-5xl text-[#7a1a1a] leading-tight">
              Chi. Sai Kumar
            </h4>
            <p className="text-xs md:text-sm italic">
              (Only S/o. Smt. &amp; Sri Jella Jayalakshmi – Jitesh)
            </p>
            <div className="divider-ornate text-[#8b6f1a]">❀</div>
            <div className="space-y-1 font-display">
              <p className="text-sm md:text-base font-semibold tracking-wider">Sumuhurtham</p>
              <p className="text-base md:text-lg">Saturday, 09<sup>th</sup> May 2026 · 08:15 a.m.</p>
              <p className="text-xs md:text-sm italic">"Mithuna Lagnam"</p>
            </div>
            <div className="divider-ornate text-[#8b6f1a]">✦</div>
            <div className="space-y-1 font-display">
              <p className="text-sm md:text-base font-semibold">Venue</p>
              <p className="text-sm md:text-base italic">
                M.N.T. Varahi Banquets<br />
                Anand Nagar, Bandlaguda, Nagole,<br />
                Hyderabad
              </p>
            </div>
            <div className="divider-ornate text-[#8b6f1a]">❀</div>
            <p className="text-xs md:text-sm font-display">Lunch follows.</p>
            <div className="pt-2 font-script text-xl md:text-2xl text-[#7a1a1a]">
              Smt. Dontha Varalakshmi<br />
              Sri Dontha Satyanarayana
            </div>
            <p className="text-[10px] md:text-xs italic mt-2">
              With best compliments from Near &amp; Dear
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
