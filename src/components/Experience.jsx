import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles.js";
import { experiences } from "../constants/constants.js";
import { SectionWrapper } from "../hoc/index.js";
import { textVariant } from "../utils/motion.js";

const ExperienceCard = ({ exp }) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#1d1836", color: "#fff" }}
    contentArrowStyle={{ borderRight: "7px soli #232631" }}
    date={exp.date}
    iconStyle={{ background: exp.iconBg }}
    icon={
      <div className="flex size-full items-center justify-center">
        <img
          src={exp.icon}
          alt={exp.company_name}
          className="size-3/5 object-contain"
        />
      </div>
    }
  >
    <div>
      <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
      <p className="text-secondary m-0 text-base font-semibold">
        {exp.company_name}
      </p>
    </div>
    <ul className="ml-5 mt-5 list-disc space-y-2">
      {exp.points.map((point, i) => (
        <li
          key={`experience-point-${i}`}
          className="text-white-100 pl-1 text-sm tracking-wider"
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>What I have done so far</p>
        <h2 className={`${styles.sectionHeadText}`}>Work Experience.</h2>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((exp, i) => (
            <ExperienceCard key={i} exp={exp} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
