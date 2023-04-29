import PropTypes from "prop-types";

const Grid = ({ children }) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-7 gap-y-6">
      {children}
    </div>
  );
};

Grid.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Grid;
