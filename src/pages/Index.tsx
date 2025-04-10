
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { CategorySection } from "@/components/CategorySection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { TestimonialSection } from "@/components/TestimonialSection";
import { CTASection } from "@/components/CTASection";
import { CampaignCard } from "@/components/CampaignCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Sample data for featured campaigns
const featuredCampaigns = [
  {
    id: '1',
    title: 'Help Rebuild After Kerala Floods',
    description: 'Support families affected by the devastating floods in Kerala and help them rebuild their homes and lives.',
    category: 'Disaster Relief',
    image: 'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80',
    raised: 750000,
    goal: 1000000,
    daysLeft: 15,
    donors: 328,
  },
  {
    id: '2',
    title: 'Support Children\'s Education in Rural Areas',
    description: 'Help provide educational resources and support for children in underserved rural communities across India.',
    category: 'Education',
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80',
    raised: 450000,
    goal: 600000,
    daysLeft: 22,
    donors: 213,
  },
  {
    id: '3',
    title: 'Cancer Treatment for Riya',
    description: 'Help 12-year-old Riya get the cancer treatment she urgently needs to survive and live a healthy life.',
    category: 'Medical',
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    raised: 890000,
    goal: 1200000,
    daysLeft: 8,
    donors: 437,
  }
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection />
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold">Featured Campaigns</h2>
              <Button asChild variant="outline">
                <Link to="/campaigns">View All</Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredCampaigns.map((campaign) => (
                <CampaignCard key={campaign.id} {...campaign} />
              ))}
            </div>
          </div>
        </section>
        
        <FeaturesSection />
        <CategorySection />
        <HowItWorksSection />
        <TestimonialSection />
        <CTASection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
