import letter from "@/assets/UpdatedLetter.png";

const textGlow =
  "[text-shadow:0_2px_18px_rgba(0,0,0,0.5),0_1px_4px_rgba(0,0,0,0.35)]";

const type = {
  heading: "text-accent",
  body: "text-secondary/90",
  accent: "text-secondary/85",
  divider: "text-secondary/70",
};

export const VENUE_NAME = "M.N.T. Varahi Banquets";
export const VENUE_LINES = ["Anand Nagar, Bandlaguda, Nagole", "Hyderabad"] as const;
/** Official Google Maps place link for MNT Varahi Banquets */
export const MAPS_PLACE_URL =
  "https://www.google.com/maps/place/MNT+VARAHI+BANQUETS/@17.3204049,78.6245556,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcba1e216d45883:0x8b5c87c5d52d12a5!8m2!3d17.3204049!4d78.6271305!16s%2Fg%2F11n3pj0g0m?entry=ttu";

export function InvitationLetter() {
  return (
    <div className="relative w-full">
      <img
        src={letter}
        alt="Invitation letter"
        className="w-full h-auto object-contain"
      />
    </div>
  );
}
