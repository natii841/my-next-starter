import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-24 bg-background text-foreground transition-colors duration-300">
      <div className="absolute top-5 right-5">
        <ModeToggle />
      </div>

      <div className="flex max-w-lg flex-col items-center text-center gap-3">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          Next.js + Tailwind Starter
        </h1>
        <p className="text-muted-foreground text-lg">
          Shadcn UI & CSS theme variables are fully configured for Light and Dark modes.
        </p>
      </div>

      <div className="flex gap-3">
        <Button>Primary Action</Button>
        <Button variant="outline">Secondary Action</Button>
      </div>
    </main>
  );
}