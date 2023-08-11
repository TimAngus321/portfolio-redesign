import { motion } from "framer-motion";

const pageTransitions = (page: any) => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {page}
    </motion.main>
  );
};

export default pageTransitions;