import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html as="div" center className="flex flex-col items-center justify-center">
      <span className="canvas-loader"></span>
      <p className="mt-10 text-sm font-extralight text-[#f1f1f1]">
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default CanvasLoader;
