// src/pages/About.tsx

import { Target, Eye, Heart, TrendingUp } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Innovation",
      description: "Pushing boundaries with cutting-edge technology",
    },
    {
      icon: Eye,
      title: "Integrity",
      description: "Transparent and ethical business practices",
    },
    {
      icon: Heart,
      title: "Excellence",
      description: "Delivering world-class solutions",
    },
    {
      icon: TrendingUp,
      title: "Impact",
      description: "Creating measurable positive change",
    },
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <section className="relative bg-primary text-white py-20">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80)",
          }}
        ></div>
        <div className="relative container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About A4IR</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Championing Africa's technological renaissance since 2021
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-600">
                To accelerate Africa's 4th Industrial Revolution by providing
                innovative, accessible, and scalable technology solutions that
                address critical challenges in agriculture, education,
                healthcare, governance, and industry.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-gray-600">
                To position Africa as a global leader in the 4th Industrial
                Revolution, where technology drives inclusive growth,
                sustainable development, and improved quality of life for all
                Africans.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="Office building"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">Company Profile</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  <span className="font-semibold">Incorporated:</span> 2021
                </p>
                <p>
                  <span className="font-semibold">RC Number:</span> 3432957
                </p>
                <p>
                  <span className="font-semibold">Motto:</span> Championing
                  African 4th Industrial Revolution
                </p>
                <p>
                  <span className="font-semibold">Headquarters:</span> 1A, Block
                  D, Alhaji Adebayo Layout, Apete, Ibadan, Oyo State, Nigeria
                </p>
                <p>
                  <span className="font-semibold">Email:</span>{" "}
                  info@african4ir.com
                </p>
                <p>
                  <span className="font-semibold">Phone:</span>{" "}
                  +234-806-700-7462, +234-805-292-0626
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title">Our Core Values</h2>
          <p className="section-subtitle">
            The principles that guide everything we do
          </p>
          <div className="grid md:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-white p-6 rounded-lg shadow-md card-hover">
                  <value.icon className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
