import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bot, Code, Database, Globe, MessageSquare, Zap, Smartphone, Shield, Cloud, Cpu, ChevronDown, RotateCcw, Lock, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { EmailDemo } from "@/components/demos/EmailDemo";
import AnimationDemo from "@/components/demos/AnimationDemo";
import ResponsiveDemo from "@/components/demos/ResponsiveDemo";
const Features = () => {
  const [isAnimating, setIsAnimating] = useState(true);
  const [showReplay, setShowReplay] = useState(false);

  const handleReplay = () => {
    setIsAnimating(false);
    setShowReplay(false);
    setTimeout(() => setIsAnimating(true), 10);
    setTimeout(() => setShowReplay(true), 1010); // Show after 1s animation completes
  };

  // Show replay button after initial animation completes
  useState(() => {
    const timer = setTimeout(() => setShowReplay(true), 1000);
    return () => clearTimeout(timer);
  });
  const features = [{
    icon: <Globe className="h-8 w-8" />,
    title: "Digital Asset Management",
    description: "Complete organization and optimization of all your digital assets in one centralized system",
    technologies: ["Content Libraries", "Brand Guidelines", "File Management", "Version Control"],
    color: "bg-blue-500/10 text-blue-600"
  }, {
    icon: <MessageSquare className="h-8 w-8" />,
    title: "Social Media Management",
    description: "Full-service management across all platforms including Instagram, Facebook, Pinterest, TikTok, LinkedIn, and Twitter with content creation and engagement",
    technologies: ["Instagram", "Facebook", "Pinterest", "TikTok", "LinkedIn", "Twitter"],
    color: "bg-purple-500/10 text-purple-600"
  }, {
    icon: <Zap className="h-8 w-8" />,
    title: "Marketing Strategy",
    description: "Data-driven marketing campaigns designed to grow your audience and increase conversions",
    technologies: ["SEO Strategy", "Content Marketing", "Campaign Planning", "Performance Tracking"],
    color: "bg-yellow-500/10 text-yellow-600"
  }, {
    icon: <Database className="h-8 w-8" />,
    title: "Content Creation",
    description: "Professional content creation including graphics, videos, and written content",
    technologies: ["Graphic Design", "Video Production", "Copywriting", "Brand Storytelling"],
    color: "bg-green-500/10 text-green-600"
  }, {
    icon: <Shield className="h-8 w-8" />,
    title: "Analytics & Reporting",
    description: "Comprehensive analytics and insights to track performance and optimize strategies",
    technologies: ["Performance Metrics", "ROI Tracking", "Audience Insights", "Custom Reports"],
    color: "bg-indigo-500/10 text-indigo-600"
  }, {
    icon: <Smartphone className="h-8 w-8" />,
    title: "Paid Advertising",
    description: "Managed ad campaigns across Google, Facebook, Instagram, and other platforms",
    technologies: ["Google Ads", "Social Media Ads", "Retargeting", "Budget Optimization"],
    color: "bg-pink-500/10 text-pink-600"
  }, {
    icon: <Code className="h-8 w-8" />,
    title: "Email Marketing",
    description: "Strategic email campaigns that nurture leads and drive customer engagement",
    technologies: ["Campaign Design", "List Management", "Automation", "A/B Testing"],
    color: "bg-red-500/10 text-red-600",
    demo: "/chatbot"
  }, {
    icon: <Cloud className="h-8 w-8" />,
    title: "Website Management",
    description: "Complete website management including updates, optimization, and maintenance",
    technologies: ["CMS Management", "Performance Optimization", "Security Updates", "Backup Systems"],
    color: "bg-cyan-500/10 text-cyan-600"
  }, {
    icon: <Cpu className="h-8 w-8" />,
    title: "Brand Management",
    description: "Consistent brand presence across all channels with strategic positioning",
    technologies: ["Brand Guidelines", "Voice & Tone", "Visual Identity", "Reputation Management"],
    color: "bg-orange-500/10 text-orange-600"
  }];
  const showcaseProjects = [{
    title: "Full-Service Package",
    description: "Complete online management including social media, marketing, and asset management for a retail business",
    features: ["Daily Social Posts", "Monthly Marketing Reports", "Asset Organization", "Brand Consistency"]
  }, {
    title: "Social Media Growth",
    description: "Comprehensive social media strategy that increased engagement by 300% in 3 months",
    features: ["Content Calendar", "Community Engagement", "Influencer Outreach", "Analytics Tracking"]
  }, {
    title: "Marketing Campaign Success",
    description: "Multi-channel marketing strategy that doubled website traffic and increased conversions by 150%",
    features: ["SEO Optimization", "Paid Advertising", "Email Campaigns", "Performance Analytics"]
  }];
  return <div className="min-h-screen bg-background">
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6" style={{
          animation: 'bounce-3s 3s ease-in-out'
        }}>
            Complete Online
            <span className="text-primary"> Services</span>
          </h1>
          
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
        <section className="mb-20 animate-fade-in" style={{
        animationDelay: "0.2s"
      }}>
          <div className="text-center mb-12">
            <h2 className={`text-3xl font-bold ${isAnimating ? 'animate-spin-5x' : ''}`}>Our Service Capabilities</h2>
            {showReplay && (
              <Button 
                onClick={handleReplay} 
                variant="ghost" 
                size="sm" 
                className="mt-2 flex items-center gap-2 mx-auto animate-fade-in"
              >
                <RotateCcw className="h-4 w-4" />
                Replay Animation
              </Button>
            )}
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => <Card key={index} className="hover:shadow-lg transition-all duration-300 border-border hover:border-primary/20">
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
                    {feature.technologies.map((tech, techIndex) => <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>)}
                  </div>
                  {feature.demo && <Link to={feature.demo}>
                      <Button variant="outline" size="sm" className="w-full">
                        View Demo
                      </Button>
                    </Link>}
                </CardContent>
              </Card>)}
          </div>
        </section>

        {/* Interactive Demos */}
        <section className="mb-20 animate-fade-in" style={{
        animationDelay: "0.4s"
      }}>
          <h2 className="text-3xl font-bold text-center mb-12">Service Demonstrations</h2>
          <p className="text-center text-muted-foreground mb-8 max-w-3xl mx-auto">
            See how our online management services work with these interactive examples
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
        <section className="mb-20 animate-fade-in bg-gradient-to-r from-gray-900 via-black to-gray-900 rounded-2xl p-12" style={{
        animationDelay: "0.6s"
      }}>
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Success Stories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {showcaseProjects.map((project, index) => 
              <DropdownMenu key={index}>
                <DropdownMenuTrigger asChild>
                  <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer bg-white/5 border-white/10">
                    <CardHeader>
                      <CardTitle className="text-xl flex items-center gap-2 text-white">
                        <Bot className="h-5 w-5 text-blue-400" />
                        {project.title}
                        <ChevronDown className="h-4 w-4 ml-auto" />
                      </CardTitle>
                    </CardHeader>
                  </Card>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-80 p-4 bg-gray-800 border-gray-600 z-50">
                  <div className="space-y-3">
                    <p className="text-gray-300 text-sm">
                      {project.description}
                    </p>
                    <div className="space-y-2">
                      <h4 className="text-white font-medium text-sm">Features:</h4>
                      <ul className="space-y-1">
                        {project.features.map((feature, featureIndex) => 
                          <li key={featureIndex} className="text-sm text-gray-300 flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                            {feature}
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2 text-white">
                  <Shield className="h-5 w-5 text-green-400" />
                  SOC 2 Compliant
                </CardTitle>
              </CardHeader>
            </Card>
            
            <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2 text-white">
                  <Lock className="h-5 w-5 text-blue-400" />
                  SSL/TLS Encrypted
                </CardTitle>
              </CardHeader>
            </Card>
            
            <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2 text-white">
                  <CheckCircle className="h-5 w-5 text-purple-400" />
                  GDPR & CCPA Ready
                </CardTitle>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-card rounded-2xl p-12 animate-fade-in" style={{
        animationDelay: "0.8s"
      }}>
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Online Presence?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let us manage your complete online operation while you focus on growing your business.
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
    </div>;
};
export default Features;