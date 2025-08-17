import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, User, LogIn } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-600 bg-clip-text text-transparent">
              Travaky
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-foreground hover:text-primary transition-colors font-medium">
                Home
              </a>
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors font-medium">
                About
              </a>
              <a href="#services" className="text-muted-foreground hover:text-primary transition-colors font-medium">
                Services
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors font-medium">
                Contact
              </a>
              <a href="#dashboard" className="text-muted-foreground hover:text-primary transition-colors font-medium">
                Dashboard
              </a>
            </div>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
              <LogIn className="mr-2 h-4 w-4" />
              Login
            </Button>
            <Button size="sm" className="bg-primary hover:bg-primary-600 text-primary-foreground">
              <User className="mr-2 h-4 w-4" />
              Sign Up
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-muted-foreground"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border">
              <a
                href="#home"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Home
              </a>
              <a
                href="#about"
                className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
              <a
                href="#services"
                className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Services
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
              <a
                href="#dashboard"
                className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Dashboard
              </a>
              <div className="pt-4 pb-3 space-y-3">
                <Button variant="ghost" size="sm" className="w-full justify-start text-muted-foreground">
                  <LogIn className="mr-2 h-4 w-4" />
                  Login
                </Button>
                <Button size="sm" className="w-full bg-primary hover:bg-primary-600 text-primary-foreground">
                  <User className="mr-2 h-4 w-4" />
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;