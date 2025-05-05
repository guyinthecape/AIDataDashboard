import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20 sm:py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-charcoal leading-tight tracking-wide">
              Powering Ethical AI with Reliable Data
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-charcoal max-w-3xl mx-auto">
              SpecifiAI provides legally compliant, high-quality training datasets for AI developers who need to build trustworthy, efficient models while meeting regulatory requirements.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                className="bg-bright-orange hover:bg-deep-orange focus:ring-bright-orange text-white px-6 py-6 h-auto transition-all duration-200 transform hover:-translate-y-1 text-base"
                size="lg"
              >
                Request Demo
              </Button>
              <Button 
                variant="outline" 
                className="border-bright-orange text-bright-orange hover:bg-warm-cream focus:ring-bright-orange px-6 py-6 h-auto transition-all duration-200 transform hover:-translate-y-1 text-base"
                size="lg"
              >
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Logos Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm uppercase tracking-wider text-gray-500 font-medium mb-8">
            Trusted by AI Innovators
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 items-center justify-items-center">
            {/* Partner Logos (grayscale) */}
            <div className="h-12 w-32 opacity-50">
              <div className="h-full flex items-center justify-center">
                <div className="font-poppins font-bold text-gray-400 text-xl">ACME AI</div>
              </div>
            </div>
            <div className="h-12 w-32 opacity-50">
              <div className="h-full flex items-center justify-center">
                <div className="font-poppins font-bold text-gray-400 text-xl">NeuralCo</div>
              </div>
            </div>
            <div className="h-12 w-32 opacity-50">
              <div className="h-full flex items-center justify-center">
                <div className="font-poppins font-bold text-gray-400 text-xl">DataSphere</div>
              </div>
            </div>
            <div className="h-12 w-32 opacity-50">
              <div className="h-full flex items-center justify-center">
                <div className="font-poppins font-bold text-gray-400 text-xl">CogniTech</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Highlights */}
      <section className="py-16 bg-warm-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-center text-charcoal mb-12">
            Complete Data Solutions for AI
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* DataForge */}
            <Card className="bg-white hover:shadow-md transition-shadow duration-300 p-6 flex flex-col items-center text-center">
              <div className="h-16 w-16 rounded-full bg-light-orange flex items-center justify-center mb-4">
                <i className="fas fa-hammer text-bright-orange text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-2">DataForge™</h3>
              <p className="text-charcoal">
                Custom-built datasets tailored to your specific model requirements with legal compliance built-in.
              </p>
            </Card>
            
            {/* Atlas Library */}
            <Card className="bg-white hover:shadow-md transition-shadow duration-300 p-6 flex flex-col items-center text-center">
              <div className="h-16 w-16 rounded-full bg-light-orange flex items-center justify-center mb-4">
                <i className="fas fa-book-atlas text-bright-orange text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-2">Atlas Library™</h3>
              <p className="text-charcoal">
                Pre-labeled, verified datasets covering common AI training scenarios across multiple domains.
              </p>
            </Card>
            
            {/* Prism Packs */}
            <Card className="bg-white hover:shadow-md transition-shadow duration-300 p-6 flex flex-col items-center text-center">
              <div className="h-16 w-16 rounded-full bg-light-orange flex items-center justify-center mb-4">
                <i className="fas fa-cube text-bright-orange text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-2">Prism Packs™</h3>
              <p className="text-charcoal">
                Diverse, balanced datasets ensuring your models perform equally well across demographics and contexts.
              </p>
            </Card>
            
            {/* Sentinel Audit */}
            <Card className="bg-white hover:shadow-md transition-shadow duration-300 p-6 flex flex-col items-center text-center">
              <div className="h-16 w-16 rounded-full bg-light-orange flex items-center justify-center mb-4">
                <i className="fas fa-shield-alt text-bright-orange text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-2">Sentinel Audit™</h3>
              <p className="text-charcoal">
                Comprehensive evaluation tools to assess your existing datasets for bias, quality and compliance issues.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
