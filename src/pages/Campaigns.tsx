
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CampaignCard } from "@/components/CampaignCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Search, Filter, SlidersHorizontal } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

// Sample data for campaigns
const allCampaigns = [
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
  },
  {
    id: '4',
    title: 'Plant 10,000 Trees in Urban Areas',
    description: 'Join our initiative to increase green cover in cities across India by planting 10,000 native trees.',
    category: 'Environment',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80',
    raised: 320000,
    goal: 500000,
    daysLeft: 45,
    donors: 189,
  },
  {
    id: '5',
    title: 'Community Art Center Renovation',
    description: 'Help us renovate our community art center to provide a creative space for underprivileged children.',
    category: 'Arts',
    image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
    raised: 275000,
    goal: 400000,
    daysLeft: 30,
    donors: 142,
  },
  {
    id: '6',
    title: 'Emergency Housing for Homeless Families',
    description: 'Support our project to provide emergency housing for homeless families during the monsoon season.',
    category: 'Housing',
    image: 'https://images.unsplash.com/photo-1560440021-33f9b867899d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1129&q=80',
    raised: 580000,
    goal: 800000,
    daysLeft: 12,
    donors: 267,
  }
];

const categories = [
  'All Categories',
  'Medical',
  'Education',
  'Environment',
  'Housing',
  'Children',
  'Arts',
  'Disaster Relief',
  'International',
];

const sortOptions = [
  { label: 'Most Recent', value: 'recent' },
  { label: 'Most Funded', value: 'funded' },
  { label: 'Ending Soon', value: 'ending' },
  { label: 'Most Popular', value: 'popular' },
];

const Campaigns = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [sortBy, setSortBy] = useState("recent");
  const [fundingRange, setFundingRange] = useState([0]);

  const filteredCampaigns = allCampaigns.filter((campaign) => {
    const matchesSearch = campaign.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          campaign.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All Categories" || campaign.category === selectedCategory;
    const percentFunded = (campaign.raised / campaign.goal) * 100;
    const matchesFunding = percentFunded >= fundingRange[0];
    
    return matchesSearch && matchesCategory && matchesFunding;
  });
  
  // Sort campaigns based on selected option
  const sortedCampaigns = [...filteredCampaigns].sort((a, b) => {
    if (sortBy === 'funded') return b.raised - a.raised;
    if (sortBy === 'ending') return a.daysLeft - b.daysLeft;
    if (sortBy === 'popular') return b.donors - a.donors;
    // Default is 'recent'
    return parseInt(b.id) - parseInt(a.id);
  });

  const FilterControls = () => (
    <div className="space-y-6">
      <div className="space-y-3">
        <h3 className="font-medium">Category</h3>
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger>
            <SelectValue placeholder="Select Category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-3">
        <div className="flex justify-between">
          <h3 className="font-medium">Percent Funded</h3>
          <span>{fundingRange[0]}% +</span>
        </div>
        <Slider 
          defaultValue={[0]} 
          max={100} 
          step={10} 
          value={fundingRange}
          onValueChange={setFundingRange}
        />
      </div>

      <div className="space-y-3">
        <h3 className="font-medium">Sort By</h3>
        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger>
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            {sortOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      
      <Button className="w-full" variant="outline" onClick={() => {
        setSearchQuery("");
        setSelectedCategory("All Categories");
        setSortBy("recent");
        setFundingRange([0]);
      }}>
        Clear Filters
      </Button>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="bg-brand-light py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Discover Campaigns</h1>
            <p className="text-lg text-muted-foreground mb-6">
              Find and support fundraising campaigns that resonate with your values.
            </p>
            
            <div className="relative">
              <Input 
                type="search" 
                placeholder="Search for campaigns..." 
                className="pr-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">
              {filteredCampaigns.length} {filteredCampaigns.length === 1 ? 'Campaign' : 'Campaigns'} Found
            </h2>
            
            <div className="flex items-center gap-3">
              <div className="hidden md:block">
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    {sortOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="sm" className="md:hidden">
                    <Filter className="h-4 w-4 mr-2" />
                    Filters
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <h3 className="text-lg font-medium mb-4">Filter Campaigns</h3>
                  <FilterControls />
                </SheetContent>
              </Sheet>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="hidden md:block">
              <div className="border rounded-lg p-6 bg-background sticky top-20">
                <div className="flex items-center gap-2 mb-6">
                  <SlidersHorizontal className="h-5 w-5" />
                  <h3 className="text-lg font-medium">Filters</h3>
                </div>
                <FilterControls />
              </div>
            </div>
            
            <div className="md:col-span-3">
              {sortedCampaigns.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {sortedCampaigns.map((campaign) => (
                    <CampaignCard key={campaign.id} {...campaign} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <h3 className="text-xl font-medium mb-2">No campaigns found</h3>
                  <p className="text-muted-foreground mb-4">Try adjusting your search or filters</p>
                  <Button onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("All Categories");
                    setSortBy("recent");
                    setFundingRange([0]);
                  }}>
                    Clear All Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Campaigns;
