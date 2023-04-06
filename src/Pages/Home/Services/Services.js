import React, { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      const response = await fetch("/services.json");
      const data = await response.json();
      setServices(data);
    };

    fetchServices();
  }, []);

  return (
    <div className="pt-16">
      <p className="font-semibold text-[#29303b] text-[30px] mb-5">
        Services.
        <span className="text-[#888f97]">Here where the fun begins.</span>
      </p>
      <div className="container mx-auto my-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServicesCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
