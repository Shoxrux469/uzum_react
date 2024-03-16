import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import "../index.scss";
const PopUpModal = ({ status, item }) => {
    return (
        <AnimatePresence>
            {status && (
                <motion.div
                    initial={{ opacity: 0, x: "-50%", y: -20 }}
                    animate={{ opacity: 1, x: "-50%", y: 16 }}
                    exit={{ opacity: 0, x: "-50%", y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="pop_up modal bg-black fixed -translate-x-1/2"
                >
                    <div className="h-fit w-fit">
                        <img className="w-20 h-20" src={item.media[0]} alt="" />
                        <div>
                            <h2>{item.title}</h2>
                            <p>{item.type}</p>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default PopUpModal;
