import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Mail, Phone, MapPin, Globe } from "lucide-react";
const Resume = () => {
  return <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Personal Resume</h1>
          <div className="flex flex-wrap gap-4 items-center">
            <Button className="bg-gradient-primary hover:opacity-90">
              <Download className="w-4 h-4 mr-2" />
              Download PDF
            </Button>
          </div>
        </div>

        <div className="grid gap-8">
          {/* Contact Information */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-primary">Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-primary" />
                  <span>jalen@moralesassist.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-primary" />
                  <span>+1 (559) 722-6123
                </span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>Digital Services Worldwide</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-primary" />
                  <span>www.linkedin.com/in/jalenjm05</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Professional Summary */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-primary">Professional Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Experienced digital services professional specializing in helping small businesses and companies 
                establish and enhance their digital presence. With expertise in web development, digital strategy, 
                and business connections, I provide comprehensive solutions that drive growth and success in the digital world.
              </p>
            </CardContent>
          </Card>

          {/* Experience */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-primary">Experience</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-foreground">Founder & Digital Consultant</h3>
                <p className="text-primary font-medium">Experienced Coding Knowledge</p>
                <ul className="mt-2 space-y-1 text-muted-foreground">
                  <li>• Provide comprehensive digital solutions for small businesses and companies</li>
                  <li>• Develop custom websites and digital platforms</li>
                  <li>• Build strategic business connections across diverse industries</li>
                  <li>• Offer consultation on digital transformation and online presence</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-foreground">Bioengineering</h3>
                <p className="text-primary font-medium">UC Merced</p>
                <ul className="mt-2 space-y-1 text-muted-foreground">
                  <li>• Lab Experience in all sciences</li>
                  <li>• Implemented modern web technologies and best practices</li>
                  <li>• Provided ongoing maintenance and support services</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Skills */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-primary">Core Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Technical</h4>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Web Development</li>
                    <li>• Python, React, Java</li>
                    <li>• UI/UX Design</li>
                    <li>• SEO Optimization</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Business</h4>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Client Relations</li>
                    <li>• Project Management</li>
                    <li>• Business Development</li>
                    <li>• Strategic Planning</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Industries</h4>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Small Business</li>
                    <li>• E-commerce</li>
                    <li>• Professional Services</li>
                    <li>• Technology</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>;
};
export default Resume;