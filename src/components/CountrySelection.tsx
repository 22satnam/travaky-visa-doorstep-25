import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const CountrySelection = () => {
  const countries = [
    {
      name: "Germany",
      flag: "🇩🇪",
      processingTime: "5-10 days",
      entryType: "Schengen Visa",
      color: "hover:border-red-300",
    },
    {
      name: "France",
      flag: "🇫🇷",
      processingTime: "7-15 days",
      entryType: "Schengen Visa",
      color: "hover:border-blue-300",
    },
    {
      name: "Italy",
      flag: "🇮🇹",
      processingTime: "5-12 days",
      entryType: "Schengen Visa",
      color: "hover:border-green-300",
    },
    {
      name: "USA",
      flag: "🇺🇸",
      processingTime: "3-5 days",
      entryType: "B1/B2 Visa",
      color: "hover:border-blue-400",
    },
    {
      name: "United Kingdom",
      flag: "🇬🇧",
      processingTime: "15-20 days",
      entryType: "Standard Visitor",
      color: "hover:border-purple-300",
    },
    {
      name: "Canada",
      flag: "🇨🇦",
      processingTime: "20-30 days",
      entryType: "Visitor Visa",
      color: "hover:border-red-400",
    },
    {
      name: "Australia",
      flag: "🇦🇺",
      processingTime: "15-25 days",
      entryType: "Visitor Visa",
      color: "hover:border-yellow-300",
    },
    {
      name: "Spain",
      flag: "🇪🇸",
      processingTime: "7-14 days",
      entryType: "Schengen Visa",
      color: "hover:border-orange-300",
    },
  ];

  const flagEmojis = "🇺🇸 🇬🇧 🇨🇦 🇦🇺 🇩🇪 🇫🇷 🇮🇹 🇪🇸 🇳🇱 🇧🇪 🇨🇭 🇦🇹 🇸🇪 🇳🇴 🇩🇰 🇫🇮";

  return (
    <section className="py-20 bg-gradient-to-b from-background to-primary-50/30 dark:to-primary-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Visa Services for 150+ Countries
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Your Global Visa Partner
          </p>
          
          {/* Flag Row */}
          <div className="text-4xl md:text-5xl space-x-2 mb-8 leading-relaxed">
            {flagEmojis.split(' ').map((flag, index) => (
              <span 
                key={index} 
                className="inline-block animate-wave hover:scale-125 transition-transform duration-300 cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {flag}
              </span>
            ))}
          </div>
        </div>

        {/* Country Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {countries.map((country, index) => (
            <Link to={`/country/${country.name.toLowerCase().replace(/\s+/g, '-')}`} key={index}>
              <Card 
                className={`border-2 border-border ${country.color} transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer group`}
              >
              <CardHeader className="text-center pb-4">
                <div className="text-6xl mb-4 group-hover:animate-wave">
                  {country.flag}
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {country.name}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-muted-foreground">
                    <Clock className="w-4 h-4 mr-2" />
                    <span className="text-sm">Processing</span>
                  </div>
                  <span className="text-sm font-medium text-primary">
                    {country.processingTime}
                  </span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="text-sm">Entry Type</span>
                  </div>
                  <span className="text-sm font-medium text-foreground">
                    {country.entryType}
                  </span>
                </div>
                
                <div className="pt-4 border-t border-border">
                  <div className="w-full bg-primary-100 dark:bg-primary-900/30 rounded-full h-2">
                    <div 
                      className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: `${Math.random() * 40 + 60}%`,
                        animationDelay: `${index * 200}ms`
                      }}
                    ></div>
                  </div>
                  <div className="text-xs text-muted-foreground mt-2 text-center">
                    Success Rate: 99%
                  </div>
                </div>
              </CardContent>
            </Card>
            </Link>
          ))}
        </div>

        {/* View All Countries CTA */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center px-6 py-3 bg-primary-50 dark:bg-primary-900/20 rounded-full border border-primary-200 dark:border-primary-700">
            <span className="text-primary font-medium mr-2">And 142+ more countries</span>
            <span className="text-2xl">✈️</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountrySelection;