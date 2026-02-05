import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Edit3, Globe, Upload, Save } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
const EditSite = () => {
  const {
    toast
  } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    siteName: "",
    siteUrl: "",
    requestType: "",
    description: "",
    priority: "medium"
  });
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // Prepare email data for the existing email function
      const emailData = {
        name: `Edit Request - ${formData.siteName}`,
        email: "system@editrequest.com",
        // System email since this is an edit request
        company: formData.siteName,
        phone: "",
        projectType: "Site Edit Request",
        budget: formData.priority === "high" ? "ASAP" : formData.priority === "medium" ? "Within a week" : "Can wait 1-2 weeks",
        timeline: formData.priority === "high" ? "24-48 hours" : formData.priority === "medium" ? "Within a week" : "1-2 weeks",
        description: `Site URL: ${formData.siteUrl}\n\nType of Changes: ${formData.requestType}\n\nPriority: ${formData.priority}\n\nDetailed Description:\n${formData.description}`,
        services: [formData.requestType]
      };
      const {
        data,
        error
      } = await supabase.functions.invoke('send-request-email', {
        body: emailData
      });
      if (error) {
        throw error;
      }
      toast({
        title: "Edit Request Submitted Successfully!",
        description: "We've received your edit request and will review it within 24 hours."
      });

      // Reset form
      setFormData({
        siteName: "",
        siteUrl: "",
        requestType: "",
        description: "",
        priority: "medium"
      });
    } catch (error: any) {
      console.error('Error submitting edit request:', error);
      toast({
        title: "Error Submitting Request",
        description: "There was an issue sending your request. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };
  return <div className="min-h-screen bg-gradient-hero text-white">
      
      {/* Content Section with Dark Background like Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-hero text-white min-h-screen">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-brand-green">
              Edit Your Site
            </h1>
            <p className="text-lg max-w-2xl mx-auto text-brand-green">
              Welcome back! Submit changes to your existing website or request new features. 
              Our team will review and implement your updates promptly.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center transition-all duration-500 hover:bg-gradient-to-br hover:from-blue-500/10 hover:to-purple-500/10 hover:border-blue-400/30 hover:shadow-lg hover:shadow-blue-500/20 group">
              <CardHeader>
                <Edit3 className="w-12 h-12 mx-auto text-primary mb-4 transition-colors duration-300 group-hover:text-blue-400" />
                <CardTitle className="transition-colors duration-300 group-hover:text-blue-300">Content Updates</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground transition-colors duration-300 group-hover:text-blue-200">
                  Text changes, image updates, new pages, or content modifications
                </p>
              </CardContent>
            </Card>

            <Card className="text-center transition-all duration-500 hover:bg-gradient-to-br hover:from-green-500/10 hover:to-emerald-500/10 hover:border-green-400/30 hover:shadow-lg hover:shadow-green-500/20 group">
              <CardHeader>
                <Globe className="w-12 h-12 mx-auto text-primary mb-4 transition-colors duration-300 group-hover:text-green-400" />
                <CardTitle className="transition-colors duration-300 group-hover:text-green-300">Feature Additions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground transition-colors duration-300 group-hover:text-green-200">
                  New functionality, integrations, forms, or interactive elements
                </p>
              </CardContent>
            </Card>

            <Card className="text-center transition-all duration-500 hover:bg-gradient-to-br hover:from-orange-500/10 hover:to-red-500/10 hover:border-orange-400/30 hover:shadow-lg hover:shadow-orange-500/20 group">
              <CardHeader>
                <Upload className="w-12 h-12 mx-auto text-primary mb-4 transition-colors duration-300 group-hover:text-orange-400" />
                <CardTitle className="transition-colors duration-300 group-hover:text-orange-300">Design Changes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground transition-colors duration-300 group-hover:text-orange-200">
                  Layout updates, color schemes, responsive improvements
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Edit3 className="w-5 h-5" />
                Site Edit Request Form
              </CardTitle>
              <CardDescription>
                Provide details about the changes you'd like to make to your website
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="siteName">Site/Project Name *</Label>
                    <Input id="siteName" value={formData.siteName} onChange={e => handleInputChange("siteName", e.target.value)} placeholder="Enter your site name" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="siteUrl">Current Site URL *</Label>
                    <Input id="siteUrl" type="url" value={formData.siteUrl} onChange={e => handleInputChange("siteUrl", e.target.value)} placeholder="https://yoursite.com" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="requestType">Type of Changes *</Label>
                  <Select onValueChange={value => handleInputChange("requestType", value)} required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select the type of changes needed" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="content">Content Updates</SelectItem>
                      <SelectItem value="design">Design Changes</SelectItem>
                      <SelectItem value="features">New Features</SelectItem>
                      <SelectItem value="bugs">Bug Fixes</SelectItem>
                      <SelectItem value="optimization">Performance/SEO</SelectItem>
                      <SelectItem value="maintenance">General Maintenance</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="priority">Priority Level</Label>
                  <Select onValueChange={value => handleInputChange("priority", value)} defaultValue="medium">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary">Low</Badge>
                          <span>Can wait 1-2 weeks</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="medium">
                        <div className="flex items-center gap-2">
                          <Badge variant="outline">Medium</Badge>
                          <span>Within a week</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="high">
                        <div className="flex items-center gap-2">
                          <Badge variant="destructive">High</Badge>
                          <span>ASAP (24-48 hours)</span>
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Detailed Description *</Label>
                  <Textarea id="description" value={formData.description} onChange={e => handleInputChange("description", e.target.value)} placeholder="Please describe the specific changes you'd like to make. Include any relevant details, specific pages affected, design preferences, or functionality requirements." className="min-h-32" required />
                </div>

                <div className="bg-muted/50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">What happens next?</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• We'll review your request within 24 hours</li>
                    <li>• You'll receive a timeline and cost estimate (if applicable)</li>
                    <li>• We'll implement approved changes and send you a preview</li>
                    <li>• Changes go live after your final approval</li>
                  </ul>
                </div>

                <Button type="submit" size="lg" className="w-full bg-gradient-primary hover:opacity-90" disabled={isSubmitting}>
                  <Save className="w-4 h-4 mr-2" />
                  {isSubmitting ? "Submitting..." : "Submit Edit Request"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>;
};
export default EditSite;