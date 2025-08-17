import { useState, useEffect } from "react";
import { MapPin, Plane, Users, CheckCircle } from "lucide-react";

const GlobalMap = () => {
  const [activeCountry, setActiveCountry] = useState(0);

  const countries = [
    { name: "United States", position: "top-1/3 left-1/4", flag: "🇺🇸", clients: "2,500+" },
    { name: "United Kingdom", position: "top-1/4 left-1/2", flag: "🇬🇧", clients: "1,800+" },
    { name: "Germany", position: "top-1/3 left-1/2", flag: "🇩🇪", clients: "2,200+" },
    { name: "Canada", position: "top-1/4 left-1/4", flag: "🇨🇦", clients: "1,500+" },
    { name: "Australia", position: "bottom-1/3 right-1/4", flag: "🇦🇺", clients: "1,200+" },
    { name: "France", position: "top-1/3 left-1/2", flag: "🇫🇷", clients: "1,900+" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCountry((prev) => (prev + 1) % countries.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [countries.length]);

  return (
    <section className="py-20 bg-gradient-to-b from-background to-primary-50/30 dark:to-primary-900/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Global Visa Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Connecting dreams worldwide with our comprehensive visa facilitation network
          </p>
        </div>

        {/* Interactive World Map */}
        <div className="relative bg-gradient-to-br from-primary-100 to-accent/20 dark:from-primary-900/30 dark:to-accent/10 rounded-3xl p-8 mb-16 overflow-hidden">
          {/* World Map SVG Background */}
          <div className="absolute inset-0 opacity-10 flex items-center justify-center">
            <svg
              viewBox="0 0 1000 500"
              className="w-full h-full"
              fill="currentColor"
            >
              {/* Simplified world map paths */}
              <path d="M200,200 L300,180 L400,200 L350,250 L250,270 Z" className="text-primary" />
              <path d="M450,180 L550,170 L600,200 L580,240 L500,250 Z" className="text-primary" />
              <path d="M150,300 L250,290 L300,320 L280,360 L200,370 Z" className="text-primary" />
              <path d="M650,280 L750,270 L800,300 L780,340 L700,350 Z" className="text-primary" />
            </svg>
          </div>

          {/* Country Markers */}
          <div className="relative h-96">
            {countries.map((country, index) => (
              <div
                key={index}
                className={`absolute ${country.position} cursor-pointer transform transition-all duration-500 ${
                  activeCountry === index ? 'scale-125 z-10' : 'scale-100 hover:scale-110'
                }`}
                onClick={() => setActiveCountry(index)}
              >
                {/* Marker */}
                <div className={`relative ${activeCountry === index ? 'animate-glow' : ''}`}>
                  <MapPin 
                    className={`w-8 h-8 ${
                      activeCountry === index ? 'text-primary' : 'text-primary-400'
                    } drop-shadow-lg`} 
                  />
                  
                  {/* Country Flag */}
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                    <span className="text-2xl">{country.flag}</span>
                  </div>

                  {/* Pulse Animation */}
                  {activeCountry === index && (
                    <div className="absolute inset-0 -m-2">
                      <div className="w-12 h-12 rounded-full border-2 border-primary animate-ping opacity-30"></div>
                    </div>
                  )}
                </div>

                {/* Info Card */}
                {activeCountry === index && (
                  <div className="absolute top-12 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-4 min-w-max z-20 animate-scale-in">
                    <div className="text-center">
                      <div className="font-semibold text-foreground">{country.name}</div>
                      <div className="text-sm text-primary">{country.clients} visas processed</div>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Animated Routes */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <defs>
                <path id="route1" d="M 200,200 Q 400,150 600,200" />
                <path id="route2" d="M 300,250 Q 500,200 700,250" />
              </defs>
              
              <circle r="3" className="fill-primary opacity-70">
                <animateMotion dur="4s" repeatCount="indefinite">
                  <mpath href="#route1" />
                </animateMotion>
              </circle>
              
              <circle r="3" className="fill-accent opacity-70">
                <animateMotion dur="5s" repeatCount="indefinite">
                  <mpath href="#route2" />
                </animateMotion>
              </circle>
            </svg>
          </div>
        </div>

        {/* Global Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <Plane className="w-8 h-8 text-primary-foreground" />
            </div>
            <div className="text-3xl font-bold text-foreground mb-2">150+</div>
            <div className="text-muted-foreground">Countries Covered</div>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-foreground mb-2">10,000+</div>
            <div className="text-muted-foreground">Happy Travelers</div>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-foreground mb-2">99%</div>
            <div className="text-muted-foreground">Success Rate</div>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-foreground mb-2">20+</div>
            <div className="text-muted-foreground">Service Cities</div>
          </div>
        </div>

        {/* Service Coverage */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-semibold mb-4">
            Expanding Our Global Reach
          </h3>
          <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
            From major metropolitan cities to emerging destinations, we're constantly expanding our network to serve you better.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {["Asia-Pacific", "Europe", "North America", "Middle East", "Africa"].map((region, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium"
              >
                {region}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalMap;