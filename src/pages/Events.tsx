// src/pages/Events.tsx
import {
  Calendar,
  Clock,
  MapPin,
  Award,
  Code,
  Shield,
  Wifi,
  TrendingUp,
} from "lucide-react";

const Events = () => {
  const events = [
    {
      title: "Inauguration of Projects",
      date: "November 15, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "A4IR Headquarters, Ibadan",
      description:
        "Official launch of our groundbreaking projects including AI-Assisted Employee Audit and Smart Public Procurement System.",
      type: "Conference",
      icon: Award,
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    },
    {
      title: "Data Analytics Workshop",
      date: "November 25, 2024",
      time: "9:00 AM - 5:00 PM",
      location: "Virtual & In-person (Ibadan)",
      description:
        "Intensive hands-on workshop covering data visualization, predictive analytics, and business intelligence tools.",
      type: "Workshop",
      icon: TrendingUp,
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    },
    {
      title: "Web Development Workshop",
      date: "December 2, 2024",
      time: "10:00 AM - 6:00 PM",
      location: "Virtual",
      description:
        "Learn modern web development with React, Node.js, and cloud deployment strategies.",
      type: "Workshop",
      icon: Code,
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80",
    },
    {
      title: "Cybersecurity Workshop",
      date: "December 9, 2024",
      time: "9:00 AM - 5:00 PM",
      location: "In-person (Ibadan)",
      description:
        "Comprehensive training on threat detection, ethical hacking, and security best practices.",
      type: "Workshop",
      icon: Shield,
      image:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    },
    {
      title: "Networking Workshop",
      date: "December 16, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "A4IR Headquarters, Ibadan",
      description:
        "Master networking fundamentals, cloud networking, and infrastructure design.",
      type: "Workshop",
      icon: Wifi,
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    },
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Upcoming Events
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Join us for workshops, inaugurations, and networking opportunities
          </p>
        </div>
      </section>

      {/* Events List */}
      <section className="py-16">
        <div className="container-custom">
          <div className="space-y-12">
            {events.map((event, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden card-hover"
              >
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <event.icon className="w-6 h-6 text-accent mr-2" />
                        <span className="text-accent font-semibold">
                          {event.type}
                        </span>
                      </div>
                      <div className="flex items-center text-gray-500">
                        <Calendar size={16} className="mr-1" />
                        <span className="text-sm">{event.date}</span>
                      </div>
                    </div>
                    <h2 className="text-2xl font-bold mb-3">{event.title}</h2>
                    <p className="text-gray-600 mb-4">{event.description}</p>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-gray-600">
                        <Clock size={16} className="mr-2" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin size={16} className="mr-2" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <button className="bg-primary hover:bg-secondary text-white px-6 py-2 rounded-lg transition-colors">
                      Register Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-gray-50 py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl text-gray-600 mb-8">
            Subscribe to our newsletter for the latest events and announcements
          </p>
          <form className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-primary"
            />
            <button className="bg-primary hover:bg-secondary text-white px-6 py-2 rounded-lg transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Events;
