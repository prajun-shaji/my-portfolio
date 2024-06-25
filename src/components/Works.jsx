import { motion } from "framer-motion";
import { styles } from "../styles.js";
import { SectionWrapper } from "../hoc/index.js";
import { github } from "../assets/index.js";
import { projects } from "../constants/constants.js";
import { fadeIn, textVariant } from "../utils/motion.js";
import { Tilt } from "react-tilt";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", 0.5 * index, 0.75)}>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="w-full rounded-2xl bg-tertiary p-5 sm:w-80"
      >
        <div className="relative h-60 w-full">
          <img
            src={image}
            alt={name}
            className="size-full rounded-2xl object-cover"
          />
          <div className="card-img_hover absolute inset-0 m-3 flex justify-end">
            <div
              className="black-gradient flex size-10 cursor-pointer items-center justify-center rounded-full"
              onClick={() => window.open(source_code_link, "_blank")}
            >
              <img src={github} alt="github" className="w-1/2 object-contain" />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-2xl font-bold text-white">{name}</h3>
          <p className="mt-2 text-sm text-secondary">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`${tag.color} text-sm`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>
      <div className="flex w-full">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="left-8 mt-3 max-w-3xl text-lg text-secondary"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, i) => (
          <ProjectCard key={`-${i}`} index={i} project={project} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "project");
