import { motion } from "framer-motion";
import { fadeInUp } from "../lib/animations";

const FooterLink = ({ children, href }) => {
  return (
    <motion.div variants={fadeInUp} className="flex-initial mb-4 mr-3">
      <a
        className="bg-white bg-opacity-10 rounded px-3 py-1 text-opacity-80 text-white hover:text-opacity-100 cursor-pointer"
        rel="nofollow noopener"
        target="_blank"
        href={href}
      >
        {children}
      </a>
    </motion.div>
  );
};

export default FooterLink;
