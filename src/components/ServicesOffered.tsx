import { Phone, Home, Award, CheckCircle, Clock, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ServicesOffered = () => {
  const services = [
    {
      icon: Phone,
      title: "Docs on Call",
      price: "₹999",
      period: "per application",
      description: "Expert consultation and document guidance over phone/video call",
      features: [
        "Document checklist provided",
        "Form filling assistance",
        "Expert consultation (30 mins)",
        "Email support for 7 days",
        "Application status tracking"
      ],
      color: "border-blue-300",
      gradient: "from-blue-50 to-blue-100",
      isPopular: false,
    },
    {
      icon: Home,
      title: "Docs on Door",
      price: "₹2,499",
      period: "per application",
      description: "Complete doorstep document collection and review service",
      features: [
        "Doorstep document pickup",
        "Professional document review",
        "Form filling & submission",
        "Appointment booking assistance",
        "WhatsApp updates & support",
        "Document delivery back"
      ],
      color: "border-primary",
      gradient: "from-primary-50 to-primary-100",
      isPopular: true,
    },
    {
      icon: Award,
      title: "Visa at Door",
      price: "₹4,999",
      period: "per application",
      description: "Complete end-to-end visa processing with premium support",
      features: [
        "Everything in Docs on Door",
        "Dedicated visa consultant",
        "Priority appointment booking",
        "Interview preparation (if needed)",
        "Visa delivery to doorstep",
        "90-day post-approval support",
        "Travel insurance assistance"
      ],
      color: "border-purple-300",
      gradient: "from-purple-50 to-purple-100",
      isPopular: false,
    },
  ];

  return (
    <section id="services" className="py-20 bg-background relative overflow-hidden">
      {/* Animated Flag Background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 left-10 text-6xl animate-wave" style={{animationDelay: '0s'}}>🇺🇸</div>
        <div className="absolute top-40 right-20 text-6xl animate-wave" style={{animationDelay: '0.5s'}}>🇬🇧</div>
        <div className="absolute bottom-40 left-20 text-6xl animate-wave" style={{animationDelay: '1s'}}>🇨🇦</div>
        <div className="absolute bottom-20 right-10 text-6xl animate-wave" style={{animationDelay: '1.5s'}}>🇩🇪</div>
        <div className="absolute top-60 left-1/2 text-6xl animate-wave" style={{animationDelay: '2s'}}>🇫🇷</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Services We Offer
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the perfect service level for your visa application needs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`border-2 ${service.color} ${service.isPopular ? 'scale-105 shadow-xl' : 'hover:scale-105'} transition-all duration-300 cursor-pointer relative overflow-hidden group`}
            >
              {/* Popular Badge */}
              {service.isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    RECOMMENDED
                  </div>
                </div>
              )}

              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} dark:opacity-20 opacity-50 group-hover:opacity-70 transition-opacity duration-300`} />

              <CardHeader className="relative z-10 text-center pt-8">
                <div className={`w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center ${service.isPopular ? 'bg-primary' : 'bg-gradient-to-br from-primary-400 to-primary-600'} group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <service.icon className="w-10 h-10 text-white" />
                </div>
                
                <CardTitle className="text-2xl font-bold text-foreground mb-2">
                  {service.title}
                </CardTitle>
                
                <div className="mb-4">
                  <span className="text-4xl font-bold text-primary">{service.price}</span>
                  <span className="text-muted-foreground ml-2">{service.period}</span>
                </div>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </CardHeader>

              <CardContent className="relative z-10">
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full ${service.isPopular ? 'bg-primary hover:bg-primary-600' : 'bg-primary-600 hover:bg-primary-700'} text-primary-foreground font-semibold py-3`}
                >
                  Choose {service.title}
                </Button>

                {/* Service Highlights */}
                <div className="mt-6 flex items-center justify-center space-x-4 text-xs text-muted-foreground">
                  <div className="flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    <span>24-48hr response</span>
                  </div>
                  <div className="flex items-center">
                    <Shield className="w-3 h-3 mr-1" />
                    <span>100% secure</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Service Comparison */}
        <div className="mt-16 bg-gradient-to-r from-primary-50 to-accent/10 dark:from-primary-900/20 dark:to-accent/5 rounded-2xl p-8 border border-primary-200/50 dark:border-primary-700/50">
          <h3 className="text-2xl font-semibold text-center mb-8 text-foreground">
            All Services Include
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <div className="font-medium text-foreground">99% Approval Rate</div>
              <div className="text-sm text-muted-foreground">Guaranteed success</div>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <div className="font-medium text-foreground">Secure Process</div>
              <div className="text-sm text-muted-foreground">Data protection</div>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                <Clock className="w-6 h-6 text-purple-600" />
              </div>
              <div className="font-medium text-foreground">Fast Processing</div>
              <div className="text-sm text-muted-foreground">Quick turnaround</div>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                <Phone className="w-6 h-6 text-orange-600" />
              </div>
              <div className="font-medium text-foreground">24/7 Support</div>
              <div className="text-sm text-muted-foreground">Always available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOffered;