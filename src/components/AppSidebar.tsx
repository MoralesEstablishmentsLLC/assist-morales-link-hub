import { Home, User, Users, Sparkles, MessageCircle, Edit, Phone, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { DrawerClose } from "@/components/ui/drawer";

const navigation = [
  { name: "Home", path: "/", icon: Home },
  { name: "Personal Resume", path: "/resume", icon: User },
  { name: "Client List", path: "/clients", icon: Users },
  { name: "Explore Features", path: "/features", icon: Sparkles },
  { name: "Request", path: "/request", icon: MessageCircle },
  { name: "Develop Site", path: "/edit-site", icon: Edit },
  { name: "Contact", path: "/contact", icon: Phone },
];

export function AppSidebar() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="p-4 h-full">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Navigation</h2>
        <DrawerClose asChild>
          <Button variant="ghost" size="sm">
            <X className="h-4 w-4" />
          </Button>
        </DrawerClose>
      </div>
      <nav className="space-y-2">
        {navigation.map((item) => (
          <DrawerClose key={item.name} asChild>
            <Link
              to={item.path}
              className={`flex items-center gap-3 p-3 rounded-md transition-colors ${
                currentPath === item.path
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground hover:bg-accent hover:text-accent-foreground"
              }`}
            >
              <item.icon className="h-4 w-4" />
              <span>{item.name}</span>
            </Link>
          </DrawerClose>
        ))}
      </nav>
    </div>
  );
}