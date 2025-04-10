
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Heart, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

type CampaignCardProps = {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  raised: number;
  goal: number;
  daysLeft: number;
  donors: number;
}

export const CampaignCard = ({
  id,
  title,
  description,
  category,
  image,
  raised,
  goal,
  daysLeft,
  donors,
}: CampaignCardProps) => {
  const progress = Math.min(Math.round((raised / goal) * 100), 100);
  
  return (
    <Card className="overflow-hidden h-full flex flex-col card-shadow">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <Badge className="absolute top-3 right-3 bg-secondary hover:bg-secondary/80">
          {category}
        </Badge>
      </div>
      
      <CardHeader className="pb-2">
        <CardTitle className="line-clamp-1 text-lg font-semibold">
          <Link to={`/campaign/${id}`} className="hover:text-primary transition-colors">
            {title}
          </Link>
        </CardTitle>
        <CardDescription className="line-clamp-2 text-sm">
          {description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="pb-2 flex-grow">
        <div className="mb-2">
          <div className="flex justify-between text-sm mb-1">
            <span className="font-medium">₹{raised.toLocaleString()}</span>
            <span className="text-muted-foreground">of ₹{goal.toLocaleString()}</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
        
        <div className="flex justify-between items-center text-xs text-muted-foreground mt-3">
          <div className="flex items-center gap-1">
            <Users className="h-3 w-3" />
            <span>{donors} donors</span>
          </div>
          <div>
            {daysLeft > 0 ? `${daysLeft} days left` : "Ended"}
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="flex gap-2 pt-2">
        <Button asChild className="flex-1">
          <Link to={`/campaign/${id}`}>Donate Now</Link>
        </Button>
        <Button variant="outline" size="icon">
          <Heart className="h-4 w-4" />
          <span className="sr-only">Add to favorites</span>
        </Button>
      </CardFooter>
    </Card>
  );
};
