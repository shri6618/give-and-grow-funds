
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/components/ui/use-toast";
import { ArrowLeft, Upload, Image, Trash2 } from "lucide-react";

const categories = [
  { label: "Medical", value: "medical" },
  { label: "Education", value: "education" },
  { label: "Environment", value: "environment" },
  { label: "Housing", value: "housing" },
  { label: "Children", value: "children" },
  { label: "Arts", value: "arts" },
  { label: "Disaster Relief", value: "disaster-relief" },
  { label: "International", value: "international" },
];

const CreateCampaign = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    goal: "",
    endDate: "",
    story: "",
  });
  
  const [campaignImage, setCampaignImage] = useState<string | null>(null);
  const [qrCodeImage, setQrCodeImage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleCampaignImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setCampaignImage(reader.result as string);
      };
    }
  };
  
  const handleQRCodeUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setQrCodeImage(reader.result as string);
      };
    }
  };
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validation
    if (!formData.title.trim()) {
      toast({
        title: "Error",
        description: "Please enter a campaign title.",
        variant: "destructive",
      });
      return;
    }
    
    if (!formData.description.trim()) {
      toast({
        title: "Error",
        description: "Please enter a campaign description.",
        variant: "destructive",
      });
      return;
    }
    
    if (!formData.category) {
      toast({
        title: "Error",
        description: "Please select a category.",
        variant: "destructive",
      });
      return;
    }
    
    if (!formData.goal || isNaN(Number(formData.goal)) || Number(formData.goal) <= 0) {
      toast({
        title: "Error",
        description: "Please enter a valid fundraising goal amount.",
        variant: "destructive",
      });
      return;
    }
    
    if (!formData.endDate) {
      toast({
        title: "Error",
        description: "Please select an end date for your campaign.",
        variant: "destructive",
      });
      return;
    }
    
    if (!campaignImage) {
      toast({
        title: "Error",
        description: "Please upload a campaign image.",
        variant: "destructive",
      });
      return;
    }
    
    if (!qrCodeImage) {
      toast({
        title: "Error",
        description: "Please upload your UPI QR code to receive donations.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call to create campaign
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Success",
        description: "Your campaign has been created successfully!",
      });
      navigate("/dashboard");
    }, 1500);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <Button variant="ghost" asChild className="mb-4">
              <Link to="/dashboard">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Dashboard
              </Link>
            </Button>
            <h1 className="text-2xl md:text-3xl font-bold">Create New Campaign</h1>
            <p className="text-muted-foreground">Fill in the details to launch your fundraising campaign</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit}>
                    <div className="space-y-6">
                      <div>
                        <h2 className="text-xl font-semibold mb-4">Basic Information</h2>
                        
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="title">Campaign Title</Label>
                            <Input
                              id="title"
                              name="title"
                              placeholder="Give your campaign a clear, attention-grabbing title"
                              value={formData.title}
                              onChange={handleInputChange}
                            />
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="description">Short Description</Label>
                            <Textarea
                              id="description"
                              name="description"
                              placeholder="Briefly describe your campaign in 2-3 sentences"
                              value={formData.description}
                              onChange={handleInputChange}
                              rows={3}
                            />
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="category">Category</Label>
                              <Select
                                value={formData.category}
                                onValueChange={(value) => handleSelectChange("category", value)}
                              >
                                <SelectTrigger id="category">
                                  <SelectValue placeholder="Select category" />
                                </SelectTrigger>
                                <SelectContent>
                                  {categories.map((category) => (
                                    <SelectItem key={category.value} value={category.value}>
                                      {category.label}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>
                            
                            <div className="space-y-2">
                              <Label htmlFor="goal">Fundraising Goal (₹)</Label>
                              <Input
                                id="goal"
                                name="goal"
                                type="number"
                                placeholder="Enter amount in rupees"
                                value={formData.goal}
                                onChange={handleInputChange}
                              />
                            </div>
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="endDate">Campaign End Date</Label>
                            <Input
                              id="endDate"
                              name="endDate"
                              type="date"
                              value={formData.endDate}
                              onChange={handleInputChange}
                            />
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h2 className="text-xl font-semibold mb-4">Campaign Story</h2>
                        
                        <div className="space-y-2">
                          <Label htmlFor="story">Campaign Story</Label>
                          <Textarea
                            id="story"
                            name="story"
                            placeholder="Share your story in detail. Explain why you're raising funds, how the funds will be used, and why people should support your cause."
                            value={formData.story}
                            onChange={handleInputChange}
                            rows={8}
                          />
                          <p className="text-sm text-muted-foreground">
                            A compelling story increases your chances of reaching your fundraising goal.
                          </p>
                        </div>
                      </div>
                      
                      <div>
                        <h2 className="text-xl font-semibold mb-4">Campaign Image</h2>
                        
                        <div className="space-y-4">
                          <div className="border-2 border-dashed rounded-lg p-6 text-center">
                            {campaignImage ? (
                              <div className="relative">
                                <img 
                                  src={campaignImage} 
                                  alt="Campaign preview" 
                                  className="max-h-64 mx-auto rounded-lg"
                                />
                                <Button
                                  type="button"
                                  variant="destructive"
                                  size="icon"
                                  className="absolute top-2 right-2"
                                  onClick={() => setCampaignImage(null)}
                                >
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </div>
                            ) : (
                              <div>
                                <div className="mb-4">
                                  <Image className="h-10 w-10 mx-auto text-muted-foreground" />
                                </div>
                                <p className="text-muted-foreground mb-2">
                                  Drag and drop an image or click to browse
                                </p>
                                <p className="text-xs text-muted-foreground mb-4">
                                  Recommended size: 1200 x 800 pixels. Max file size: 5MB.
                                </p>
                                <Button
                                  type="button"
                                  variant="outline"
                                  onClick={() => document.getElementById("campaign-image")?.click()}
                                >
                                  <Upload className="h-4 w-4 mr-2" />
                                  Upload Image
                                </Button>
                                <input
                                  id="campaign-image"
                                  type="file"
                                  accept="image/*"
                                  className="hidden"
                                  onChange={handleCampaignImageUpload}
                                />
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h2 className="text-xl font-semibold mb-4">UPI QR Code</h2>
                        
                        <div className="space-y-4">
                          <div className="border-2 border-dashed rounded-lg p-6 text-center">
                            {qrCodeImage ? (
                              <div className="relative">
                                <img 
                                  src={qrCodeImage} 
                                  alt="UPI QR Code" 
                                  className="max-h-64 mx-auto rounded-lg"
                                />
                                <Button
                                  type="button"
                                  variant="destructive"
                                  size="icon"
                                  className="absolute top-2 right-2"
                                  onClick={() => setQrCodeImage(null)}
                                >
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </div>
                            ) : (
                              <div>
                                <div className="mb-4">
                                  <Upload className="h-10 w-10 mx-auto text-muted-foreground" />
                                </div>
                                <p className="text-muted-foreground mb-2">
                                  Upload your UPI QR code to receive donations directly
                                </p>
                                <p className="text-xs text-muted-foreground mb-4">
                                  Supported formats: JPG, PNG. Max file size: 2MB.
                                </p>
                                <Button
                                  type="button"
                                  variant="outline"
                                  onClick={() => document.getElementById("qr-code")?.click()}
                                >
                                  <Upload className="h-4 w-4 mr-2" />
                                  Upload QR Code
                                </Button>
                                <input
                                  id="qr-code"
                                  type="file"
                                  accept="image/*"
                                  className="hidden"
                                  onChange={handleQRCodeUpload}
                                />
                              </div>
                            )}
                          </div>
                          
                          <div className="bg-muted/40 rounded-lg p-4 flex items-start">
                            <div className="mr-3 mt-1 text-muted-foreground">
                              <Image className="h-4 w-4" />
                            </div>
                            <div className="text-sm text-muted-foreground">
                              <p className="mb-1">You can generate a UPI QR code from apps like Google Pay, PhonePe, or Paytm.</p>
                              <p>Make sure the QR code is clear and scannable to ensure donors can easily make payments.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="pt-4">
                        <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                          {isSubmitting ? "Creating Campaign..." : "Create Campaign"}
                        </Button>
                      </div>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-4">Creating a Successful Campaign</h3>
                    
                    <ul className="space-y-3 text-sm">
                      <li className="flex gap-3">
                        <div className="bg-primary/10 text-primary p-1 rounded-full h-fit">
                          <span className="inline-block h-4 w-4 text-center font-medium">1</span>
                        </div>
                        <div>
                          <span className="font-medium">Tell your story</span>
                          <p className="text-muted-foreground mt-1">
                            Be detailed and authentic about why you're raising funds and how they'll be used.
                          </p>
                        </div>
                      </li>
                      
                      <li className="flex gap-3">
                        <div className="bg-primary/10 text-primary p-1 rounded-full h-fit">
                          <span className="inline-block h-4 w-4 text-center font-medium">2</span>
                        </div>
                        <div>
                          <span className="font-medium">Use compelling images</span>
                          <p className="text-muted-foreground mt-1">
                            Clear, high-quality images help people connect with your cause.
                          </p>
                        </div>
                      </li>
                      
                      <li className="flex gap-3">
                        <div className="bg-primary/10 text-primary p-1 rounded-full h-fit">
                          <span className="inline-block h-4 w-4 text-center font-medium">3</span>
                        </div>
                        <div>
                          <span className="font-medium">Set a realistic goal</span>
                          <p className="text-muted-foreground mt-1">
                            Calculate your actual needs and set a goal you can reasonably achieve.
                          </p>
                        </div>
                      </li>
                      
                      <li className="flex gap-3">
                        <div className="bg-primary/10 text-primary p-1 rounded-full h-fit">
                          <span className="inline-block h-4 w-4 text-center font-medium">4</span>
                        </div>
                        <div>
                          <span className="font-medium">Share widely</span>
                          <p className="text-muted-foreground mt-1">
                            Use social media, email, and personal outreach to spread the word.
                          </p>
                        </div>
                      </li>
                      
                      <li className="flex gap-3">
                        <div className="bg-primary/10 text-primary p-1 rounded-full h-fit">
                          <span className="inline-block h-4 w-4 text-center font-medium">5</span>
                        </div>
                        <div>
                          <span className="font-medium">Post updates</span>
                          <p className="text-muted-foreground mt-1">
                            Keep supporters informed about your progress and how funds are being used.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-4">UPI QR Code Guidelines</h3>
                    
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Make sure your UPI ID is active and properly linked to your bank account.</li>
                      <li>• The QR code should be clear, without glare or shadows.</li>
                      <li>• Test your QR code before uploading to ensure it's scannable.</li>
                      <li>• You can update your QR code at any time if needed.</li>
                      <li>• Remember, all donations will go directly to the linked account.</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CreateCampaign;
