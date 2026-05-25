import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

const SmsCallout = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
        <div className="bg-card rounded-2xl sm:rounded-3xl shadow-card p-8 sm:p-12 text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-6">
            <MessageSquare className="w-7 h-7" />
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-foreground">
            Get text notifications from your AI assistant
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Receive reminders, notes, and confirmations by text the moment your
            Mayday AI assistant takes action. Opt in any time, opt out by
            replying STOP.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-gradient-primary text-white hover:shadow-primary transition-all duration-300 hover:scale-105"
          >
            <Link to="/sms-signup">Sign up for text notifications</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SmsCallout;
