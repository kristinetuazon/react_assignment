import { type ReactElement } from "react";

interface props {
  children?: JSX.Element | JSX.Element[] | string;
  progress: string;
}

const ProgressBarIndicator = (props: props): ReactElement => {
  const { children, progress } = props;

  const renderProgressBar = (progress: string) => {
    switch (progress) {
      case "complete":
        return (
          <span className="flex bg-lightorange w-12 h-12 text-xs sm:w-16 sm:h-16 sm:text-sm rounded-full items-center justify-center shadow-lg text-whiteish">
            {children}
          </span>
        );
      case "active":
        return (
          <span className="flex bg-pomelo w-12 h-12 text-xs sm:w-16 sm:h-16 sm:text-sm rounded-full items-center justify-center shadow-lg text-whiteish">
            {children}
          </span>
        );
      case "uncomplete":
        return (
          <span className="flex bg-charcoal w-12 h-12 text-xs sm:w-16 sm:h-16 sm:text-sm rounded-full items-center justify-center shadow-lg text-whiteish">
            {children}
          </span>
        );
      default:
        return (
          <span className="flex bg-charcoal w-12 h-12 text-xs sm:w-16 sm:h-16 sm:text-sm rounded-full items-center justify-center shadow-lg text-whiteish">
            {children}
          </span>
        );
    }
  };

  return renderProgressBar(progress);
};

export default ProgressBarIndicator;
