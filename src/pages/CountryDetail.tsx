import { useParams, Link } from "react-router-dom";
import { ArrowLeft, CheckCircle, Clock, FileText, CreditCard, MapPin, Plane, Home, Camera, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const CountryDetail = () => {
  const { country } = useParams();
  
  const countryData = {
    france: {
      name: "FRANCE",
      flag: "🇫🇷",
      visaType: "Schengen Visa",
      validity: "Free",
      entryType: "Multiple Entry",
      stayDuration: "90 Days",
      processingTime: "7-15 days",
      lastWeekApprovals: 980,
      expertType: "Schengen Experts",
      videoSrc: "/placeholder.svg", // Placeholder for video
      iconicPlaces: ["Eiffel Tower", "Louvre Museum", "Montmartre"]
    },
    germany: {
      name: "GERMANY", 
      flag: "🇩🇪",
      visaType: "Schengen Visa",
      validity: "Free",
      entryType: "Multiple Entry", 
      stayDuration: "90 Days",
      processingTime: "5-10 days",
      lastWeekApprovals: 1250,
      expertType: "Schengen Experts",
      videoSrc: "/placeholder.svg",
      iconicPlaces: ["Brandenburg Gate", "Neuschwanstein Castle", "Rhine Valley"]
    },
    usa: {
      name: "UNITED STATES",
      flag: "🇺🇸", 
      visaType: "B1/B2 Visa",
      validity: "10 Years",
      entryType: "Multiple Entry",
      stayDuration: "180 Days",
      processingTime: "3-5 days",
      lastWeekApprovals: 2100,
      expertType: "US Visa Experts",
      videoSrc: "/placeholder.svg",
      iconicPlaces: ["Statue of Liberty", "Golden Gate Bridge", "Times Square"]
    }
  };

  const currentCountry = countryData[country?.toLowerCase() as keyof typeof countryData] || countryData.france;

  const documents = [
    { icon: FileText, label: "Passport", description: "Valid for 6+ months" },
    { icon: Camera, label: "Photo", description: "Passport size" },
    { icon: Plane, label: "Flight Ticket", description: "Round trip booking" },
    { icon: Home, label: "Hotel Reservation", description: "Confirmed booking" }
  ];

  const trustStats = [
    { 
      icon: CheckCircle, 
      title: `Last week ${currentCountry.lastWeekApprovals.toLocaleString()} visa applications approved`,
      description: "99.2% success rate"
    },
    { 
      icon: Users, 
      title: `Handled by ${currentCountry.expertType}`,
      description: "Specialized expertise"
    },
    { 
      icon: Clock, 
      title: "Priority appointments in any embassy",
      description: "Fast-track processing"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-primary-50/30 dark:to-primary-900/10">
      {/* Header Navigation */}
      <div className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            to="/" 
            className="inline-flex items-center text-primary hover:text-primary-600 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Countries
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Country Info Card */}
          <div className="order-2 lg:order-1">
            <Card className="border-2 border-primary-200 dark:border-primary-700 bg-background shadow-stamp">
              <CardHeader className="text-center">
                <div className="text-8xl mb-4">{currentCountry.flag}</div>
                <CardTitle className="text-4xl font-bold text-foreground mb-4">
                  {currentCountry.name}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-primary-50 dark:bg-primary-900/20 p-4 rounded-lg">
                    <div className="text-sm text-muted-foreground">Visa Type</div>
                    <div className="font-semibold text-foreground">{currentCountry.visaType}</div>
                  </div>
                  <div className="bg-primary-50 dark:bg-primary-900/20 p-4 rounded-lg">
                    <div className="text-sm text-muted-foreground">Validity</div>
                    <div className="font-semibold text-foreground">{currentCountry.validity}</div>
                  </div>
                  <div className="bg-primary-50 dark:bg-primary-900/20 p-4 rounded-lg">
                    <div className="text-sm text-muted-foreground">Entry Type</div>
                    <div className="font-semibold text-foreground">{currentCountry.entryType}</div>
                  </div>
                  <div className="bg-primary-50 dark:bg-primary-900/20 p-4 rounded-lg">
                    <div className="text-sm text-muted-foreground">Stay Duration</div>
                    <div className="font-semibold text-foreground">{currentCountry.stayDuration}</div>
                  </div>
                </div>
                
                <div className="bg-gradient-primary text-white p-4 rounded-lg text-center">
                  <div className="font-semibold">Processing Time</div>
                  <div className="text-2xl font-bold">{currentCountry.processingTime}</div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Hero Animation/Video */}
          <div className="order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <div className="aspect-video bg-gradient-card relative overflow-hidden">
                {/* Placeholder for country animation/video */}
                <div className="absolute inset-0 bg-gradient-card opacity-80"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-6xl mb-4 animate-bounce">{currentCountry.flag}</div>
                    <h3 className="text-2xl font-bold mb-2">Experience {currentCountry.name.toLowerCase().replace(/^\w/, c => c.toUpperCase())}</h3>
                    <p className="text-lg opacity-90">
                      {currentCountry.iconicPlaces.join(" • ")}
                    </p>
                  </div>
                </div>
                
                {/* Animated elements */}
                <div className="absolute top-4 left-4 w-3 h-3 bg-white rounded-full animate-pulse"></div>
                <div className="absolute top-8 right-8 w-2 h-2 bg-white rounded-full animate-pulse delay-300"></div>
                <div className="absolute bottom-6 left-8 w-4 h-4 bg-white rounded-full animate-pulse delay-700"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust & Stats Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
            Why Choose Travaky for {currentCountry.name}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {trustStats.map((stat, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full mb-4">
                    <stat.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{stat.title}</h3>
                  <p className="text-sm text-muted-foreground">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Required Documents Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
            Required Documents
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {documents.map((doc, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full mb-4">
                    <doc.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{doc.label}</h3>
                  <p className="text-sm text-muted-foreground">{doc.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto border-2 border-primary-200 dark:border-primary-700">
            <CardContent className="pt-8">
              <h2 className="text-3xl font-bold mb-4 text-foreground">
                Ready to Apply for {currentCountry.name} Visa?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our visa experts will assist you end-to-end including form filling, 
                appointment booking, and doorstep pickup.
              </p>
              
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-white px-8 py-4 text-lg"
              >
                Continue to Apply for {currentCountry.name} Visa
              </Button>
              
              <div className="mt-6 flex items-center justify-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-primary" />
                  Expert Assistance
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-primary" />
                  Doorstep Pickup
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-primary" />
                  99% Success Rate
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CountryDetail;