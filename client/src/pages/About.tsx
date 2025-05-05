import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const TeamMember = ({ 
  name, 
  role, 
  bio 
}: { 
  name: string; 
  role: string; 
  bio: string; 
}) => (
  <div className="text-center">
    <div className="w-40 h-40 rounded-full mx-auto overflow-hidden mb-4 bg-warm-cream flex items-center justify-center shadow-md">
      <i className="fas fa-user-circle text-bright-orange text-5xl"></i>
    </div>
    <h4 className="text-xl font-semibold text-charcoal">{name}</h4>
    <p className="text-bright-orange">{role}</p>
    <p className="mt-2 text-charcoal">{bio}</p>
  </div>
);

const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-semibold text-charcoal text-center mb-8">About SpecifiAI</h1>
          
          {/* Mission Statement */}
          <Card className="bg-warm-cream border-none mb-16 p-10">
            <div className="text-center">
              <p className="text-2xl sm:text-3xl font-poppins font-medium text-charcoal leading-normal">
                "To make high-quality, ethical data accessible for every AI developer."
              </p>
            </div>
          </Card>

          {/* Company Info */}
          <div className="flex flex-col md:flex-row gap-8 mb-16">
            <div className="md:w-1/2">
              <div className="rounded-lg shadow-md w-full h-64 bg-warm-cream flex items-center justify-center">
                <i className="fas fa-building text-bright-orange text-6xl"></i>
              </div>
            </div>
            <div className="md:w-1/2">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Our Story</h3>
              <p className="text-charcoal mb-4">
                Founded in 2024 and headquartered in New York City, SpecifiAI was created to address the growing need for high-quality, ethically sourced training data in the AI industry.
              </p>
              <p className="text-charcoal mb-4">
                As AI regulation increases globally, we recognized that many developers struggle to find training data that meets both technical and legal requirements. Our team of data scientists, legal experts, and AI ethicists work together to provide solutions that help companies build better, more responsible AI systems.
              </p>
              <div className="flex items-center mt-6">
                <div className="flex items-center mr-6">
                  <i className="fas fa-map-marker-alt text-bright-orange mr-2"></i>
                  <span>NYC, USA</span>
                </div>
                <div className="flex items-center">
                  <i className="far fa-calendar-alt text-bright-orange mr-2"></i>
                  <span>Est. 2024</span>
                </div>
              </div>
              <Button className="mt-6 bg-bright-orange hover:bg-deep-orange text-white">
                Learn More About Our Mission
              </Button>
            </div>
          </div>

          {/* Team Section */}
          <h3 className="text-2xl font-semibold text-charcoal text-center mb-8">Our Leadership Team</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <TeamMember 
              name="Sarah Chen" 
              role="CEO & Co-Founder" 
              bio="Former AI Ethics Researcher at MIT with 10+ years in data science and AI governance."
            />

            {/* Team Member 2 */}
            <TeamMember 
              name="Marcus Johnson" 
              role="CTO & Co-Founder" 
              bio="Previously led data infrastructure at a major tech company and specialized in scalable AI systems."
            />

            {/* Team Member 3 */}
            <TeamMember 
              name="Aisha Patel" 
              role="Chief Legal Officer" 
              bio="Specialized in AI regulation and data privacy law with experience at major tech companies and regulatory bodies."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
