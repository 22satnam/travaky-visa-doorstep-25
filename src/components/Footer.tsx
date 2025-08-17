import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: "About Us", href: "#about" },
      { name: "Our Story", href: "#story" },
      { name: "Team", href: "#team" },
      { name: "Careers", href: "#careers" },
      { name: "Press", href: "#press" },
    ],
    services: [
      { name: "Docs on Call", href: "#docs-call" },
      { name: "Docs on Door", href: "#docs-door" },
      { name: "Visa at Door", href: "#visa-door" },
      { name: "Countries", href: "#countries" },
      { name: "Pricing", href: "#pricing" },
    ],
    support: [
      { name: "Help Center", href: "#help" },
      { name: "Contact Support", href: "#support" },
      { name: "Track Application", href: "#track" },
      { name: "FAQ", href: "#faq" },
      { name: "Live Chat", href: "#chat" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#privacy" },
      { name: "Terms of Service", href: "#terms" },
      { name: "Cookie Policy", href: "#cookies" },
      { name: "Refund Policy", href: "#refund" },
      { name: "Disclaimer", href: "#disclaimer" },
    ],
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Head Office",
      details: ["123 Business District", "New Delhi, India 110001"],
    },
    {
      icon: Phone,
      title: "Phone Support",
      details: ["+91 98765 43210", "+91 87654 32109"],
    },
    {
      icon: Mail,
      title: "Email Support",
      details: ["support@travaky.com", "info@travaky.com"],
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon-Fri: 9:00 AM - 7:00 PM", "Sat-Sun: 10:00 AM - 5:00 PM"],
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#facebook", label: "Facebook" },
    { icon: Twitter, href: "#twitter", label: "Twitter" },
    { icon: Instagram, href: "#instagram", label: "Instagram" },
    { icon: Linkedin, href: "#linkedin", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-gradient-to-br from-primary-900 to-primary-800 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-white to-primary-100 bg-clip-text text-transparent">
                Travaky
              </h3>
              <p className="text-primary-200 mt-4 leading-relaxed">
                World's first visa doorstep facilitation services. Making visa applications simple, 
                fast, and stress-free for travelers worldwide.
              </p>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-6 text-primary-100">Company</h4>
                <ul className="space-y-3">
                  {footerLinks.company.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-primary-300 hover:text-white transition-colors duration-300"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-6 text-primary-100">Services</h4>
                <ul className="space-y-3">
                  {footerLinks.services.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-primary-300 hover:text-white transition-colors duration-300"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-6 text-primary-100">Support</h4>
                <ul className="space-y-3">
                  {footerLinks.support.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-primary-300 hover:text-white transition-colors duration-300"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-6 text-primary-100">Legal</h4>
                <ul className="space-y-3">
                  {footerLinks.legal.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-primary-300 hover:text-white transition-colors duration-300"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold mb-6 text-primary-100">Contact Info</h4>
            <div className="space-y-6">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-start">
                  <contact.icon className="w-5 h-5 text-primary-400 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-medium text-white mb-1">{contact.title}</div>
                    {contact.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="text-sm text-primary-300">
                        {detail}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Subscription */}
      <div className="border-t border-primary-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h4 className="text-lg font-semibold text-white mb-2">Stay Updated</h4>
              <p className="text-primary-300 text-sm">
                Get the latest visa updates and travel tips delivered to your inbox.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-primary-300 focus:outline-none focus:border-white/40 min-w-64"
              />
              <button className="px-6 py-2 bg-white text-primary-800 rounded-lg font-medium hover:bg-primary-50 transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-primary-300 text-sm mb-4 md:mb-0">
              © {currentYear} Travaky. All rights reserved. World's First Visa Doorstep Facilitation Services.
            </div>
            
            <div className="flex items-center space-x-6 text-primary-300 text-sm">
              <span>🌍 Serving 150+ Countries</span>
              <span>✈️ 10,000+ Visas Processed</span>
              <span>⭐ 99% Success Rate</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;