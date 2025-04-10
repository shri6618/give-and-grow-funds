
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Calendar, Share2, Heart, Users, Clock, AlertCircle } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

// Sample campaign data
const campaignData = {
  id: '1',
  title: 'Help Rebuild After Kerala Floods',
  description: 'Support families affected by the devastating floods in Kerala and help them rebuild their homes and lives.',
  longDescription: `
    <p>The recent floods in Kerala have devastated countless lives, destroying homes and livelihoods across the state. Over 10,000 families have been displaced, with many losing everything they own.</p>
    <p>Your contribution will help these families rebuild their homes, replace essential household items, and restore their livelihoods so they can get back on their feet.</p>
    <h3>How your donation helps:</h3>
    <ul>
      <li>₹5,000 can provide emergency food and hygiene supplies for a family of four for one month</li>
      <li>₹15,000 can help repair moderate damage to a home</li>
      <li>₹50,000 can significantly contribute to rebuilding a completely destroyed home</li>
      <li>₹100,000 can help restore livelihoods by replacing destroyed equipment or inventory for small businesses</li>
    </ul>
    <p>Every donation, no matter how small, makes a difference. Thank you for your generosity and support during this critical time.</p>
  `,
  category: 'Disaster Relief',
  image: 'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80',
  additionalImages: [
    'https://images.unsplash.com/photo-1567427361984-0cbe7396fc5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
  ],
  raised: 750000,
  goal: 1000000,
  daysLeft: 15,
  donors: 328,
  createdAt: '2023-08-15',
  organizer: {
    name: 'Kerala Relief Foundation',
    image: '',
    initials: 'KR',
    campaigns: 5,
    raised: '₹32,50,000',
    verified: true
  },
  updates: [
    {
      date: '2023-09-01',
      title: 'First round of aid distributed',
      content: 'We have successfully distributed emergency supplies to 150 families in the most affected areas. Thank you for your continued support.'
    },
    {
      date: '2023-08-25',
      title: 'Assessment completed',
      content: 'We have completed our initial assessment of the damage and identified the families most in need of immediate assistance.'
    }
  ],
  qrCode: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg'
};

const CampaignDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [donationAmount, setDonationAmount] = useState("");
  const [showQRCode, setShowQRCode] = useState(false);
  const [activeImage, setActiveImage] = useState(campaignData.image);
  
  // Calculate campaign stats
  const progress = Math.min(Math.round((campaignData.raised / campaignData.goal) * 100), 100);
  const formattedDate = new Date(campaignData.createdAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // In a real app, we would fetch the campaign data using the ID
  // For now, we'll just use our sample data
  
  const handleDonateClick = () => {
    if (!donationAmount || parseFloat(donationAmount) <= 0) {
      toast({
        title: "Please enter a valid amount",
        description: "The donation amount must be greater than zero.",
        variant: "destructive"
      });
      return;
    }
    
    setShowQRCode(true);
  };
  
  const handleShareClick = () => {
    if (navigator.share) {
      navigator.share({
        title: campaignData.title,
        text: campaignData.description,
        url: window.location.href,
      })
      .then(() => console.log('Successful share'))
      .catch((error) => console.log('Error sharing', error));
    } else {
      // Fallback
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Link copied to clipboard",
        description: "You can now share this campaign with others.",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Campaign Images and Details */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <div className="rounded-lg overflow-hidden mb-4">
                  <img src={activeImage} alt={campaignData.title} className="w-full h-auto object-cover max-h-[500px]" />
                </div>
                <div className="flex gap-2 overflow-x-auto pb-2">
                  <button 
                    onClick={() => setActiveImage(campaignData.image)}
                    className={`rounded-md overflow-hidden min-w-[100px] h-[60px] border-2 ${activeImage === campaignData.image ? 'border-primary' : 'border-transparent'}`}
                  >
                    <img src={campaignData.image} alt="Main" className="w-full h-full object-cover" />
                  </button>
                  
                  {campaignData.additionalImages?.map((img, index) => (
                    <button 
                      key={index} 
                      onClick={() => setActiveImage(img)}
                      className={`rounded-md overflow-hidden min-w-[100px] h-[60px] border-2 ${activeImage === img ? 'border-primary' : 'border-transparent'}`}
                    >
                      <img src={img} alt={`Additional ${index + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>
              
              <div>
                <h1 className="text-3xl font-bold mb-4">{campaignData.title}</h1>
                <p className="text-muted-foreground mb-6">{campaignData.description}</p>
                
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex items-center">
                    <Avatar className="h-10 w-10 border">
                      <AvatarImage src={campaignData.organizer.image} />
                      <AvatarFallback>{campaignData.organizer.initials}</AvatarFallback>
                    </Avatar>
                    <div className="ml-3">
                      <p className="text-sm font-medium">{campaignData.organizer.name}</p>
                      <p className="text-xs text-muted-foreground">Organizer</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Started {formattedDate}</span>
                  </div>
                </div>
                
                <Tabs defaultValue="story">
                  <TabsList className="mb-4">
                    <TabsTrigger value="story">Story</TabsTrigger>
                    <TabsTrigger value="updates">Updates ({campaignData.updates.length})</TabsTrigger>
                    <TabsTrigger value="organizer">Organizer</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="story" className="text-foreground">
                    <div dangerouslySetInnerHTML={{ __html: campaignData.longDescription }} />
                  </TabsContent>
                  
                  <TabsContent value="updates">
                    {campaignData.updates.length > 0 ? (
                      <div className="space-y-6">
                        {campaignData.updates.map((update, index) => (
                          <div key={index} className="border-b pb-6 last:border-b-0">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-sm font-semibold">{update.title}</span>
                              <span className="text-xs text-muted-foreground">{update.date}</span>
                            </div>
                            <p className="text-foreground">{update.content}</p>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-muted-foreground">No updates yet.</p>
                    )}
                  </TabsContent>
                  
                  <TabsContent value="organizer">
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <Avatar className="h-14 w-14 border mr-4">
                          <AvatarImage src={campaignData.organizer.image} />
                          <AvatarFallback>{campaignData.organizer.initials}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-semibold">{campaignData.organizer.name}</h3>
                            {campaignData.organizer.verified && (
                              <span className="bg-green-100 text-green-600 text-xs px-2 py-0.5 rounded-full">Verified</span>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground">Campaign organizer</p>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-muted/40 rounded-lg p-4">
                          <p className="text-sm text-muted-foreground">Total Campaigns</p>
                          <p className="text-xl font-semibold">{campaignData.organizer.campaigns}</p>
                        </div>
                        <div className="bg-muted/40 rounded-lg p-4">
                          <p className="text-sm text-muted-foreground">Total Raised</p>
                          <p className="text-xl font-semibold">{campaignData.organizer.raised}</p>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
            
            {/* Donation Card */}
            <div>
              <div className="border rounded-lg p-6 bg-background sticky top-20">
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium">₹{campaignData.raised.toLocaleString()}</span>
                    <span className="text-muted-foreground">of ₹{campaignData.goal.toLocaleString()}</span>
                  </div>
                  <Progress value={progress} className="h-2" />
                </div>
                
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <p className="text-2xl font-bold">{progress}%</p>
                    <p className="text-xs text-muted-foreground">Funded</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold">{campaignData.donors}</p>
                    <p className="text-xs text-muted-foreground">Donors</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold">{campaignData.daysLeft}</p>
                    <p className="text-xs text-muted-foreground">Days Left</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="donation-amount" className="block text-sm font-medium mb-1">
                    Donation Amount (₹)
                  </label>
                  <Input
                    id="donation-amount"
                    type="number"
                    placeholder="Enter amount"
                    value={donationAmount}
                    onChange={(e) => setDonationAmount(e.target.value)}
                    className="mb-2"
                  />
                  
                  <div className="flex gap-2 mb-4">
                    {[500, 1000, 2000, 5000].map((amount) => (
                      <Button
                        key={amount}
                        type="button"
                        variant="outline"
                        size="sm"
                        className="flex-1"
                        onClick={() => setDonationAmount(amount.toString())}
                      >
                        ₹{amount}
                      </Button>
                    ))}
                  </div>
                  
                  <Button 
                    className="w-full" 
                    size="lg" 
                    onClick={handleDonateClick}
                    disabled={!donationAmount || parseFloat(donationAmount) <= 0}
                  >
                    Donate Now
                  </Button>
                </div>
                
                <div className="flex gap-2">
                  <Button variant="outline" className="flex-1" onClick={handleShareClick}>
                    <Share2 className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Heart className="h-4 w-4 mr-2" />
                    Save
                  </Button>
                </div>
                
                <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
                  <AlertCircle className="h-4 w-4" />
                  <p>All funds go directly to the campaign creator via UPI.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Dialog open={showQRCode} onOpenChange={setShowQRCode}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center mb-4">Scan QR Code to Donate ₹{donationAmount}</DialogTitle>
          </DialogHeader>
          
          <div className="flex flex-col items-center">
            <div className="border rounded-lg p-4 mb-4 bg-white">
              <img src={campaignData.qrCode} alt="UPI QR Code" className="w-60 h-60" />
            </div>
            
            <p className="text-center text-sm text-muted-foreground mb-4">
              Open your UPI app, scan this QR code, and complete the payment.
            </p>
            
            <div className="flex justify-center gap-4 items-center">
              <p className="text-sm">Campaign: <span className="font-medium">{campaignData.title.substring(0, 20)}...</span></p>
              <p className="text-sm">Amount: <span className="font-medium">₹{donationAmount}</span></p>
            </div>
            
            <Button className="mt-6" onClick={() => setShowQRCode(false)}>
              I've Completed My Donation
            </Button>
          </div>
        </DialogContent>
      </Dialog>
      
      <Footer />
    </div>
  );
};

export default CampaignDetail;
