import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(()=> {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])


  return (
    <div className="">
      <div className="text-center space-y-4 mt-12 mb-6">
        <h3 className="text-xl text-red-500">Service</h3>
        <h3 className="text-4xl">Our Service Area</h3>
        <p>
          the majority have suffered alteration in some form, by injected <br />
          humour, or randomised words which don't look even slightly believable.
        </p>
      </div>
      <div className="grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
        {
           services.map(service => <ServiceCard
           key={service._id}
           service={service}
           ></ServiceCard>)
        }
      </div>
    </div>
  );
};

export default Services;
