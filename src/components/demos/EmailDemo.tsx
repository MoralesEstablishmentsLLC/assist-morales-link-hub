import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Mail, Send, CheckCircle, Clock, Users, Zap } from 'lucide-react';
import { toast } from 'sonner';

interface EmailTemplate {
  id: string;
  name: string;
  subject: string;
  content: string;
  type: 'marketing' | 'notification' | 'welcome';
}

interface SentEmail {
  id: string;
  to: string;
  subject: string;
  template: string;
  status: 'sent' | 'pending' | 'delivered';
  timestamp: Date;
}

const EmailDemo = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<string>('');
  const [recipientEmail, setRecipientEmail] = useState('');
  const [customSubject, setCustomSubject] = useState('');
  const [customContent, setCustomContent] = useState('');
  const [sentEmails, setSentEmails] = useState<SentEmail[]>([]);
  const [isSending, setIsSending] = useState(false);

  const emailTemplates: EmailTemplate[] = [
    {
      id: 'welcome',
      name: 'Welcome Email',
      subject: 'Welcome to Our Platform!',
      content: 'Hi {{name}},\n\nWelcome to our platform! We\'re excited to have you on board.\n\nBest regards,\nThe Team',
      type: 'welcome'
    },
    {
      id: 'newsletter',
      name: 'Newsletter',
      subject: 'Monthly Newsletter - {{month}}',
      content: 'Here are the latest updates and news from our platform...\n\n{{content}}\n\nStay tuned for more!',
      type: 'marketing'
    },
    {
      id: 'notification',
      name: 'System Notification',
      subject: 'System Update Alert',
      content: 'Hello,\n\nWe wanted to inform you about an important system update.\n\n{{details}}\n\nThank you for your attention.',
      type: 'notification'
    }
  ];

  const handleSendEmail = async () => {
    if (!recipientEmail || (!selectedTemplate && !customSubject)) {
      toast.error('Please fill in all required fields');
      return;
    }

    setIsSending(true);

    // Simulate email sending process
    setTimeout(() => {
      const template = emailTemplates.find(t => t.id === selectedTemplate);
      const newEmail: SentEmail = {
        id: Date.now().toString(),
        to: recipientEmail,
        subject: customSubject || template?.subject || 'Custom Email',
        template: template?.name || 'Custom',
        status: 'pending',
        timestamp: new Date()
      };

      setSentEmails(prev => [newEmail, ...prev]);
      toast.success('Email queued for sending!');

      // Simulate delivery status updates
      setTimeout(() => {
        setSentEmails(prev => prev.map(email => 
          email.id === newEmail.id ? { ...email, status: 'sent' } : email
        ));
        toast.success('Email sent successfully!');
      }, 1500);

      setTimeout(() => {
        setSentEmails(prev => prev.map(email => 
          email.id === newEmail.id ? { ...email, status: 'delivered' } : email
        ));
        toast.success('Email delivered!');
      }, 3000);

      // Reset form
      setRecipientEmail('');
      setCustomSubject('');
      setCustomContent('');
      setSelectedTemplate('');
      setIsSending(false);
    }, 1000);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending': return <Clock className="h-4 w-4 text-yellow-500" />;
      case 'sent': return <Send className="h-4 w-4 text-blue-500" />;
      case 'delivered': return <CheckCircle className="h-4 w-4 text-green-500" />;
      default: return <Mail className="h-4 w-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-500/10 text-yellow-600';
      case 'sent': return 'bg-blue-500/10 text-blue-600';
      case 'delivered': return 'bg-green-500/10 text-green-600';
      default: return 'bg-gray-500/10 text-gray-600';
    }
  };

  const selectedTemplateData = emailTemplates.find(t => t.id === selectedTemplate);

  return (
    <Card className="w-full max-w-6xl">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Mail className="h-5 w-5 text-primary" />
          Automated Email System Demo
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Email Composer */}
          <div className="space-y-4">
            <h3 className="font-semibold flex items-center gap-2">
              <Zap className="h-4 w-4 text-primary" />
              Compose Email
            </h3>
            
            <div className="space-y-4 p-4 border rounded-lg bg-card">
              <div className="space-y-2">
                <label className="text-sm font-medium">Email Template</label>
                <Select value={selectedTemplate} onValueChange={setSelectedTemplate}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose a template or create custom" />
                  </SelectTrigger>
                  <SelectContent>
                    {emailTemplates.map((template) => (
                      <SelectItem key={template.id} value={template.id}>
                        {template.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Recipient Email</label>
                <Input
                  type="email"
                  value={recipientEmail}
                  onChange={(e) => setRecipientEmail(e.target.value)}
                  placeholder="user@example.com"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Subject</label>
                <Input
                  value={customSubject || selectedTemplateData?.subject || ''}
                  onChange={(e) => setCustomSubject(e.target.value)}
                  placeholder="Email subject line"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Content</label>
                <Textarea
                  value={customContent || selectedTemplateData?.content || ''}
                  onChange={(e) => setCustomContent(e.target.value)}
                  placeholder="Email content..."
                  className="min-h-[120px]"
                />
              </div>

              <Button 
                onClick={handleSendEmail} 
                disabled={isSending}
                className="w-full flex items-center gap-2"
              >
                {isSending ? (
                  <Clock className="h-4 w-4 animate-spin" />
                ) : (
                  <Send className="h-4 w-4" />
                )}
                {isSending ? 'Sending...' : 'Send Email'}
              </Button>
            </div>
          </div>

          {/* Email Templates & Analytics */}
          <div className="space-y-4">
            <h3 className="font-semibold flex items-center gap-2">
              <Users className="h-4 w-4 text-primary" />
              Templates & Analytics
            </h3>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-card p-3 rounded border text-center">
                <div className="text-lg font-bold text-primary">{sentEmails.length}</div>
                <div className="text-xs text-muted-foreground">Total Sent</div>
              </div>
              <div className="bg-card p-3 rounded border text-center">
                <div className="text-lg font-bold text-green-600">
                  {sentEmails.filter(e => e.status === 'delivered').length}
                </div>
                <div className="text-xs text-muted-foreground">Delivered</div>
              </div>
              <div className="bg-card p-3 rounded border text-center">
                <div className="text-lg font-bold text-yellow-600">
                  {sentEmails.filter(e => e.status === 'pending').length}
                </div>
                <div className="text-xs text-muted-foreground">Pending</div>
              </div>
            </div>

            {/* Recent Emails */}
            <div className="space-y-2">
              <h4 className="font-medium text-sm">Recent Email Activity</h4>
              <div className="space-y-2 max-h-64 overflow-y-auto">
                {sentEmails.length === 0 ? (
                  <div className="text-center py-8 text-muted-foreground">
                    <Mail className="h-8 w-8 mx-auto mb-2 opacity-50" />
                    <p className="text-sm">No emails sent yet</p>
                    <p className="text-xs">Send your first email to see activity here</p>
                  </div>
                ) : (
                  sentEmails.map((email) => (
                    <div key={email.id} className="flex items-center gap-3 p-2 border rounded text-sm">
                      {getStatusIcon(email.status)}
                      <div className="flex-1 min-w-0">
                        <div className="font-medium truncate">{email.to}</div>
                        <div className="text-muted-foreground truncate">{email.subject}</div>
                      </div>
                      <div className="text-right">
                        <Badge className={getStatusColor(email.status)} variant="secondary">
                          {email.status}
                        </Badge>
                        <div className="text-xs text-muted-foreground mt-1">
                          {email.timestamp.toLocaleTimeString([], { 
                            hour: '2-digit', 
                            minute: '2-digit' 
                          })}
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Features Showcase */}
        <div className="bg-muted/50 p-4 rounded-lg">
          <h4 className="font-medium mb-3">Email System Features</h4>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              Template Management
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              Variable Substitution
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              Delivery Tracking
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              Bulk Operations
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default EmailDemo;