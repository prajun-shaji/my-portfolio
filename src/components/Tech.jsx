import { BallCanvas } from "./canvas/index.js";
import { SectionWrapper } from "../hoc/index.js";
import { technologies } from "../constants/constants.js";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((tech) => (
        <div key={tech.name} className="size-28">
          <BallCanvas icon={tech.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
