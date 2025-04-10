
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Quote } from 'lucide-react';

export const TestimonialSection = () => {
  const testimonials = [
    {
      quote: "Give & Grow made it easy for me to raise funds for my mother's cancer treatment. The direct UPI payments meant all donations reached us immediately when we needed them most.",
      author: "Priya Sharma",
      role: "Medical Campaign Creator",
      avatar: "PS"
    },
    {
      quote: "We raised over ₹5 lakhs for our school renovation project in just two weeks. The platform's ease of use and social sharing features helped us reach our goal quickly.",
      author: "Rahul Mehta",
      role: "Education Campaign Creator",
      avatar: "RM"
    },
    {
      quote: "The transparent donation process gave my donors confidence that their contributions were going directly to our cause. I highly recommend this platform.",
      author: "Sneha Patel",
      role: "NGO Fundraiser",
      avatar: "SP"
    }
  ];

  return (
    <section className="py-16 bg-brand-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from fundraisers who have successfully achieved their goals using our platform.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-background border-0 shadow-md">
              <CardContent className="pt-8 pb-6 px-6 relative">
                <Quote className="absolute top-6 left-6 h-10 w-10 text-muted-foreground opacity-20" />
                <p className="text-foreground mb-6 relative z-10">"{testimonial.quote}"</p>
                <div className="flex items-center mt-4">
                  <Avatar className="h-10 w-10 mr-4">
                    <AvatarImage src="" />
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
