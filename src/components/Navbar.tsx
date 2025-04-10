
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Heart, Menu, User, X } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useIsMobile } from '@/hooks/use-mobile';

export const Navbar = () => {
  const isMobile = useIsMobile();
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  // This will be replaced with actual auth logic
  const handleAuthAction = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  const NavLinks = () => (
    <>
      <Link to="/" className="text-foreground hover:text-primary transition-colors">
        Home
      </Link>
      <Link to="/campaigns" className="text-foreground hover:text-primary transition-colors">
        Explore Campaigns
      </Link>
      <Link to="/how-it-works" className="text-foreground hover:text-primary transition-colors">
        How It Works
      </Link>
    </>
  );

  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <Heart className="h-6 w-6 text-secondary" />
            <span className="font-bold text-xl gradient-text hidden sm:inline-block">Give & Grow</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        {!isMobile && (
          <nav className="mx-6 flex items-center space-x-6 text-sm font-medium">
            <NavLinks />
          </nav>
        )}

        {/* Auth Buttons */}
        <div className="flex items-center gap-2">
          {isLoggedIn ? (
            <Link to="/dashboard">
              <Button variant="outline" size="sm" className="gap-2">
                <User className="h-4 w-4" />
                <span>Dashboard</span>
              </Button>
            </Link>
          ) : (
            <>
              {!isMobile && (
                <Link to="/login">
                  <Button variant="outline" size="sm" onClick={handleAuthAction}>
                    Login
                  </Button>
                </Link>
              )}
              <Link to="/register">
                <Button size="sm" onClick={handleAuthAction}>
                  Get Started
                </Button>
              </Link>
            </>
          )}

          {/* Mobile Menu */}
          {isMobile && (
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="ml-2">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[250px] sm:w-[300px]">
                <div className="flex flex-col gap-6 mt-8">
                  <nav className="flex flex-col space-y-4 text-base font-medium">
                    <NavLinks />
                    {!isLoggedIn && (
                      <Link to="/login" className="text-foreground hover:text-primary transition-colors">
                        Login
                      </Link>
                    )}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          )}
        </div>
      </div>
    </header>
  );
};
