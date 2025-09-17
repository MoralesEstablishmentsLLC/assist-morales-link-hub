import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Progress } from '@/components/ui/progress';
import { Mail, Send, CheckCircle, Clock, Users, Zap, Shield, AlertTriangle, Star, Target } from 'lucide-react';
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
  deliverabilityScore: number;
  spamScore: number;
  authenticationStatus: {
    spf: boolean;
    dkim: boolean;
    dmarc: boolean;
  };
  reputation: 'excellent' | 'good' | 'fair' | 'poor';
  inboxPlacement: number;
}

const EmailDemo = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<string>('');
  const [recipientEmail, setRecipientEmail] = useState('');
  const [customSubject, setCustomSubject] = useState('');
  const [customContent, setCustomContent] = useState('');
  const [sentEmails, setSentEmails] = useState<SentEmail[]>([]);
  const [isSending, setIsSending] = useState(false);
  const [spamScore, setSpamScore] = useState(0);
  const [deliverabilityScore, setDeliverabilityScore] = useState(95);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const emailTemplates: EmailTemplate[] = [
    {
      id: 'welcome',
      name: 'Welcome Email (Anti-Spam Optimized)',
      subject: 'Welcome to Our Platform, {{name}}!',
      content: 'Hello {{name}},\n\nThank you for joining our platform. We\'re excited to have you on board.\n\nWhat\'s next?\n• Complete your profile\n• Explore our features\n• Join our community\n\nIf you have questions, our support team is here to help.\n\nBest regards,\nThe Team\n\n---\nYou received this email because you signed up at ourplatform.com\nUnsubscribe: {{unsubscribe_link}}',
      type: 'welcome'
    },
    {
      id: 'newsletter',
      name: 'Newsletter (High Deliverability)',
      subject: '{{month}} Updates: New Features & Community Highlights',
      content: 'Hi {{name}},\n\nHere are this month\'s highlights:\n\n🚀 New Features:\n• Enhanced security dashboard\n• Mobile app improvements\n• API rate limit increases\n\n📊 Community Stats:\n• 10,000+ active users\n• 99.9% uptime this month\n• 500+ feature requests implemented\n\nThank you for being part of our community!\n\nBest,\nThe Team\n\n---\nManage preferences: {{preferences_link}}\nUnsubscribe: {{unsubscribe_link}}',
      type: 'marketing'
    },
    {
      id: 'notification',
      name: 'Security Alert (Priority Delivery)',
      subject: 'Security Update: Action Required for {{name}}',
      content: 'Important Security Notice\n\nHello {{name}},\n\nWe detected unusual activity on your account and have temporarily secured it as a precaution.\n\nRequired Action:\n1. Click the secure link below to verify your identity\n2. Review recent account activity\n3. Update your password if needed\n\nSecure verification link: {{secure_link}}\n\nThis link expires in 24 hours for your security.\n\nIf you didn\'t request this, please contact support immediately.\n\nSecurity Team\n\n---\nThis is an automated security notification from ourplatform.com',
      type: 'notification'
    }
  ];
  
  const analyzeContent = async (content: string, subject: string) => {
    setIsAnalyzing(true);
    
    // Simulate spam analysis
    setTimeout(() => {
      let score = 0;
      const text = (content + ' ' + subject).toLowerCase();
      
      // Spam triggers
      if (text.includes('free') || text.includes('click here') || text.includes('urgent')) score += 2;
      if (text.includes('!!!') || text.includes('$$$')) score += 3;
      if (text.includes('guarantee') || text.includes('limited time')) score += 1;
      if (!text.includes('unsubscribe')) score += 2;
      if (text.length < 50) score += 1;
      
      // Good practices (reduce score)
      if (text.includes('{{name}}')) score -= 1;
      if (text.includes('unsubscribe')) score -= 1;
      if (text.includes('manage preferences')) score -= 1;
      if (content.length > 200 && content.length < 2000) score -= 1;
      
      setSpamScore(Math.max(0, Math.min(10, score)));
      setDeliverabilityScore(Math.max(70, 100 - (score * 5)));
      setIsAnalyzing(false);
    }, 1500);
  };

  const handleAnalyze = () => {
    const content = customContent || selectedTemplateData?.content || '';
    const subject = customSubject || selectedTemplateData?.subject || '';
    analyzeContent(content, subject);
  };

  const handleSendEmail = async () => {
    if (!recipientEmail || (!selectedTemplate && !customSubject)) {
      toast.error('Please fill in all required fields');
      return;
    }

    setIsSending(true);

    // Simulate email sending with anti-spam analysis
    setTimeout(() => {
      const template = emailTemplates.find(t => t.id === selectedTemplate);
      const finalScore = Math.max(spamScore - 2, 0); // Bonus for our anti-spam system
      const finalDeliverability = Math.min(deliverabilityScore + 5, 100);
      
      const newEmail: SentEmail = {
        id: Date.now().toString(),
        to: recipientEmail,
        subject: customSubject || template?.subject || 'Custom Email',
        template: template?.name || 'Custom',
        status: 'pending',
        timestamp: new Date(),
        deliverabilityScore: finalDeliverability,
        spamScore: finalScore,
        authenticationStatus: {
          spf: true,
          dkim: true,
          dmarc: true
        },
        reputation: finalDeliverability > 95 ? 'excellent' : finalDeliverability > 85 ? 'good' : 'fair',
        inboxPlacement: finalDeliverability
      };

      setSentEmails(prev => [newEmail, ...prev]);
      toast.success(`Email queued! Deliverability Score: ${finalDeliverability}%`);

      // Simulate delivery status updates
      setTimeout(() => {
        setSentEmails(prev => prev.map(email => 
          email.id === newEmail.id ? { ...email, status: 'sent' } : email
        ));
        toast.success(`Email sent successfully! Inbox placement: ${newEmail.inboxPlacement}%`);
      }, 1500);

      setTimeout(() => {
        setSentEmails(prev => prev.map(email => 
          email.id === newEmail.id ? { ...email, status: 'delivered' } : email
        ));
        toast.success('Email delivered to inbox (not spam folder)!');
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

  const getDeliverabilityColor = (score: number) => {
    if (score >= 95) return 'text-green-600';
    if (score >= 85) return 'text-blue-600';
    if (score >= 75) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getSpamScoreColor = (score: number) => {
    if (score <= 2) return 'text-green-600';
    if (score <= 4) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getReputationBadge = (reputation: string) => {
    const colors = {
      excellent: 'bg-green-500/10 text-green-600',
      good: 'bg-blue-500/10 text-blue-600',
      fair: 'bg-yellow-500/10 text-yellow-600',
      poor: 'bg-red-500/10 text-red-600'
    };
    return colors[reputation as keyof typeof colors] || colors.fair;
  };

  const selectedTemplateData = emailTemplates.find(t => t.id === selectedTemplate);

  return (
    <Card className="w-full max-w-6xl">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Shield className="h-5 w-5 text-primary" />
          Anti-Spam Email System Demo
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Email Composer */}
          <div className="space-y-4">
            <h3 className="font-semibold flex items-center gap-2">
              <Zap className="h-4 w-4 text-primary" />
              Compose & Analyze
            </h3>
            
            <div className="space-y-4 p-4 border rounded-lg bg-card">
              <div className="space-y-2">
                <label className="text-sm font-medium">Email Template</label>
                <Select value={selectedTemplate} onValueChange={setSelectedTemplate}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose optimized template" />
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

              <div className="grid grid-cols-2 gap-2">
                <Button 
                  onClick={handleAnalyze} 
                  disabled={isAnalyzing}
                  variant="outline"
                  className="flex items-center gap-2"
                >
                  {isAnalyzing ? (
                    <Clock className="h-4 w-4 animate-spin" />
                  ) : (
                    <Target className="h-4 w-4" />
                  )}
                  {isAnalyzing ? 'Analyzing...' : 'Analyze'}
                </Button>
                
                <Button 
                  onClick={handleSendEmail} 
                  disabled={isSending}
                  className="flex items-center gap-2"
                >
                  {isSending ? (
                    <Clock className="h-4 w-4 animate-spin" />
                  ) : (
                    <Send className="h-4 w-4" />
                  )}
                  {isSending ? 'Sending...' : 'Send'}
                </Button>
              </div>
            </div>
          </div>

          {/* Deliverability Analysis */}
          <div className="space-y-4">
            <h3 className="font-semibold flex items-center gap-2">
              <Target className="h-4 w-4 text-primary" />
              Deliverability Analysis
            </h3>
            
            <div className="space-y-4 p-4 border rounded-lg bg-card">
              {/* Spam Score */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium">Spam Risk Score</label>
                  <span className={`text-sm font-bold ${getSpamScoreColor(spamScore)}`}>
                    {spamScore}/10
                  </span>
                </div>
                <Progress value={(10 - spamScore) * 10} className="h-2" />
                <p className="text-xs text-muted-foreground">
                  {spamScore <= 2 ? 'Excellent - Very low spam risk' :
                   spamScore <= 4 ? 'Good - Low spam risk' :
                   spamScore <= 6 ? 'Fair - Moderate spam risk' : 'High - Likely to be flagged'}
                </p>
              </div>

              {/* Deliverability Score */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium">Inbox Placement</label>
                  <span className={`text-sm font-bold ${getDeliverabilityColor(deliverabilityScore)}`}>
                    {deliverabilityScore}%
                  </span>
                </div>
                <Progress value={deliverabilityScore} className="h-2" />
                <p className="text-xs text-muted-foreground">
                  Predicted inbox delivery rate
                </p>
              </div>

              {/* Authentication Status */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Email Authentication</label>
                <div className="flex gap-2">
                  <Badge className="bg-green-500/10 text-green-600">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    SPF
                  </Badge>
                  <Badge className="bg-green-500/10 text-green-600">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    DKIM
                  </Badge>
                  <Badge className="bg-green-500/10 text-green-600">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    DMARC
                  </Badge>
                </div>
              </div>

              {/* Content Tips */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Optimization Tips</label>
                <div className="text-xs space-y-1">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Personalization variables included</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Unsubscribe link present</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Professional sender reputation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Email Activity & Reputation */}
          <div className="space-y-4">
            <h3 className="font-semibold flex items-center gap-2">
              <Users className="h-4 w-4 text-primary" />
              Reputation & Activity
            </h3>
            
            {/* Sender Reputation */}
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-card p-3 rounded border text-center">
                <div className="text-lg font-bold text-green-600">98.5%</div>
                <div className="text-xs text-muted-foreground">Sender Score</div>
              </div>
              <div className="bg-card p-3 rounded border text-center">
                <Badge className="bg-green-500/10 text-green-600">
                  <Star className="h-3 w-3 mr-1" />
                  Excellent
                </Badge>
                <div className="text-xs text-muted-foreground mt-1">Reputation</div>
              </div>
            </div>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-card p-3 rounded border text-center">
                <div className="text-lg font-bold text-primary">{sentEmails.length}</div>
                <div className="text-xs text-muted-foreground">Sent</div>
              </div>
              <div className="bg-card p-3 rounded border text-center">
                <div className="text-lg font-bold text-green-600">
                  {sentEmails.filter(e => e.status === 'delivered').length}
                </div>
                <div className="text-xs text-muted-foreground">Inbox</div>
              </div>
              <div className="bg-card p-3 rounded border text-center">
                <div className="text-lg font-bold text-red-600">0</div>
                <div className="text-xs text-muted-foreground">Spam</div>
              </div>
            </div>

            {/* Recent Emails */}
            <div className="space-y-2">
              <h4 className="font-medium text-sm">Recent Deliveries</h4>
              <div className="space-y-2 max-h-64 overflow-y-auto">
                {sentEmails.length === 0 ? (
                  <div className="text-center py-8 text-muted-foreground">
                    <Shield className="h-8 w-8 mx-auto mb-2 opacity-50" />
                    <p className="text-sm">No emails sent yet</p>
                    <p className="text-xs">Send your first anti-spam email to see metrics</p>
                  </div>
                ) : (
                  sentEmails.map((email) => (
                    <div key={email.id} className="flex items-center gap-3 p-3 border rounded text-sm">
                      {getStatusIcon(email.status)}
                      <div className="flex-1 min-w-0">
                        <div className="font-medium truncate">{email.to}</div>
                        <div className="text-muted-foreground truncate text-xs">{email.subject}</div>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge className={getReputationBadge(email.reputation)} variant="secondary">
                            {email.deliverabilityScore}% inbox
                          </Badge>
                          <Badge className={getSpamScoreColor(email.spamScore) === 'text-green-600' ? 'bg-green-500/10 text-green-600' : 'bg-red-500/10 text-red-600'} variant="secondary">
                            Spam: {email.spamScore}/10
                          </Badge>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge className={email.status === 'delivered' ? 'bg-green-500/10 text-green-600' : email.status === 'sent' ? 'bg-blue-500/10 text-blue-600' : 'bg-yellow-500/10 text-yellow-600'} variant="secondary">
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

        {/* Anti-Spam Features Showcase */}
        <div className="bg-muted/50 p-6 rounded-lg">
          <h4 className="font-medium mb-4 flex items-center gap-2">
            <Shield className="h-4 w-4 text-primary" />
            Anti-Spam & Deliverability Features
          </h4>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            <div className="space-y-2">
              <div className="flex items-center gap-2 font-medium">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Authentication
              </div>
              <ul className="text-xs text-muted-foreground space-y-1 ml-6">
                <li>• SPF Records</li>
                <li>• DKIM Signing</li>
                <li>• DMARC Policy</li>
              </ul>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 font-medium">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Content Optimization
              </div>
              <ul className="text-xs text-muted-foreground space-y-1 ml-6">
                <li>• Spam Score Analysis</li>
                <li>• Content Filtering</li>
                <li>• Template Optimization</li>
              </ul>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 font-medium">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Reputation Management
              </div>
              <ul className="text-xs text-muted-foreground space-y-1 ml-6">
                <li>• Sender Reputation</li>
                <li>• IP Warming</li>
                <li>• Engagement Tracking</li>
              </ul>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 font-medium">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Compliance
              </div>
              <ul className="text-xs text-muted-foreground space-y-1 ml-6">
                <li>• Unsubscribe Links</li>
                <li>• CAN-SPAM Compliance</li>
                <li>• GDPR Ready</li>
              </ul>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default EmailDemo;