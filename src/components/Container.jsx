import PropTypes from "prop-types";

const Container = ({ children }) => {
  return <div className="px-6 py-16 max-w-[1122px] mx-auto">{children}</div>;
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
