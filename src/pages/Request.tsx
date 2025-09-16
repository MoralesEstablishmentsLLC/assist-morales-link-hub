import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Send, CheckCircle } from "lucide-react";
import { useState } from "react";

const Request = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    projectType: "",
    budget: "",
    timeline: "",
    description: "",
    services: [] as string[]
  });

  const serviceOptions = [
    "Web Development",
    "E-commerce Solutions",
    "Digital Marketing",
    "SEO Optimization",
    "Branding & Design",
    "Business Consulting",
    "Mobile App Development",
    "Database Management"
  ];

  const handleServiceChange = (service: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      services: checked 
        ? [...prev.services, service]
        : prev.services.filter(s => s !== service)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Request Services</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to take your business to the next level? Fill out the form below and let's discuss 
            how we can help you succeed in the digital world.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-primary">Project Details</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="company">Company/Business Name</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="projectType">Project Type</Label>
                      <Select onValueChange={(value) => setFormData(prev => ({ ...prev, projectType: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select project type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="new-website">New Website</SelectItem>
                          <SelectItem value="redesign">Website Redesign</SelectItem>
                          <SelectItem value="ecommerce">E-commerce Store</SelectItem>
                          <SelectItem value="consultation">Business Consultation</SelectItem>
                          <SelectItem value="maintenance">Website Maintenance</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="budget">Budget Range</Label>
                      <Select onValueChange={(value) => setFormData(prev => ({ ...prev, budget: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-5k">Under $5,000</SelectItem>
                          <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                          <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                          <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                          <SelectItem value="over-50k">Over $50,000</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="timeline">Preferred Timeline</Label>
                    <Select onValueChange={(value) => setFormData(prev => ({ ...prev, timeline: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select timeline" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="asap">ASAP</SelectItem>
                        <SelectItem value="1-month">Within 1 month</SelectItem>
                        <SelectItem value="2-3-months">2-3 months</SelectItem>
                        <SelectItem value="3-6-months">3-6 months</SelectItem>
                        <SelectItem value="flexible">Flexible</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-4">
                    <Label>Services Needed (select all that apply)</Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {serviceOptions.map((service) => (
                        <div key={service} className="flex items-center space-x-2">
                          <Checkbox
                            id={service}
                            checked={formData.services.includes(service)}
                            onCheckedChange={(checked) => handleServiceChange(service, checked as boolean)}
                          />
                          <Label htmlFor={service} className="text-sm">{service}</Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Project Description *</Label>
                    <Textarea
                      id="description"
                      placeholder="Please describe your project, goals, and any specific requirements..."
                      className="min-h-[120px]"
                      value={formData.description}
                      onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full bg-gradient-primary hover:opacity-90">
                    <Send className="w-4 h-4 mr-2" />
                    Submit Request
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-primary">What Happens Next?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-medium text-foreground">Initial Review</h4>
                    <p className="text-sm text-muted-foreground">We'll review your request within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-medium text-foreground">Consultation Call</h4>
                    <p className="text-sm text-muted-foreground">Schedule a free consultation to discuss details</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-medium text-foreground">Custom Proposal</h4>
                    <p className="text-sm text-muted-foreground">Receive a tailored proposal for your project</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card bg-accent">
              <CardContent className="py-6">
                <h3 className="font-semibold text-accent-foreground mb-2">Need Help?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Have questions about our services? Contact us directly.
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Contact Support
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Request;