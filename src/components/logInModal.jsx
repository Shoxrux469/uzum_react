import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LogInModal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflowY = "scroll";
    } else {
      document.body.style.overflowY = "hidden";
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="w-full h-screen bg-black/20 fixed left-0 top-0 z-20"
          onClick={onClose}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default LogInModal;
