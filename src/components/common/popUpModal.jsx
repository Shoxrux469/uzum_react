import { AnimatePresence, motion } from "framer-motion";
import React, { useContext } from "react";
import "../../index.scss";
import PopUpContext from "../../modules/context/popUpContext";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
const PopUpModal = () => {
    const { popUpData } = useContext(PopUpContext);
    const { itemImg, itemTitle, status } = popUpData;


    return (
        <AnimatePresence>
            {status && (
                <motion.div
                    initial={{ opacity: 0, x: "-50%", y: -10 }}
                    animate={{ opacity: 1, x: "-50%", y: 6 }}
                    exit={{ opacity: 0, x: "-50%", y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="pop_up_modal"
                >
                    <div className="modal_content">
                        <IoMdClose className="absolute top-3 w-6 h-6 right-3" />
                        <img src={itemImg} alt="" />
                        <div>
                            <h2>Товар добавлен в корзину</h2>
                            <p>{itemTitle}</p>
                        </div>
                        <Link to="/bagPage">Перейти в корзину</Link>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default PopUpModal;
