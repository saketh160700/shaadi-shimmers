
CREATE TABLE public.blessings (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);
ALTER TABLE public.blessings ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can read blessings" ON public.blessings FOR SELECT USING (true);
CREATE POLICY "Anyone can leave a blessing" ON public.blessings FOR INSERT WITH CHECK (
  length(trim(name)) > 0 AND length(name) <= 80
  AND length(trim(message)) > 0 AND length(message) <= 500
);
