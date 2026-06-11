// src/pages/Services.tsx
import {
  GraduationCap,
  Briefcase,
  LineChart,
  BookOpen,
  Award,
  Users,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: GraduationCap,
      title: "Training",
      description:
        "Comprehensive training programs in AI, IoT, Data Analytics, Cybersecurity, and emerging technologies tailored for African businesses and individuals.",
      features: [
        "Hands-on Workshops",
        "Certification Programs",
        "Corporate Training",
        "Online Courses",
      ],
    },
    {
      icon: LineChart,
      title: "Research",
      description:
        "Cutting-edge research and development in artificial intelligence, machine learning, and digital transformation for African contexts.",
      features: [
        "Market Research",
        "Feasibility Studies",
        "Technology Assessment",
        "Innovation Labs",
      ],
    },
    {
      icon: Briefcase,
      title: "Consultancy",
      description:
        "Expert advisory services to help organizations navigate digital transformation, implement AI solutions, and optimize operations.",
      features: [
        "Digital Strategy",
        "AI Implementation",
        "Process Optimization",
        "Technology Roadmapping",
      ],
    },
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <section className="bg-linear-to-r from-primary to-secondary text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Empowering Africa through comprehensive technology solutions, expert
            training, and innovative research
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-xl overflow-hidden card-hover"
              >
                <div className="bg-linear-to-r from-primary to-accent p-6">
                  <service.icon className="w-16 h-16 text-white" />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <h3 className="font-semibold mb-3 text-primary">
                    Key Offerings:
                  </h3>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title">Why Choose A4IR?</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <Award className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
              <p className="text-gray-600">
                Industry-leading experts with global experience
              </p>
            </div>
            <div className="text-center">
              <BookOpen className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Proven Methodology</h3>
              <p className="text-gray-600">
                Structured approach ensuring successful delivery
              </p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Local Focus</h3>
              <p className="text-gray-600">
                Solutions designed specifically for African context
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
