
import { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { 
  PlusCircle, 
  MoreVertical, 
  Edit, 
  Trash2, 
  AlertCircle, 
  FileText, 
  Activity, 
  Users, 
  Wallet, 
  Bell, 
  Settings
} from "lucide-react";
import { toast } from "@/components/ui/use-toast";

// Sample data for user's campaigns
const myCampaigns = [
  {
    id: '1',
    title: 'Help Rebuild After Kerala Floods',
    description: 'Support families affected by the devastating floods in Kerala.',
    image: 'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80',
    raised: 750000,
    goal: 1000000,
    daysLeft: 15,
    donors: 328,
    status: 'active',
  },
  {
    id: '2',
    title: 'Support Children\'s Education in Rural Areas',
    description: 'Help provide educational resources for children in rural communities.',
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80',
    raised: 450000,
    goal: 600000,
    daysLeft: 22,
    donors: 213,
    status: 'active',
  },
  {
    id: '3',
    title: 'Community Clean-up Initiative',
    description: 'Organizing a clean-up drive in local neighborhoods.',
    image: 'https://images.unsplash.com/photo-1567427361984-0cbe7396fc5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    raised: 25000,
    goal: 50000,
    daysLeft: 0,
    donors: 42,
    status: 'completed',
  }
];

const recentActivities = [
  { 
    type: 'donation', 
    amount: '₹5,000', 
    name: 'Anonymous', 
    campaign: 'Help Rebuild After Kerala Floods', 
    date: '2 hours ago' 
  },
  { 
    type: 'donation', 
    amount: '₹1,500', 
    name: 'Rahul Sharma', 
    campaign: 'Help Rebuild After Kerala Floods', 
    date: '5 hours ago' 
  },
  { 
    type: 'update', 
    title: 'New update posted', 
    campaign: 'Help Rebuild After Kerala Floods', 
    date: '1 day ago' 
  },
  { 
    type: 'donation', 
    amount: '₹2,000', 
    name: 'Priya Patel', 
    campaign: 'Support Children\'s Education', 
    date: '2 days ago' 
  },
];

const Dashboard = () => {
  const [deleteConfirmation, setDeleteConfirmation] = useState<{
    open: boolean;
    campaignId: string | null;
  }>({
    open: false,
    campaignId: null,
  });

  const handleDeleteCampaign = () => {
    // In a real application, we would make an API call to delete the campaign
    toast({
      title: "Campaign deleted",
      description: "The campaign has been successfully deleted.",
    });
    setDeleteConfirmation({ open: false, campaignId: null });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="bg-brand-light py-6">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold">Dashboard</h1>
                <p className="text-muted-foreground">Manage your fundraising campaigns</p>
              </div>
              
              <div className="mt-4 md:mt-0">
                <Button asChild>
                  <Link to="/dashboard/create-campaign">
                    <PlusCircle className="h-4 w-4 mr-2" />
                    Create Campaign
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Total Raised</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">₹12,25,000</div>
                <p className="text-sm text-muted-foreground">Across all campaigns</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Donors</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">583</div>
                <p className="text-sm text-muted-foreground">People who supported your cause</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Active Campaigns</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">2</div>
                <p className="text-sm text-muted-foreground">Currently running campaigns</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <Tabs defaultValue="active" className="w-full">
                <div className="flex justify-between items-center mb-4">
                  <TabsList>
                    <TabsTrigger value="active">Active</TabsTrigger>
                    <TabsTrigger value="completed">Completed</TabsTrigger>
                    <TabsTrigger value="drafts">Drafts</TabsTrigger>
                  </TabsList>
                </div>
                
                <TabsContent value="active">
                  <div className="space-y-4">
                    {myCampaigns
                      .filter(campaign => campaign.status === 'active')
                      .map((campaign) => (
                        <Card key={campaign.id} className="overflow-hidden">
                          <div className="flex flex-col md:flex-row">
                            <div className="w-full md:w-48 h-48">
                              <img 
                                src={campaign.image} 
                                alt={campaign.title} 
                                className="w-full h-full object-cover" 
                              />
                            </div>
                            
                            <CardContent className="flex-1 p-6">
                              <div className="flex justify-between">
                                <div>
                                  <h3 className="text-xl font-semibold mb-1">{campaign.title}</h3>
                                  <p className="text-muted-foreground text-sm mb-3">{campaign.description}</p>
                                </div>
                                
                                <DropdownMenu>
                                  <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" size="icon">
                                      <MoreVertical className="h-4 w-4" />
                                      <span className="sr-only">Menu</span>
                                    </Button>
                                  </DropdownMenuTrigger>
                                  <DropdownMenuContent align="end">
                                    <DropdownMenuItem asChild>
                                      <Link to={`/dashboard/edit-campaign/${campaign.id}`} className="flex items-center">
                                        <Edit className="h-4 w-4 mr-2" />
                                        <span>Edit</span>
                                      </Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem
                                      onClick={() =>
                                        setDeleteConfirmation({
                                          open: true,
                                          campaignId: campaign.id,
                                        })
                                      }
                                      className="text-red-500 focus:text-red-500 flex items-center"
                                    >
                                      <Trash2 className="h-4 w-4 mr-2" />
                                      <span>Delete</span>
                                    </DropdownMenuItem>
                                  </DropdownMenuContent>
                                </DropdownMenu>
                              </div>
                              
                              <div className="mb-3">
                                <div className="flex justify-between text-sm mb-1">
                                  <span className="font-medium">₹{campaign.raised.toLocaleString()}</span>
                                  <span className="text-muted-foreground">of ₹{campaign.goal.toLocaleString()}</span>
                                </div>
                                <Progress value={(campaign.raised / campaign.goal) * 100} className="h-2" />
                              </div>
                              
                              <div className="flex flex-wrap gap-4 text-sm">
                                <div className="flex items-center gap-1">
                                  <Users className="h-4 w-4 text-muted-foreground" />
                                  <span>{campaign.donors} donors</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <Clock className="h-4 w-4 text-muted-foreground" />
                                  <span>{campaign.daysLeft} days left</span>
                                </div>
                                
                                <div className="flex-grow"></div>
                                
                                <Link to={`/campaign/${campaign.id}`}>
                                  <Button variant="outline" size="sm">View Campaign</Button>
                                </Link>
                                <Link to={`/dashboard/campaign/${campaign.id}`}>
                                  <Button size="sm">Manage</Button>
                                </Link>
                              </div>
                            </CardContent>
                          </div>
                        </Card>
                      ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="completed">
                  <div className="space-y-4">
                    {myCampaigns
                      .filter(campaign => campaign.status === 'completed')
                      .map((campaign) => (
                        <Card key={campaign.id} className="overflow-hidden">
                          <div className="flex flex-col md:flex-row">
                            <div className="w-full md:w-48 h-48">
                              <img 
                                src={campaign.image} 
                                alt={campaign.title} 
                                className="w-full h-full object-cover" 
                              />
                            </div>
                            
                            <CardContent className="flex-1 p-6">
                              <div className="flex justify-between">
                                <div>
                                  <h3 className="text-xl font-semibold mb-1">{campaign.title}</h3>
                                  <p className="text-muted-foreground text-sm mb-3">{campaign.description}</p>
                                </div>
                                
                                <DropdownMenu>
                                  <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" size="icon">
                                      <MoreVertical className="h-4 w-4" />
                                      <span className="sr-only">Menu</span>
                                    </Button>
                                  </DropdownMenuTrigger>
                                  <DropdownMenuContent align="end">
                                    <DropdownMenuItem asChild>
                                      <Link to={`/dashboard/edit-campaign/${campaign.id}`} className="flex items-center">
                                        <Edit className="h-4 w-4 mr-2" />
                                        <span>Edit</span>
                                      </Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem
                                      onClick={() =>
                                        setDeleteConfirmation({
                                          open: true,
                                          campaignId: campaign.id,
                                        })
                                      }
                                      className="text-red-500 focus:text-red-500 flex items-center"
                                    >
                                      <Trash2 className="h-4 w-4 mr-2" />
                                      <span>Delete</span>
                                    </DropdownMenuItem>
                                  </DropdownMenuContent>
                                </DropdownMenu>
                              </div>
                              
                              <div className="mb-3">
                                <div className="flex justify-between text-sm mb-1">
                                  <span className="font-medium">₹{campaign.raised.toLocaleString()}</span>
                                  <span className="text-muted-foreground">of ₹{campaign.goal.toLocaleString()}</span>
                                </div>
                                <Progress value={(campaign.raised / campaign.goal) * 100} className="h-2" />
                              </div>
                              
                              <div className="flex flex-wrap gap-4 text-sm">
                                <div className="flex items-center gap-1">
                                  <Users className="h-4 w-4 text-muted-foreground" />
                                  <span>{campaign.donors} donors</span>
                                </div>
                                <div>
                                  <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                                    Completed
                                  </span>
                                </div>
                                
                                <div className="flex-grow"></div>
                                
                                <Link to={`/campaign/${campaign.id}`}>
                                  <Button variant="outline" size="sm">View Campaign</Button>
                                </Link>
                                <Link to={`/dashboard/campaign/${campaign.id}`}>
                                  <Button size="sm">Details</Button>
                                </Link>
                              </div>
                            </CardContent>
                          </div>
                        </Card>
                      ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="drafts">
                  <Card className="p-12 text-center">
                    <h3 className="text-lg font-medium mb-2">No draft campaigns</h3>
                    <p className="text-muted-foreground mb-6">
                      Create a new campaign to get started with your fundraising journey.
                    </p>
                    <Button asChild>
                      <Link to="/dashboard/create-campaign">
                        <PlusCircle className="h-4 w-4 mr-2" />
                        Create Campaign
                      </Link>
                    </Button>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
            
            <div>
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivities.map((activity, index) => (
                      <div key={index}>
                        {index > 0 && <Separator className="my-4" />}
                        <div className="flex items-start">
                          <div className={`p-2 rounded-full mr-3 ${
                            activity.type === 'donation' 
                              ? 'bg-green-100 text-green-600' 
                              : 'bg-blue-100 text-blue-600'
                          }`}>
                            {activity.type === 'donation' ? (
                              <Wallet className="h-4 w-4" />
                            ) : (
                              <Bell className="h-4 w-4" />
                            )}
                          </div>
                          <div>
                            <p className="font-medium text-sm">
                              {activity.type === 'donation' ? (
                                <>{activity.name} donated {activity.amount}</>
                              ) : (
                                <>{activity.title}</>
                              )}
                            </p>
                            <p className="text-xs text-muted-foreground">{activity.campaign}</p>
                            <p className="text-xs text-muted-foreground mt-1">{activity.date}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6">
                    <Button variant="outline" className="w-full text-sm" asChild>
                      <Link to="/dashboard/activities">View All Activity</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <div className="mt-6">
                <h3 className="font-medium mb-3">Quick Actions</h3>
                <div className="grid grid-cols-2 gap-3">
                  <Link to="/dashboard/create-campaign">
                    <div className="border rounded-lg p-4 text-center hover:border-primary hover:bg-muted/50 transition-colors">
                      <FileText className="h-5 w-5 mx-auto mb-2" />
                      <span className="text-sm">New Campaign</span>
                    </div>
                  </Link>
                  <Link to="/dashboard/analytics">
                    <div className="border rounded-lg p-4 text-center hover:border-primary hover:bg-muted/50 transition-colors">
                      <Activity className="h-5 w-5 mx-auto mb-2" />
                      <span className="text-sm">Analytics</span>
                    </div>
                  </Link>
                  <Link to="/dashboard/donors">
                    <div className="border rounded-lg p-4 text-center hover:border-primary hover:bg-muted/50 transition-colors">
                      <Users className="h-5 w-5 mx-auto mb-2" />
                      <span className="text-sm">Donors</span>
                    </div>
                  </Link>
                  <Link to="/dashboard/settings">
                    <div className="border rounded-lg p-4 text-center hover:border-primary hover:bg-muted/50 transition-colors">
                      <Settings className="h-5 w-5 mx-auto mb-2" />
                      <span className="text-sm">Settings</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Dialog 
        open={deleteConfirmation.open} 
        onOpenChange={(open) => {
          if (!open) setDeleteConfirmation({ open: false, campaignId: null });
        }}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-destructive" />
              <span>Delete Campaign</span>
            </DialogTitle>
          </DialogHeader>
          
          <div className="py-4">
            <p className="mb-2">
              Are you sure you want to delete this campaign? This action cannot be undone.
            </p>
            <p className="text-sm text-muted-foreground">
              All campaign data, including donation records, will be permanently removed.
            </p>
          </div>
          
          <div className="flex justify-end gap-3">
            <Button
              variant="outline"
              onClick={() => setDeleteConfirmation({ open: false, campaignId: null })}
            >
              Cancel
            </Button>
            <Button 
              variant="destructive" 
              onClick={handleDeleteCampaign}
            >
              Delete Campaign
            </Button>
          </div>
        </DialogContent>
      </Dialog>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
