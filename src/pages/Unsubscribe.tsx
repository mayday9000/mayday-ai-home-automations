import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";

type State =
  | { kind: "validating" }
  | { kind: "valid" }
  | { kind: "already" }
  | { kind: "invalid" }
  | { kind: "submitting" }
  | { kind: "success" }
  | { kind: "error"; message: string };

const Unsubscribe = () => {
  const [params] = useSearchParams();
  const token = params.get("token") ?? "";
  const [state, setState] = useState<State>({ kind: "validating" });

  useEffect(() => {
    if (!token) {
      setState({ kind: "invalid" });
      return;
    }
    const url = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/handle-email-unsubscribe?token=${encodeURIComponent(token)}`;
    fetch(url, { headers: { apikey: import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY } })
      .then(async (r) => {
        const data = await r.json().catch(() => ({}));
        if (r.ok && data.valid) setState({ kind: "valid" });
        else if (data.reason === "already_unsubscribed") setState({ kind: "already" });
        else setState({ kind: "invalid" });
      })
      .catch(() => setState({ kind: "invalid" }));
  }, [token]);

  const confirm = async () => {
    setState({ kind: "submitting" });
    try {
      const { data, error } = await supabase.functions.invoke("handle-email-unsubscribe", {
        body: { token },
      });
      if (error) {
        setState({ kind: "error", message: "Something went wrong. Please try again." });
        return;
      }
      const d = data as { success?: boolean; reason?: string };
      if (d.success || d.reason === "already_unsubscribed") setState({ kind: "success" });
      else setState({ kind: "error", message: "Unable to process unsubscribe." });
    } catch {
      setState({ kind: "error", message: "Something went wrong. Please try again." });
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24 pb-16">
        <div className="container max-w-xl mx-auto px-4 sm:px-6 text-center">
          {state.kind === "validating" && (
            <p className="text-muted-foreground">Checking your unsubscribe link…</p>
          )}

          {state.kind === "valid" && (
            <>
              <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
                Unsubscribe from Mayday AI emails
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground mb-8">
                Click below to confirm and stop receiving emails from Mayday AI.
              </p>
              <Button
                onClick={confirm}
                size="lg"
                className="bg-gradient-primary text-white hover:shadow-primary transition-all duration-300"
              >
                Confirm unsubscribe
              </Button>
            </>
          )}

          {state.kind === "submitting" && (
            <p className="text-muted-foreground">Processing…</p>
          )}

          {state.kind === "success" && (
            <>
              <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
                You're unsubscribed
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground">
                You won't receive further emails from Mayday AI at this address.
              </p>
            </>
          )}

          {state.kind === "already" && (
            <>
              <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
                Already unsubscribed
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground">
                This email address is already opted out of Mayday AI emails.
              </p>
            </>
          )}

          {state.kind === "invalid" && (
            <>
              <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
                Invalid or expired link
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground">
                This unsubscribe link is no longer valid. If you keep receiving emails,
                contact masondavisai@gmail.com.
              </p>
            </>
          )}

          {state.kind === "error" && (
            <p role="alert" className="text-destructive">{state.message}</p>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Unsubscribe;
