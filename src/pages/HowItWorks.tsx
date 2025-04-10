
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { CTASection } from "@/components/CTASection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const HowItWorks = () => {
  const faqs = [
    {
      question: "How does Give & Grow work?",
      answer: "Give & Grow is a platform that enables individuals and organizations to create fundraising campaigns and collect donations directly through UPI payments. Campaign creators upload their UPI QR codes, which donors can scan to make payments directly to the creator's account."
    },
    {
      question: "How do I start a fundraising campaign?",
      answer: "To start a fundraising campaign, you need to sign up for an account, verify your email, and then click on 'Create Campaign'. You'll need to provide details about your campaign, upload relevant images, set a fundraising goal, and add your UPI QR code for receiving donations."
    },
    {
      question: "Is there a fee for creating a campaign?",
      answer: "No, creating a campaign on Give & Grow is completely free. We don't charge any platform fees or take a percentage of your donations. The full amount donated goes directly to your UPI account."
    },
    {
      question: "How do donors make payments?",
      answer: "Donors can browse campaigns, select one they wish to support, and click on 'Donate Now'. They specify the amount they want to donate, and are then shown the campaign creator's UPI QR code. They can scan this code with any UPI app (like Google Pay, PhonePe, or BHIM) to complete the payment directly to the campaign creator."
    },
    {
      question: "Is my information secure?",
      answer: "Yes, we take data security very seriously. We don't store payment information since all transactions happen directly through UPI. Your personal information is protected with industry-standard security measures."
    },
    {
      question: "Can I edit my campaign after it's published?",
      answer: "Yes, you can edit certain aspects of your campaign after it's published, including the description, images, and goal amount. However, for trust and transparency reasons, some fundamental details cannot be changed."
    },
    {
      question: "How do I withdraw the funds I've raised?",
      answer: "You don't need to withdraw funds as they are sent directly to your UPI account when donors make payments. There's no holding period or withdrawal process required."
    },
    {
      question: "How can I promote my campaign?",
      answer: "After creating your campaign, you can share it on social media, through email, or via messaging apps. Every campaign has a unique link that you can share with potential donors. The more you share, the higher the chances of reaching your fundraising goal."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="bg-brand-light py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h1>
            <p className="text-lg text-muted-foreground">
              Learn how to use Give & Grow to raise funds for causes you care about.
            </p>
          </div>
        </div>
        
        <HowItWorksSection />
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
              
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-brand-light">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Security & Trust</h2>
              <p className="text-lg text-muted-foreground mb-8">
                We prioritize the security and trust of all users on our platform. Here's how we maintain a safe environment for fundraisers and donors.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-background rounded-lg p-6 text-left">
                  <h3 className="text-xl font-semibold mb-3">For Campaign Creators</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Verified account process for campaign creators</li>
                    <li>• Direct UPI payments to your account</li>
                    <li>• Campaign review process</li>
                    <li>• Protection from fraudulent activities</li>
                  </ul>
                </div>
                
                <div className="bg-background rounded-lg p-6 text-left">
                  <h3 className="text-xl font-semibold mb-3">For Donors</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Transparent campaign information</li>
                    <li>• Direct payments to campaign creators</li>
                    <li>• Campaign reporting functionality</li>
                    <li>• Regular campaign updates</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <CTASection />
      </main>
      
      <Footer />
    </div>
  );
};

export default HowItWorks;
