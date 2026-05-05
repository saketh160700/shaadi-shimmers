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
  "https://www.google.com/maps/place/MNT+Varahi+Banquets/@17.3701939,78.5723762,17z/data=!4m14!1m7!3m6!1s0x3bcb9f8a5fd30b87:0xc3ff0b5e3cf71363!2sMNT+Varahi+Banquets!8m2!3d17.3701889!4d78.5723517!16s%2Fg%2F11yz8f8md4!3m5!1s0x3bcb9f8a5fd30b87:0xc3ff0b5e3cf71363!8m2!3d17.3701889!4d78.5723517!16s%2Fg%2F11yz8f8md4?entry=ttu";

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
