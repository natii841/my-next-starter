import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { ContactForm } from "@/components/contact-form";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 p-12 md:p-24 bg-background text-foreground transition-colors duration-300">
      <div className="absolute top-5 right-5">
        <ModeToggle />
      </div>

      {/* Hero Header */}
      <div className="flex max-w-lg flex-col items-center text-center gap-3">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          Next.js + Tailwind Starter
        </h1>
        <p className="text-muted-foreground text-lg">
          Shadcn UI, Dark Mode, and Type-Safe Zod Forms are fully configured.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3">
        <Button>Primary Action</Button>
        <Button variant="outline">Secondary Action</Button>
      </div>

      {/* Form Container */}
      <div className="w-full max-w-sm rounded-xl border border-border bg-card p-6 text-card-foreground shadow-sm">
        <h2 className="text-lg font-semibold mb-4 text-center">Contact Form Demo</h2>
        <ContactForm />
      </div>
    </main>
  );
}