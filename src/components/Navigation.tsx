import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { AppSidebar } from "@/components/AppSidebar";

const Navigation = () => {

  return (
    <nav className="bg-card shadow-card border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16 gap-4">
          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="ghost" size="sm">
                <Menu className="h-4 w-4" />
              </Button>
            </DrawerTrigger>
            <DrawerContent className="h-full w-80 mt-0 rounded-none">
              <AppSidebar />
            </DrawerContent>
          </Drawer>
          <Link to="/" className="text-2xl font-bold text-primary">
            MorAssist
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;