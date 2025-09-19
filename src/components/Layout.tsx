import Navigation from "@/components/Navigation";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen w-full">
      <Navigation />
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
}