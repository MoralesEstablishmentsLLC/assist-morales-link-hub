import Navigation from "@/components/Navigation";
import TypeWriter from "@/components/TypeWriter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Globe, Users, Zap, CheckCircle, Building2, Target } from "lucide-react";
const Index = () => {
  return <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-hero text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <TypeWriter text="Morales Assist" speed={150} />
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Empowering small businesses and companies to thrive in the digital world through 
            innovative web solutions and strategic business connections.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/clients">
              <Button size="lg" variant="secondary" className="shadow-elegant">
                Explore Our Client Network
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/request">
              <Button size="lg" variant="outline" className="border-white hover:bg-white text-slate-950">
                Start Your Project
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">How We Help Your Business Grow</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We provide comprehensive digital solutions that transform the way you do business online.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="shadow-card hover:shadow-elegant transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Web Development</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  Custom websites that showcase your brand and drive business growth with modern, 
                  responsive designs that work perfectly on all devices.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-elegant transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Business Connections</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  Access our extensive network of diverse businesses and strategic partnerships 
                  that can help expand your reach and create new opportunities.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-elegant transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Digital Strategy</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  Strategic consultation and planning to optimize your digital presence and 
                  maximize your online potential in today's competitive market.
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
                Why Small Businesses Choose Morales Assist
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                We understand the unique challenges small businesses face in the digital landscape. 
                Our personalized approach ensures every solution is tailored to your specific needs and goals.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Personalized Service</h4>
                    <p className="text-muted-foreground">Direct communication with experienced professionals who understand your industry.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Proven Results</h4>
                    <p className="text-muted-foreground">Track record of helping businesses increase their online presence and revenue.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Ongoing Support</h4>
                    <p className="text-muted-foreground">Continuous support and maintenance to keep your digital assets running smoothly.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <Card className="shadow-card text-center">
                <CardContent className="pt-6">
                  <Building2 className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-foreground">50+</h3>
                  <p className="text-muted-foreground">Happy Clients</p>
                </CardContent>
              </Card>
              
              <Card className="shadow-card text-center">
                <CardContent className="pt-6">
                  <Target className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-foreground">100
%</h3>
                  <p className="text-muted-foreground">Accurate Results</p>
                </CardContent>
              </Card>
              
              <Card className="shadow-card text-center">
                <CardContent className="pt-6">
                  <Globe className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-foreground">24/7</h3>
                  <p className="text-muted-foreground">Support Available</p>
                </CardContent>
              </Card>
              
              <Card className="shadow-card text-center">
                <CardContent className="pt-6">
                  <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-foreground">10+</h3>
                  <p className="text-muted-foreground">Industries Served</p>
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
              <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
              <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                Join our network of successful businesses and discover the connections that can 
                take your company to the next level. Your digital transformation starts here.
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
    </div>;
};
export default Index;