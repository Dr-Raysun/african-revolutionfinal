// src/pages/Projects.tsx
import { CheckCircle, TrendingUp, Shield, Eye } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "AI-Assisted Employee Audit",
      icon: CheckCircle,
      description:
        "Revolutionary AI-powered system for comprehensive employee performance auditing, skill gap analysis, and productivity optimization.",
      features: [
        "Automated performance tracking",
        "Skill gap identification",
        "Predictive analytics for retention",
        "Bias-free evaluation algorithms",
      ],
      impact: "30% improvement in workforce productivity",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    },
    {
      title: "Smart Public Procurement System",
      icon: Shield,
      description:
        "Blockchain-enabled transparent procurement platform that eliminates fraud, ensures compliance, and optimizes government spending.",
      features: [
        "Blockchain verification",
        "Real-time bid tracking",
        "Automated compliance checks",
        "Cost optimization algorithms",
      ],
      impact: "40% reduction in procurement costs",
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    },
    {
      title: "XR for Safe Environment Training",
      icon: Eye,
      description:
        "Immersive Extended Reality (XR) training simulations for hazardous environment preparation and safety protocol mastery.",
      features: [
        "Virtual reality simulations",
        "Real-time hazard response",
        "Multi-scenario training",
        "Performance analytics dashboard",
      ],
      impact: "60% better safety compliance rates",
      image:
        "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    },
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Projects</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Innovative solutions driving measurable impact across Africa
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="py-16">
        <div className="container-custom">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`mb-20 last:mb-0 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              } md:flex gap-12 items-center`}
            >
              <div className="md:w-1/2 mb-8 md:mb-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-lg shadow-xl w-full h-96 object-cover"
                />
              </div>
              <div className="md:w-1/2">
                <div className="flex items-center mb-4">
                  <project.icon className="w-10 h-10 text-accent mr-3" />
                  <h2 className="text-3xl font-bold">{project.title}</h2>
                </div>
                <p className="text-gray-600 text-lg mb-6">
                  {project.description}
                </p>
                <div className="mb-6">
                  <h3 className="font-semibold text-primary mb-3">
                    Key Features:
                  </h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <CheckCircle size={16} className="text-accent mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center">
                    <TrendingUp className="w-5 h-5 text-green-600 mr-2" />
                    <span className="font-semibold">Impact: </span>
                    <span className="ml-2 text-gray-700">{project.impact}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-gray-50 py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">
            Interested in These Solutions?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Contact us to discuss how we can implement similar solutions for
            your organization
          </p>
          <a
            href="/contact"
            className="bg-primary hover:bg-secondary text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-block"
          >
            Discuss Your Project
          </a>
        </div>
      </section>
    </div>
  );
};

export default Projects;
