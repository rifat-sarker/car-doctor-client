import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const {_id, img, price, title } = service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={img}
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body space-y- text-center">
        <h2 className="card-title">{title}</h2>
        <div className="flex justify-between">
          <div>
            <p className="font-semibold text-red-500">Price : {price}</p>
          </div>
          <div>
            <Link to={`/book/${_id}`}><button className="btn btn-square">
            <FaArrowRight />
            </button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
