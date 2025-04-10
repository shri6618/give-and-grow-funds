
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { HeartHandshake, Stethoscope, GraduationCap, Leaf, Home, Baby, Palette, Globe } from 'lucide-react';

export const CategorySection = () => {
  const categories = [
    { name: 'Medical', icon: <Stethoscope className="h-6 w-6" />, color: 'bg-red-100 text-red-600' },
    { name: 'Education', icon: <GraduationCap className="h-6 w-6" />, color: 'bg-blue-100 text-blue-600' },
    { name: 'Environment', icon: <Leaf className="h-6 w-6" />, color: 'bg-green-100 text-green-600' },
    { name: 'Housing', icon: <Home className="h-6 w-6" />, color: 'bg-yellow-100 text-yellow-600' },
    { name: 'Children', icon: <Baby className="h-6 w-6" />, color: 'bg-purple-100 text-purple-600' },
    { name: 'Arts', icon: <Palette className="h-6 w-6" />, color: 'bg-pink-100 text-pink-600' },
    { name: 'Disaster', icon: <HeartHandshake className="h-6 w-6" />, color: 'bg-orange-100 text-orange-600' },
    { name: 'International', icon: <Globe className="h-6 w-6" />, color: 'bg-indigo-100 text-indigo-600' },
  ];

  return (
    <section className="py-16 bg-brand-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Browse By Category</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover campaigns by categories and find causes that align with your values.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 mb-8">
          {categories.map((category, index) => (
            <Link 
              key={index}
              to={`/campaigns?category=${category.name.toLowerCase()}`}
              className="flex flex-col items-center p-4 rounded-lg hover:bg-background transition-colors text-center"
            >
              <div className={`p-3 rounded-full ${category.color} mb-3`}>
                {category.icon}
              </div>
              <span className="text-sm font-medium">{category.name}</span>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Button asChild>
            <Link to="/campaigns">Browse All Campaigns</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
