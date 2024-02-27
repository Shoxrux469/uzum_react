import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { MdError } from "react-icons/md";
import "../index.scss";
const ErrorMessage = ({ status, innerText }) => {
  return (
    <AnimatePresence>
      {status && (
        <motion.div
          initial={{ opacity: 0, x: "-50%", y: -20 }}
          animate={{ opacity: 1, x: "-50%", y: 16 }}
          exit={{ opacity: 0, x: "-50%", y: -20 }}
          transition={{ duration: 0.3 }}
          className="error_message"
        >
          <MdError size={20} color="#fff" />
          <p className="whitespace-nowrap text-md">{innerText}</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ErrorMessage;
