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
  return <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Mail className="h-5 w-5 text-primary" />
          Resend Email Service
        </CardTitle>
        <CardDescription>Reliable email delivery for businesses. Built for scale and designed for simplicity.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* How Resend Works */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">How Resend Works</h3>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="p-4 bg-muted rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Code2 className="h-5 w-5 text-primary" />
                <span className="font-medium">Simple API</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Send emails with a simple REST API or SDK. No complex setup required.
              </p>
            </div>
            
            <div className="p-4 bg-muted rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="h-5 w-5 text-primary" />
                <span className="font-medium">Fast Delivery</span>
              </div>
              <p className="text-sm text-muted-foreground">
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
          <h3 className="text-lg font-semibold">Try it Out (Demo)</h3>
          <div className="grid gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">To</label>
              <Input type="email" placeholder="recipient@example.com" value={recipient} onChange={e => setRecipient(e.target.value)} />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Subject</label>
              <Input placeholder="Email subject" value={subject} onChange={e => setSubject(e.target.value)} />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Content</label>
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
        {emailSent && <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
            <div className="flex items-center gap-2 text-green-700">
              <CheckCircle className="h-5 w-5" />
              <span className="font-medium">Email sent successfully!</span>
            </div>
            <p className="text-sm text-green-600 mt-1">
              In a real application, this would be sent via Resend's API to {recipient}
            </p>
          </div>}

        {/* Features */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Key Features</h3>
          <div className="grid gap-2">
            {["99.9% uptime SLA", "React Email templates", "Webhooks for tracking", "Analytics dashboard", "Custom domains", "Bulk sending", "Rate limiting protection", "GDPR compliant"].map((feature, index) => <div key={index} className="flex items-center gap-2 text-sm">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>{feature}</span>
              </div>)}
          </div>
        </div>
      </CardContent>
    </Card>;
};