
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export const CTASection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Fundraiser?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Create your campaign in minutes and start receiving donations directly to your UPI account.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="text-base">
                <Link to="/register">Start Your Campaign</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base">
                <Link to="/campaigns">Browse Campaigns</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
