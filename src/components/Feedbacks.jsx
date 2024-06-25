import { motion } from "framer-motion";
import { styles } from "../styles.js";
import { SectionWrapper } from "../hoc/index.js";
import { fadeIn, textVariant } from "../utils/motion.js";
import { testimonials } from "../constants/constants.js";

const FeedbackCard = ({
  index,
  name,
  testimonial,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", 0.5 * index, 0.75)}
    className="w-full rounded-3xl bg-black-200 p-10 xs:w-80"
  >
    <p className="text-5xl font-black text-white">"</p>
    <div className="mt-1">
      <p className="text-lg tracking-wider text-white">{testimonial}</p>
      <div className="mt-7 flex items-center justify-between gap-1">
        <div className="flex flex-1 flex-col">
          <p className="text-base font-medium text-white">
            <span className="blue-text-gradient">@</span>
            {name}
          </p>
          <p className="mt-1 text-xs text-secondary">
            {designation} of {company}
          </p>
        </div>
        <img
          src={image}
          alt={`feedback-by-${name}`}
          className="size-10 rounded-full object-cover"
        />
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className="mt-12 rounded-3xl bg-black-100">
      <div
        className={`${styles.padding} min-h-[300px] rounded-2xl bg-tertiary`}
      >
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText}`}>What others say</p>
          <h2 className={`${styles.sectionHeadText}`}>Testimonials.</h2>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-20 flex flex-wrap gap-7 pb-14`}>
        {testimonials.map((testimonial, i) => (
          <FeedbackCard key={testimonial.name} index={i} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
