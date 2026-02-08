import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AppSidebar } from "@/components/AppSidebar";

const Navigation = () => {
  return (
    <nav className="bg-card shadow-card border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16 gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm">
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-80 p-0">
              <AppSidebar />
            </SheetContent>
          </Sheet>
          <Link to="/" className="text-2xl font-bold text-primary">
            MorAssist
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;