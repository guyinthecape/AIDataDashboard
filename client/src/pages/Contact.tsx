import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";

const Contact = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-semibold text-charcoal text-center mb-8">Get in Touch</h1>
          
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Form */}
            <div className="lg:w-1/2">
              <Card className="bg-warm-cream rounded-lg p-8 shadow-md border-none">
                <div className="mb-6">
                  <label htmlFor="name" className="block text-charcoal font-medium mb-2">Name</label>
                  <Input 
                    type="text" 
                    id="name" 
                    className="w-full bg-white focus:ring-bright-orange" 
                    placeholder="Your name"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="email" className="block text-charcoal font-medium mb-2">Email</label>
                  <Input 
                    type="email" 
                    id="email" 
                    className="w-full bg-white focus:ring-bright-orange" 
                    placeholder="your.email@example.com"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-charcoal font-medium mb-2">Message</label>
                  <Textarea 
                    id="message" 
                    rows={4} 
                    className="w-full bg-white focus:ring-bright-orange" 
                    placeholder="How can we help you?"
                  ></Textarea>
                </div>
                <Button className="w-full bg-bright-orange hover:bg-deep-orange text-white transition duration-150">
                  Send Message
                </Button>
              </Card>
            </div>
            
            {/* Contact Information */}
            <div className="lg:w-1/2">
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-charcoal mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="h-10 w-10 rounded-full bg-warm-cream flex items-center justify-center mr-4">
                      <i className="fas fa-envelope text-bright-orange"></i>
                    </div>
                    <div>
                      <p className="font-medium text-charcoal">Email</p>
                      <p className="text-charcoal">contact@specifiai.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="h-10 w-10 rounded-full bg-warm-cream flex items-center justify-center mr-4">
                      <i className="fas fa-map-marker-alt text-bright-orange"></i>
                    </div>
                    <div>
                      <p className="font-medium text-charcoal">Address</p>
                      <p className="text-charcoal">45 W 27th Street, New York, NY</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="h-10 w-10 rounded-full bg-warm-cream flex items-center justify-center mr-4">
                      <i className="fas fa-clock text-bright-orange"></i>
                    </div>
                    <div>
                      <p className="font-medium text-charcoal">Business Hours</p>
                      <p className="text-charcoal">Monday-Friday: 9am-6pm EST</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Google Map */}
              <div className="h-64 bg-gray-200 rounded-lg overflow-hidden shadow-md">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095989237!2d-73.99127388459496!3d40.74478377932878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a531c09639%3A0x4a01c8df6fb3cb8!2s45%20W%2027th%20St%2C%20New%20York%2C%20NY%2010001!5e0!3m2!1sen!2sus!4v1648651456415!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="SpecifiAI Office Location"
                ></iframe>
              </div>
              
              {/* Newsletter */}
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-charcoal mb-4">Subscribe to Our Newsletter</h3>
                <div className="flex">
                  <Input 
                    type="email" 
                    className="flex-1 rounded-r-none focus:ring-bright-orange" 
                    placeholder="Your email address"
                  />
                  <Button className="bg-bright-orange hover:bg-deep-orange text-white rounded-l-none transition duration-150">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
