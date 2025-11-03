import TypeWriter from "@/components/TypeWriter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Globe, Users, Zap, CheckCircle, Building2, Target, TrendingUp, Sparkles } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { MetricsCounter } from "@/components/MetricsCounter";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { LiveActivityFeed } from "@/components/LiveActivityFeed";
import { FloatingChatbot } from "@/components/FloatingChatbot";
import { motion } from "framer-motion";
const Index = () => {
  const { ref: benefitsRef, isVisible: benefitsVisible } = useScrollAnimation(0.3);
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation(0.3);
  const { ref: testimonialsRef, isVisible: testimonialsVisible } = useScrollAnimation(0.3);

  return <div className="min-h-screen bg-background">
      <FloatingChatbot />
      
      {/* Hero Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <AnimatedBackground />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8">
                <Sparkles className="h-4 w-4 text-brand-blue" />
                <span className="text-sm font-medium">Professional Online Management Services</span>
              </div>
            </motion.div>
            
            <motion.h1 
              className="text-6xl md:text-7xl font-display font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="gradient-text">
                <TypeWriter text="MorAssist" speed={150} />
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Your complete online services partner. We manage your digital assets, craft winning marketing strategies, 
              and amplify your social media presence - so you can focus on running your business.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Link to="/clients">
                <Button size="lg" className="hover-lift shadow-elegant group">
                  Explore Our Client Network
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/request">
                <Button size="lg" variant="outline" className="hover-lift">
                  Start Your Project
                </Button>
              </Link>
              <Link to="/edit-site">
                <Button size="lg" variant="outline" className="hover-lift">
                  Edit Existing Site
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Live Activity Feed */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="max-w-2xl mx-auto mt-20"
          >
            <div className="text-center mb-6">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                Live Activity
              </h3>
            </div>
            <LiveActivityFeed />
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Complete Online Management Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From digital assets to social media campaigns, we handle every aspect of your online presence so you can focus on what matters most.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Digital Asset Management",
                description: "Complete management of your digital assets including websites, content libraries, brand materials, billing management, and online resources - all organized and optimized for maximum impact.",
                color: "purple",
                delay: 0
              },
              {
                icon: Globe,
                title: "Web Development",
                description: "Custom websites and web applications built with modern technologies. We create sites to do any task - from landing pages to complex platforms - responsive, fast, and optimized for your business goals.",
                color: "blue",
                delay: 0.2
              },
              {
                icon: TrendingUp,
                title: "Marketing & Social Media",
                description: "Comprehensive marketing strategies and social media management. From content creation and campaigns to community engagement and analytics - we grow your online presence and drive real results.",
                color: "green",
                delay: 0.4
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: service.delay }}
              >
                <Card className="h-full hover-lift hover:shadow-glow border-${service.color}-500/20 group cursor-pointer">
                  <CardHeader className="text-center">
                    <motion.div 
                      className={`bg-brand-${service.color}/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <service.icon className={`w-8 h-8 text-brand-${service.color}`} />
                    </motion.div>
                    <CardTitle className="text-xl font-display">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Why Businesses Choose MorAssist
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Managing your entire online presence shouldn't be overwhelming. We handle everything - from your website 
                and social media to marketing campaigns and digital assets - with a personalized approach that fits your business.
              </p>
              
              <div ref={benefitsRef} className="space-y-4">
                <div className={`flex items-start gap-3 transition-all duration-700 ${
                  benefitsVisible 
                    ? 'opacity-100 translate-y-0 delay-200' 
                    : 'opacity-0 translate-y-4'
                }`}>
                  <CheckCircle className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">All-In-One Solution</h4>
                    <p className="text-muted-foreground">One team managing all your online services - no more juggling multiple vendors and platforms.</p>
                  </div>
                </div>
                <div className={`flex items-start gap-3 transition-all duration-700 ${
                  benefitsVisible 
                    ? 'opacity-100 translate-y-0 delay-500' 
                    : 'opacity-0 translate-y-4'
                }`}>
                  <CheckCircle className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Strategic Growth</h4>
                    <p className="text-muted-foreground">Custom marketing strategies and social media campaigns designed to grow your audience and revenue.</p>
                  </div>
                </div>
                <div className={`flex items-start gap-3 transition-all duration-700 ${
                  benefitsVisible 
                    ? 'opacity-100 translate-y-0 delay-700' 
                    : 'opacity-0 translate-y-4'
                }`}>
                  <CheckCircle className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Complete Management</h4>
                    <p className="text-muted-foreground">We handle updates, analytics, content creation, and engagement - keeping your online presence active and effective.</p>
                  </div>
                </div>
              </div>
            </div>

            <div ref={statsRef} className="grid grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={statsVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Card className="shadow-card hover-lift glass-card">
                  <CardContent className="pt-6">
                    <Building2 className="w-12 h-12 text-brand-blue mx-auto mb-4" />
                    <MetricsCounter end={50} label="Happy Clients" suffix="+" />
                  </CardContent>
                </Card>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={statsVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card className="shadow-card hover-lift glass-card">
                  <CardContent className="pt-6">
                    <Target className="w-12 h-12 text-brand-green mx-auto mb-4" />
                    <MetricsCounter end={100} label="Accurate Results" suffix="%" />
                  </CardContent>
                </Card>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={statsVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Card className="shadow-card hover-lift glass-card">
                  <CardContent className="pt-6">
                    <Globe className="w-12 h-12 text-brand-purple mx-auto mb-4" />
                    <MetricsCounter end={24} label="Support Available" suffix="/7" />
                  </CardContent>
                </Card>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={statsVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Card className="shadow-card hover-lift glass-card">
                  <CardContent className="pt-6">
                    <Users className="w-12 h-12 text-brand-orange mx-auto mb-4" />
                    <MetricsCounter end={100} label="Businesses Served" suffix="+" />
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={testimonialsRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={testimonialsVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Don't just take our word for it - hear from businesses we've helped transform their online presence.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={testimonialsVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <TestimonialCarousel />
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <AnimatedBackground />
        <div className="max-w-4xl mx-auto text-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="shadow-glow glass-card border-brand-blue/30">
              <CardContent className="py-16">
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                  Ready to Elevate Your Online Presence?
                </h2>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Let us handle your entire online operation. From asset management and marketing strategies to 
                  social media engagement - we'll grow your digital presence while you focus on your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/clients">
                    <Button size="lg" className="hover-lift group">
                      View Our Client Network
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button size="lg" variant="outline" className="hover-lift">
                      Get Started Today
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Contact Support Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-foreground mb-4">Need Immediate Support?</h3>
          <p className="text-lg text-muted-foreground mb-8">
            Our team is ready to help answer your questions and guide you through our services.
          </p>
          <Link to="/chatbot">
            <Button size="lg" className="text-lg px-12 py-4 h-auto shadow-elegant">
              Contact Support
              <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
          </Link>
        </div>
      </section>
    </div>;
};
export default Index;