import { UserPlus, Users, Calendar, Package, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const HowItWorks = () => {
  const steps = [
    {
      icon: UserPlus,
      title: "Onboard",
      description: "Quick registration and document upload",
      time: "5 mins",
      color: "bg-primary",
    },
    {
      icon: Users,
      title: "Expert Connect",
      description: "Immediate connection with visa specialists",
      time: "15 mins",
      color: "bg-accent",
    },
    {
      icon: Calendar,
      title: "Get Appointment",
      description: "We book your visa appointment slot",
      time: "24-48 hrs",
      color: "bg-primary-600",
    },
    {
      icon: Package,
      title: "Doorstep Pickup",
      description: "We collect documents from your location",
      time: "Same day",
      color: "bg-primary-400",
    },
    {
      icon: Shield,
      title: "Confident Appearance",
      description: "Appear for appointment with full confidence",
      time: "Scheduled",
      color: "bg-green-600",
    },
  ];

  const stats = [
    { text: "Get started in 10 mins", color: "bg-primary-100 text-primary-800" },
    { text: "Appointment slot in 15 mins", color: "bg-accent/20 text-accent-foreground" },
    { text: "Onboard in 5 mins", color: "bg-green-100 text-green-800" },
    { text: "Appointment confirmed within 24–48 hrs", color: "bg-blue-100 text-blue-800" },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Five simple steps to get your visa approved with complete peace of mind
          </p>
        </div>

        {/* Steps Flow */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="border-2 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg group">
                <CardContent className="p-6 text-center">
                  <div className={`${step.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-2 text-foreground">
                    {step.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                    {step.description}
                  </p>
                  
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-50 dark:bg-primary-900/20">
                    <span className="text-xs font-medium text-primary">
                      {step.time}
                    </span>
                  </div>
                </CardContent>
              </Card>

              {/* Arrow for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="w-8 h-0.5 bg-primary opacity-30"></div>
                  <div className="w-0 h-0 border-l-4 border-l-primary border-t-2 border-t-transparent border-b-2 border-b-transparent opacity-30 ml-6 -mt-2"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-8 text-foreground">
            Quick Statistics
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`px-6 py-3 rounded-full ${stat.color} font-medium text-sm`}
              >
                {stat.text}
              </div>
            ))}
          </div>

          {/* Example Date */}
          <div className="mt-8 p-6 bg-gradient-to-r from-primary-50 to-accent/10 dark:from-primary-900/20 dark:to-accent/5 rounded-xl border border-primary-200/50 dark:border-primary-700/50 max-w-md mx-auto">
            <div className="text-sm text-muted-foreground mb-2">Example Appointment Confirmation</div>
            <div className="text-2xl font-bold text-primary">31.07.2025, 9:48 AM</div>
            <div className="text-sm text-muted-foreground mt-2">German Consulate, New Delhi</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;