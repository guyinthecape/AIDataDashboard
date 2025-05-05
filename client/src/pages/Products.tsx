import { Card } from "@/components/ui/card";

const Products = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-3xl sm:text-4xl font-semibold text-midnight-indigo">Our Products</h1>
          <p className="mt-4 text-lg text-deep-charcoal">Comprehensive solutions for every stage of your AI data pipeline</p>
        </div>

        {/* Product list */}
        <div className="space-y-16">
          {/* DataForge */}
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="h-48 w-48 rounded-xl bg-soft-lilac flex items-center justify-center">
                <i className="fas fa-hammer text-specifi-purple text-5xl"></i>
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <h2 className="text-2xl font-semibold text-midnight-indigo">DataForge™</h2>
              <p className="text-lg text-specifi-purple font-medium mt-1">Custom Dataset Creation</p>
              <p className="mt-4 text-deep-charcoal">
                DataForge is our flagship solution for AI teams who need specific, high-quality training data. Our expert data scientists and annotators build custom datasets tailored to your exact specifications, with compliance documentation included. Every dataset comes with a detailed data card, provenance tracking, and is ready for immediate implementation in your models.
              </p>
            </div>
          </div>

          {/* Atlas Library */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-16">
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="h-48 w-48 rounded-xl bg-soft-lilac flex items-center justify-center">
                <i className="fas fa-book-atlas text-specifi-purple text-5xl"></i>
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <h2 className="text-2xl font-semibold text-midnight-indigo">Atlas Library™</h2>
              <p className="text-lg text-specifi-purple font-medium mt-1">Pre-built Dataset Library</p>
              <p className="mt-4 text-deep-charcoal">
                Atlas Library provides immediate access to our extensive collection of pre-verified, legally compliant datasets. Choose from hundreds of specialized collections across industries including healthcare, finance, e-commerce, and more. All datasets are regularly updated, fully documented, and ready for deployment within minutes of purchase.
              </p>
            </div>
          </div>

          {/* Prism Packs */}
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="h-48 w-48 rounded-xl bg-soft-lilac flex items-center justify-center">
                <i className="fas fa-cube text-specifi-purple text-5xl"></i>
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <h2 className="text-2xl font-semibold text-midnight-indigo">Prism Packs™</h2>
              <p className="text-lg text-specifi-purple font-medium mt-1">Diverse & Balanced Data Collections</p>
              <p className="mt-4 text-deep-charcoal">
                Prism Packs are specialized datasets designed to address representation gaps and ensure your AI models perform equally well across all demographics and contexts. Each pack contains carefully balanced data across gender, age, ethnicity, language, and other important variables, helping you build more inclusive and accurate AI systems.
              </p>
            </div>
          </div>

          {/* Sentinel Audit */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-16">
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="h-48 w-48 rounded-xl bg-soft-lilac flex items-center justify-center">
                <i className="fas fa-shield-alt text-specifi-purple text-5xl"></i>
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <h2 className="text-2xl font-semibold text-midnight-indigo">Sentinel Audit™</h2>
              <p className="text-lg text-specifi-purple font-medium mt-1">Data Quality & Compliance Analysis</p>
              <p className="mt-4 text-deep-charcoal">
                Sentinel Audit provides comprehensive evaluation tools to assess your existing datasets for bias, quality issues, and regulatory compliance. Our automated scanning combined with expert review identifies potential problems before they impact your models or create legal exposure. Receive detailed reports and remediation recommendations within 72 hours.
              </p>
            </div>
          </div>

          {/* SpeciCore - Coming Soon */}
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 opacity-60">
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="h-48 w-48 rounded-xl bg-gray-200 flex items-center justify-center">
                <i className="fas fa-microchip text-gray-400 text-5xl"></i>
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <div className="flex items-center">
                <h2 className="text-2xl font-semibold text-midnight-indigo">SpeciCore™</h2>
                <span className="ml-3 px-3 py-1 text-xs font-semibold text-white bg-gray-400 rounded-full">COMING SOON</span>
              </div>
              <p className="text-lg text-gray-500 font-medium mt-1">AI Data Infrastructure</p>
              <p className="mt-4 text-gray-500">
                Our upcoming data infrastructure solution will provide end-to-end management of your AI training data lifecycle. Features will include automated collection, enrichment, version control, and continuous monitoring systems to ensure your models maintain peak performance and compliance over time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
