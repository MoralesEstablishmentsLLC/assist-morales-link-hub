import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bot, Code, Database, Globe, MessageSquare, Zap, Smartphone, Shield, Cloud, Cpu } from "lucide-react";
import { Link } from "react-router-dom";
import { EmailDemo } from "@/components/demos/EmailDemo";
import AnimationDemo from "@/components/demos/AnimationDemo";
import ResponsiveDemo from "@/components/demos/ResponsiveDemo";

const Features = () => {
  const features = [
    {
      icon: <Bot className="h-8 w-8" />,
      title: "AI Chatbots & Virtual Assistants",
      description: "Custom chatbots that understand your business and provide 24/7 customer support",
      technologies: ["Advanced AI Models", "Natural Language Processing", "Real-time Chat", "Voice Integration"],
      color: "bg-blue-500/10 text-blue-600",
      demo: "/chatbot"
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "Conversational AI",
      description: "Advanced voice and text-based AI that can have natural conversations with users",
      technologies: ["Speech Recognition", "Text-to-Speech", "Context Awareness", "Multi-turn Dialogue"],
      color: "bg-purple-500/10 text-purple-600"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Automation & Workflows",
      description: "Smart bots that automate repetitive tasks and streamline business processes",
      technologies: ["Task Automation", "API Integration", "Scheduled Jobs", "Webhook Processing"],
      color: "bg-yellow-500/10 text-yellow-600"
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Backend & Database Systems",
      description: "Robust server architecture with real-time data processing and secure storage",
      technologies: ["Supabase", "PostgreSQL", "Real-time Subscriptions", "Row Level Security"],
      color: "bg-green-500/10 text-green-600"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Modern Web Applications",
      description: "Fast, responsive websites built with cutting-edge technologies",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "Progressive Web Apps"],
      color: "bg-indigo-500/10 text-indigo-600"
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile-First Design",
      description: "Responsive designs that work perfectly on all devices and screen sizes",
      technologies: ["Mobile Optimization", "Touch Interfaces", "Cross-Platform", "Performance"],
      color: "bg-pink-500/10 text-pink-600"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Security & Authentication",
      description: "Enterprise-grade security with user authentication and data protection",
      technologies: ["OAuth", "JWT Tokens", "Rate Limiting", "Data Encryption"],
      color: "bg-red-500/10 text-red-600"
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: "Cloud Integration",
      description: "Seamless integration with cloud services for scalability and reliability",
      technologies: ["Edge Functions", "CDN", "Auto-scaling", "Global Distribution"],
      color: "bg-cyan-500/10 text-cyan-600"
    },
    {
      icon: <Cpu className="h-8 w-8" />,
      title: "AI Model Integration",
      description: "Custom AI models and machine learning solutions for specific business needs",
      technologies: ["Custom Models", "ML Pipelines", "Data Analysis", "Predictive Analytics"],
      color: "bg-orange-500/10 text-orange-600"
    }
  ];

  const showcaseProjects = [
    {
      title: "Intelligent Customer Support Bot",
      description: "AI-powered chatbot that handles customer inquiries, processes orders, and escalates complex issues",
      features: ["Natural Language Understanding", "Order Processing", "Multi-language Support", "Analytics Dashboard"]
    },
    {
      title: "Personal Assistant AI",
      description: "Voice-activated assistant that manages schedules, sends reminders, and automates daily tasks",
      features: ["Voice Recognition", "Calendar Integration", "Task Automation", "Smart Notifications"]
    },
    {
      title: "Content Generation Bot",
      description: "AI that creates marketing content, social media posts, and personalized recommendations",
      features: ["Content Writing", "Image Generation", "SEO Optimization", "Brand Voice Matching"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6" style={{ animation: 'bounce-3s 3s ease-in-out' }}>
            Cutting-Edge
            <span className="text-primary"> Development Features</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Discover the advanced technologies and AI-powered solutions we use to build intelligent, 
            scalable, and user-friendly applications that drive business growth.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/request">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Start Your Project
              </Button>
            </Link>
            <Link to="/chatbot">
              <Button variant="outline" size="lg">
                Try Our AI Demo
              </Button>
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <section className="mb-20 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <h2 className="text-3xl font-bold text-center mb-12">Technical Capabilities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-border hover:border-primary/20">
                <CardHeader>
                  <div className={`w-16 h-16 rounded-lg ${feature.color} flex items-center justify-center mb-4`}>
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {feature.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  {feature.demo && (
                    <Link to={feature.demo}>
                      <Button variant="outline" size="sm" className="w-full">
                        View Demo
                      </Button>
                    </Link>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Interactive Demos */}
        <section className="mb-20 animate-fade-in-slow bg-dark-section rounded-2xl p-12" style={{ animationDelay: "0.4s" }}>
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-heading">Interactive Feature Demos</h2>
          <p className="text-center text-white mb-8 max-w-3xl mx-auto">
            Experience our technical capabilities firsthand with these interactive demonstrations
          </p>
          
          <Tabs defaultValue="email" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="email">Email System</TabsTrigger>
              <TabsTrigger value="animation">Animations</TabsTrigger>
              <TabsTrigger value="responsive">Responsive</TabsTrigger>
            </TabsList>
            
            <div className="mt-8 flex justify-center">
              <TabsContent value="email" className="w-full flex justify-center">
                <EmailDemo />
              </TabsContent>
              
              <TabsContent value="animation" className="w-full flex justify-center">
                <AnimationDemo />
              </TabsContent>
              
              <TabsContent value="responsive" className="w-full flex justify-center">
                <ResponsiveDemo />
              </TabsContent>
            </div>
          </Tabs>
        </section>

        {/* Showcase Projects */}
        <section className="mb-20 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <h2 className="text-3xl font-bold text-center mb-12">AI Bot Showcase</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {showcaseProjects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Bot className="h-5 w-5 text-primary" />
                    {project.title}
                  </CardTitle>
                  <CardDescription>
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-muted-foreground flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-card rounded-2xl p-12 animate-fade-in" style={{ animationDelay: "0.8s" }}>
          <h2 className="text-3xl font-bold mb-4">Ready to Build Something Amazing?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how we can leverage these technologies to create custom solutions for your business needs.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/request">
              <Button size="lg">
                Get Started Today
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg">
                Schedule Consultation
              </Button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Features;