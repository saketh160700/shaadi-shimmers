/** Light lines & type above the hero — matches white hero text. */
export function TraditionalWeddingHeader() {
  return (
    <div className="mx-auto w-full max-w-xl shrink-0 space-y-2 px-2 text-center text-white sm:max-w-2xl">
      <div className="flex items-center justify-center gap-3">
        <span className="h-px max-w-28 flex-1 bg-gradient-to-r from-transparent to-white/50 sm:max-w-36" />
        <span className="text-base text-white/90 sm:text-lg" aria-hidden>
          ❀
        </span>
        <span className="h-px max-w-28 flex-1 bg-gradient-to-l from-transparent to-white/50 sm:max-w-36" />
      </div>
      <p
        className="text-xs font-medium tracking-[0.32em] text-white/90 drop-shadow-md sm:text-sm sm:tracking-[0.38em]"
        style={{ fontFamily: "var(--font-devanagari), serif" }}
      >
        ॐ श्री गणेशाय नमः
      </p>
      <p
        className="text-sm font-semibold text-white drop-shadow-md sm:text-base md:text-lg"
        style={{ fontFamily: "var(--font-devanagari), serif" }}
      >
        శుభ వివాహం · शुभ विवाह
      </p>
      <p className="font-display text-[9px] uppercase tracking-[0.4em] text-white/75 drop-shadow sm:text-[10px]">
        Sacred union · Two families, one celebration
      </p>
      <div className="flex justify-center pt-0.5">
        <span className="h-px w-24 bg-gradient-to-r from-transparent via-white/45 to-transparent sm:w-32" />
      </div>
    </div>
  );
}
