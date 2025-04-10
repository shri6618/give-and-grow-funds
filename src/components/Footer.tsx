
import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-brand-light py-8 mt-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Heart className="h-6 w-6 text-secondary" />
              <span className="font-bold text-xl gradient-text">Give & Grow</span>
            </div>
            <p className="text-muted-foreground mb-4 text-sm">
              Empowering people to raise funds for causes they care about through simple, direct UPI payments.
            </p>
          </div>

          <div className="md:col-span-2">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-semibold mb-3 text-foreground">Platform</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/campaigns" className="text-muted-foreground hover:text-primary transition-colors">
                      Explore Campaigns
                    </Link>
                  </li>
                  <li>
                    <Link to="/how-it-works" className="text-muted-foreground hover:text-primary transition-colors">
                      How It Works
                    </Link>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-3 text-foreground">Account</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link to="/login" className="text-muted-foreground hover:text-primary transition-colors">
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link to="/register" className="text-muted-foreground hover:text-primary transition-colors">
                      Register
                    </Link>
                  </li>
                  <li>
                    <Link to="/dashboard" className="text-muted-foreground hover:text-primary transition-colors">
                      Dashboard
                    </Link>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-3 text-foreground">Legal</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                      Terms of Service
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Give & Grow. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-primary">
              Twitter
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary">
              Facebook
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
