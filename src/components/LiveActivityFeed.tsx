import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Clock, MapPin, Zap } from "lucide-react";

interface Activity {
  id: number;
  text: string;
  time: string;
  location: string;
  icon: "clock" | "map" | "zap";
}

const activities: Activity[] = [
  { id: 1, text: "New website launched for Tech Startup", time: "2 min ago", location: "San Francisco, CA", icon: "zap" },
  { id: 2, text: "Social media campaign completed", time: "5 min ago", location: "New York, NY", icon: "clock" },
  { id: 3, text: "E-commerce site updated", time: "12 min ago", location: "Los Angeles, CA", icon: "map" },
  { id: 4, text: "SEO optimization improved rankings", time: "18 min ago", location: "Chicago, IL", icon: "zap" },
  { id: 5, text: "New client onboarded", time: "24 min ago", location: "Austin, TX", icon: "clock" },
];

export const LiveActivityFeed = () => {
  const [currentActivities, setCurrentActivities] = useState(activities.slice(0, 3));
  const [activityIndex, setActivityIndex] = useState(3);

  useEffect(() => {
    const interval = setInterval(() => {
      setActivityIndex((prev) => (prev + 1) % activities.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setCurrentActivities((prev) => {
      const newActivities = [...prev.slice(1), activities[activityIndex]];
      return newActivities;
    });
  }, [activityIndex]);

  const getIcon = (type: "clock" | "map" | "zap") => {
    switch (type) {
      case "clock": return <Clock className="h-4 w-4" />;
      case "map": return <MapPin className="h-4 w-4" />;
      case "zap": return <Zap className="h-4 w-4" />;
    }
  };

  return (
    <div className="space-y-3">
      <AnimatePresence mode="popLayout">
        {currentActivities.map((activity) => (
          <motion.div
            key={activity.id}
            layout
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
            className="glass-card p-4 flex items-start gap-3"
          >
            <div className="p-2 rounded-full bg-brand-blue/20 text-brand-blue">
              {getIcon(activity.icon)}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium">{activity.text}</p>
              <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
                <span>{activity.time}</span>
                <span>•</span>
                <span>{activity.location}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};
