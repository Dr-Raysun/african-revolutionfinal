// src/pages/Sectors.tsx
import {
  GraduationCap,
  Tractor,
  BookOpen,
  BarChart3,
  Building2,
  Heart,
  Factory,
  Shield,
  Sparkles,
} from "lucide-react";

const Sectors = () => {
  const sectorsData = [
    {
      id: "academy",
      title: "A4IR Academy",
      icon: GraduationCap,
      subSectors: ["Training", "Research"],
      description:
        "Building Africa's next generation of tech leaders through comprehensive training and cutting-edge research programs.",
      iconColor: "text-blue-600",
    },
    {
      id: "agriculture",
      title: "A4IR Agriculture",
      icon: Tractor,
      subSectors: ["Agro-AI", "Agro-IoT"],
      description:
        "Revolutionizing farming with AI-powered solutions and IoT sensors for smart agriculture.",
      iconColor: "text-green-600",
    },
    {
      id: "education",
      title: "A4IR Education",
      icon: BookOpen,
      subSectors: ["E-learning", "Adaptive learning", "Blended Learning"],
      description:
        "Transforming education through personalized learning experiences and digital platforms.",
      iconColor: "text-purple-600",
    },
    {
      id: "economy",
      title: "A4IR Economy",
      icon: BarChart3,
      subSectors: [
        "AI-Driven Cost Analysis",
        "AI in Economic Planning and Management",
      ],
      description:
        "Leveraging AI for economic optimization, forecasting, and strategic planning.",
      iconColor: "text-yellow-600",
    },
    {
      id: "governance",
      title: "A4IR Governance",
      icon: Building2,
      subSectors: [
        "Policy Designs",
        "Policy Implementation",
        "Policy Evaluation",
      ],
      description:
        "Data-driven governance solutions for effective policy making and public administration.",
      iconColor: "text-red-600",
    },
    {
      id: "health",
      title: "A4IR Health",
      icon: Heart,
      subSectors: ["Health Informatics", "Health Analytics", "Smart Health"],
      description:
        "Innovative healthcare solutions combining AI, IoT, and data analytics for better patient outcomes.",
      iconColor: "text-pink-600",
    },
    {
      id: "industry",
      title: "A4IR Industry",
      icon: Factory,
      subSectors: ["AI in Industry", "Smart Industry"],
      description:
        "Industry 4.0 solutions for manufacturing automation, predictive maintenance, and operational efficiency.",
      iconColor: "text-orange-600",
    },
    {
      id: "security",
      title: "A4IR Security",
      icon: Shield,
      subSectors: ["Cyber Security", "Biometric Security", "Smart Security"],
      description:
        "Comprehensive security solutions protecting digital assets and physical infrastructure.",
      iconColor: "text-indigo-600",
    },
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Sectors</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Specialized technology solutions across key sectors driving Africa's
            transformation
          </p>
        </div>
      </section>

      {/* Sectors Grid */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8">
            {sectorsData.map((sector) => (
              <div
                key={sector.id}
                id={sector.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden card-hover scroll-mt-24"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div
                      className={`p-3 rounded-lg bg-gray-100 ${sector.iconColor}`}
                    >
                      <sector.icon className="w-8 h-8" />
                    </div>
                    <h2 className="text-2xl font-bold ml-4">{sector.title}</h2>
                  </div>
                  <p className="text-gray-600 mb-4">{sector.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {sector.subSectors.map((sub, idx) => (
                      <span
                        key={idx}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        {sub}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="flex items-center text-sm text-gray-500">
                      <Sparkles size={16} className="mr-2" />
                      <span>Leveraging cutting-edge technology for impact</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Sector?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Partner with A4IR to bring innovative solutions to your industry
          </p>
          <a
            href="/contact"
            className="bg-primary hover:bg-secondary text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-block"
          >
            Contact Our Experts
          </a>
        </div>
      </section>
    </div>
  );
};

export default Sectors;
