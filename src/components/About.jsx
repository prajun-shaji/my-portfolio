import { Tilt } from "react-tilt";
import { styles } from "../styles.js";
import { motion } from "framer-motion";
import { services } from "../constants/constants.js";
import { fadeIn, textVariant } from "../utils/motion.js";
import { SectionWrapper } from "../hoc/index.js";

const ServiceCard = ({ title, index, icon }) => {
  return (
    <Tilt className="xs:w-64 w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="green-pink-gradient shadow-card w-full rounded-3xl p-1"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary flex min-h-72 flex-col items-center justify-evenly rounded-3xl px-12 py-5"
        >
          <img src={icon} alt={title} className="size-16 object-contain" />
          <h3 className="text-center text-xl font-bold text-white">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Introduction</p>
        <h2 className={`${styles.sectionHeadText}`}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="text-secondary left-8 mt-4 max-w-7xl text-lg"
      >
        I'm a self taught skilled software developer with experience in
        JavaScript, and expertise in frameworks like React, Node.js and Tailwind
        CSS. I'm a quick learner and can collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, i) => (
          <ServiceCard key={service.title} index={i} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
