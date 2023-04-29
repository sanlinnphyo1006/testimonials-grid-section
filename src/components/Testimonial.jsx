import PropTypes from "prop-types";

import daniel from "../assets/image-daniel.jpg";
import jeanette from "../assets/image-jeanette.jpg";
import jonathan from "../assets/image-jonathan.jpg";
import kira from "../assets/image-kira.jpg";
import patrick from "../assets/image-patrick.jpg";
import quotation from "../assets/bg-pattern-quotation.svg";

const Testimonial = ({
  id,
  name,
  role,
  title,
  description,
  backgroundColor,
  color,
}) => {
  const isDaniel = name === "Daniel Clifford";
  const isJeanette = name === "Jeanette Harmon";
  const isJonathan = name === "Jonathan Walters";
  const isKira = name === "Kira Whittle";
  const isPatrick = name === "Patrick Abrams";
  return (
    <div
      className={`px-7 py-6 rounded-md shadow-md ${
        isDaniel || isPatrick
          ? "lg:col-span-2"
          : isKira
          ? "lg:col-start-4 lg:row-start-1 lg:row-end-3"
          : null
      } bg-[right_28px_top] lg:bg-[right_80px_top]`}
      style={{
        backgroundColor,
        color,
        backgroundImage: isDaniel && `url(${quotation})`,
        backgroundRepeat: isDaniel && "no-repeat",
      }}
      key={id}
    >
      <div className="flex items-center gap-4">
        <div className="border-2 rounded-full w-8 h-8">
          <img
            className="rounded-full w-full object-cover"
            src={
              isDaniel
                ? daniel
                : isJeanette
                ? jeanette
                : isJonathan
                ? jonathan
                : isKira
                ? kira
                : isPatrick
                ? patrick
                : null
            }
            alt={name}
          />
        </div>
        <div>
          <span>{name}</span>
          <br />
          <span className="opacity-50">{role}</span>
        </div>
      </div>
      <h3 className="text-[19px] font-semibold pt-5 pb-6 leading-6">{title}</h3>
      <p className="opacity-70">{description}</p>
    </div>
  );
};

Testimonial.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Testimonial;
