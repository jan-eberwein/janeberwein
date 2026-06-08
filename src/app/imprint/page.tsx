import { LiquidGlassCard } from "@/components/ui/LiquidGlassCard";

export const metadata = {
  title: "Imprint | Jan Eberwein",
  description: "Imprint and legal information for Jan Eberwein.",
};

export default function ImprintPage() {
  return (
    <div className="w-full max-w-3xl mx-auto py-24 px-4 flex-grow flex items-center justify-center">
      <LiquidGlassCard className="w-full p-8 md:p-12">
        <h1 className="text-3xl font-bold mb-8">Imprint</h1>
        
        <div className="space-y-6 text-foreground/80">
          <section>
            <h2 className="text-xl font-semibold mb-2 text-foreground">Information according to § 5 ECG and disclosure according to § 25 MedienG:</h2>
            <p>Jan Eberwein</p>
            <p>[TODO: Address Line 1]</p>
            <p>[TODO: ZIP Code, City]</p>
            <p>Austria</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2 text-foreground">Contact:</h2>
            <p>Email: <a href="mailto:jan@janeberwein.at" className="text-electric-blue hover:underline">jan@janeberwein.at</a></p>
            <p>Phone: [TODO: +43 XXX XXX XXXX]</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2 text-foreground">Liability for Links:</h2>
            <p>
              This website contains links to external websites. We have no influence on the content of these external websites. 
              Therefore, we cannot assume any liability for these external contents. The respective provider or operator of the pages 
              is always responsible for the content of the linked pages.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-2 text-foreground">Copyright:</h2>
            <p>
              The operators of this website strive to always respect the copyrights of others or to use self-created and royalty-free works. 
              The content and works created by the site operators on these pages are subject to Austrian copyright law.
            </p>
          </section>
        </div>
      </LiquidGlassCard>
    </div>
  );
}
