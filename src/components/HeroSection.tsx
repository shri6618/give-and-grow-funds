
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-brand-light to-background py-16 md:py-24">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Raise Funds for <span className="gradient-text">Causes</span> That Matter
            </h1>
            <p className="text-lg md:text-xl mb-8 text-muted-foreground">
              Empowering individuals to create fundraising campaigns and collect donations directly through UPI payments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="text-base">
                <Link to="/campaigns">Discover Campaigns</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base">
                <Link to="/register">Start Fundraising</Link>
              </Button>
            </div>
            
            <div className="mt-12 grid grid-cols-3 gap-8">
              <div className="text-center">
                <p className="text-3xl font-bold gradient-text">10k+</p>
                <p className="text-sm text-muted-foreground">Campaigns</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold gradient-text">₹20M+</p>
                <p className="text-sm text-muted-foreground">Raised</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold gradient-text">50k+</p>
                <p className="text-sm text-muted-foreground">Donors</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-lg border bg-card">
              <img 
                src="https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=1740"
                alt="Fundraising campaign" 
                className="w-full h-80 object-cover" 
              />
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-lg mb-1">Clean Water Initiative</h3>
                    <p className="text-sm text-muted-foreground">Help us provide clean water to rural communities</p>
                  </div>
                  <span className="bg-secondary/20 text-secondary text-xs px-2 py-1 rounded-full">
                    Environment
                  </span>
                </div>
                
                <div className="mt-4 mb-2">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium">₹850,000</span>
                    <span className="text-muted-foreground">of ₹1,000,000</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-primary to-secondary w-[85%]"></div>
                  </div>
                </div>
                
                <div className="flex justify-between text-xs text-muted-foreground mt-3">
                  <span>514 donors</span>
                  <span>12 days left</span>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-12 -right-12 w-36 h-36 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute -top-12 -left-12 w-36 h-36 bg-secondary/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
      
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
    </div>
  );
};
