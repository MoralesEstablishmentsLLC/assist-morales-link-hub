import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { Mail, Send, CheckCircle, Clock, Code2, Zap, Shield } from 'lucide-react';
export const EmailDemo = () => {
  const [recipient, setRecipient] = useState('');
  const [subject, setSubject] = useState('Welcome to our platform!');
  const [content, setContent] = useState('Thank you for joining us. We\'re excited to have you on board!');
  const [isSending, setIsSending] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const {
    toast
  } = useToast();
  const handleSendEmail = async () => {
    if (!recipient || !subject || !content) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields.",
        variant: "destructive"
      });
      return;
    }
    setIsSending(true);

    // Simulate sending delay
    setTimeout(() => {
      setIsSending(false);
      setEmailSent(true);
      toast({
        title: "Email Sent Successfully",
        description: "Your email has been delivered with Resend."
      });
    }, 2000);
  };
  return <Card className="w-full max-w-4xl mx-auto bg-dark-section border-border">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-blue-heading">
          <Mail className="h-5 w-5 text-primary" />
          Resend Email Service
        </CardTitle>
        <CardDescription className="text-white">Reliable email delivery for businesses. Built for scale and designed for simplicity.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* How Resend Works */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-blue-heading">How Resend Works</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="p-4 bg-background/30 border border-border rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Code2 className="h-5 w-5 text-primary" />
                <span className="font-medium text-white">Simple API</span>
              </div>
              <p className="text-sm text-white/80">
                Send emails with a simple REST API or SDK. No complex setup required.
              </p>
            </div>
            
            <div className="p-4 bg-background/30 border border-border rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="h-5 w-5 text-primary" />
                <span className="font-medium text-white">Fast Delivery</span>
              </div>
              <p className="text-sm text-white/80">
                Built-in performance optimization ensures your emails are delivered quickly.
              </p>
            </div>
            
            
          </div>
        </div>

        {/* Code Example */}
        <div className="space-y-4">
          
          
        </div>

        {/* Interactive Demo */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-blue-heading">Try it Out (Demo)</h3>
          <div className="grid gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-white">To</label>
              <Input type="email" placeholder="recipient@example.com" value={recipient} onChange={e => setRecipient(e.target.value)} />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-white">Subject</label>
              <Input placeholder="Email subject" value={subject} onChange={e => setSubject(e.target.value)} />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-white">Content</label>
              <Textarea placeholder="Email content..." value={content} onChange={e => setContent(e.target.value)} className="min-h-[100px]" />
            </div>

            <Button onClick={handleSendEmail} disabled={isSending} className="w-full">
              {isSending ? <>
                  <Clock className="h-4 w-4 mr-2 animate-spin" />
                  Sending via Resend...
                </> : <>
                  <Send className="h-4 w-4 mr-2" />
                  Send Email
                </>}
            </Button>
          </div>
        </div>

        {/* Result */}
        {emailSent && <div className="p-4 bg-background/30 border border-primary rounded-lg">
            <div className="flex items-center gap-2 text-primary">
              <CheckCircle className="h-5 w-5" />
              <span className="font-medium">Email sent successfully!</span>
            </div>
            <p className="text-sm text-white/80 mt-1">
              In a real application, this would be sent via Resend's API to {recipient}
            </p>
          </div>}

        {/* Features */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-blue-heading">Key Features</h3>
          <div className="grid gap-2">
            {["99.9% uptime SLA", "React Email templates", "Webhooks for tracking", "Analytics dashboard", "Custom domains", "Bulk sending", "Rate limiting protection", "GDPR compliant"].map((feature, index) => <div key={index} className="flex items-center gap-2 text-sm">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span className="text-white">{feature}</span>
              </div>)}
          </div>
        </div>
      </CardContent>
    </Card>;
};