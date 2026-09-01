import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 p-24">
      <h1 className="text-4xl font-bold tracking-tight">Next.js + Tailwind Starter</h1>
      <p className="text-muted-foreground">Shadcn UI is fully configured!</p>
      
      <div className="flex gap-2">
        <Button>Primary Action</Button>
        <Button variant="outline">Secondary</Button>
      </div>
    </main>
  );
}