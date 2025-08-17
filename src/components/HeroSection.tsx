import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Globe } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient - Professional */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-background to-primary-50/50 dark:from-primary-900/30 dark:via-background dark:to-primary-900/20" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-300/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Global Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-accent/10 dark:bg-accent/20 backdrop-blur-sm border border-accent/30 mb-8">
            <Globe className="w-5 h-5 mr-3 text-accent animate-glow" />
            <span className="text-sm font-semibold text-primary">World's First Visa Doorstep Service</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="block text-primary">World's </span>
            <span className="inline-block animate-wave">🌎</span>
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              First Visa Doorstep
            </span>
            <span className="block text-primary">Facilitation Services</span>
          </h1>

          {/* Subtext */}
          <p className="text-xl md:text-2xl text-foreground/80 mb-10 max-w-4xl mx-auto leading-relaxed font-medium">
            Fill once. We handle the rest — documents, appointments, and delivery.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-10 py-5 text-lg font-bold rounded-xl shadow-[var(--shadow-xl)] hover:shadow-[var(--shadow-glow)] transition-all duration-300 transform hover:scale-105"
            >
              Apply Now
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-10 py-5 text-lg font-bold rounded-xl transition-all duration-300"
            >
              <Play className="mr-3 h-6 w-6" />
              Explore Countries
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center opacity-75">
            <div className="space-y-1">
              <div className="text-2xl font-bold text-primary">150+</div>
              <div className="text-sm text-muted-foreground">Countries</div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl font-bold text-primary">99%</div>
              <div className="text-sm text-muted-foreground">Approval Rate</div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl font-bold text-primary">10K+</div>
              <div className="text-sm text-muted-foreground">Visas Processed</div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl font-bold text-primary">20+</div>
              <div className="text-sm text-muted-foreground">Cities</div>
            </div>
          </div>
        </div>

        {/* Mockup Placeholder */}
        <div className="mt-16 animate-slide-up">
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-card border border-border rounded-2xl shadow-xl p-8 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-destructive rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="text-sm text-muted-foreground">Travaky Dashboard</div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-primary-50 dark:bg-primary-900/20 rounded-lg p-4 text-center">
                  <div className="text-primary font-semibold">Application Status</div>
                  <div className="text-2xl font-bold text-primary mt-2">Approved ✅</div>
                </div>
                <div className="bg-accent/10 rounded-lg p-4 text-center">
                  <div className="text-accent-foreground font-semibold">Processing Time</div>
                  <div className="text-2xl font-bold text-accent-foreground mt-2">3-5 Days</div>
                </div>
                <div className="bg-secondary rounded-lg p-4 text-center">
                  <div className="text-secondary-foreground font-semibold">Next Step</div>
                  <div className="text-2xl font-bold text-secondary-foreground mt-2">Document Pickup</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;