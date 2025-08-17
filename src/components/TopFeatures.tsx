import { FileText, Package, Shield, Calendar, Truck, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TopFeatures = () => {
  const features = [
    {
      icon: FileText,
      title: "Easy Form",
      description: "Simple one-time form filling with guided assistance and smart validation",
      color: "bg-blue-500",
      gradient: "from-blue-500 to-blue-600",
    },
    {
      icon: Package,
      title: "Pickup Service",
      description: "Doorstep document collection at your convenience, no travel required",
      color: "bg-green-500",
      gradient: "from-green-500 to-green-600",
    },
    {
      icon: Shield,
      title: "Expert Review",
      description: "Professional document verification and application review by visa specialists",
      color: "bg-purple-500",
      gradient: "from-purple-500 to-purple-600",
    },
    {
      icon: Calendar,
      title: "Appointment Booking",
      description: "Priority appointment slots booked within 24-48 hours guaranteed",
      color: "bg-orange-500",
      gradient: "from-orange-500 to-orange-600",
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Secure and timely delivery of approved documents to your doorstep",
      color: "bg-red-500",
      gradient: "from-red-500 to-red-600",
    },
    {
      icon: CheckCircle,
      title: "Success Guarantee",
      description: "99% approval rate with full support throughout the visa process",
      color: "bg-primary",
      gradient: "from-primary to-primary-600",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Top Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need for a seamless visa application experience, all in one place
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border-2 border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl group cursor-pointer overflow-hidden"
            >
              <CardHeader className="relative">
                {/* Background Gradient Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
                
                <div className="relative">
                  <div className={`${feature.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
                
                {/* Feature Highlight */}
                <div className="mt-6 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm text-green-600 font-medium">Available</span>
                  </div>
                  
                  <div className="text-sm text-muted-foreground">
                    {index < 3 ? "Premium" : "Standard"}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Benefits */}
        <div className="mt-16 bg-gradient-to-r from-primary-50 to-accent/10 dark:from-primary-900/20 dark:to-accent/5 rounded-2xl p-8 border border-primary-200/50 dark:border-primary-700/50">
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-6 text-foreground">
              Why Choose Our Features?
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Support Available</div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">5★</div>
                <div className="text-sm text-muted-foreground">Customer Rating</div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Secure Process</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopFeatures;