import { type ReactElement, useContext } from "react";
import ProgressBarIndicator from "./FormElements/ProgressBarIndicator";
import AppContext from "./AppContext";

const progressBar = [
  { title: "start" },
  { title: "part 1" },
  { title: "part 2" },
  { title: "part 3" },
  { title: "review" },
];

const ProgressBar = (): ReactElement => {
  const value = useContext(AppContext);
  const { currentStepIndex } = value;

  const steps = progressBar.map((step, index) => {
    if (index === currentStepIndex) {
      return (
        <ProgressBarIndicator progress="active" key={index + 100}>
          {step.title}
        </ProgressBarIndicator>
      );
    }
    if (index < currentStepIndex) {
      return (
        <ProgressBarIndicator progress="complete" key={index + 100}>
          {step.title}
        </ProgressBarIndicator>
      );
    }
    if (index > currentStepIndex) {
      return (
        <ProgressBarIndicator progress="uncomplete" key={index + 100}>
          {step.title}
        </ProgressBarIndicator>
      );
    }
  });
  return (
    <div className="mt-5 pb-10 font-heading uppercase flex flex-row w-100 gap-x-2">
      {steps}
    </div>
  );
};

export default ProgressBar;
