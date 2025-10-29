import React, { useState } from "react";
import './services.css'
import {
  Laptop,
  ShieldCheck,
  CloudCog,
  Cpu,
  Layout,
  Wrench,
  Repeat,
  BookOpen,
} from "lucide-react";

const servicesData = [
  { icon: Laptop, title: "Web & App Development", description: "We craft responsive websites and scalable apps that deliver seamless performance and an exceptional user experience.", buttonText: "Explore Web & AppDev" },
  { icon: ShieldCheck, title: "Cybersecurity Solutions", description: "Protect your digital assets with our end-to-end security services, from risk assessment to threat monitoring.", buttonText: "Secure Your Data" },
  { icon: CloudCog, title: "AI & Cloud Integration", description: "Empower your business with AI-driven insights and cloud-based automation to enhance productivity and growth.", buttonText: "Unlock AI Power" },
  { icon: Cpu, title: "IT Consulting & Strategy", description: "Leverage expert guidance to align your technology strategy with your business goals for long-term success.", buttonText: "Get Strategic Advice" },
  { icon: Layout, title: "UI/UX Design", description: "We design stunning, user-centered interfaces that improve engagement and create lasting impressions.", buttonText: "View Our Designs" },
  { icon: Wrench, title: "System Maintenance & Support", description: "Our team provides continuous monitoring, updates, and technical support to keep your systems running smoothly.", buttonText: "Get Support" },
  { icon: Repeat, title: "DevOps & Automation", description: "Streamline your development process with CI/CD pipelines, automation, and cloud infrastructure optimization.", buttonText: "Boost Efficiency" },
  { icon: BookOpen, title: "Tech Training & Workshops", description: "We empower teams and individuals with hands-on training in programming, cybersecurity, and emerging technologies.", buttonText: "Join a Session" },
];

function Services() {
  const [showAll, setShowAll] = useState(false);

  // Decide which services to show
  const displayedServices = showAll ? servicesData : servicesData.slice(0, 3);

  return (
    <section className="services-section  text-white py-20 px-8 min-h-screen">
      <div className="services-header text-center mb-12">
        <h2 className="text-gray-200 text-3xl md:text-5xl font-semibold mb-4">
          Our Expertise: Driving Your Digital Future
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          From concept to deployment, we deliver robust and innovative solutions tailored to your business needs.
        </p>
      </div>

      <div className="services-grid grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {displayedServices.map((service, index) => {
          const Icon = service.icon;
          return (
            <div
              key={index}
              className="service-card gap-4 p-6 rounded-2xl bg-[#212020]"
            >
              <div className="service-icon flex items-start mb-4">
                <Icon size={40} color="#00FFC2" />
              </div>
              <h3 className="service-title text-[#00FFC2] text-[1.2em] mb-2">
                {service.title}
              </h3>
              <p className="service-description text-[#C0C0C0] leading-[1.7] mb-4">
                {service.description}
              </p>
              <button className="service-card-btn bg-green-400 cursor-pointer text-black rounded-2xl py-1 px-3 w-fit hover:bg-green-300 transition">
                {service.buttonText} <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          );
        })}
      </div>

      {!showAll && (
        <div className="flex justify-center">
          <button
            onClick={() => setShowAll(true)}
            className="more-services-btn bg-green-400 text-black rounded-2xl py-2 px-6 hover:bg-green-300 transition"
          >
            See More
          </button>
        </div>
      )}
    </section>
  );
}

export default Services;
