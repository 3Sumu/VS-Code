import Popular from "../components/Popular";
import Veggie from "../components/Veggie";
import { motion } from "framer-motion";
import NonVeg from "../components/NonVeg";
import Soups from "../components/Soups";

function Home() {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Popular />
      <Veggie />
      <NonVeg />
      <Soups />
    </motion.div>
  );
}

export default Home;
