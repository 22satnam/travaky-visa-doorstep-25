import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Clock, Globe } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary-700 to-primary-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="text-8xl opacity-10 animate-pulse">✈️</div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Main Heading */}
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to Get Started?
          </h2>
          
          <p className="text-xl md:text-2xl text-primary-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join thousands of satisfied travelers who chose Travaky for their visa needs. 
            Your dream destination is just one application away.
          </p>

          {/* Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="flex items-center justify-center md:justify-start text-white">
              <CheckCircle className="w-6 h-6 mr-3 text-green-400" />
              <span className="text-lg">99% Approval Rate</span>
            </div>
            
            <div className="flex items-center justify-center md:justify-start text-white">
              <Clock className="w-6 h-6 mr-3 text-blue-400" />
              <span className="text-lg">24-48 Hour Response</span>
            </div>
            
            <div className="flex items-center justify-center md:justify-start text-white">
              <Globe className="w-6 h-6 mr-3 text-yellow-400" />
              <span className="text-lg">150+ Countries</span>
            </div>
          </div>

          {/* Main CTA Button */}
          <div className="space-y-6">
            <Button 
              size="lg"
              className="bg-white text-primary hover:bg-accent hover:text-white text-xl font-bold px-14 py-7 rounded-2xl shadow-[var(--shadow-xl)] hover:shadow-[var(--shadow-glow)] transform hover:scale-105 transition-all duration-300"
            >
              Start Your Application
              <ArrowRight className="ml-4 h-7 w-7" />
            </Button>
            
            <div className="text-white/80 text-base font-medium">
              ✨ Free consultation • No hidden fees • Secure process
            </div>
          </div>

          {/* Secondary Actions */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-3 rounded-xl"
            >
              View Pricing Plans
            </Button>
            
            <Button 
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-3 rounded-xl"
            >
              Talk to Expert
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-white/20">
            <div className="text-primary-200 text-sm mb-4">Trusted by over 10,000 travelers</div>
            
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="text-white font-semibold">⭐⭐⭐⭐⭐ 4.9/5</div>
              <div className="w-px h-6 bg-white/30"></div>
              <div className="text-white font-semibold">ISO Certified</div>
              <div className="w-px h-6 bg-white/30"></div>
              <div className="text-white font-semibold">Secure Process</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;