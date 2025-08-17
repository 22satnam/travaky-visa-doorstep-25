import { useEffect, useState } from "react";
import { CheckCircle, FileText } from "lucide-react";

const VisaJourneyAnimation = () => {
  const [isStamped, setIsStamped] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsStamped(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-background via-primary-50 to-background dark:from-background dark:via-primary-900/10 dark:to-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="relative">
          {/* Hyperrealistic Passport Mockup */}
          <div className="relative mx-auto w-96 h-64 perspective-1000">
            {/* Passport Cover with enhanced realism */}
            <div className="relative w-full h-full bg-gradient-to-br from-primary-800 via-primary-700 to-primary-900 rounded-xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.4)] transform rotate-2 hover:rotate-0 transition-all duration-700 hover:shadow-[0_35px_60px_-12px_rgba(0,0,0,0.5)]">
              {/* Leather texture overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 via-transparent to-primary-900/30 rounded-xl"></div>
              
              {/* Passport content */}
              <div className="relative inset-0 flex items-center justify-center h-full p-8 text-white">
                <div className="text-center space-y-3">
                  <div className="w-16 h-16 mx-auto mb-6 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <FileText className="w-8 h-8 text-white/90" />
                  </div>
                  <div className="text-xl font-bold tracking-wider">PASSPORT</div>
                  <div className="text-sm opacity-90 tracking-wide">REPUBLIC OF TRAVEL</div>
                  <div className="text-xs opacity-70 mt-4">No. 123456789</div>
                </div>
              </div>

              {/* Hyperrealistic Stamp with Reflection */}
              {isStamped && (
                <div className="absolute top-6 right-6 animate-stamp">
                  {/* Stamp shadow/reflection on passport */}
                  <div className="absolute inset-0 bg-black/20 rounded-full blur-sm transform translate-x-1 translate-y-1 scale-110"></div>
                  
                  {/* Main stamp */}
                  <div className="relative bg-gradient-to-br from-red-500 to-red-700 text-white rounded-full px-5 py-3 rotate-12 border-3 border-red-600 shadow-[var(--shadow-stamp)] backdrop-blur-sm">
                    {/* Inner glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-red-400/30 to-transparent rounded-full"></div>
                    
                    {/* Stamp content */}
                    <div className="relative text-center">
                      <div className="text-xs font-black tracking-wider">APPROVED</div>
                      <div className="text-xs font-bold">VISA</div>
                      <div className="text-[8px] opacity-80 mt-0.5">31.07.2025</div>
                    </div>
                    
                    {/* Stamp border effect */}
                    <div className="absolute inset-0 rounded-full border border-red-400/50"></div>
                  </div>
                  
                  {/* Ink bleed effect on passport */}
                  <div className="absolute -inset-2 bg-red-500/10 rounded-full blur-md"></div>
                </div>
              )}
              
              {/* Passport binding */}
              <div className="absolute left-0 top-4 bottom-4 w-1 bg-gradient-to-b from-primary-900 to-primary-800 rounded-l-xl"></div>
              <div className="absolute left-1 top-8 bottom-8 w-px bg-primary-900/50"></div>
            </div>
          </div>

          {/* Success Message */}
          <div className="mt-16 animate-fade-in">
            <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-accent to-accent/90 rounded-full shadow-[var(--shadow-glow)] border border-accent/20">
              <CheckCircle className="w-7 h-7 text-white mr-4" />
              <span className="text-white font-bold text-lg">
                Visa Approved Successfully! 🎉
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mt-8 mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Your Visa Journey Starts Here
            </h2>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Your journey awaits — from application to approval, we handle every step with precision and care.
            </p>
          </div>

          {/* Journey Steps Preview */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-primary-foreground font-bold">1</span>
              </div>
              <div className="text-sm font-medium text-foreground">Apply Online</div>
              <div className="text-xs text-muted-foreground">10 minutes</div>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-primary-foreground font-bold">2</span>
              </div>
              <div className="text-sm font-medium text-foreground">Expert Connect</div>
              <div className="text-xs text-muted-foreground">15 minutes</div>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-primary-foreground font-bold">3</span>
              </div>
              <div className="text-sm font-medium text-foreground">Document Pickup</div>
              <div className="text-xs text-muted-foreground">24-48 hours</div>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <div className="text-sm font-medium text-foreground">Visa Delivered</div>
              <div className="text-xs text-muted-foreground">5-7 days</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisaJourneyAnimation;