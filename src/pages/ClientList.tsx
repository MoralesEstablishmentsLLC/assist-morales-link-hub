import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Building2, Globe, Users } from "lucide-react";

const ClientList = () => {
  const clients = [
    {
      name: "Private Practice Therapy",
      industry: "Healthcare & Mental Health",
      description: "Experienced therapist providing comprehensive mental health services with multiple therapy approaches including CBT, attachment-based therapy, and family counseling",
      website: "calendar.moralesassist.com",
      services: ["Online Booking System", "Appointment Management", "Contact Forms"]
    },
    {
      name: "Confidential Investigations",
      industry: "Security & Investigation",
      description: "Professional private investigation services providing discreet and confidential solutions for personal and corporate clients",
      website: "Coming Soon",
      services: ["Secure Contact Forms", "Client Portal", "Privacy-Focused Design"]
    },
    {
      name: "FynCom",
      industry: "Telecommunications & Privacy",
      description: "Revolutionary platform that helps users earn money while blocking spam calls and messages, turning unwanted communications into revenue opportunities",
      website: "fyncom.com",
      services: ["Web Platform Development", "Payment Integration", "Spam Detection System"]
    }
  ];

  const industries = [...new Set(clients.map(client => client.industry))];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12 text-center bg-primary p-8 rounded-lg text-primary-foreground">
          <h1 className="text-4xl font-bold text-blue-300 mb-4">Client Directory</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our network of diverse businesses and companies across various industries. 
            Each client represents a successful partnership in digital transformation.
          </p>
          
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {industries.map((industry) => (
              <Badge key={industry} variant="secondary" className="text-sm">
                {industry}
              </Badge>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clients.map((client, index) => (
            <Card key={index} className="shadow-card hover:shadow-elegant transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg text-foreground">{client.name}</CardTitle>
                    <Badge variant="outline" className="mt-2">
                      {client.industry}
                    </Badge>
                  </div>
                  <Building2 className="w-6 h-6 text-primary" />
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm">{client.description}</p>
                
                <div className="flex items-center gap-2 text-sm">
                  <Globe className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">{client.website}</span>
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-medium text-foreground">Services Provided:</p>
                  <div className="flex flex-wrap gap-1">
                    {client.services.map((service, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {service}
                      </Badge>
                    ))}
                  </div>
                </div>

                {client.website !== "Coming Soon" ? (
                  <a 
                    href={`https://${client.website}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Button variant="outline" size="sm" className="w-full">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Visit Website
                    </Button>
                  </a>
                ) : (
                  <Button variant="outline" size="sm" className="w-full" disabled>
                    <Globe className="w-4 h-4 mr-2" />
                    Website Coming Soon
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="shadow-card bg-gradient-primary text-white">
            <CardContent className="py-12">
              <Users className="w-12 h-12 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-4">Join Our Network</h2>
              <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
                Ready to transform your business digitally? Connect with our network of successful 
                businesses and take your company to the next level.
              </p>
              <Button variant="secondary" size="lg">
                Get Started Today
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default ClientList;