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
  "https://maps.app.goo.gl/N5C7pDYL85pc9AVZA";

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
