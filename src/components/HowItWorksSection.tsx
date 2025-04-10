
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { FileText, Upload, Users, Banknote } from 'lucide-react';

export const HowItWorksSection = () => {
  const steps = [
    {
      icon: <FileText className="h-10 w-10 text-primary" />,
      title: 'Create a Campaign',
      description: 'Sign up and create your fundraising campaign in minutes. Add details, a compelling story, and set your fundraising goal.'
    },
    {
      icon: <Upload className="h-10 w-10 text-primary" />,
      title: 'Upload UPI QR Code',
      description: 'Add your UPI QR code to allow supporters to make direct payments to your account.'
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: 'Share with Supporters',
      description: 'Share your campaign with friends, family, and communities through social media and direct links.'
    },
    {
      icon: <Banknote className="h-10 w-10 text-primary" />,
      title: 'Receive Direct Donations',
      description: 'Supporters can contribute by scanning your UPI QR code, with funds going directly to your account.'
    }
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Start fundraising in a few simple steps with our straightforward UPI-based donation system.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="bg-brand-light rounded-full p-6 mb-6 relative">
                  {step.icon}
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-secondary text-white flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-px bg-border transform -translate-x-1/2">
                  <div className="absolute right-0 top-1/2 h-2 w-2 bg-secondary rounded-full transform -translate-y-1/2"></div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button asChild size="lg">
            <Link to="/register">Start Your Campaign</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
