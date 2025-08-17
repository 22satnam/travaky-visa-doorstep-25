import { Award, Users, MapPin, Clock, Star, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const WhyChoose = () => {
  const highlights = [
    {
      icon: Award,
      title: "World's First",
      subtitle: "Visa Doorstep Facilitation Services",
      description: "Revolutionary service model that brings visa processing to your doorstep",
      stat: "First in Industry",
      color: "bg-gradient-to-br from-primary to-primary-600",
      isUSP: true,
    },
    {
      icon: Users,
      title: "10,000+",
      subtitle: "Visas Processed Successfully",
      description: "Trusted by thousands of travelers worldwide for their visa needs",
      stat: "99% Success Rate",
      color: "bg-gradient-to-br from-green-500 to-green-600",
    },
    {
      icon: MapPin,
      title: "20+ Cities",
      subtitle: "Doorstep Pickup Available",
      description: "Convenient doorstep service across major cities in India",
      stat: "Expanding Daily",
      color: "bg-gradient-to-br from-blue-500 to-blue-600",
    },
    {
      icon: Clock,
      title: "24-48 Hours",
      subtitle: "Appointment Confirmation",
      description: "Fastest appointment booking service with guaranteed slots",
      stat: "Average: 36 hrs",
      color: "bg-gradient-to-br from-purple-500 to-purple-600",
    },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Mumbai",
      rating: 5,
      text: "Travaky made my German visa process so smooth! Doorstep pickup was a game-changer.",
      image: "👩‍💼",
    },
    {
      name: "Rajesh Kumar",
      location: "Delhi",
      rating: 5,
      text: "Got my US visa approved in just 5 days. The expert guidance was exceptional.",
      image: "👨‍💻",
    },
    {
      name: "Anita Patel",
      location: "Bangalore",
      rating: 5,
      text: "Best visa service ever! They handled everything while I focused on my work.",
      image: "👩‍🔬",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-primary-50/30 to-background dark:from-primary-900/10 dark:to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Why Choose Travaky?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the future of visa processing with our innovative doorstep facilitation services
          </p>
        </div>

        {/* USP Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {highlights.map((highlight, index) => (
            <Card 
              key={index} 
              className={`border-2 transition-all duration-300 hover:shadow-xl group cursor-pointer ${
                highlight.isUSP 
                  ? 'border-primary bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 hover:border-primary-400' 
                  : 'border-border hover:border-primary/30'
              }`}
            >
              <CardHeader className="text-center">
                {highlight.isUSP && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-bold">
                      UNIQUE SELLING POINT
                    </div>
                  </div>
                )}
                
                <div className={`${highlight.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <highlight.icon className="w-8 h-8 text-white" />
                </div>
                
                <CardTitle className="text-xl font-bold text-foreground mb-2">
                  {highlight.title}
                </CardTitle>
                
                <div className="text-sm font-medium text-primary mb-4">
                  {highlight.subtitle}
                </div>
              </CardHeader>
              
              <CardContent className="text-center">
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {highlight.description}
                </p>
                
                <div className="inline-flex items-center px-3 py-1 bg-primary-100 dark:bg-primary-900/30 rounded-full">
                  <span className="text-xs font-medium text-primary">
                    {highlight.stat}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Metrics */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 mb-20 text-center text-white">
          <h3 className="text-2xl font-semibold mb-8">Trusted by Travelers Worldwide</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">99%</div>
              <div className="text-primary-100">Approval Rate</div>
              <div className="text-xs text-primary-200 mt-1">Industry Leading</div>
            </div>
            
            <div>
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <div className="text-primary-100">Visas Processed</div>
              <div className="text-xs text-primary-200 mt-1">Happy Customers</div>
            </div>
            
            <div>
              <div className="text-4xl font-bold mb-2">20+</div>
              <div className="text-primary-100">Cities Covered</div>
              <div className="text-xs text-primary-200 mt-1">Doorstep Service</div>
            </div>
          </div>
        </div>

        {/* Customer Testimonials */}
        <div>
          <h3 className="text-3xl font-semibold text-center mb-12 text-foreground">
            What Our Customers Say
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  {/* Testimonial Text */}
                  <p className="text-muted-foreground italic mb-6 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  
                  {/* Customer Info */}
                  <div className="flex items-center">
                    <div className="text-3xl mr-4">{testimonial.image}</div>
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;