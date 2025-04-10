
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ShieldCheck, Zap, Users, Heart } from 'lucide-react';

export const FeaturesSection = () => {
  const features = [
    {
      icon: <Zap className="h-10 w-10 text-primary" />,
      title: 'Quick Setup',
      description: 'Start your fundraising campaign in minutes with a simple and intuitive process.'
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-primary" />,
      title: 'Secure Transactions',
      description: 'Receive donations directly to your UPI account with no middleman and complete security.'
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: 'Social Sharing',
      description: 'Easily share your campaign across social media to maximize your reach and donations.'
    },
    {
      icon: <Heart className="h-10 w-10 text-primary" />,
      title: 'Real Impact',
      description: 'Make a difference for causes you care about with 100% of donations going to your campaign.'
    }
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Give & Grow?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our platform provides everything you need to run a successful fundraising campaign with direct UPI payments.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-2">
                <div className="mb-4">{feature.icon}</div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
