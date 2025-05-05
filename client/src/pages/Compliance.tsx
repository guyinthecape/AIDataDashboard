import { Card } from "@/components/ui/card";

const ComplianceBlock = ({ 
  icon, 
  title, 
  description 
}: { 
  icon: string; 
  title: string; 
  description: string; 
}) => (
  <Card className="bg-white rounded-lg shadow-sm p-8 text-center">
    <div className="h-16 w-16 rounded-full bg-soft-lilac flex items-center justify-center mx-auto mb-4">
      <i className={`${icon} text-specifi-purple text-2xl`}></i>
    </div>
    <h3 className="text-xl font-semibold text-midnight-indigo mb-2">{title}</h3>
    <p className="text-deep-charcoal">{description}</p>
  </Card>
);

const ComplianceBadge = ({ text }: { text: string }) => (
  <div className="bg-success-green bg-opacity-10 text-success-green font-semibold px-4 py-2 rounded-full flex items-center">
    <i className="fas fa-check-circle mr-2"></i>
    <span>{text}</span>
  </div>
);

const Compliance = () => {
  return (
    <section className="py-20 bg-off-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-3xl sm:text-4xl font-semibold text-midnight-indigo">Built-In Compliance You Can Prove</h1>
          <p className="mt-4 text-lg text-deep-charcoal">Every dataset comes with comprehensive documentation and verification tools</p>
        </div>

        {/* Compliance blocks */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Data Cards */}
          <ComplianceBlock 
            icon="fas fa-id-card"
            title="Data Cards"
            description="Detailed documentation for every dataset including source information, collection methodology, and intended use cases."
          />

          {/* Audit Trails */}
          <ComplianceBlock 
            icon="fas fa-route"
            title="Audit Trails"
            description="Complete change history and provenance tracking for all data points from acquisition through processing and delivery."
          />

          {/* Automated Scanning */}
          <ComplianceBlock 
            icon="fas fa-search"
            title="Automated Scanning"
            description="Advanced algorithms identify potential bias, unfair representation, and problematic content before delivery."
          />

          {/* Legal Review */}
          <ComplianceBlock 
            icon="fas fa-gavel"
            title="Legal Review"
            description="Our legal team validates all datasets against current regulations including GDPR, CCPA, and industry-specific requirements."
          />

          {/* External Audit Readiness */}
          <ComplianceBlock 
            icon="fas fa-clipboard-check"
            title="External Audit Readiness"
            description="Prepared documentation and evidence packages for regulatory inspections or third-party verification requirements."
          />

          {/* Compliance Badges */}
          <div className="flex items-center justify-center">
            <div className="flex flex-col items-center space-y-4">
              <ComplianceBadge text="GDPR-Ready" />
              <ComplianceBadge text="PII-Safe" />
              <ComplianceBadge text="Audit-Certified" />
            </div>
          </div>
        </div>

        {/* Compliance data visualization */}
        <Card className="bg-white rounded-lg shadow-md p-8 max-w-4xl mx-auto">
          <h3 className="text-xl font-semibold text-midnight-indigo mb-4 text-center">Compliance Case Study: AI Startup in Healthcare</h3>
          <div className="h-64 w-full bg-gray-100 rounded-lg flex items-center justify-center">
            <svg width="90%" height="90%" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
              {/* Simple Bar Chart */}
              <g transform="translate(50, 20)">
                <text x="350" y="0" textAnchor="middle" className="font-poppins" fill="#181B3D" fontSize="18">Compliance Improvement Over Time</text>
                
                {/* Y-Axis */}
                <line x1="0" y1="0" x2="0" y2="300" stroke="#ccc" strokeWidth="2"/>
                <text x="-10" y="0" textAnchor="end" fill="#666" fontSize="12">100%</text>
                <text x="-10" y="75" textAnchor="end" fill="#666" fontSize="12">75%</text>
                <text x="-10" y="150" textAnchor="end" fill="#666" fontSize="12">50%</text>
                <text x="-10" y="225" textAnchor="end" fill="#666" fontSize="12">25%</text>
                <text x="-10" y="300" textAnchor="end" fill="#666" fontSize="12">0%</text>
                
                {/* X-Axis */}
                <line x1="0" y1="300" x2="700" y2="300" stroke="#ccc" strokeWidth="2"/>
                <text x="100" y="320" textAnchor="middle" fill="#666" fontSize="12">Initial Assessment</text>
                <text x="250" y="320" textAnchor="middle" fill="#666" fontSize="12">Month 1</text>
                <text x="400" y="320" textAnchor="middle" fill="#666" fontSize="12">Month 2</text>
                <text x="550" y="320" textAnchor="middle" fill="#666" fontSize="12">Month 3</text>
                
                {/* Grid Lines */}
                <line x1="0" y1="75" x2="700" y2="75" stroke="#eee" strokeWidth="1"/>
                <line x1="0" y1="150" x2="700" y2="150" stroke="#eee" strokeWidth="1"/>
                <line x1="0" y1="225" x2="700" y2="225" stroke="#eee" strokeWidth="1"/>
                
                {/* Data Bars - 68% to 97% */}
                <rect x="70" y="96" width="60" height="204" fill="#E2E4F6" rx="4"/>
                <rect x="220" y="60" width="60" height="240" fill="#E2E4F6" rx="4"/>
                <rect x="370" y="30" width="60" height="270" fill="#E2E4F6" rx="4"/>
                <rect x="520" y="9" width="60" height="291" fill="#645BFF" rx="4"/>
                
                {/* Data Labels */}
                <text x="100" y="86" textAnchor="middle" fill="#181B3D" fontWeight="bold" fontSize="14">68%</text>
                <text x="250" y="50" textAnchor="middle" fill="#181B3D" fontWeight="bold" fontSize="14">80%</text>
                <text x="400" y="20" textAnchor="middle" fill="#181B3D" fontWeight="bold" fontSize="14">90%</text>
                <text x="550" y="0" textAnchor="middle" fill="#181B3D" fontWeight="bold" fontSize="14">97%</text>
              </g>
            </svg>
          </div>
          <p className="mt-4 text-deep-charcoal text-center">
            Our healthcare client improved their compliance score from 68% to 97% within 3 months of implementing SpecifiAI datasets, passing their regulatory audit with zero findings.
          </p>
        </Card>
      </div>
    </section>
  );
};

export default Compliance;
