import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from "lucide-react";
const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };
  return <div className="min-h-screen bg-background">
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Get In Touch</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your digital transformation? We're here to help you every step of the way. 
            Reach out today and let's discuss how we can bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-primary">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input id="subject" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea id="message" placeholder="Tell us about your project or how we can help you..." className="min-h-[150px]" required />
                  </div>

                  <Button type="submit" className="w-full bg-gradient-primary hover:opacity-90">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Contact Information</h2>
              <div className="space-y-6">
                <Card className="shadow-card bg-dark-section animate-slide-in-right" style={{ animationDelay: '0.1s' }}>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-white/10 p-3 rounded-lg">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">Email</h3>
                        
                        <p className="text-sm text-gray-300 mt-1">We respond within 24 hours</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-card bg-dark-section animate-slide-in-right" style={{ animationDelay: '0.2s' }}>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-white/10 p-3 rounded-lg">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">Phone</h3>
                        <p className="text-gray-300">+1 (559) 722-6123</p>
                        <p className="text-sm mt-1 text-slate-50">Monday - Friday, 10AM - 8PM </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-card bg-dark-section animate-slide-in-right" style={{ animationDelay: '0.3s' }}>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-white/10 p-3 rounded-lg">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">Location</h3>
                        <p className="text-gray-300">Serving Clients Worldwide</p>
                        <p className="text-sm text-gray-300 mt-1">Digital services with global reach</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-card bg-dark-section animate-slide-in-right" style={{ animationDelay: '0.4s' }}>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-white/10 p-3 rounded-lg">
                        <Clock className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">Business Hours</h3>
                        <p className="text-gray-300">Monday - Friday: 10:00 AM - 8:00 PM</p>
                        <p className="text-sm text-gray-300 mt-1">Weekend support available for urgent matters</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <Card className="shadow-card bg-gradient-primary text-white">
              <CardContent className="py-8">
                <MessageCircle className="w-10 h-10 mb-4" />
                <h3 className="text-xl font-bold mb-2">Prefer to Talk?</h3>
                <p className="opacity-90 mb-4">
                  Schedule a free 30-minute consultation to discuss your project in detail.
                </p>
                <Button variant="secondary" className="w-full">
                  Schedule a Call
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-16">
          <Card className="shadow-card bg-dark-section">
            <CardContent className="py-12 text-center">
              <h2 className="text-2xl font-bold text-blue-heading mb-4">Frequently Asked Questions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 text-left">
                <div>
                  <h4 className="font-semibold text-white mb-2">How quickly can you start my project?</h4>
                  <p className="text-gray-300 text-sm">Projects are started once a price agreement is reached and signed.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Do you work with businesses outside the US?</h4>
                  <p className="text-gray-300 text-sm">Yes! We work with clients worldwide and have experience with international businesses across multiple time zones.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">What is your typical project timeline?</h4>
                  <p className="text-gray-300 text-sm">Project timelines vary based on complexity, but most websites are completed within 1-2 weeks from start to finish.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Do you provide ongoing support?</h4>
                  <p className="text-gray-300 text-sm">Absolutely! We offer various maintenance packages and ongoing support options to keep your digital presence running smoothly.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>;
};
export default Contact;