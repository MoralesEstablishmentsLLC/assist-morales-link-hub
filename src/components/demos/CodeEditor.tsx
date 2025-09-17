import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Code, Play, Copy, Check } from 'lucide-react';
import { toast } from 'sonner';

const CodeEditor = () => {
  const [code, setCode] = useState(`function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(10));`);
  
  const [output, setOutput] = useState('');
  const [copied, setCopied] = useState(false);

  const runCode = () => {
    try {
      // Capture console.log output
      const logs: string[] = [];
      const originalLog = console.log;
      console.log = (...args) => {
        logs.push(args.join(' '));
      };
      
      // Execute the code
      eval(code);
      
      // Restore console.log
      console.log = originalLog;
      
      setOutput(logs.join('\n') || 'Code executed successfully!');
      toast.success('Code executed successfully!');
    } catch (error) {
      setOutput(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
      toast.error('Code execution failed');
    }
  };

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      toast.success('Code copied to clipboard!');
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      toast.error('Failed to copy code');
    }
  };

  return (
    <Card className="w-full max-w-4xl">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Code className="h-5 w-5 text-primary" />
          Interactive Code Editor
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium">JavaScript Code</label>
              <Button 
                size="sm" 
                variant="outline" 
                onClick={copyCode}
                className="h-8"
              >
                {copied ? (
                  <Check className="h-3 w-3" />
                ) : (
                  <Copy className="h-3 w-3" />
                )}
              </Button>
            </div>
            <Textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="font-mono text-sm min-h-[200px] bg-card"
              placeholder="Enter your JavaScript code here..."
            />
            <Button onClick={runCode} className="w-full">
              <Play className="h-4 w-4 mr-2" />
              Run Code
            </Button>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium">Output</label>
            <div className="bg-dark-section p-4 rounded-md min-h-[200px] font-mono text-sm text-white border">
              <pre className="whitespace-pre-wrap">{output || 'Click "Run Code" to see output'}</pre>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CodeEditor;