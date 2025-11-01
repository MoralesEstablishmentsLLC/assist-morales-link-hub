import TypeWriter from "@/components/TypeWriter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Globe, Users, Zap, CheckCircle, Building2, Target } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
const Index = () => {
  const { ref: benefitsRef, isVisible: benefitsVisible } = useScrollAnimation(0.3);
  return <div className="min-h-screen bg-background">
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-hero text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <TypeWriter text="MorAssist" speed={150} />
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Your complete online services partner. We manage your digital assets, craft winning marketing strategies, 
            and amplify your social media presence - so you can focus on running your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/clients">
              <Button size="lg" variant="secondary" className="shadow-elegant animate-pendulum-left">
                Explore Our Client Network
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/request">
              <Button size="lg" variant="outline" className="border-white hover:bg-white text-slate-950 animate-pendulum-center">
                Start Your Project
              </Button>
            </Link>
            <Link to="/edit-site">
              <Button size="lg" variant="outline" className="border-white/60 hover:bg-white/10 text-black hover:text-black animate-pendulum-right">
                Edit Existing Site
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Complete Online Management Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From digital assets to social media campaigns, we handle every aspect of your online presence so you can focus on what matters most.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="shadow-card hover:shadow-elegant transition-all duration-500 hover:bg-gradient-to-br hover:from-purple-500/10 hover:to-pink-500/10 hover:border-purple-400/30 hover:shadow-lg hover:shadow-purple-500/20 group">
              <CardHeader className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors duration-300 group-hover:bg-purple-500/20">
                  <Globe className="w-8 h-8 text-primary transition-colors duration-300 group-hover:text-purple-400" />
                </div>
                <CardTitle className="text-xl transition-colors duration-300 group-hover:text-purple-300">Digital Asset Management</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground transition-colors duration-300 group-hover:text-purple-200">
                  Complete management of your digital assets including websites, content libraries, brand materials, 
                  and online resources - all organized and optimized for maximum impact.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-elegant transition-all duration-500 hover:bg-gradient-to-br hover:from-blue-500/10 hover:to-cyan-500/10 hover:border-blue-400/30 hover:shadow-lg hover:shadow-blue-500/20 group">
              <CardHeader className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors duration-300 group-hover:bg-blue-500/20">
                  <Users className="w-8 h-8 text-primary transition-colors duration-300 group-hover:text-blue-400" />
                </div>
                <CardTitle className="text-xl transition-colors duration-300 group-hover:text-blue-300">Social Media Management</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground transition-colors duration-300 group-hover:text-blue-200">
                  Full-service social media management including content creation, posting schedules, 
                  community engagement, and analytics - keeping your brand active and growing across all platforms.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-elegant transition-all duration-500 hover:bg-gradient-to-br hover:from-green-500/10 hover:to-emerald-500/10 hover:border-green-400/30 hover:shadow-lg hover:shadow-green-500/20 group">
              <CardHeader className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors duration-300 group-hover:bg-green-500/20">
                  <Zap className="w-8 h-8 text-primary transition-colors duration-300 group-hover:text-green-400" />
                </div>
                <CardTitle className="text-xl transition-colors duration-300 group-hover:text-green-300">Marketing Strategies</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground transition-colors duration-300 group-hover:text-green-200">
                  Data-driven marketing strategies tailored to your business goals. From SEO and content marketing 
                  to paid advertising campaigns - we create comprehensive plans that deliver measurable results.
                </p>
              </CardContent>
            </Card>
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

            <div className="grid grid-cols-2 gap-6">
              <Card className="shadow-card text-center transition-all duration-500 hover:bg-gradient-to-br hover:from-blue-500/10 hover:to-cyan-500/10 hover:border-blue-400/30 hover:shadow-lg hover:shadow-blue-500/20 group">
                <CardContent className="pt-6">
                  <Building2 className="w-12 h-12 text-primary mx-auto mb-4 transition-colors duration-300 group-hover:text-blue-400" />
                  <h3 className="text-2xl font-bold text-foreground transition-colors duration-300 group-hover:text-blue-300">Multiple</h3>
                  <p className="text-muted-foreground transition-colors duration-300 group-hover:text-blue-200">Happy Clients</p>
                </CardContent>
              </Card>
              
              <Card className="shadow-card text-center transition-all duration-500 hover:bg-gradient-to-br hover:from-green-500/10 hover:to-emerald-500/10 hover:border-green-400/30 hover:shadow-lg hover:shadow-green-500/20 group">
                <CardContent className="pt-6">
                  <Target className="w-12 h-12 text-primary mx-auto mb-4 transition-colors duration-300 group-hover:text-green-400" />
                  <h3 className="text-2xl font-bold text-foreground transition-colors duration-300 group-hover:text-green-300">100%</h3>
                  <p className="text-muted-foreground transition-colors duration-300 group-hover:text-green-200">Accurate Results</p>
                </CardContent>
              </Card>
              
              <Card className="shadow-card text-center transition-all duration-500 hover:bg-gradient-to-br hover:from-purple-500/10 hover:to-pink-500/10 hover:border-purple-400/30 hover:shadow-lg hover:shadow-purple-500/20 group">
                <CardContent className="pt-6">
                  <Globe className="w-12 h-12 text-primary mx-auto mb-4 transition-colors duration-300 group-hover:text-purple-400" />
                  <h3 className="text-2xl font-bold text-foreground transition-colors duration-300 group-hover:text-purple-300">24/7</h3>
                  <p className="text-muted-foreground transition-colors duration-300 group-hover:text-purple-200">Support Available</p>
                </CardContent>
              </Card>
              
              <Card className="shadow-card text-center transition-all duration-500 hover:bg-gradient-to-br hover:from-orange-500/10 hover:to-red-500/10 hover:border-orange-400/30 hover:shadow-lg hover:shadow-orange-500/20 group">
                <CardContent className="pt-6">
                  <Users className="w-12 h-12 text-primary mx-auto mb-4 transition-colors duration-300 group-hover:text-orange-400" />
                  <h3 className="text-2xl font-bold text-foreground transition-colors duration-300 group-hover:text-orange-300">10+</h3>
                  <p className="text-muted-foreground transition-colors duration-300 group-hover:text-orange-200">5+ businesses served</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="shadow-elegant bg-gradient-primary text-white">
            <CardContent className="py-16">
              <h2 className="text-4xl font-bold mb-6">Ready to Elevate Your Online Presence?</h2>
              <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                Let us handle your entire online operation. From asset management and marketing strategies to 
                social media engagement - we'll grow your digital presence while you focus on your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/clients">
                  <Button size="lg" variant="secondary">
                    View Our Client Network
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="border-white hover:bg-white text-slate-950">
                    Get Started Today
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
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