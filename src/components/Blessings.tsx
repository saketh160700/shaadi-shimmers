import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Heart, Sparkles } from "lucide-react";

type Blessing = { id: string; name: string; message: string; created_at: string };

export function Blessings() {
  const [items, setItems] = useState<Blessing[]>([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const load = async () => {
    const { data } = await supabase
      .from("blessings")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(50);
    if (data) setItems(data);
  };

  useEffect(() => {
    load();
    const ch = supabase
      .channel("blessings-rt")
      .on("postgres_changes", { event: "INSERT", schema: "public", table: "blessings" }, (p) => {
        setItems((prev) => [p.new as Blessing, ...prev]);
      })
      .subscribe();
    return () => { supabase.removeChannel(ch); };
  }, []);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;
    setLoading(true);
    const { error } = await supabase.from("blessings").insert({ name: name.trim(), message: message.trim() });
    setLoading(false);
    if (error) { toast.error("Could not send blessing. Please try again."); return; }
    toast.success("Your blessings have been received 🙏");
    setName(""); setMessage("");
  };

  return (
    <div className="grid gap-10 md:grid-cols-2">
      <form onSubmit={submit} className="ornate-border bg-card/90 backdrop-blur p-6 md:p-8 space-y-4 shadow-gold">
        <div className="text-center">
          <Sparkles className="mx-auto h-8 w-8 text-accent" />
          <h3 className="mt-2 text-2xl md:text-3xl text-primary">Send Your Blessings</h3>
          <p className="text-sm text-muted-foreground italic">A few kind words for the bride and groom</p>
        </div>
        <Input
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          maxLength={80}
          required
          className="bg-background/60 border-accent/40"
        />
        <Textarea
          placeholder="Write your blessings here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          maxLength={500}
          required
          rows={5}
          className="bg-background/60 border-accent/40 resize-none"
        />
        <Button
          type="submit"
          disabled={loading}
          className="w-full bg-royal text-primary-foreground hover:opacity-90 shadow-royal"
        >
          <Heart className="mr-2 h-4 w-4" /> {loading ? "Sending..." : "Send Blessing"}
        </Button>
      </form>

      <div className="space-y-4 max-h-[520px] overflow-y-auto pr-2">
        {items.length === 0 && (
          <p className="text-center text-muted-foreground italic py-12">
            Be the first to bless the couple ✨
          </p>
        )}
        {items.map((b) => (
          <div
            key={b.id}
            className="rounded-lg border border-accent/30 bg-card/80 backdrop-blur p-4 shadow-sm animate-fade-up"
          >
            <p className="italic text-foreground/90">"{b.message}"</p>
            <p className="mt-2 text-sm text-primary font-display">— {b.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
