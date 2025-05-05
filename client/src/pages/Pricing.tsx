import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { formatCurrency, formatDecimal } from "@/lib/utils";

const PricingCard = ({ 
  title, 
  subtitle, 
  price, 
  unit, 
  description, 
  features, 
  ctaText, 
  primary = false 
}: {
  title: string;
  subtitle: string;
  price: string;
  unit: string;
  description: string;
  features: string[];
  ctaText: string;
  primary?: boolean;
}) => (
  <Card className={`bg-white rounded-lg shadow-md p-8 border-t-4 ${primary ? 'border-bright-orange' : 'border-charcoal'} hover:shadow-lg transition-all duration-300`}>
    <h3 className="text-2xl font-semibold text-charcoal">{title}</h3>
    <p className="text-bright-orange font-medium mt-1">{subtitle}</p>
    <div className="mt-4 flex items-end">
      <span className="text-4xl font-bold text-charcoal">{price}</span>
      <span className="text-charcoal ml-2 mb-1">{unit}</span>
    </div>
    <p className="mt-2 text-gray-500">{description}</p>
    <ul className="mt-6 space-y-3">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start">
          <i className="fas fa-check text-success-green mt-1 mr-3"></i>
          <span className="text-charcoal">{feature}</span>
        </li>
      ))}
    </ul>
    <Button 
      className={`mt-8 w-full ${primary 
        ? 'bg-bright-orange hover:bg-deep-orange text-white' 
        : 'bg-white border border-bright-orange text-bright-orange hover:bg-warm-cream'}`
      }
    >
      {ctaText}
    </Button>
  </Card>
);

// Table data
const tiers = ['LaunchPad', 'Ignite', 'Momentum', 'Pinnacle'];
const descriptions = ['Hackathons & Students', 'Startups', 'Growth', 'Enterprise'];
const features = [
  { 
    name: 'API Access', 
    values: ['Limited', 'Full', 'Full', 'Custom Integration'] 
  },
  { 
    name: 'SLA', 
    values: ['None', '99.5% uptime', '99.9% uptime', '99.99% uptime'] 
  },
  { 
    name: 'Support Level', 
    values: ['Community', 'Email (24h)', 'Priority (12h)', 'Dedicated Team'] 
  },
  { 
    name: 'Audit Tools', 
    values: ['Basic', 'Standard', 'Advanced', 'Enterprise'] 
  },
  { 
    name: 'Compliance Docs', 
    values: ['Minimal', 'Standard', 'Comprehensive', 'Custom + Legal Review'] 
  },
  { 
    name: 'Custom Training', 
    values: [false, false, true, true] 
  }
];

const Pricing = () => {
  return (
    <section className="py-20 bg-warm-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-3xl sm:text-4xl font-semibold text-charcoal">Transparent Pricing</h1>
          <p className="mt-4 text-lg text-charcoal">Flexible options designed to scale with your needs</p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {/* Ignite Plan */}
          <PricingCard
            title="Ignite Plan"
            subtitle="For Startups"
            price={formatCurrency(4000)}
            unit="/month"
            description="Access to all essential services"
            features={[
              "Up to 100,000 datapoints per month",
              "Access to Atlas Library™ standard collections",
              "Basic compliance documentation",
              "Email support within 24 hours",
              "Monthly consultation call"
            ]}
            ctaText="Start with Ignite"
            primary={true}
          />

          {/* Precision Plan */}
          <PricingCard
            title="Precision Plan"
            subtitle="Custom Datasets"
            price={formatDecimal(0.05)}
            unit="per labeled datapoint"
            description="Pay only for what you need"
            features={[
              "Fully customized data collection",
              "Multi-level quality assurance",
              "Full compliance documentation",
              "Dedicated account manager",
              "48-hour turnaround on small batches"
            ]}
            ctaText="Contact Sales"
            primary={false}
          />
        </div>

        {/* Enterprise CTA */}
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8 mb-16">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-semibold text-charcoal">Need a custom enterprise solution?</h3>
              <p className="mt-2 text-charcoal">Contact our enterprise sales team for a tailored package that meets your organization's specific data needs and compliance requirements.</p>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <Button className="bg-bright-orange hover:bg-deep-orange text-white w-full md:w-auto">
                Request Enterprise Quote
              </Button>
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="mt-16 overflow-hidden">
          <h3 className="text-2xl font-semibold text-charcoal text-center mb-8">Plan Comparison</h3>
          <div className="overflow-x-auto shadow-md rounded-lg">
            <table className="min-w-full bg-white">
              <thead>
                <tr className="bg-charcoal text-white text-left">
                  <th className="py-4 px-6 font-semibold">Features</th>
                  {tiers.map((tier, index) => (
                    <th key={index} className="py-4 px-6 font-semibold">{tier}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-4 px-6 font-medium">Ideal For</td>
                  {descriptions.map((desc, index) => (
                    <td key={index} className="py-4 px-6">{desc}</td>
                  ))}
                </tr>
                {features.map((feature, rowIndex) => (
                  <tr key={rowIndex} className={rowIndex % 2 === 1 ? "bg-warm-cream bg-opacity-50" : ""}>
                    <td className="py-4 px-6 font-medium">{feature.name}</td>
                    {feature.values.map((value, colIndex) => (
                      <td key={colIndex} className="py-4 px-6">
                        {typeof value === 'boolean' ? (
                          value ? (
                            <i className="fas fa-check text-success-green"></i>
                          ) : (
                            <i className="fas fa-times text-red-500"></i>
                          )
                        ) : (
                          value
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
