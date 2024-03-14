import { motion } from "framer-motion";
import PropTypes from "prop-types";

const Ball = ({ reference }) => {
  return (
    <>
      <div>
        <motion.div
          drag
          dragConstraints={reference}
          whileDrag={{ scale: 1.2 }}
          dragElastic={0.2}
          dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
          className="ball w-8 h-8 rounded-full bg-green-500 "
        ></motion.div>
      </div>

      <div>
        <motion.div
          drag
          dragConstraints={reference}
          whileDrag={{ scale: 1.2 }}
          dragElastic={0.2}
          dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
          className="ball w-8 h-8 rounded-full bg-blue-500 "
        ></motion.div>
      </div>
    </>
  );
};

Ball.propTypes = {
  reference: PropTypes.object.isRequired,
};

export default Ball;
