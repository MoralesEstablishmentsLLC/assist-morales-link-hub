import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Smartphone, Tablet, Monitor } from 'lucide-react';

const ResponsiveDemo = () => {
  const [viewMode, setViewMode] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');

  const getViewportClass = () => {
    switch (viewMode) {
      case 'mobile': return 'w-80 h-96';
      case 'tablet': return 'w-96 h-80';
      default: return 'w-full h-96';
    }
  };

  const getContentLayout = () => {
    switch (viewMode) {
      case 'mobile': return 'flex-col space-y-2';
      case 'tablet': return 'grid grid-cols-2 gap-2';
      default: return 'grid grid-cols-4 gap-4';
    }
  };

  return (
    <Card className="w-full max-w-5xl">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Monitor className="h-5 w-5 text-primary" />
          Responsive Design Demo
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Viewport Controls */}
        <div className="flex gap-2 justify-center">
          <Button
            size="sm"
            variant={viewMode === 'mobile' ? 'default' : 'outline'}
            onClick={() => setViewMode('mobile')}
            className="flex items-center gap-2"
          >
            <Smartphone className="h-4 w-4" />
            Mobile
          </Button>
          <Button
            size="sm"
            variant={viewMode === 'tablet' ? 'default' : 'outline'}
            onClick={() => setViewMode('tablet')}
            className="flex items-center gap-2"
          >
            <Tablet className="h-4 w-4" />
            Tablet
          </Button>
          <Button
            size="sm"
            variant={viewMode === 'desktop' ? 'default' : 'outline'}
            onClick={() => setViewMode('desktop')}
            className="flex items-center gap-2"
          >
            <Monitor className="h-4 w-4" />
            Desktop
          </Button>
        </div>

        {/* Viewport Preview */}
        <div className="flex justify-center">
          <div className={`${getViewportClass()} border-2 border-border rounded-lg bg-background p-4 transition-all duration-500 overflow-hidden`}>
            {/* Sample Layout */}
            <div className="h-full space-y-4">
              {/* Header */}
              <div className="bg-primary h-12 rounded flex items-center justify-center text-primary-foreground text-sm font-medium">
                Header
              </div>
              
              {/* Content Grid */}
              <div className={`${getContentLayout()} h-full`}>
                <div className="bg-card rounded border flex items-center justify-center text-sm">
                  Card 1
                </div>
                <div className="bg-card rounded border flex items-center justify-center text-sm">
                  Card 2
                </div>
                <div className="bg-card rounded border flex items-center justify-center text-sm">
                  Card 3
                </div>
                <div className="bg-card rounded border flex items-center justify-center text-sm">
                  Card 4
                </div>
              </div>
              
              {/* Footer */}
              <div className="bg-secondary h-8 rounded flex items-center justify-center text-secondary-foreground text-xs">
                Footer
              </div>
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="text-center text-sm text-muted-foreground">
          <p>
            Current viewport: <span className="font-medium capitalize">{viewMode}</span>
            {viewMode === 'mobile' && ' (320px width)'}
            {viewMode === 'tablet' && ' (768px width)'}
            {viewMode === 'desktop' && ' (Full width)'}
          </p>
          <p className="mt-1">
            Notice how the layout adapts automatically to different screen sizes
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ResponsiveDemo;