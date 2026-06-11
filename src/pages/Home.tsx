import { Link } from "react-router-dom";
import {
  ArrowRight,
  ChevronRight,
  Award,
  Users,
  Globe,
  TrendingUp,
  Shield,
  Cpu,
  GraduationCap,
  Leaf,
  BookOpen,
  Heart,
  Factory,
  Lock,
  Briefcase,
  LineChart,
  Sparkles,
} from "lucide-react";

// ── Full 8 sectors (matching the detailed version) ──
const allSectors = [
  {
    icon: GraduationCap,
    name: "Academy",
    desc: "Training & Research excellence",
  },
  { icon: Leaf, name: "Agriculture", desc: "Agro-AI & Agro-IoT solutions" },
  { icon: BookOpen, name: "Education", desc: "E‑learning & Adaptive learning" },
  { icon: TrendingUp, name: "Economy", desc: "AI‑driven economic planning" },
  { icon: Shield, name: "Governance", desc: "Policy design & evaluation" },
  { icon: Heart, name: "Health", desc: "Smart & data‑driven healthcare" },
  { icon: Factory, name: "Industry", desc: "AI‑powered smart industry" },
  { icon: Lock, name: "Security", desc: "Cyber & biometric security" },
];

// ── Stats from your original + extras ──
const stats = [
  { icon: Award, value: "12+", label: "Industry Awards" },
  { icon: Users, value: "50+", label: "Clients Served" },
  { icon: Globe, value: "25+", label: "Global Projects" },
  { icon: TrendingUp, value: "150%", label: "Growth Rate" },
];

// ── Services (from the detailed version) ──
const services = [
  {
    icon: Briefcase,
    title: "Training",
    desc: "Cutting‑edge 4IR skills training for individuals and organisations across Africa.",
  },
  {
    icon: LineChart,
    title: "Research",
    desc: "Applied and transformative research driving African 4IR innovation forward.",
  },
  {
    icon: Sparkles,
    title: "Consultancy",
    desc: "Strategic guidance for businesses, governments, and institutions embracing 4IR.",
  },
];

// ── Projects (flagship initiatives) ──
const projects = [
  {
    num: "01",
    title: "AI-Assisted Employee Audit",
    desc: "Leveraging artificial intelligence to streamline and enhance workforce performance evaluation.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
  },
  {
    num: "02",
    title: "Smart Public Procurement System",
    desc: "A transparent, AI‑driven procurement platform for public sector efficiency and accountability.",
    img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80",
  },
  {
    num: "03",
    title: "XR for Safe Environment Training",
    desc: "Extended Reality solutions delivering immersive, risk‑free safety training environments.",
    img: "https://images.unsplash.com/photo-1617802690992-15d93263d3a9?w=600&q=80",
  },
];

export default function Home() {
  return (
    <div className="animate-fade-in">
      {/* ── Hero Section (detailed with overlay, badge, scroll indicator) ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)",
          }}
        />
        {/* Gradient overlay (using your primary/secondary colors) */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(30,58,138,0.96) 0%, rgba(15,23,42,0.84) 55%, rgba(15,23,42,0.38) 100%)",
          }}
        />
        {/* Accent line (using your accent color) */}
        <div
          className="absolute left-0 top-0 bottom-0 w-1"
          style={{
            background:
              "linear-gradient(to bottom, transparent, #3b82f6, transparent)",
          }}
        />

        <div className="relative container-custom py-28 md:py-32">
          <div className="max-w-3xl">
            {/* Badge with RC and incorporation year */}
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 mb-8 rounded-sm"
              style={{ border: "1px solid rgba(59,130,246,0.4)" }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ background: "#3b82f6" }}
              />
              <span className="text-xs font-medium tracking-widest uppercase text-accent">
                RC: 3432957 · Incorporated 2021
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6">
              Championing Africa's{" "}
              <span className="text-accent">4th Industrial</span> Revolution
            </h1>

            <p className="text-gray-200 text-xl leading-relaxed mb-10">
              A4IR bridges African communities and institutions with the
              transformative power of artificial intelligence, IoT, and emerging
              technologies — building a continent‑wide digital future.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-7 py-3.5 font-semibold text-sm rounded-lg transition-colors bg-accent hover:bg-blue-700 text-white"
              >
                Discover A4IR <ArrowRight size={16} />
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-7 py-3.5 font-semibold text-sm rounded-lg transition-colors border border-white/20 text-white hover:border-accent hover:text-accent"
              >
                View Projects <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
          <span className="text-xs text-gray-400 tracking-widest uppercase">
            Scroll
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-accent to-transparent" />
        </div>
      </section>

      {/* ── Stats Section (keeping your original stats but styled like detailed version) ── */}
      <section className="py-14 bg-gray-900 border-t border-accent/15">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="w-10 h-10 text-accent mx-auto mb-3" />
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm tracking-wider uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About Snippet (detailed with decorative elements) ── */}
      <section className="py-24 bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 mb-6">
                <div className="w-8 h-px bg-accent" />
                <span className="text-xs font-medium tracking-widest uppercase text-accent">
                  Who We Are
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Africa's 4IR Catalyst
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                A4IR is a registered Nigerian company (RC: 3432957) dedicated to
                championing the African 4th Industrial Revolution. Since 2021,
                we have been building bridges between communities, governments,
                and industries through technology‑driven solutions.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                We operate across eight critical sectors — from Agriculture and
                Health to Security and Governance — delivering training,
                research, and consultancy that positions Africa at the forefront
                of global technological progress.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 font-semibold text-sm transition-all hover:gap-4 text-primary hover:text-accent"
              >
                Learn More About Us <ArrowRight size={16} />
              </Link>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="A4IR team collaboration"
                className="rounded-lg object-cover w-full h-[500px] shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 p-6 rounded-lg shadow-2xl bg-accent">
                <div className="text-4xl font-bold text-white">4IR</div>
                <div className="text-xs font-medium tracking-wider uppercase mt-1 text-white/70">
                  For Africa
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-lg border border-accent/30" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Services Section (new from detailed version) ── */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-px bg-accent" />
              <span className="text-xs font-medium tracking-widest uppercase text-accent">
                What We Offer
              </span>
              <div className="w-8 h-px bg-accent" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Three pillars of transformation — equipping Africa's people,
              institutions, and industries for the 4th Industrial Revolution.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="p-8 rounded-lg shadow-md card-hover bg-gray-50 group"
              >
                <service.icon className="w-12 h-12 text-accent mb-6" />
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {service.desc}
                </p>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 text-sm font-medium transition-all hover:gap-4 text-primary hover:text-accent"
                >
                  Explore <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Full Sectors Grid (8 sectors, like detailed version) ── */}
      <section className="py-24 bg-gray-50">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-8 h-px bg-accent" />
                <span className="text-xs font-medium tracking-widest uppercase text-accent">
                  Coverage
                </span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900">
                Eight Sectors
              </h2>
            </div>
            <Link
              to="/sectors"
              className="inline-flex items-center gap-2 font-semibold text-sm transition-all hover:gap-4 text-primary hover:text-accent"
            >
              View All Sectors <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {allSectors.map((sector) => (
              <Link
                to="/sectors"
                key={sector.name}
                className="p-6 rounded-lg shadow-md card-hover bg-white group"
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 bg-accent/10">
                  <sector.icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-gray-900 font-semibold mb-1 group-hover:text-accent transition-colors">
                  A4IR {sector.name}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed">
                  {sector.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Projects Section (flagship initiatives) ── */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-8 h-px bg-accent" />
                <span className="text-xs font-medium tracking-widest uppercase text-accent">
                  Flagship Initiatives
                </span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900">Our Projects</h2>
            </div>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 font-semibold text-sm transition-all hover:gap-4 text-primary hover:text-accent"
            >
              All Projects <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.num}
                className="group overflow-hidden rounded-lg shadow-md card-hover bg-gray-50"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
                  <div className="absolute top-4 left-4 text-5xl font-bold text-white/20">
                    {project.num}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {project.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner (detailed with background image) ── */}
      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1400&q=80)",
          }}
        />
        <div className="absolute inset-0 bg-primary/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-transparent" />
        <div className="relative container-custom text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Shape Africa's <br />
            <span className="text-accent">Digital Future?</span>
          </h2>
          <p className="text-gray-200 text-lg max-w-2xl mx-auto mb-10">
            Partner with A4IR and become part of a continent‑wide movement
            driving innovation, inclusion, and impact through the 4th Industrial
            Revolution.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 font-bold rounded-lg transition-colors bg-accent hover:bg-blue-700 text-white"
            >
              Contact Us <ArrowRight size={16} />
            </Link>
            <Link
              to="/events"
              className="inline-flex items-center gap-2 px-8 py-4 font-semibold rounded-lg transition-colors border border-white/20 text-white hover:border-accent hover:text-accent"
            >
              Upcoming Events <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
