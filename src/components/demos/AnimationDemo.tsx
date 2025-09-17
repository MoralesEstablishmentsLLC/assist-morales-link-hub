import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Play, Pause, RotateCcw } from 'lucide-react';

const AnimationDemo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState([1]);
  const [shape, setShape] = useState('circle');

  const toggleAnimation = () => {
    setIsPlaying(!isPlaying);
  };

  const reset = () => {
    setIsPlaying(false);
  };

  const shapes = [
    { name: 'circle', component: 'w-16 h-16 bg-primary rounded-full' },
    { name: 'square', component: 'w-16 h-16 bg-secondary' },
    { name: 'triangle', component: 'w-0 h-0 border-l-8 border-r-8 border-b-16 border-transparent border-b-accent' }
  ];

  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Play className="h-5 w-5 text-primary" />
          CSS Animation Showcase
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="bg-gradient-to-r from-background to-card p-8 rounded-lg border min-h-[200px] flex items-center justify-center overflow-hidden">
          <div
            className={`${shapes.find(s => s.name === shape)?.component} transition-all duration-300 ${
              isPlaying ? 'animate-bounce' : ''
            }`}
            style={{
              animationDuration: `${2 / speed[0]}s`,
              transform: isPlaying ? 'translateX(100px) rotate(360deg)' : 'translateX(0) rotate(0deg)'
            }}
          />
        </div>
        
        <div className="space-y-4">
          <div className="flex gap-2 justify-center">
            {shapes.map((s) => (
              <Button
                key={s.name}
                size="sm"
                variant={shape === s.name ? 'default' : 'outline'}
                onClick={() => setShape(s.name)}
                className="capitalize"
              >
                {s.name}
              </Button>
            ))}
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium">Speed: {speed[0]}x</label>
            <Slider
              value={speed}
              onValueChange={setSpeed}
              max={3}
              min={0.5}
              step={0.5}
              className="w-full"
            />
          </div>
          
          <div className="flex gap-2 justify-center">
            <Button onClick={toggleAnimation} className="flex items-center gap-2">
              {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              {isPlaying ? 'Pause' : 'Play'}
            </Button>
            <Button onClick={reset} variant="outline" className="flex items-center gap-2">
              <RotateCcw className="h-4 w-4" />
              Reset
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AnimationDemo;